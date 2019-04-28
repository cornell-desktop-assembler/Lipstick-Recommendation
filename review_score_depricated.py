import json
import math

with open('tf_original.json', 'r') as f:
    TF_ORIGINAL = json.load(f)

with open('tf_sentiment.json', 'r') as f:
    TF_SENTIMENT = json.load(f)

with open("review_score_sent_opt_raw.json", encoding="utf-8") as fin:
    TF_SENT_OPT = json.load(fin)



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


def review_score_sent_opt(keywords):
    global TF_SENT_OPT

    score = {}
    tf = TF_SENT_OPT

    for product,value in tf.items():
        WF = 0
        for word in keywords:
            if word in value:
                WF = WF + value[word]
            else:
                WF = WF + 0

        if WF > 0:
            score[product] = math.log(WF + 1) / 6 * 5
        else:
            score[product] = 0

    return score

import pickle

with open("kw_set.pkl", "rb") as fin:
    KW_SET = pickle.load(fin)


def get_kw_set():
    return KW_SET