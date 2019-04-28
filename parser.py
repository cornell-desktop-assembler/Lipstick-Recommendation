from nltk.sentiment.vader import SentimentIntensityAnalyzer
from nltk.sentiment.vader import negated
from nltk.tokenize import sent_tokenize, word_tokenize
from nltk import pos_tag
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer
from collections import Counter
import csv
import json

ps = PorterStemmer()
stopWords = set(stopwords.words('english'))

csvFile = open("all sephora.csv", "r")
reader = csv.reader(csvFile)

review = {}
result = {}

for item in reader:
    if reader.line_num == 1:
        continue
    if item[5] in review:
        review[item[5]].append(item[8])
    else:
        review[item[5]] = [item[8]]


sum = 0
tf_original = {}
tf_sentiment = {}
but_flag = False
and_flag = False

sid = SentimentIntensityAnalyzer()

for product,value in review.items():
    tf_original[product] = {}
    tf_sentiment[product] = {}
    for rev in value:
        for sent in sent_tokenize(rev):
            ss = sid.polarity_scores(sent)
            tokens = word_tokenize(sent)
            for token in tokens:
                token = ps.stem(token)
                if token not in stopWords:
                    tf_original[product][token] = tf_original[product].get(token,0) + 1
                    if ss['pos'] >= ss['neg']:
                        tf_sentiment[product][token] = tf_sentiment[product].get(token,0) + 1
                    else:
                        tf_sentiment[product][token] = tf_sentiment[product].get(token,0) - 1
            # previous_word = 'None'
            # tokens = word_tokenize(text)
            # # POStags = pos_tag(tokens)
            # for i in range(len(tokens)):
            #     token = tokens[i]
            #     # POS = POStags[i]
            #     if previous_word == 'not' and POS == 'JJ':
            #         word_count_dic['token'] = word_count_dic.get('token',0) - 1
            #         previous_word = token
            #         continue
            #
            #     word_count_dic['token'] = word_count_dic.get('token',0) + 1
        sum = sum + 1
        print(sum)

with open('tf_original.json','w') as f:
    json.dump(tf_original,f)
f.close()

with open('tf_sentiment.json','w') as f:
    json.dump(tf_sentiment,f)
f.close()
