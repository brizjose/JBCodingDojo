# lambdas are lightweight functions that do very specific operations; they are defined without a name and require no return statement.

# syntax

# lambda arguments: expression

# examples:

double = lambda x: x * 2

square = lambda x: x ** 2

print double(5)
print square(5)

# using lambda:  when we require a nameless function for a short period of time, example, inside another function

# example:

# filter all the even numbers from a list:

my_list = [1, 5, 4, 6, 8, 11, 3, 12]
new_list = list(filter(lambda x: (x%2 == 0), my_list))
print new_list

# lambdas are purely statements, they can be among other elements in a list:

function_list = [lambda x: x ** 0.5, lambda x: x ** 2, lambda x: x ** 3]

print function_list[0](5)
print function_list[1](5)
print function_list[2](5)

    # here we pass 5 through the different elements of the list of functions

