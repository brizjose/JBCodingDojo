# classes are templates and instances of classes are objecs

# classes are made up of variables (states) and functions (methods)

# each variable type in Python is its own class.  Example, string class, number class, list class, dictionary class

# recap:
# classes are just templates
# we instantiate a class to make an object
# objects are made of two things:  they have states and they have behaviors
# to create states we use class variables
# to create behaviors we use methods (or functions that belong to classes)

# simple class
#   class <Name>:
#       states

# class with methods:
#   class <Name>:
#       def __init__(self, **kwargs)
#           self.kwargs
#       def methods

# class inheritance:  creating sub-classes from one parent class
# see example in 4_class_inheritance

# class polymorphism:  when behavior differs within a class because objects might behave differently from parent and siblings
# to do this, we override class methods inside specific instances
# see example in 5_class_polymorphism - Five_Pence(coin), where we override the rust() and clean() methods.