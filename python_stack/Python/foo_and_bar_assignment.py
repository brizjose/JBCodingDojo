def prime_or_psquare(a,b):
    for i in range (a,b+1):
        if i**(1.0/2)%1==0:
            print i,"Bar"
        elif i%2 == 0 or i%3 == 0:
            print i,"Foo Bar"
        else:   
            print i,"Foo" 
prime_or_psquare(100,1000)    

