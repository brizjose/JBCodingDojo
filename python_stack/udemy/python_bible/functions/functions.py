# return

def rev(text):
    return text[::-1]

print(rev("abrahadabra"))

# scope

# in python, functions create local scopes vs loops and if statements that don't

a = 100

def f1():
    a = 200
    print(a)


def f2():
    print(a)

f1()
f2()

# if you want to modify a global variable through a function, use the word global

b = 100

def f3():
    global b
    b = 300
    print(b)

def f4():
    b = 500 
    print(b)

f3()
f4()
print(b)

# lists and dictionaries can be modified globally from within functions!

c = [1,2,3]

def f5():
    c[0] = 5
    print(c)

f5()
print(c)

