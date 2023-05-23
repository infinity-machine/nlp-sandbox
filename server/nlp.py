import spacy
nlp = spacy.load('en_core_web_sm')

def processString(string):
    doc = nlp(string)
    tokens = [token.text for token in doc]
    lemmas = [token.lemma_ for token in doc]
    return_object = { "tokens": tokens, "lemmas": lemmas }
    return return_object