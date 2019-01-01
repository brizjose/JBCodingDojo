our_list = [1,2,3,4,5]
jackson = ['a','b','c',1,2,3,'do','re','mi',True,False]

print(len(jackson))

print(jackson[4])
print(jackson[-4])

print(jackson[3:6])
print(jackson[:len(jackson):2])
print(jackson[::3])
print(jackson[::-1])

# embedded lists

emb_list = [1,2,3,[4,5,6],7,8,9]

print(emb_list[3])
print(emb_list[3][0])

list_of_lists = [[1,2,3],[4,5,6],[7,8,9]]

print(list_of_lists[0])
print(list_of_lists[1])
print(list_of_lists[2])
print(list_of_lists[1][1])
print(list_of_lists[2][1])

# slicing lists

print(list_of_lists[1][1:])