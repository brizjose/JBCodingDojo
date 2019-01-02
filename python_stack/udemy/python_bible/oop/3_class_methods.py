import random

# to create a class with methods, we need a constructor

# the constructor method is a function called __init__ that takes an argument called self
# self is what we use to create to the specific instance of the class when we write the class code
# inside the code, when it is run, self is replaced by the object's name

# constructor functions can take other parameters

class Pound:
    def __init__(self, rare=False):
        self.value = 1.00
        self.color = "gold"
        self.num_edges = 1
        self.diameter = 22.50 # mm
        self.thickness = 3.15 # mm
        self.heads = True
        self.rare = rare
        if self.rare:
            self.value = self.value * 1.25
    def __del__(self):
        print("Coin spent")
    def rust(self):
        self.color = "greenish"
    def clean(self):
        self.color = "gold"
    def flip(self):
        heads_options = [True, False]
        self.heads = random.choice(heads_options)

coin1 = Pound()
coin2 = Pound(rare=True)

print(coin1.value)
print(coin2.value)

coin1.rust()
print(coin1.color)

coin1.flip()
print(coin1.heads)

# to destroy a coin
del coin1
print(coin1)