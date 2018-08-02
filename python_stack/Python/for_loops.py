for i in range (1,6):
    print "hello" + str(i)
print "printed hello + concatenated index as string"    

my_list = [12,14,16,18,20]
for i in my_list:
    print i
print "printed values, not the index because it is for looping an array"

#note looping arrays does not access the index, it's a superficial loop through the values only, so cannot change values through a loop.

#to access the index, use range:

print my_list
for value in range(0,len(my_list)):     #this will iterate from zero up to not including last one
    print value                         #this prints the index
    print my_list[value]                #this prints the value at each index
    my_list[value] = 5                  #this will change of values to 5
    print my_list

#increment by 2 or other multiple

for i in range (1,9,2):
    print i


my_dictionary = {
    "name":"Uncle",
    "last":"Sam"
}

for value in my_dictionary:
    print value                     #for loops through the keys!
    print my_dictionary[value]      #prints the values at each key

punk = {
    "tempo":"fast",
    "guitar":"crunch",
    "bass":"overdrive"
}

metal = {
    "tempo":"steady",
    "guitar":"distortion",
    "bass":"compressed"
}

funk = {
    "tempo":"groovy",
    "guitar":"shiny",
    "bass":"nasal"
}

genres = [punk, metal, funk]

for value in genres:
    print value
    for key in value: 
        print key +": "+ value[key]

print "That's "+str(genres[-1]['tempo'])

#RECAP:     FOR LOOP THROUGH A RANGE = LOOPS THROUGH THE INDEXES
#           FOR LOOP THROUGH AN ARRAY = LOOPS THROUGH THE VALUES
#           FOR LOOP THROUGH AN OBJECT = LOOPS THROUGH THE KEYS




