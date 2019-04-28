import json
import time
import re

with open('descriptions.json', 'r') as fin:
    descriptions = json.load(fin)

def ingredient_score(keywords_list):
    res = {}
    for productID, content in descriptions.items():
        score = 0
        if 'Ingredients' not in content.keys():
                score = -1
                res[productID] = score
                continue
        for keyword in keywords_list:
            word_pattern = re.sub('\s|-',"(\s|-)", keyword)
            all_match = re.findall(word_pattern, content['Ingredients'])
            score = len(all_match)
        res[productID] = score
    
    return res

