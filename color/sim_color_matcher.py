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
    after_svd = svd_of_vec(rgb / 255)[:2]
    diff = comparing - after_svd
    return np.linalg.norm(diff, axis=1)

def euclidean_distances_raw(rgb, comparing=raw):
    print("DIST RAW")
    diff = comparing - rgb
    return np.linalg.norm(diff / 255, axis=1)

def knn_args_dist(rgb, k, comparing=u_):
    dist = euclidean_distances(rgb, comparing=comparing)
    # dist = euclidean_distances_raw(rgb, comparing=raw)
    sorted_args = np.argsort(dist)
    if k is not None:
        return sorted_args[:k], dist[sorted_args[:k]]
    else:
        return sorted_args, dist[sorted_args]


def knn_sku(rgb, k, comparing=u_, i2id=i2sku):
    args, dists = knn_args_dist(rgb=rgb, k=k, comparing=comparing)
    return {i2id[arg] : dists[i] for i, arg in enumerate(args)}


def knn_rgb(rgb, k, comparing=u_):
    args, dists = knn_args_dist(rgb=rgb, k=k, comparing=comparing)
    return {raw[arg] : dists[i] for i, arg in enumerate(args)}


def knn_score(rgb, k=None, comparing=u_, i2id=i2sku):
    args, dists = knn_args_dist(rgb=rgb, k=k, comparing=comparing)
    dists = dists / min(dists)
    scores = 5 / dists
    print(dists[:10])
    return {i2id[arg] : scores[i].item() for i, arg in enumerate(args)}

