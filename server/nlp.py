import spacy

nlp = spacy.load('en_core_web_sm')

def getSpacyData(string):
    doc = nlp(string)
    tokens = [token.text for token in doc]
    lemmas = [token.lemma_ for token in doc]
    tags = [token.tag_ for token in doc]
    pos_tags = [token.pos_ for token in doc]
    dep_arcs = [token.dep_ for token in doc]
    heads = [token.head.text for token in doc]
    ent_type = [token.ent_type_ for token in doc]
    data = {
        "tokens": tokens, 
        "lemmas": lemmas,
        "tags": tags,
        "pos_tags": pos_tags,
        "dep_arcs": dep_arcs,
        "heads": heads,
        "ent_type": ent_type
    }
    return data


def spacyReply(input):
    doc = nlp(input)
    # FIGURE OUT LOCATION BY GRABBING ROOT AND PROPER NOUN
    for token in doc:
        if token.dep_ == "ROOT" or token.pos_ == "PROPN": 
            print(token)
    