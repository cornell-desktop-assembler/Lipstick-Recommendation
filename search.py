from comment import sim_text_matcher
from color import sim_color_matcher
from desc_and_img import desc_and_img

import numpy as np

import copy


D = {
        "rank"      : "",           # "1",
        "pid"       : "",           # "P1234567",
        "sku"       : "",           # "0987654",
        "brand"     : "",           # "NARS",
        "name"      : "",           # "Velvet Matte Lipstick Pencil",
        "code"      : "",           # "Dolce Vita",
        "keywords"  : [],           # [ "kw1", "kw2", ...],
        "price"     : "",           # "$20.00",
        "url"       : "",           # "http://xxxxx.com/xxx/yyy",
        "img_url"   : "",           # "http://xxxxx.com/xxx/yyy/1.jpg",

        "ingredients_result" : {},  # { "vegan" : True, "xxx" : false, ... }
        "scores" : {
             "color"            : -1, # 3.8,
             "weighted_rating"  : -1, # 4.9,
             "skinType_rating"  : -1, # 4.2,
             "skinTone_rating"  : -1, # 4.5,
             "hairColor_rating" : -1, # 4.7,
             "eyeColor_rating"  : -1, # 4.9,
             "keywords"         : -1, # 4.5,
             "ingredients"      : -1, # 5.0,
         }

    }


def search(query, color_k=100, keywords_k=100, filter_k=100):
    keywords = query["keywords"]
    brands = query["brands"]
    skinTone = query["skinTone"]
    skinType = query["skinType"]
    hairColor = query["hairColor"]
    eyeColor = query["eyeColor"]
    r, g, b = int(query["r"]), int(query["g"]), int(query["b"])
    rgb = np.array([r,g,b])
    ingredient_kws = query["ingredient_kws"]
    
    # color
    color_result = sim_color_matcher.knn_sku(rgb, k=color_k)
    # sku, dist = color_result[i][0], color_result[i][1]
    
    # TODO: keywords
    
    # TODO: filter
    
    # assume there will be a list of skus
    skus = []
    
    result = []
    
    for i, sku in enumerate(skus):
        d = copy.deepcopy(D)
        d["rank"] = i
        d["sku"] = sku
        d.update(desc_and_img.get_desc_by_sku(sku))
        # pid, brand, name, code, price, url
        d["img_url"] = desc_and_img.get_img_url_by_sku(sku)

        d["keywords"] = [] # TODO



        result.append(d)
        
    return result
        