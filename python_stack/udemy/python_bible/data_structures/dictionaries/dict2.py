# each key can hold multiple values

# combine dictionaries with lists

dict_list = {
    "Bob": [1,2,3], 
    "Chuck": [4,5,6], 
    "Stan": [7,8,9]
    }

print(dict_list["Bob"])
print(dict_list["Bob"][1])

# combine dictionaries with other dictionaries

dict_list = {
    "Bob": {'age': 67, 'state': 'OK'}, 
    "Chuck": {'age': 56, 'state': 'AL'}, 
    "Stan": {'age': 60, 'state': 'MO'}
    }

print(dict_list['Chuck']['age'])
print(dict_list['Chuck']['state'], dict_list['Bob']['state'])

