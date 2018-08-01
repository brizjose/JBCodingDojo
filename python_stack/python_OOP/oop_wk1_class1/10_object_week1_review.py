#create a class

class Person(object):
    def __init__(self, name, age, height):
        self.name = name
        self.age = age
        self.height = height
        self.health = 100
        self.stealth = 10

    def introduce(self):
        print "hello, my name is {}".format(self.name)

    def display(self):
        print self.__dict__


person1 = Person("Mom", 63, 140) #this passes the arguments through Person's __init__ function
person2 = Person("Dad", 71, 160)

person1.introduce()
person1.display()
print person1.__dict__

#create a subclass called Ninja
#we need to pass name, age, and height cuz the parent's init has them, but we can refactor them to prepare for the parameters of the child...
class Ninja(Person):
    def __init__(self, ninja_name, ninja_age, ninja_height):
        super(Ninja, self).__init__(ninja_name, ninja_age, ninja_height)
        self.stealth = 100
        self.attack = 30
        self.defense = 10

ninja1 = Ninja("Johiro", 30, 170)

ninja1.introduce()
ninja1.display()


class Coder(Person):
    def __init__(self, coder_name, coder_age, coder_height):
        super(Coder, self).__init__(coder_name, coder_age, coder_height)
        self.favorite_language = 'Python'

coder1 = Coder("Helen", 11, 140)

coder1.introduce()
coder1.display()