# there is a json library in python we can import to deal with json files
# since it's native to python, just import it, not need to pip install it

# use dir(json) to learn about the methos.
# json.load to create the data is the following:

import json

from difflib import get_close_matches

data = json.load(open('data.json', 'r'))

def print_definition(w):
    for definition in w:
        return definition

def define(w):
    w = w.lower()
    if w in data:
        return print_definition(data[w])
    elif w.title() in data:        # in case user enters proper name in all lower case
        return print_definition(data[w.title()])
    elif w.upper() in data:        # in case user is looking for an acronym like nato or usa and enters all lower case 
        return print_definition(data[w.upper()])
    elif len(get_close_matches(w, data.keys())) > 0:
        yn = input("Word not found, did you mean %s instead? Input Y if yes, or N if no: " % get_close_matches(w, data.keys())[0])
        if yn == "Y".lower():
            return print_definition(data[get_close_matches(w, data.keys())[0]])
        elif yn == "N".lower():
            return "Word not in dictionary."
        else:
            return "We did not understand your entry."
    else:
        return "Word not in dictionary."

user_input = input("Please enter a word: ")

print(define(user_input))

