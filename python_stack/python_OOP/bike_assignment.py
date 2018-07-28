class Bike(object):
    def __init__(self, price, max_speed, miles):
        self.price = price
        self.max_speed = max_speed
        self.miles = miles
    def displayInfo(self):
        print "bike costs $" + str(self.price) + " rides up to " + self.max_speed + " and has ridden around " + str(self.miles) + " miles." 
        return self
    def ride(self):
        print "Riding"
        self.miles += 10
        return self
    def reverse(self):
        if self.miles - 5 < 0:
            print "Can't reverse anymore"
            return self
        else:
            print "Reversing"
            self.miles -= 5
            return self

bike1 = Bike(250, "30mph", 100)
bike2 = Bike(350, "40mph", 15)
bike3 = Bike(550, "60mph", 5)

bike2.reverse().reverse().reverse().reverse().displayInfo()

