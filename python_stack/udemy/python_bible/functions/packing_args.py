# unpacking means taking a list and making each element an individual parameter that is passed through the function

# args are packed and unpacked with *

my_list = [1,2,3,4]

# a packed list
print(my_list)

# an unpacked list
print(*my_list)

# any iterable data type can be unpacked (incl strings)

my_string = "abcde"

print(my_string)
print(*my_string)

# make a sum function that takes any number of numbers and adds them

def adder(*nums):
    total = 0
    for num in nums:
        total = total + num
    return total

print(adder(1,2,3,4,5,6,7,8))
print(adder(1,2,3,4,5))
    