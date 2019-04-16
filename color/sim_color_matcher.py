import pickle

import numpy as np
import os

data_path = os.path.join(
    os.path.dirname(os.path.realpath(__file__)),
    "data.pkl"
)

with open(data_path, "rb") as fin:
    data = pickle.load(fin)

sku2i, i2sku, i2rgb, raw, reduced = data["sku2i"], data["i2sku"], data["i2rgb"], data["raw"], data["reduced"]

raw_normalized = raw / 255

u, s, vt = np.linalg.svd(raw_normalized, full_matrices=False)

u_ = u[:, :2]
s_ = s[:2]
vt_ = vt[:2, :]

s_inv = np.linalg.inv(np.diag(s))
vt_inv = np.linalg.inv(vt)


def svd_of_vec(vec):
    return np.dot(np.dot(vec, vt_inv), s_inv)


def euclidean_distances(rgb, comparing=u_):
    after_svd = svd_of_vec(rgb)[:2]
    diff = comparing - after_svd
    return np.linalg.norm(diff, axis=1)


def knn_args(rgb, k, comparing=u_):
    dist = euclidean_distances(rgb, comparing=comparing)
    sorted_args = np.argsort(dist)
    return sorted_args[:k]


def knn_sku(rgb, k, comparing=u_, i2id=i2sku):
    return [i2id[i] for i in knn_args(rgb=rgb, k=k, comparing=comparing)]


def knn_rgb(rgb, k, comparing=u_):
    return raw[knn_args(rgb=rgb, k=k, comparing=comparing)]
