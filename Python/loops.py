for count in range(0, 3):
    print 'counter is ',count

for letter in "kurtzweil":
    print letter

x = 3
y = x
while y > 0:
    print y
    y = y - 1
else:
    print "last else statement"    

x = 10
y = x
while y > -10:
    if y == 0:   
        print "zero"
    elif y == -9:    
        print "my lucky number"
    elif y == 6 or y == -6:
        pass    
    else:
        print "its ",y,"nono,"
    y = y - 1 

x = [1,2,3,4]
x += [2]
print x


