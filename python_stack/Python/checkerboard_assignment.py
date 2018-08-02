pos = "* "
neg = " *"

for i in range (0,8):
    if i % 2 == 0:
        output = neg * 4
    else: 
        output = pos * 4
    print output
