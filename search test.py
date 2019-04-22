import search
import random
import numpy as np

eyecolors = ['nan', 'brown', 'gray', 'green', 'blue', 'hazel']
haircolors = ['nan', 'blonde', 'gray', 'red', 'brunette', 'black', 'auburn']
skintones = ['nan', 'light', 'tan', 'porcelain', 'deep', 'fair', 'dark', 'medium', 'ebony', 'olive']
skintypes = ['nan', 'normal', 'dry', 'oily', 'combination']

query = {
    "keywords" : [ "kw1", "kw2"],
    "brands" : [ "b1", "b2"],
    "skinTone" : random.choice(skintones),
    "skinType" : random.choice(skintypes),
    "hairColor" : random.choice(haircolors),
    "eyeColor" : random.choice(eyecolors),
    "r" : str(random.randint(a=120, b=255)),
    "g" : str(random.randint(a=0, b=255)),
    "b" : str(random.randint(a=0, b=255)),
    "ingredient_kws" : [ "kw1", "kw2", ...],
}

result = search.search(query)

print(result)