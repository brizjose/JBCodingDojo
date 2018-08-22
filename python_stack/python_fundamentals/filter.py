# filter creates a list of elements which return true in a boolean test

my_list = range(-5,5)

less_than_zero = list(filter(lambda x: x < 0, my_list))

print less_than_zero