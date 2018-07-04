# ODD EVEN

def odd_even(n):
    for i in range (1,n):
        if i%2 == 0:
            print "Number is "+ str(i) +". This is an even number."
        else:
            print "Number is "+ str(i) +". This is an odd number."
odd_even(21)  #will print up to 20 instead of 2000 to save space

# MULTIPLY

def multiply(a,x):
    for val in a:
        new_list.append(val*x)
    print new_list
    return new_list

# HACKER CHALLENGE

def layered_multiples(arr):
    layered_list = []
    for n in new_list:
        hack_list = []
        counter = 0
        while counter < n:
            hack_list.append(1)
            counter = counter + 1
        layered_list.append(hack_list)    
    print layered_list

new_list = []
layered_multiples(multiply([2,4,5],3))
