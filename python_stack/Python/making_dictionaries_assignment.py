name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar"]
favorite_animal = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas"]

def list_to_dict(li1, li2):
    new_dict = zip(li1,li2)
    new_dict = dict(new_dict)
    return new_dict

print(list_to_dict(name, favorite_animal))