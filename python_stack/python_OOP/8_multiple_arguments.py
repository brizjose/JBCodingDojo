#you can pass a bundle of arguments through a variable by using the "splat" operator or asterisk.  This operator works as a .join() and creates a tuple out of the bundled arguments and is assigned to a parameter

def varArgs(arg1, *args):
    print "Got " + arg1 + " and " + ", ".join(args)
    print str(type(args))

varArgs("one")

varArgs("one","two")

varArgs("one","two","three")

varArgs("one","two","three","four")

