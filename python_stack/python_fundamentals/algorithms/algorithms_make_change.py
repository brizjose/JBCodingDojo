def change(cents):
    coins = {
        'dollar': 1,
        'quarter': 0.25,
        'dime': 0.1,
        'nickel': 0.05,
        'penny': 0.01    
    }
    #dollars = 0
    #quarters = 0
    #dimes = 0
    #nickels = 0
    #pennies = 0
    if cents > coins['dollar']:
        dollars = (int(cents/coins['dollar']))
        remainder = cents - dollars
        print "{} dollars".format(dollars)
        print "and {} cents remaining".format(remainder)
    if remainder > 0:
        quarters = (int(remainder/coins['quarter']))
        remainder = round(remainder - quarters*coins['quarter'],2)
        print "{} quarters".format(quarters)
        print "and {} cents remaining".format(remainder)
    if remainder > 0:
        dimes = (int(remainder/coins['dime']))
        remainder = round(remainder - dimes*coins['dime'],2)
        print "{} dimes".format(dimes)
        print "and {} cents remaining".format(remainder)
    if remainder > 0:
        nickels = (int(remainder/coins['nickel']))
        remainder = round(remainder - nickels*coins['nickel'],2)
        print "{} nickels".format(nickels)
        print "and {} cents remaining".format(remainder)
    if remainder > 0:
        pennies = (int(remainder/coins['penny']))
        remainder = round(remainder - pennies*coins['penny'],2) 
        print "{} pennies".format(pennies)
        print "and {} cents remaining".format(remainder)   
change(3.8)
