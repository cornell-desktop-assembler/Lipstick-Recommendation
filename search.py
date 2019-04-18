from comment import sim_text_matcher
from color import sim_color_matcher
from desc_and_img import desc_and_img

def search(query):
    keywords = query["keywords"]
    brands = query["brands"]
    skinTone = query["skinTone"]
    skinType = query["skinType"]
    hairColor = query["hairColor"]
    eyeColor = query["eyeColor"]
    r, g, b = int(query["r"]), int(query["g"]), int(query["b"])