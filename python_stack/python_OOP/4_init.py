# __init__ method will create objects with individuality as each will have a unique placement in memory and attribute and method parameters will be set as they are created

class User(object):
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.logged = False

user1 = User("Chaka Kahn", "chaka@kahn.com")

print user1.name
print user1.email
print user1.logged

#notice logged was inherited, the name and email parameters are passed through __init__, self is still implicit

user2 = User()

#we cannot do this anymore because __init__ is expecting the name and email parameters