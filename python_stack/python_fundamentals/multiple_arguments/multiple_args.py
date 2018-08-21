# placing an asterisk before a parameter name means the variable will be passed a number of arguments

def varargs1(arg1, *others):
    print "Got "+arg1+" and "+", ".join(others) 

varargs1("one")
varargs1("one, two")
varargs1("one, two, three")


# what * does is join the rest of the arguments into a tuple

def varargs2(arg1, *others):
    print "restOfArg is of " + str(type(others))
    print arg1+", "+", ".join(others)
varargs2("one", "two", "three")
# OUTPUT: restOfArg is of <type 'tuple'>
# what .join does is make a string list out of the other arguments