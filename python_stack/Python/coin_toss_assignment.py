import random
n = 20                     #doing 20 tosses, not 5000 to save space
heads = []
tails = []
print "Starting the program..."
output = ""
for i in range(1,n+1):
    output += "Attempt #{}:  ".format(i)
    toss = random.randint(0,1)
    if toss == 0:
        heads.append(1)
        output += "Throwing a coin... It's head!"
    else:
        tails.append(1)
        output += "Throwing a coin... It's tail!"
    output += " ... Got {} head(s) so far and {} tail(s) so far".format(sum(heads),sum(tails))+"\n"
output += "Ending program now, you got a total of {} heads and {} tails!".format(sum(heads),sum(tails))
print output