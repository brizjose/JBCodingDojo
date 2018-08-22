#Inheritance and composition

#The question of "inheritance versus composition" comes down to an attempt to solve the problem of reusable code. You don't want the duplicated code all over your codebase since it is neither clean nor efficient. Inheritance solves this problem by creating a mechanism for you to have implied features in base classes. Composition solves this by giving you modules and the ability to call functions in other classes.


class Apples(object):
    def color(self):
        print "red"
    def taste(self):
        print "sweet"
    def shape(self):
        print "roundish"

class Oranges(object):
    def __init__(self):
        self.apples = Apples()
    def color(self):
        print "orange"
    def taste(self):
        print "sweet-sour"
    def shape(self):
        self.apples.shape()

# notice that Oranges is not a child of Apples, but calls Apples object in order to use one of its attributes

florida = Oranges()
florida.color()
florida.taste()
florida.shape()
