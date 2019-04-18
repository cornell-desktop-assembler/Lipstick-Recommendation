import requests

TEMPLATE_LIPSTICK = r"https://www.sephora.com/productimages/sku/s{sku}-main-Lhero.jpg"
TEMPLATE_TRY_ON   = r"https://www.sephora.com/productimages/sku/s{sku}-av-0{x}-Lhero.jpg"

def get_img_url_by_sku(sku):
    r = requests.get(TEMPLATE_LIPSTICK.format(sku=sku))
    if r.headers.get("content-type").startswith("image"):
        return r
    else:
        return None

