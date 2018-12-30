l = {'item1':"apple", 'item2':"banana", 'item3':8}

# print only values
for v in l.values():
    print(v)

# print only keys
for k in l.keys():
    print(k)

# print keys and values
for k,v in l.items():
    print(k,v)

# print key value pairs as tuples
for items in l.items():
    print(items)

# print enumerated list of values
for values in enumerate(l.values()):
    print(values)

# print enumerated list of keys
for keys in enumerate(l.keys()):
    print(keys)

# print enumerated list of item tuples
for iterations in enumerate(l.items()):
    print(iterations)

