#super() is used to change parental default settings for the specified child class

#the syntax is:  super(childClassName, self).parent_method()

#do so by calling the parent's __init__ method 

#example, suppose there is a Human object and you want to modify at the sub-class level...

    # from human import Human
    # class Wizard(Human):
    #     def __init__(self):
    #         super(Wizard, self).__init__()   # use super to call the Human __init__ method
    #         self.intelligence = 10           # every wizard starts off with 10 intelligence
    #     def heal(self):
    #         self.health += 10
    # class Ninja(Human):
    #     def __init__(self):
    #         super(Ninja, self).__init__()    # use super to call the Human __init__ method
    #         self.stealth = 10                # every Ninja starts off with 10 stealth
    #     def steal(self):
    #         self.stealth += 5
    # class Samurai(Human):
    #     def __init__(self):
    #         super(Samurai, self).__init__()  # use super to call the Human __init__ method
    #         self.strength = 10               # every Samurai starts off with 10 strength
    #     def sacrifice(self):
    #         self.health -= 5
