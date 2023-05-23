import spacy
nlp = spacy.load('en_core_web_sm')

def processString(string):
    doc = nlp(string)
    tokens = [token.text for token in doc]
    lemmas = [token.lemma_ for token in doc]
    pos_tags = [token.pos_ for token in doc]
    print(pos_tags)
    data = { "tokens": tokens, "lemmas": lemmas }
    return data