array = [1,2,3]
myfile = open("folder/numbers.txt", "w")
for num in array:
    myfile.write(str(num) + "\n")
myfile.close()