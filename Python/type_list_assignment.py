def function_magic(a):
    sum = 0
    for i in a:
        if type(i) == str:
            print i + " was here"
        if type(i) == int:
            sum = sum + i
            print sum
    style = type(a[0])
    if all(type(i)==type(a[0]) for i in a):
        print style
    else:
        print "mixed"
            
function_magic(['magical unicorns',19,'hello',98.98,'world'])

def function_alchemy(a):
    sum = 0
    for i in a:
        if type(i) == str:
            words = i
            words += words
        if type(i) == int:
            nums = i
            nums += float(sum)
    style = type(a[0])
    if all(type(i)==type(a[0]) for i in a):
        print style
    else:
        print "mixed"
    print words
    print nums
            
function_alchemy(['magical unicorns',19,'hello',98.98,'world'])