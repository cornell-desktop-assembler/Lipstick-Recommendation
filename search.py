from comment import sim_text_matcher
from color import sim_color_matcher
from desc_and_img import desc_and_img

import numpy as np

def search(query, color_k=100, keywords_k=100, filter_k=100):
    keywords = query["keywords"]
    brands = query["brands"]
    skinTone = query["skinTone"]
    skinType = query["skinType"]
    hairColor = query["hairColor"]
    eyeColor = query["eyeColor"]
    r, g, b = int(query["r"]), int(query["g"]), int(query["b"])
    rgb = np.array([r,g,b])
    
    # color
    color_result = sim_color_matcher.knn_sku(rgb, k=color_k)
    # sku, dist = color_result[i][0], color_result[i][1]
    
    # TODO: keywords
    
    # TODO: filter
    
    # assume there will be a list of skus
    skus = []
    
    result = []
    
    for i, sku in enumerate(skus):
        d = {}
        d["rank"] = i
        d["sku"] = sku
        d.update(desc_and_img.get_desc_by_sku(sku))
        # pid, brand, name, code, price, url
        d["img_url"] = desc_and_img.get_img_url_by_sku(sku)
        d["keywords"] = [] # TODO
        result.add(d)
        
    return result
        