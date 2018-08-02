#an object

me = {
    "name":"Jose",
    "last":"Briz"
}

#a list

my_list = [me,1,2,3,4,5]

print my_list[0]["name"]  # me object is the first element, co can call it and an element inside it                                 as dictionary

my_list[0]["last"] = "Lom"
print me

#slicing:

list_x = [1,2,3,4,5,6,7,8,9,10]
print list_x[:]          # will display entire list because both ends left blank
print list_x[3:]         # will print from index[3] to the end
print list_x[:3]         # will print from index[0] to but not including index[3]
print list_x[3:5]        # will print index[3] and index[4]

#common list methods:

#.append    <list>.append(<new_element>), new element is an object with its own index
#.extend    <list>.extend(<new_element>), new element values are in sequence with original, each with an index
#.pop       <list>.pop(index), specify index and pop removes that element from the sequence
#.index     <list>.index(value), specify a value within the list and .index returns its position within the list

#common list objects:

#enumerate(sequence)  will create a numbered list
    #.enumerate(sequence,n)  will start the numbering at specified 'n'

#map(function,squence)  applies the function to every item in the sequence  
    #my_list = [some sequence]
    #def my_function():
    #map(my_function,my_list)

#min(sequence)  returns minimum value in a given sequence

#sorted(sequence)  sorts the values in a given sequence