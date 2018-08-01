class MathDojo(object):
    def __init__(self):
        self.output = 0

    def add(self, *numbers):
        self.list = list(numbers)
        for item in self.list:
            if type(item) == int:
                self.output += item
            else:
                self.output += sum(item)           
        return self

    def subtract(self, *numbers):
        self.list = list(numbers)
        for item in self.list:
            if type(item) == int:
                self.output -= item
            else:
                self.output -= sum(item)           
        return self

    def result(self):
        print self.output

md = MathDojo()

md.add([1],3,4).add([3,5,7,8], [2,4.3,1.25]).subtract(2,[2,3],[1.1,2.3]).result()

