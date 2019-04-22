from comment import sim_text_matcher
from comment import weighted_rating_module
from comment import label_rating_module
from color import sim_color_matcher
from desc_and_img import desc_and_img

import numpy as np
import pickle
import copy

import combine_score
import review_score



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
    brands = set(query["brands"])
    skinTone = query["skinTone"]
    skinType = query["skinType"]
    hairColor = query["hairColor"]
    eyeColor = query["eyeColor"]
    r, g, b = int(query["r"]), int(query["g"]), int(query["b"])
    rgb = np.array([r, g, b])
    ingredient_kws = query["ingredient_kws"]
    
    # color
    color = sim_color_matcher.knn_score(rgb)
    # sku, dist = color_result[i][0], color_result[i][1]
    
    # TODO: keywords
    
    # label rating
    label_rating = label_rating_module.get_label_rating()

    # length rating
    weighted_rating = weighted_rating_module.get_weighted_rating()

    

    # assume there will be a list of skus
    with open("sku_set.pkl", "rb") as fin:
        skus = pickle.load(fin)


    result = []
    
    for i, sku in enumerate(skus):
        # d = copy.deepcopy(D)
        desc_result = desc_and_img.get_desc_by_sku(sku)
        if desc_result is None:
            continue
        if sku not in color:
            continue
        d = {}
        d["rank"] = i
        d["sku"] = sku
        d.update(desc_result)
        # pid, brand, name, code, price, url
        d["img_url"] = desc_and_img.get_img_url_by_sku(sku)

        d["keywords"] = [] # TODO

        d["ingredients_result"] = {}    # TODO

        scores = {}

        scores["color"]             = color[sku]
        scores["weighted_rating"]   = weighted_rating[sku]
        scores["skinType_rating"]   = label_rating[sku]["skinType"]
        scores["skinTone_rating"]   = label_rating[sku]["skinTone"]
        scores["hairColor_rating"]  = label_rating[sku]["hairColor"]
        scores["eyeColor_rating"]   = label_rating[sku]["eyeColor"]
        scores["keywords"]          = review_score.review_score_all(keywords=keywords, mode="sentiment") # TODO
        scores["ingredients"]       = 0 # TODO
        scores["overall"]           = combine_score.combine(
            color           = scores["color"],
            weighted_rating = scores["weighted_rating"],
            skinType_rating = scores["skinType_rating"][skinType],
            skinTone_rating = scores["skinTone_rating"][skinTone],
            hairColor_rating = scores["hairColor_rating"][hairColor],
            eyeColor_rating = scores["eyeColor_rating"][eyeColor],
            keywords        = scores["keywords"],
            ingredients     = scores["ingredients"]
        )


        d["scores"]  = scores
        result.append(d)

    result = sorted(result, key=lambda item : item["scores"]["overall"], reverse=True)

    return result

    # # TODO: brand
    # brand_match = [item for item in result if item["brand"] in brands]
    # brand_not_match = [item for item in result if item["brand"] not in brands]
    # lucky_count = 0
    # for i, item in enumerate(brand_not_match):
    #     if item["scores"]["overall"] < brand_match[0]["scores"]["overall"]:
    #         break
    #     lucky_count += 1
    #
    # return {
    #     "brand_match" : brand_match,
    #     "brand_not_match" : brand_not_match,
    #     "lucky_count" : lucky_count
    # }
        