for i in range (0,11):      #declare counter and set range
    if i % 2 == 0:          #condition statement: is even if reminder of i/2 is zero
        print i             #what to do if condition is satisfied


for i in range (5,51):      #declare counter and set range
    if i % 5 == 0:          #condition statement: is multiple of five if remainder of i/5 is zero
        print i             #what to do if condition is satisfied


a = [1, 2, 5, 10, 255, 3]   #declare variable and assign a list of numbers as its value
num = sum(a)                #use a built-in function to perform the task
print num                   #output result


a = [1, 2, 5, 10, 255, 3]   #declare variable and assign a list of numbers as its value
num = sum(a)                #use built in function to add the numbers
print num/len(a)            #output: divide sum by number of items on the list to get the average