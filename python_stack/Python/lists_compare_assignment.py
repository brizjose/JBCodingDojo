list_one = ['celery','carrots','bread','milk']
list_two = ['celery','carrots','bread','cream']

def list_compare(a,b):
    if set(a) == set(b):
        print "Lists are equal"
    else:
        print "Lists are not equal"
        
list_compare(list_one, list_two)

