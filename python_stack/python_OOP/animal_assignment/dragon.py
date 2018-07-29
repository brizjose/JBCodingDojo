from animal import Animal

class Dragon(Animal):
    def __init__(self, name):
        super(Dragon, self).__init__(name)
        self.health = 170
    def fly(self):
        self.health -= 10
        return self
    def displayHealth(self):
        print "I am a Dragon"
        super(Dragon, self).displayHealth()
        return self
        

    

dragon1 = Dragon("Albathorth")

dragon1.fly().displayHealth().fly().displayHealth()