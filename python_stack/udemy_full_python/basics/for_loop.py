# for loop operation

list = [1, 3, 6]

for i in list:
    c = i + 10
    print(c)

# read a file and perform operations with its contents

myfile = open('fruits.txt')
content = myfile.read()
myfile.close()
content = content.splitlines()

for fruit in content:
    print(len(fruit) * 100)

# conditional returns

mylist = [1,2,3,4,5]
for num in mylist:
    if num > 2:
        print(num)    

# list operations

temps = [10, -20, 100]

def cel_to_fahr(celsius):
    fahrenheit = celsius * 9/5 + 32
    return fahrenheit

for temp in temps:
    print(cel_to_fahr(temp))