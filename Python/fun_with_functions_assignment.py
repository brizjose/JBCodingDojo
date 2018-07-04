# ODD EVEN

def odd_even(n):
    for i in range (1,n):
        if i%2 == 0:
            print "Number is "+ str(i) +". This is an even number."
        else:
            print "Number is "+ str(i) +". This is an odd number."
# odd_even(21)

# MULTIPLY

def multiply(a,x):
    for val in a:
        new_list.append(val*x)
    # print new_list
    return new_list

# HACKER CHALLENGE

def layered_multiples(arr):
    hack_list = []
    for n in new_list:
        # print i
        hack_list.append("1"*n)
    print hack_list

new_list = []
layered_multiples(multiply([2,4,5],3))
