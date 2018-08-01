class MathDojo(object):
    def __init__(self):
        self.output = 0

    def show_list(self):
        print self.__dict__
        print len(self.list)

    def add(self, *numbers):
        self.list = list(numbers)
        for i in range(len(self.list)):
            self.output += self.list[i]
        return self

    def subtract(self, *numbers):
        self.list = list(numbers)
        for i in range(len(self.list)):
            self.output -= self.list[i]
        return self

    def result(self):
        print self.output
        return self

md = MathDojo()

md.add(2).add(2,5).subtract(3,2).result()

