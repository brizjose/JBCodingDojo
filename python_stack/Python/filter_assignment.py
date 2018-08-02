def typical(test):
    if type(test) == int:
        if test >= 100:
            print "That's a big number"
        else:
            print "That's a small number"
    elif type(test) == str:
        if len(test) >= 50:
            print "Long sentence"
        else:
            print "Short sentnce"
    elif type(test) == list:
        if len(test) >= 10:
            print "Big list"
        else:
            print "Short list"
    else:
        print "Nothing to see here!"

typical(['we','can','do','this','cuz','we','are','good','and','we','believe','in','ourselves'])        