import json
import math
from nltk.stem import PorterStemmer
from nltk.corpus import wordnet


with open('tf_original.json','r') as f:
    TF_ORIGINAL = json.load(f)

with open('tf_sentiment.json','r') as f:
    TF_SENTIMENT = json.load(f)


def review_score(keywords,k = 10,mode = 'original',synonym = False,antonym = False):

    # Stemming
    ps = PorterStemmer()

    for i in range(len(keywords)):
        keywords[i] = ps.stem(keywords[i])

    #synonym
    synonym_set = set()
    antonym_set = set()
    if synonym or antonym:
        for word in keywords:
            for syn in wordnet.synsets(word):
                for l in syn.lemmas():
                    synonym_set.add(l.name())
                    if l.antonyms():
                        antonym_set.add(l.antonyms()[0].name())


    tf = {}
    score = {}

    if mode == 'original':

        tf = TF_ORIGINAL
        # with open('tf_original.json','r') as f:
        #     tf = json.load(f)
        # f.close()

    elif mode == 'sentiment':

        tf = TF_SENTIMENT
        # with open('tf_sentiment.json','r') as f:
        #     tf = json.load(f)
        # f.close()

    for product,value in tf.items():
        WF = 0
        for word in keywords:
            if word in value:
                WF = WF + value[word]
            else:
                WF = WF + 0

        if synonym:
            for syn in synonym_set:
                if syn in value:
                    WF = WF + value[syn]
                else:
                    WF = WF + 0

        if antonym:
            for ant in antonym_set:
                if ant in value:
                    WF = WF - value[ant]
                else:
                    WF = WF - 0

        # if WF > 0:
        #     score[product] = 1 + math.log(WF)
        # else:
        #     score[product] = 0
        score[product] = -1 / (WF + 0.2) + 5

    return sorted(score.items(), key = lambda kv: kv[1],reverse = True)[0:k]


# print(review_score(['gift']))
