import requests

import json


TEMPLATE_LIPSTICK = r"https://www.sephora.com/productimages/sku/s{sku}-main-Lhero.jpg"
TEMPLATE_TRY_ON   = r"https://www.sephora.com/productimages/sku/s{sku}-av-0{x}-Lhero.jpg"

TEMPLATE_URL = r"https://www.sephora.com/product/{pid}?skuId={sku}"


with open("sku2desc.json", encoding="utf-8") as fin:
    sku2desc = json.load(fin)

def get_img_url_by_sku(sku):
    r = requests.get(TEMPLATE_LIPSTICK.format(sku=sku))
    if r.headers.get("content-type").startswith("image"):
        return r
    else:
        return None


def get_desc_by_sku(sku):
    desc = sku2desc.get(sku, None)
    desc["url"] = TEMPLATE_URL.format(sku=sku, pid=desc["pid"].upper())
    return desc