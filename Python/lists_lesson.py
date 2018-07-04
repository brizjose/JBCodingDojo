list_1 = [41,54]
list_2 = [65,23]

print list_1 + list_2


#the following runs top code, til it hits an error then switches to code 2
try:
    print "hello"
    print list_1[0] + list_2[2]
    print "hello"
except IndexError:
    print "second block"
    print list_1[1] + list_2[1]
    print "goodbye"

print [0 for i in range (0,50)]
print [None for i in range (0,50)]
print [i for i in range (0,50)]

i,j = (1,2), [3,4]   #here, two variables are being declared at the same time.  one is a tuple and the other an object
try:
    i[1] = 42       #this is a 'tuple' and these you can't go in and change them.
except TypeError:   #can specify kind of error to run except
    print "type type type"
except IndexError:  #can specify kind of error to run except
    print "index index index"
except:             #can leave error type open to catch others in case not caught before
    print "any kind of error"

num = 1,2,3         #this sets num as a tuple.  could have also written num = (1,2,3)
print num           
num1, num2, num3 = 4,5,6
print num2

#i,j = 1,2,3         #cannot assign 3 values into 2 variables
#print j
#(i,j) = (1,2,3)
#print j

key, value = "AP"   #assigns one letter per variable
print key, value

our_list = ['michael','raphael']
for val in enumerate(our_list):         #enumerate returns a list with an automatic counter
    print val                           #what enumerate does is create tuples: (counter, 'value')

for idx,value in enumerate(our_list):
    print value, idx


