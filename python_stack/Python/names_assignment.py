#Part 1

students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

for pair in students:
    print pair['first_name'], pair['last_name']


#Part 2

users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name': 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
}

for types in users:
    print types
    for key,person in enumerate(users[types],1):
        print key,"-",person['first_name'],person['last_name'],"-",len(person['first_name'])+len(person['last_name'])
