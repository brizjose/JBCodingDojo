name = "zen"
last = "coder"
print name
print "my name is " + name
print "my name is", name
print "my name is {} {}".format(name, last)

#STRING METHODS

#string.count(substring) return number of occurrences
string = "take me out to the ball game"
print (string.count('e'))

#string.endswith(substring)  returns boolean 
string = "made my day"
print (string.endswith('y'))

#string.find(substring)  returns index of first occurrence of the substring within the string
string = "the cat in the hat"
print (string.find(' c'))

#string.isalnum(substring)  returns boolean after checking if all characters are alphanumeric and string length > 0
numli = "this1254"
print numli.isalnum()

numli = "this 1254"
print numli.isalnum()

#string.join(list)  returns a string that is all strings within our set concatenated
string = "mojo"
list = ['grass', 'banjo', 'truck', 'manure']
print string.join(list)
list = [1,2,3]
print string.join(str(list))   #str() converting int to str so it can concatenate with the string

music = ["tool", "teebee", "noisia", "mastodon"]
print " ".join(music)
print "-".join(music)

#string.split() returns a list of values split at a given character.  default is split at every space
space_odd = "enough willi nilli"
print space_odd.split()
print space_odd.split('i')

socks_out = [2,5,8,3,6]
print str(socks_out).split()

#LISTS

my_list = ['documents','envelops','pens']
print my_list[0]
print my_list[1]
print my_list[2]
for items in my_list:
    print items

#ACCESSING LIST ITEMS

#(list).append(<new_element>)
x = [1,2,3,4]
x.append(99)
print x

#getting specific with :
    #lists are returned between brackets [].  Use : to separate start and end index.  
    #If either start or end index are left blank, it is implied you start at very first or end at very last

list_x = [1,2,3,4,5,6,7,8,9,10]
print list_x[:]          # will display entire list because both ends left blank
print list_x[3:]         # will print from index[3] to the end
print list_x[:3]         # will print from index[0] to but not including index[3]
print list_x[3:5]        # will print index[3] and index[4]

print len(list_x)        # will print the length of the list

#BUILT-IN FUNCTIONS FOR SEQUENCES

sequence = ('first', 'second', 'third', 'last')   #enumerate creates numbered list from a list
for each, item in enumerate(sequence):
    print (each, item)

for each, item in enumerate(sequence,100):
    print (each, item)

my_numbers = [1,2,3,4,5]
def my_function(n):
    return n*2
new_numbers = (map(my_function, my_numbers))  #map applies a function to all items in an input list
print new_numbers

print min(my_numbers)                           #get min or max 
print max(my_numbers)

unsorted = [654,35,6,4376,23,765,234,765,23,4]
print sorted(unsorted)                          #sorts the list

#LIST BUILT-IN METHODS

my_list = ['ready','to','rumble']
my_list.append('today')
print my_list
their_list = ['hell','yeah']
our_list = my_list.extend(their_list)
mix_list = my_list.append(their_list) 
print our_list                          #prints None
print mix_list                          #prints None

print my_list                           #prints the extended and appended their_list in my_list
print my_list.pop()                     #prints the extracted last element, which is the object last                                            appended
print my_list.pop(1)                    #popped the index=1 element from the list!

print string
print string.index('o')          


#CONDITIONAL EXPRESSIONS:  IF

year = 2017
if year == 2019:
    print "next year"
elif year == 2018:
    print "this year"
else:    
    print "not interested"

#LOOPS

#for loop...   for <counter> in <sequence or range>

my_array = ['rock',2,['paper','scissors'],False]
for i in my_array:
    print i

for i in range (100,105):        #note it will not include last one
    print i

#while loop ....   while <expression>

count = 0
while count < 5:
    print count
    count += 1

#LOOP CONTROL

#break   exits the loop
for val in "string":
    if val == "i":
        break
    print val    


#continue   does not execute but loops back to top with the next index
for val in "shtring":
    if val == "h":
        continue
    print val

#pass is used to make program not even go into whatever code follows, but does not break the flow either.  Used during development phase, often not used in final version.

