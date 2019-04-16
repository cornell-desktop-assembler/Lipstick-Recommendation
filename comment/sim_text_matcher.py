import numpy as np
import pandas as pd

df = pd.read_csv("all sephora.csv", encoding="utf-8", index_col=0)

from collections import defaultdict

def keyword(word, k=3, limited=True):
    counter = defaultdict(int)
    for i, row in enumerate(df.iterrows()):
        sku = row[1]["ProductId"]
        text = row[1]["ReviewText"]
        counter[sku] += int(word in text)
        if limited and i > 10000:
            break
    return sorted(counter.items(), key=lambda item : item[1], reverse=True)[:k]
