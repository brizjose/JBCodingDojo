pos = "* "
neg = " *"
br = "\n"

for i in range (0,9):
    if i % 8 == 0:
        output = br
    elif i % 2 == 0:
        output = neg * 4
    else: 
        output = pos * 4
    print output
