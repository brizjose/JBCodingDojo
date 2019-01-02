# while loops run while a condition is True

# the following won't run:

while False:
    print("Hello")

# while with conditions

x = 0
while x < 10:
    if x % 2 == 0:
        print(x + 1)
    x = x + 1

# populate a list

L = []
while len(L) < 3:
    name = input("Please enter a name:  ").strip().capitalize()
    L.append(name)

print("Sorry, list is full, look %s" % L)

