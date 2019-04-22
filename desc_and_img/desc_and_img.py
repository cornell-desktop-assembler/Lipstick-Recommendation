import requests

import json


TEMPLATE_LIPSTICK = r"https://www.sephora.com/productimages/sku/s{sku}-main-Lhero.jpg"
TEMPLATE_TRY_ON   = r"https://www.sephora.com/productimages/sku/s{sku}-av-0{x}-Lhero.jpg"

TEMPLATE_URL = r"https://www.sephora.com/product/{pid}?skuId={sku}"


import os
data_path = os.path.join(
    os.path.dirname(os.path.realpath(__file__)),
    "sku2desc.json"
)

with open(data_path, encoding="utf-8") as fin:
    sku2desc = json.load(fin)

def get_img_url_by_sku(sku):
#     r = requests.get(TEMPLATE_LIPSTICK.format(sku=sku))
#     if r.headers.get("content-type").startswith("image"):
#         return r
#     else:
#         return None
    return TEMPLATE_LIPSTICK.format(sku=sku)


def get_desc_by_sku(sku):
    desc = sku2desc.get(sku, None)
    if desc is None:
        return None
    desc["url"] = TEMPLATE_URL.format(sku=sku, pid=desc["pid"].upper())
    return desc


'''

{
  "2144616": {
    "pid": "P09784333", 
    "brand": "FENTY BEAUTY by Rihanna",
    "name": "Snow Daze & Snow Nights Frosted Metal Lipstick 3-pc Set", 
    "code": "Snow Nights No Chill, Frost Sauce, Fog Snog - Selected", 
    "price": "$36.00"
  }

}

'''