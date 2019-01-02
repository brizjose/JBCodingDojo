# packing and unpacking kwargs is based on the concept of dictionaries

# kwargs are packed and unpacked with **

# unpacking kwargs:

def about(name, age, likes):
    sentence = "Meet {}! They are {} years old and like {}.".format(name, age, likes)
    return sentence

dict1 = {'name': 'Jose', 'age': 44, 'likes': 'coding'}
dict2 = {'likes': 'surfing', 'name': 'Jambi', 'age': 32}

print(about(**dict1))
print(about(**dict2))

# packing kwargs

# make a dictionary with a function

def foo(**kwargs):
    for key, value in kwargs.items():
        print("{}:{}".format(key, value))

foo(huda = 'female', zayid = 'male', john = 'male', jambi = 'female')

