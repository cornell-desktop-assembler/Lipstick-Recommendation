import json
import math


def review_score(keywords,k = 10,mode = 'original'):
    tf = {}
    score = {}

    if mode == 'original':

        with open('tf_original.json','r') as f:
            tf = json.load(f)
        f.close()

    elif mode == 'sentiment':

        with open('tf_sentiment.json','r') as f:
            tf = json.load(f)
        f.close()

    for product,value in tf.items():
        WF = 0
        for word in keywords:
            if word in value:
                WF = WF + value[word]
            else:
                WF = WF + 0

        if WF > 0:
            score[product] = 1 + math.log(WF)
        else:
            score[product] = 0

    return sorted(score.items(), key = lambda kv: kv[1],reverse = True)[0:k]

def review_score_all(keywords, mode = 'original'):
    tf = {}
    score = {}

    if mode == 'original':

        with open('tf_original.json','r') as f:
            tf = json.load(f)
        f.close()

    elif mode == 'sentiment':

        with open('tf_sentiment.json','r') as f:
            tf = json.load(f)
        f.close()

    for product,value in tf.items():
        WF = 0
        for word in keywords:
            if word in value:
                WF = WF + value[word]
            else:
                WF = WF + 0

        if WF > 0:
            score[product] = 1 + math.log(WF)
        else:
            score[product] = 0

    return score

    # return sorted(score.items(), key = lambda kv: kv[1],reverse = True)


# print(review_score(['good']))
