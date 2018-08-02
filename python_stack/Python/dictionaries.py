#DICTIONARIES

#Recap:  lists are [a,b,c]    tuples are (a,b,c)

#dictionaries are { "key":"value", "key":"value" }
#keys must be unique

#creating dictionaries:

#a) literal notation:
weekend = {"Sun": "Sunday", "Sat": "Saturday"}

#b) create an empty dictionary then add values:
capitals = {} 
capitals["svk"] = "Bratislava"
capitals["deu"] = "Berlin"
capitals["dnk"] = "Copenhagen"

#accessing values:

print weekend["Sun"]
print capitals["svk"]

#FOR LOOPS accessing values with for loops

#to print all keys
for data in capitals:
     print data
#another way to print all keys
for key in capitals.iterkeys():
     print key
#to print the values
for val in capitals.itervalues():
     print val
#to print all keys and values
for key,data in capitals.iteritems():
     print key, " = ", data

#practice...
name = {"sw":"Sara Wong", "mp":"Martin Puryear"}
for key, value in name:
    print key, value

name = {"sw":"Sara Wong", "mp":"Martin Puryear"}
print name.items()
for temp in name.items():
    print temp
for key, value in name.items():
    print key, value

#.items() is a library method that does something similar to what enumerate() does globally.  it converts item's key:value pairs into a tuple.

my_people = [
    {"name":"mikel", "food":"fast"},
    {"name":"helen", "food":"asian"},
    {"name":"johanna", "food":"asian"},
    {"name":"jose", "food":"asian"},
]

for i in my_people:
    print i
    if i['food'] == 'asian':
        print i['name']
        