class MathDojo(object):
    def __init__(self):
        self.result = 0
    def show_list(self):
        print self.__dict__
        print len(self.list)
    def add(self, *numbers):
        self.list = list(numbers)
        for i in range(len(self.list)):
            self.result += self.list[i]
        return self
    def subtract(self, *numbers):
        self.list = list(numbers)
        for i in range(len(self.list)):
            self.result -= self.list[i]
            print self.result
        return self
    def show_result(self):
        print self.result
        return self

md = MathDojo()

md.subtract(100).add(200).add(2).add(2).show_result()

