import spacy
nlp = spacy.load('en_core_web_sm')

def processString(string):
    doc = nlp(string)
    print([token.text for token in doc])