def division(a, b):
    try:
        return a/b
    except:
        return 0

array = [-2,-1,0,1,2]

for n in array:
    print(division(1, n))


# using the exception name.  this is preferable because it helps specify an expected error type.  if different type of error occurs, then we'll get to see it and handle it

def fool_proof_division(a, b):
    try:
        return a/b
    except ZeroDivisionError:
        return 0

for i in array:
    print(fool_proof_division(1, i))