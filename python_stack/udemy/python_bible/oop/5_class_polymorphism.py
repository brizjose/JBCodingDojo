import random

class Coin:
    def __init__(self, rare=False, clean=True, heads=True, **kwargs):

        for key, value in kwargs.items():
            setattr(self, key, value)

        self.is_rare = rare
        self.is_clean = clean
        self.heads = heads

        if self.is_rare:
            self.value = self.original_value * 1.25
        else:
            self.value = self.original_value
        
        if self.is_clean:
            self.color = self.clean_color
        else:
            self.color = self.rusty_color

    def rust(self):
        self.color = self.rusty_color

    def clean(self):
        self.color = self.clean_color

    def flip(self):
        heads_options = [True, False]
        self.heads = random.choice(heads_options)

    def __del__(self):
        print("Coin spent")

    def __str__(self):
        if self.original_value >= 1.00:
            return "L{} coin".format(int(self.original_value))
        else:
            return "{}p coin".format(int(self.original_value * 100))

class One_Pound(Coin):
    def __init__(self):
        data = {
            "original_value": 1.00,
            "clean_color": "gold",
            "rusy_color": "greenish",
            "num_edges": 1,
            "diameter": 22.50,
            "thickness": 3.15,
            "mass": 9.50
        }
        super().__init__(**data)

class Two_Pound(Coin):
    def __init__(self):
        data = {
            "original_value": 2.00,
            "clean_color": "gold",
            "rusy_color": "greenish",
            "num_edges": 1,
            "diameter": 28.40,
            "thickness": 2.50,
            "mass": 12.00
        }
        super().__init__(**data)

class One_Pence(Coin):
    def __init__(self):
        data = {
            "original_value": 0.01,
            "clean_color": "bronze",
            "rusy_color": "brownish",
            "num_edges": 1,
            "diameter": 20.30,
            "thickness": 1.52,
            "mass": 3.56
        }
        super().__init__(**data)

class Two_Pence(Coin):
    def __init__(self):
        data = {
            "original_value": 0.02,
            "clean_color": "bronze",
            "rusy_color": "brownish",
            "num_edges": 1,
            "diameter": 25.90,
            "thickness": 1.85,
            "mass": 7.12
        }
        super().__init__(**data)

class Five_Pence(Coin):
    def __init__(self):
        data = {
            "original_value": 0.05,
            "clean_color": "silver",
            "rusy_color": None,
            "num_edges": 1,
            "diameter": 18.0,
            "thickness": 1.77,
            "mass": 3.25
        }
        super().__init__(**data)

        def rust(self):
            self.color = self.clean_color
        
        def clean(self):
            self.color = self.clean_color

class Ten_Pence(Coin):
    def __init__(self):
        data = {
            "original_value": 0.10,
            "clean_color": "silver",
            "rusy_color": None,
            "num_edges": 1,
            "diameter": 24.5,
            "thickness": 1.85,
            "mass": 6.60
        }
        super().__init__(**data)

        def rust(self):
            self.color = self.clean_color
        
        def clean(self):
            self.color = self.clean_color

class Twenty_Pence(Coin):
    def __init__(self):
        data = {
            "original_value": 0.20,
            "clean_color": "silver",
            "rusy_color": None,
            "num_edges": 7,
            "diameter": 21.4,
            "thickness": 1.70,
            "mass": 5.00
        }
        super().__init__(**data)

        def rust(self):
            self.color = self.clean_color
        
        def clean(self):
            self.color = self.clean_color

class Fifty_Pence(Coin):
    def __init__(self):
        data = {
            "original_value": 0.50,
            "clean_color": "silver",
            "rusy_color": None,
            "num_edges": 7,
            "diameter": 27.3,
            "thickness": 1.78,
            "mass": 8.00
        }
        super().__init__(**data)

        def rust(self):
            self.color = self.clean_color
        
        def clean(self):
            self.color = self.clean_color

coins = [One_Pence(), Two_Pence(), Five_Pence(), Ten_Pence(), Twenty_Pence(), Fifty_Pence(), One_Pound(), Two_Pound()]

for coin in coins:
    arguments = [coin, coin.color, coin.value, coin.diameter, coin.thickness, coin.num_edges, coin.mass]
    string = "{} - Color: {}, Value: {}, Diameter(mm): {}, Thickness(mm): {}, Number of edges: {}, Mass(g): {}".format(*arguments)
    print(string)

