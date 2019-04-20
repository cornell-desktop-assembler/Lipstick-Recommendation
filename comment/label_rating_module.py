import json
import os
data_path = os.path.join(
    os.path.dirname(os.path.realpath(__file__)),
    "label rating.json"
)

with open(data_path, "r", encoding="utf-8") as fin:
    DATA = json.load(fin)

def get_label_rating():
    return DATA