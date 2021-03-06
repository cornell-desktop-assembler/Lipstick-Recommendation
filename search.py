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
from ingredients import ingredient_score



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
    query_k = int(query["k"])
    review_score_result = review_score.review_score_full(
        keywords=keywords, mode="sentiment", synonym=True, antonym=True)
    brands = set(query["brands"])
    skinTone = query["skinTone"].lower() if query["skinTone"] is not None else None
    skinType = query["skinType"].lower() if query["skinType"] is not None else None
    hairColor = query["hairColor"].lower() if query["hairColor"] is not None else None
    eyeColor = query["eyeColor"].lower() if query["eyeColor"] is not None else None
    if query["r"] is not None:
        r, g, b = int(query["r"]), int(query["g"]), int(query["b"])
        rgb = np.array([r, g, b])
    else:
        rgb = None
    # ingredient_kws = query["ingredient_kws"]
    
    # color
    if rgb is not None:
        color = sim_color_matcher.knn_score(rgb)
    else:
        color = None
    # sku, dist = color_result[i][0], color_result[i][1]
    
    # TODO: keywords
    
    # label rating
    label_rating = label_rating_module.get_label_rating()

    # length rating
    weighted_rating = weighted_rating_module.get_weighted_rating()

    # # ingredients
    # ing_scores = ingredient_score.ingredient_score(ingredient_kws)
    # # print(len(ing_scores.keys()))
    # max_ing_score = max(ing_scores.values())


    # list of skus
    with open("sku_set.pkl", "rb") as fin:
        skus = pickle.load(fin)

    print("len(skus) =", len(skus))
    print("len(review_score_result) =", len(review_score_result))
    # print(review_score_result)

    result = []
    
    for i, sku in enumerate(skus):
        # d = copy.deepcopy(D)
        if color is not None and sku not in color:
            continue
        if sku not in review_score_result:
            # print("!", sku, type(sku))
            continue
        desc_result = desc_and_img.get_desc_by_sku(sku)
        if desc_result is None:
            continue
        d = {}
        d["rank"] = i
        d["sku"] = sku
        d.update(desc_result)
        # pid, brand, name, code, price, url
        d["img_url"] = desc_and_img.get_img_url_by_sku(sku)

        # pid = d["pid"]
        # if pid not in ing_scores:
        #     continue

    
        if len(brands) > 0 and d["brand"] not in brands:
            continue

        d["keywords"] = [] # TODO

        # d["ingredients_result"] = {}    # TODO

        scores = {}

        scores["color"]             = color[sku] if color is not None else None
        scores["weighted_rating"]   = weighted_rating[sku]
        scores["skinType_rating"]   = label_rating[sku]["skinType"][skinType] * 5 if skinType is not None else None  # forget to upscale
        scores["skinTone_rating"]   = label_rating[sku]["skinTone"][skinTone] * 5 if skinTone is not None else None
        scores["hairColor_rating"]  = label_rating[sku]["hairColor"][hairColor] * 5 if hairColor is not None else None
        scores["eyeColor_rating"]   = label_rating[sku]["eyeColor"][eyeColor] * 5 if eyeColor is not None else None
        scores["keywords"]          = review_score_result[sku]
        # scores["keywords"]          = 0
        # scores["ingredients"]       = (1 - ing_scores[pid] / max_ing_score) * 5 if max_ing_score > 0 else 5
        scores["overall"]           = combine_score.combine(
            color           = scores["color"],
            weighted_rating = scores["weighted_rating"],
            skinType_rating = scores["skinType_rating"],
            skinTone_rating = scores["skinTone_rating"],
            hairColor_rating = scores["hairColor_rating"],
            eyeColor_rating = scores["eyeColor_rating"],
            keywords        = scores["keywords"],
            # ingredients     = scores["ingredients"]
        )


        d["scores"]  = scores
        result.append(d)

    # print(len(result))
    result = sorted(result, key=lambda item : item["scores"]["overall"], reverse=True)[:query_k]

    print(len(result))

    return result

    # TODO: brand
    # brand_match = [item for item in result if item["brand"] in brands]
    # brand_not_match = [item for item in result if item["brand"] not in brands]
    # lucky_count = 0
    # for i, item in enumerate(brand_not_match):
    #     if item["scores"]["overall"] < brand_match[0]["scores"]["overall"]:
    #         break
    #     lucky_count += 1

    # return brand_match
    
    # return {
    #     "brand_match" : brand_match,
    #     "brand_not_match" : brand_not_match,
    #     "lucky_count" : lucky_count
    # }
        