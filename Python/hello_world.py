print "Hello World!"

x = "hello python"
print x
y = 42
print y

# comment
""" comment"""
'''comment'''

# several ways to concatenate:  with + and with ,   notice the difference in output between the two!

def say_hello(name):
    if name:
        print 'hello, ' + name + ', from the function argument'
        print 'hello, ',name,', from the function argument'
    else:
        print 'no name'
say_hello('chang')

# curly brackets and .format() method of concatenation

# step 1:  create variables;   step 2:  concatenate with .format() function

my_name = "Zen"
my_lastname = "Coder"
print 'My name is {} {}'.format(my_name, my_lastname)

# String Methods

# Methods are functions we can run on a string.  The most common ones are:

x = "Hello World"
print x.upper()    #prints variable with all uppercase letters

y = x.count('lo')    #count number of occurrences of specified string
print y

z = x.endswith('y')
print z

idx = x.find('e')
print idx

boo = x.isalnum()   #checks if string length > 0 and all alphanumeric
print boo           #similar methods are:  .isdigit()   .isalpha()    .islower()    .isupper()

people = ['chang','cheng','chong','li','chung']
print "-".join(people)         # notice the list of items to be joined goes in the parenth and the joiner element goes before
print " ".join(people)
joiner = " "
print joiner.join(people)

joined = joiner.join(people)
print joined.split(" ")        # to split, do exactly the opposite!   splitter goes in the parenthesis

splitter = " "
print joined.split(splitter)

# List Operations

vegetables = ['lettuce', 'tomato', 'onion']
fruits = ['apples', 'oranges', 'dades']
salad = fruits + vegetables
print salad
meal = 3 * vegetables
print meal
#diet = salad - fruits   # this does not work because - is an unsupported operand of a list
#menu = vegetables + fruits[2]   #this does not work because fruits[2] not a string according to the error, but we can use it to get inside the list and retrieve the string on index [2].  This is because it cannot do list operation between list and a single item.  For that, there are other methds.... see below...
change = fruits[2]
print change

# List built-in methods
# append()
diet = []
diet = vegetables.append('more lettuce')
print diet                                     

var = [1,2,3,4,5]
var.append(99)
print var

var.append('only')
print var

print vegetables
vegetables.append('only')
print vegetables

#extend()  -- adds values of a second sequence to a given sequence
cars = ['volvo', 'mercedes']
vehicles = ['motorcycle', 'tricycle']
print cars.extend(['motorcycle', 'tricycle'])

#pop()

#index()

# List built-in functions

#len(sequence)
my_list = [1, "zen", True]
print len(my_list)

#enumerate(sequence)
#loop over a list and have an automatic counter:
food = ['milk', 'apple', 'broccoli', 'ice cream']
for counter, value in enumerate(food,1):
    print counter

food = ['milk', 'rice', 'popcorn', 'tomato']
counter_list = list(enumerate(food,1))
print (counter_list)

#map(function, sequence)

#min(sequence)

#sorted(sequence)