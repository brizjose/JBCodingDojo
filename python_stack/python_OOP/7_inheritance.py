#General structure of objects and inheritance:

        # class Parent(object):     # inherits from the object class
        # parent methods and attributes here
        # class Child(Parent):      #inherits from Parent class so we define Parent as the first parameter
        # parent methods and attributes are implicitly inherited
        # child methods and attributes

#create a parent class --- known as blueprint class
#has attributes under def __init__()
#has methods under def methodName()

class Vehicle(object):
    def __init__(self, wheels, capacity, make, model):
        self.wheels = wheels
        self.capacity = capacity
        self.make = make
        self.model = model
        self.mileage = 0
    def drive(self, miles):
        self.mileage += miles
        return self
    def reverse(self, miles):
        self.mileage -= miles
        return self

#implicit inheritance:  create subclasses that have all attributes and methods of the blueprint class plus their own

#add method without adding attributes or methods to the blueprint
class Bike(Vehicle):
    def vehicle_type(self):
        return "Bike"

#add method that assigns a value to a blueprint attribute
class Car(Vehicle):
    def set_wheels(self):
        self.wheels = 4
        return self

#this method takes an argument and updates a blueprint attribute
class Airplane(Vehicle):
    def fly(self, miles):
        self.mileage += miles
        return self

v = Vehicle(4,8,"dodge","minivan")
print v.make

b = Bike(2,1,"Schwinn","Paramount")
print b.vehicle_type()

c = Car(8,5,"Toyota","Matrix")
c.set_wheels()
print c.wheels
#despite having indicated 8 wheels, because set_wheels method is called, it updates the self.wheels attribute

a = Airplane(22,853,"Airbus","A380")
a.fly(580)
print a.mileage
#method added miles passed through as argument to the blueprint value 0

