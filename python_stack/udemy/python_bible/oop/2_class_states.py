# make a class

class Pound:
    value = 1.00
    color = "gold"
    num_edges = 1
    diameter = 22.50 # mm
    thickness = 3.15 # mm
    heads = True

# make an object

coin1 = Pound()

print(type(coin1))
print(coin1.value)
print(coin1.color)

# update an object's state

coin1.color = 'greenish'

print(coin1.color)

# create a new instance, and see that objects behave independently from each other

coin2 = Pound()

print(coin2.color)

