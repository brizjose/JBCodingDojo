# map is used to pass a function through each of the elements of a list

# syntax:

    #   map(function_to_apply, list_of_inputs)

# example, if you wanted to double all values of a list:

my_list = [1,2,3,4,5]

new_list = list(map(lambda x: x * 2, my_list))

print new_list

# exmaple 2

terms = 10
term_list = list(map(lambda x: x ** 2, range(terms)))
print term_list

for i in range(len(term_list)):
    print str(i) + ' squared is equal to', str(term_list[i])