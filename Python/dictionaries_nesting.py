#NESTING
# dictionaries can nest lists and tuples

context = {
  'questions': [
    { 'id': 1, 'content': 'Why is there a light in the fridge and not in the freezer?'},
    { 'id': 2, 'content': 'Why don\'t sheep shrink when it rains?'},
    { 'id': 3, 'content': 'Why are they called apartments when they are all stuck together?'},
    { 'id': 4, 'content': 'Why do cars drive on the parkway and park on the driveway?'}
  ]
}

#RETRIEVE data at different levels:

# for data in context.iterkeys():
#   print data

# for data in context.itervalues():
#   print data

for data in context.iteritems():
  print data

for data in context.items():
  print data

#ITERATE elements with a for loop
for key, data in context.items():
    #  print data
     for value in data:
          print "Question #", value["id"], ": ", value["content"]
          print "----"

#LISTS FROM DICTIONARIES

data ={"house":"Haus","cat":"Katze","red":"rot"}
print data.items()
#[('house', 'Haus'), ('cat', 'Katze'), ('red', 'rot')]
print data.keys()
#['house', 'cat', 'red']
print data.values()
#['Haus', 'Katze', 'rot']

#DICTIONARIES FROM LISTS

#zip()  like a zipper, it combines one list as key and the other as value, in order, returns list of tuple pairs  [('key','value'),('key','value') ...etc]

#dict()  converts the zip() tuples into a real dictionary { "key":"value","key":"value" ..etc} 

#example:

#from lists:
dishes = ["pizza", "sauerkraut", "paella", "hamburger"]
countries = ["Italy", "Germany", "Spain", "USA"]

#zip() creates tuples
country_specialities = zip(countries, dishes)
print country_specialities
#Result is...
#[('Italy', 'pizza'), ('Germany', 'sauerkraut'), ('Spain', 'paella'), ('USA', 'hamburger')]

#dict() creates dictionaries
country_specialities_dict = dict(country_specialities)
print country_specialities_dict
#Result is...
#{'Germany': 'sauerkraut', 'Spain': 'paella', 'Italy': 'pizza', 'USA': 'hamburger'}

#zip() would write off superfluous keys or values
countries = ["Italy", "Germany", "Spain", "USA", "Switzerland"]
dishes = ["pizza", "sauerkraut", "paella", "hamburger"]
country_specialities = zip(countries,dishes)
print country_specialities
#Result is...
#[('Italy', 'pizza'), ('Germany', 'sauerkraut'), ('Spain', 'paella'), ('USA', 'hamburger')]
#...no Switzerland



