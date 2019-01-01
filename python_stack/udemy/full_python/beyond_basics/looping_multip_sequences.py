list1 = ["a", "b", "c"]
list2 = [1,2,3]

for i, j in zip(list1, list2):
    print("%s is %s" %(i, j))

# remember what zip does:

new_dict = dict(zip(list1, list2))

print(new_dict)

