# if you know the value of what you want to remove:

list1 = ['Bob', 'Mirna', 'Chuck', 'Gertrudis']

list1.remove('Mirna')

print(list1)

# remove targets the first occurrence only.  therefore, sometimes you want an alternative...

# if you want to remove by index number:

list2 = ['Bob', 'Mirna', 'Chuck', 'Gertrudis']

del list2[0]

print(list2)

# remove slices

list3 = ['Bob', 'Mirna', 'Chuck', 'Gertrudis']

del list3[0:2]

print(list3)
