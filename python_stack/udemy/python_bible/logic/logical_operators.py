c = 10
d = 5

# not

if c > d:
    print('it worked')
else:
    print("it didn't")

if not c > d:
    print('it worked')
else:
    print("it didn't")

# or

if c > 10 or d > 1:
    print('it worked')
else:
    print("it didn't")

# and

if c >= 10 and d > 1:
    print('it worked')
else:
    print("it didn't")

# not and and

if not (c > 10 and d > 1):
    print('it worked')
else:
    print("it didn't")

# not and or

if not (c > 10 or d > 1):
    print('it worked')
else:
    print("it didn't")

# more advanced example

c = 6
d = 2

if (c > 5 and d > 5) or (c > 1 and d > 1):
    print('it worked')
else:
    print("it didn't")
