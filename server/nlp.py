import spacy
from pprint import pprint

nlp = spacy.load('en_core_web_sm')

def processString(string):
    doc = nlp(string)
    tokens = [token.text for token in doc]
    lemmas = [token.lemma_ for token in doc]
    tags = [token.tag_ for token in doc]
    pos_tags = [token.pos_ for token in doc]
    dep_arcs = [token.dep_ for token in doc]
    heads = [token.head for token in doc]
    data = {
        "tokens": tokens, 
        "lemmas": lemmas,
        "tags": tags,
        "pos_tags": pos_tags,
        "dep_arcs": dep_arcs,
        "heads": heads
    }
    pprint(data)
    return data