# there is a json library in python we can import to deal with json files
# since it's native to python, just import it, not need to pip install it

import json

from difflib import get_close_matches

# use dir(json) to learn about the methos.
# json.load to create the data is the following:

data = json.load(open('data.json', 'r'))

def define(input):
    input = input.lower()
    if input in data:
        return data[input]
    elif len(get_close_matches(input, data.keys())) > 0:
        return "Word not found, did you mean %s instead?" % get_close_matches(input, data.keys())[0]
        
    else:
        return "Word not in dictionary"

user_input = input("Please enter a word: ")

print(define(user_input))

