students = {
    "male": ["Bob", "Harry", "Lenin"],
    "female": ["Barb", "Harriet", "Loren"]
}

for gen in students:
    print(gen)

print('---------')

for gen in students.keys():
    print(gen)

print('---------')

for gen in students.keys():     # gen becomes key1, then key2
    for name in students[gen]:  # name becomes each name of the list belonging to dict[key1 or 2]
        print(name)             # do something with each name

print('---------')

for gen in students.keys():     # gen becomes key1, then key2
    for name in students[gen]:  # name becomes each name of the list belonging to 
        if "a" in name:         # iterate name in search for "a"
            print(name)         # do something with each name that returns true 

print('---------')

