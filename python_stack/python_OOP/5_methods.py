#given an object, we can create methods:

class User(object):
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.logged = False
    def login(self):
        self.logged = True
        print self.name + " is logged in"
        return self
    def show(self):
        print "this is " + self.name
        return self    
    def logout(self):
        self.logged = False
        print "is " + self.name + " logged in?" + " " + str(self.logged)
        return self 

user1 = User("Chaka Kahn", "chaka@kahn.com")

#we can run methods like this:
# user1.login()
# user1.show()
# user1.logout()

#or we can run them like this when we return self after each method:
user1.login().show().logout()
