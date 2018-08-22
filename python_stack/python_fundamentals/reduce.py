

# reduce performs a computation on a list and returns the result.

# it applies a rolling computation to sequential pairs of values in a list.

from functools import reduce

my_list = [1,2,3,4,5]

product = reduce((lambda x, y: x * y), my_list)

print product


