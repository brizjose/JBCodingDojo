class User(object):
    name = "Helen"

anna = User()
print anna.name

anna.name = "Mikel"

print anna.name

bob = User()

print bob.name
#inherits name from parent

#self refers to the individual instance of the object

#notice no need to pass self through the User() object upon creation because it is implicit