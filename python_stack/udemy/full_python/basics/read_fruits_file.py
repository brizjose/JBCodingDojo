
# open file in read mode
file_object = open("fruits.txt", "r")
print(file_object)


text_var = file_object.read()
file_object.close()
print(text_var)

# splitlines() removes the split characters \n and creates list

text_var = text_var.splitlines()
print(text_var)




