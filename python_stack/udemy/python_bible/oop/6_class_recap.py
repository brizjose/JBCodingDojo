# abstract parent class
class Account:
    def __init__(self, name, balance, min_balance):
        self.name = name
        self.balance = balance
        self.min_balance = min_balance

    def deposit(self, amount):
        self.balance += amount
    
    def withdraw(self, amount):
        if self.balance - amount >= self.min_balance:
            self.balance -= amount
        else:
            print("Not enough funds")
    
    def statement(self):
        print("Account balance L{}".format(self.balance))


class Current(Account):
    def __init__(self, name, balance):
        super().__init__(name, balance, min_balance=-1000)
    
    def __str__(self):
        return "{}'s Current Account : Balance L{}".format(self.name, self.balance)

class Savings(Account):
    def __init__(self, name, balance):
        super().__init__(name, balance, min_balance=0)
    
    def __str__(self):
        return "{}'s Savings Account : Balance L{}".format(self.name, self.balance)

acct1 = Current("Jose", 500)
acct1.deposit(300)
acct1.statement()
acct1.withdraw(1000)
acct1.statement()
acct1.withdraw(1000)
acct1.statement()
print(acct1)

acct2 = Savings("Jose", 300)
print(acct2)
acct2.withdraw(500)

