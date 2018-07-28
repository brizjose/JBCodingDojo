#declare a class and give it a name
class User(object):
    #the __init__ method is called every time an object is created
    def __init__(self, name, email):
        #set some instance variables, these are the attributes
        self.name = name
        self.email = email
        self.logged = False
    #this is a method we create to help a user log in
    def login(self):
        self.logged = True
        print self.name + " is logged in."
        return self
#now create an instance of the class
#the parameters are passed throuth the __init__ method
new_user = User("Helen","helen@mums.com")
print new_user.email


