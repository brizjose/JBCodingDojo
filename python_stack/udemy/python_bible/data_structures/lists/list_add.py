# quick note:  methods like .append() and .insert() change the list behind the scenes and have a return of None.  
# Therefore, if used in assignments like listA = listA.append(0)
# that will delete the list
# this happens because lists are mutable types

# append

list1 = [1,3,5,7]

list1.append(2)

print(list1)

# +

list1 = list1 + [4, 6]

print(list1)

# list(), only works with strings because int are not iterable

list1 = list1 + list("ABC")

print(list1)

list1 = list1 + list(str(123))

print(list1)

# embedded list

list1 = list1 + [[1,2,3]]

print(list1)

# do not use .append() in assignments because it deletes the list.  Uncomment the below and see that it returns None
# list1 = list1.append([4,5,6])

# insert at any point in the list
# syntax is insert(index, value)

list1.insert(0, "ODDS")
print(list1)

list1.insert(list1.index(2), "EVENS")
print(list1)

