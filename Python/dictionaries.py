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
    #print i
    if i['food'] == 'asian':
        print i['name']
        