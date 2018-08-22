# you can override parent behavior by defining it at the child level and there will not be a conflict:

class Parent(object):
    def hobbies(self):
        print "Watching TV"

class Child(Parent):
    def hobbies(self):
        print "Coding"
    
bob = Parent()
ren = Child()

bob.hobbies()
ren.hobbies()

# polymorphism occurs when other siblings also differ but in a different way

class Sibling(Parent):
    def hobbies(self):
        print "instagram"

pip = Sibling()

pip.hobbies()