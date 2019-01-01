def string_length(s):
    if (isinstance(s, str)):
        return(len(s))
    else:
        return("Sorry, parameter needs to be a string")

user_input = "7"
user_input_2 = 7

def string_len(s):
    if type(s) == str:
        return(len(s))
    else:
        return("Sorry, parameter needs to be a string")

print(string_len(user_input))
print(string_len(user_input_2))