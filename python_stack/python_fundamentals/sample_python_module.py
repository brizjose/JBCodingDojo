#a module is a library of methods


class Underscore(object):
    def map(self, arr, callback):
        self.output = list(map(callback, arr))
        return self.output    
    def reduce(self, arr, callback):
        from functools import reduce
        self.output = reduce(callback, arr)
        return self.output
    def find(self, content, find_what):
        content = content
        self.output = content.find(find_what)
        return self.output
    def filter(self, arr, callback):
        self.output = list(filter(callback, arr))
        return self.output    

_ = Underscore()
solve = _.reduce([1,2,3,4], lambda x ,y: x + y)
print solve
