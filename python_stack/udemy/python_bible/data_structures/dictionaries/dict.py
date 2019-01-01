# dictionaries are made up of key:value pairs
# dictionaries are not indexed, so it's an unordered collection of key:values

students = {'Alice':25,'Bob':27,'Claire':17,'Dan':21,'Emma':22}

# keys are strings or previously declared variables

# retrieve a value by key:

print(students['Dan'])

# add a key,value pair:

students["Fred"] = 25

print(students)

# value reassignment:

students['Dan'] = 22

print(students['Dan'])

# remove from dictionary

del students['Fred']

print(students)

# get the dictionary keys, the returned format is iterable but not subscriptable, meaning, you can't just grab an individual element 

print(students.keys())

# to get an individual key from an iterable structure, assign them to a variable using the list() method

st_keys = list(students.keys())

print(st_keys[2])

# get the dictionary values, returns iterable / non-subscriptable format

print(students.values())

# by making a list, it becomes subscriptable

st_values = list(students.values())

print(st_values[3])

# get the dictionary items

print(students.items())

st_items = list(students.items())

# make a list of tuples from the key,values

print(st_items)