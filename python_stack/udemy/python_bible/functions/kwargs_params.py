def about(name, age, likes):
    sentence = "Meet {}! They are {} years old and like {}.".format(name, age, likes)
    return sentence

print(about("Jack", 23, "programming"))

# in the above example,
# parameters are the variables that the function is waiting to get: name, age, likes
# arguments are the values passed through the parameters: 'Jack', 23, 'programming'
# because these are passed in the same order expected by the function, they are called positional parameters

# we could pass parameters in any order we like only if we made it clear which value is being assigned to each parameter
# we do this with key word arguments (kwargs)

print(about(age = 40, likes = "coding", name = "Tom"))

# we can get away with not passing all of the arguments if we had default values

def about(name, age, likes = "Python"):
    sentence = "Meet {}! They are {} years old and like {}.".format(name, age, likes)
    return sentence

print(about("John", 32))

# DEFAULT PARAMETERS MUST GO At THE END

# if you want all of the parameters to have default values, the function is going to work

def about(name = "John", age = 30, likes = "Python"):
    sentence = "Meet {}! They are {} years old and like {}.".format(name, age, likes)
    return sentence

print(about())
