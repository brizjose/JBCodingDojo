class Car(object):
    def __init__(self, price, speed, fuel, mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        if self.price > 10000:
            self.tax = 0.15
        else: 
            self.tax = 0.12
    def display_all(self):
        print "Car price: {}, speed:{}, fuel: {}, mileage: {}, tax: {}".format(self.price, self.speed, self.fuel, self.mileage, self.tax)
        return self

car1 = Car(2000, "35mph", fuel = "Full", mileage = "15mpg")
car2 = Car(2000, "5mph", fuel = "Not Full", mileage = "105mpg")
car3 = Car(2000, "15mph", fuel = "Full", mileage = "25mpg")
car4 = Car(2000, "45mph", fuel = "Empty", mileage = "25mpg")
car5 = Car(20000, "35mph", fuel = "Empty", mileage = "15mpg")

car1.display_all()
car2.display_all()
car3.display_all()
car4.display_all()
car5.display_all()

