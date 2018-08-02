class Call(object):
    def __init__(self, id, name, number, time, reason):
        self.id = id
        self.name = name
        self.number = number
        self.time = time
        self.reason = reason
    def display(self):
        print self.__dict__

call1 = Call(1, "Bob", "786-590-2234", "1:15", "broken leg")
call2 = Call(2, "Debbie", "520-624-8857", "1:16", "stolen car")
call3 = Call(3, "Chuck", "504-333-5026", "1:19", "lost cat")

call_list = []

call_list.append(call1)
call_list.append(call2)
call_list.append(call3)

for i, call in range(len(call_list)):
    print call[i]