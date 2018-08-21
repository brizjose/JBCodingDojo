# class MathDojo(object):
#     def __init__(self):
#         self.output = 0 
#     def add(self, *nums):
#         self.output += sum(nums)
#         return self
#     def subtract(self, *nums):
#         self.output -= sum(nums)
#         return self
#     def result(self):
#         print self.output

# MathDojo().add(2).add(2,5).subtract(3,2).result()

class MathDojov2(object):
    def __init__(self):
        self.output = 0
    def add(self, *nums):
        arr = list(nums)
        for item in arr:
            if type(item) == int:
                self.output += item
            else:
                self.output += sum(item)
        return self
    def subtract(self, *nums):
        arr = list(nums)
        for item in arr:
            if type(item) == int:
                self.output -= item
            else:
                self.output -= sum(item)
        return self
    def result(self):
        print self.output
    
MathDojov2().add([1],3,4).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract(2, (2,3), [1.1, 2.3]).result()


