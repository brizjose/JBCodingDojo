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