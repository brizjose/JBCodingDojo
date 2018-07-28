class Product(object):
    def __init__(self, price, item_name, weight, brand):
        self.price = price
        self.item_name = item_name
        self.brand = brand
        self.weight = weight
        self.status = "for sale"
    def sell(self):
        self.status = "sold"
        return self
    def addTax(self):
        self.price = self.price * 1.085
        return self
    def item_return(self, return_state):
        if return_state == "defective":
            self.status = "defective"
            self.price = 0
        if return_state == "like new":
            self.status = "for sale"
        if return_state == "opened":
            self.status = "used"
            self.price = self.price * 0.8
        else:
            print "please try again!  specify status as either 'defective', 'like new' or 'opened'"
        return self
    def display_info(self):
        print "Product name: {}, brand: {}, price: {}, weight: {}, status: {}".format(self.item_name, self.brand, self.price, self.weight, self.status)
        return self

product1 = Product(10, "pants", "1pound", "china_gold")

product1.display_info().addTax().display_info().sell().display_info().item_return("closed").display_info()
    
