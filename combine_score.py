COLOR            = 30
WEIGHTED_RATING  = 10
SKINTYPE_RATING  = 5
SKINTONE_RATING  = 5
HAIRCOLOR_RATING = 5
EYECOLOR_RATING  = 5
KEYWORDS         = 30
INGREDIENTS      = 10

TOTAL = COLOR + \
        WEIGHTED_RATING + \
        SKINTYPE_RATING + \
        SKINTONE_RATING + \
        HAIRCOLOR_RATING + \
        EYECOLOR_RATING + \
        KEYWORDS + \
        INGREDIENTS


def combine(color,
            weighted_rating,
            skinType_rating,
            skinTone_rating,
            hairColor_rating,
            eyeColor_rating,
            keywords,
            ingredients):

    return (
        color * COLOR +
        weighted_rating * WEIGHTED_RATING +
        skinType_rating * SKINTYPE_RATING +
        skinTone_rating * SKINTONE_RATING +
        hairColor_rating * HAIRCOLOR_RATING +
        eyeColor_rating * EYECOLOR_RATING +
        keywords * KEYWORDS +
        ingredients * INGREDIENTS
    ) / TOTAL

