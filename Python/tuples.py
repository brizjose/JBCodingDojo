import math  #this is done in order to access the math library

# container for data that belongs together.  think of them as a list of related items that cannot be changed once Python submits it to memory.

tuple_1 = ('dance','trance','disco','edm','trap','house')

#you can access their value via index and for loops

print tuple_1[3]

for genre in tuple_1:
    print genre                         #access the values

for genre in range (0,len(tuple_1)):
    print genre                         #access the indexes

# add new values to a tuple, it's possible!

tuple_1 = tuple_1 + ("drum and bass",)
print tuple_1
print len(tuple_1)

tuple_1 = tuple_1[:3] + ("techno",) + tuple_1[5:]   #this replaces value at indexes 3 & 4 
print tuple_1      
print len(tuple_1)                                     #notice we lose length because of the above

# TUPLE FUNCTIONS
#len()
print "first word is " + str(len(tuple_1[0])) + " letters long"
print "second word is " + str(len(tuple_1[1])) + " letters long"

#max()
#sum()
#min()
tuple_2 = (1,6,3,9,2,7,4)
print "max of tuple_2 is ",max(tuple_2)
print "sum of tuple_2 is ",sum(tuple_2)
print "min of tuple_2 is ",min(tuple_2)
print "average of tuple_2 is ",sum(tuple_2)/len(tuple_2)

#enumerate()
styles_1 = []
styles_2 = []
for genre in enumerate(tuple_1):
    styles_1.append(genre)
    styles_2.extend(genre)
print "appended list of genre: ",styles_1
print "extended list of genre: ",styles_2

def multiplier(n):
    return n*2

#functions and tuples...
#map()
print "multiplying every value of tuple_2 by 2 with a function and map method: ",map(multiplier,tuple_2)

#sorted()
print "sorted tuple_2: ",sorted(tuple_2)

#RETURN VALUES AS TUPLES
#If you return values as tuples, it is easy to do math operations on them
#example:

#returns
def circle_area(r):
    c = 2 * math.pi * r
    a = math.pi * r * r
    return (c,a)
   
