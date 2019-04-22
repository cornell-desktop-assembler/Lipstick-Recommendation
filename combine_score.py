COLOR            = 30
WEIGHTED_RATING  = 10
SKINTYPE_RATING  = 5
SKINTONE_RATING  = 5
HAIRCOLOR_RATING = 5
EYECOLOR_RATING  = 5
KEYWORDS         = 140
INGREDIENTS      = 10

TOTAL = COLOR + \
        WEIGHTED_RATING + \
        SKINTYPE_RATING + \
        SKINTONE_RATING + \
        HAIRCOLOR_RATING + \
        EYECOLOR_RATING + \
        KEYWORDS + \
        INGREDIENTS

WEIGHTS = {
    "color" : 30,
    "weighted_rating" : 10,
    "skinType_rating" : 5,
    "skinTone_rating" : 5,
    "eyeColor_rating" : 5,
    "hairColor_rating" : 5,
    "keywords" : 30,
    "ingredients" : 10
}

# def combine(color,
#             weighted_rating,
#             skinType_rating,
#             skinTone_rating,
#             hairColor_rating,
#             eyeColor_rating,
#             keywords,
#             ingredients):

#     return (
#         color * COLOR +
#         weighted_rating * WEIGHTED_RATING +
#         skinType_rating * SKINTYPE_RATING +
#         skinTone_rating * SKINTONE_RATING +
#         hairColor_rating * HAIRCOLOR_RATING +
#         eyeColor_rating * EYECOLOR_RATING +
#         keywords * KEYWORDS +
#         ingredients * INGREDIENTS
#     ) / TOTAL


def combine(**kwargs):
    total_score = 0
    total_weight = 0
    for k, v in kwargs.items():
        if v is None:
            continue
        total_score += v * WEIGHTS[k]
        total_weight += WEIGHTS[k]
    return total_score/total_weight