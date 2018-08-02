import datetime

class Call(object):
    def __init__(self, id, name, number, time, reason):
        self.id = id
        self.name = name
        self.number = number
        self.time = time
        self.reason = reason
    def display(self):
        print self.__dict__

call1 = Call(1, "Bob", "786-590-2234", datetime.datetime(2018,8,1,1,22), "broken leg")
call2 = Call(2, "Debbie", "520-624-8857", datetime.datetime(2018,8,1,1,25), "stolen car")
call3 = Call(3, "Chuck", "504-333-5026", datetime.datetime(2018,8,1,1,27), "lost cat")

call_list = []

call_list.append(call1)
call_list.append(call2)
call_list.append(call3)


class CallCenter(object):
    def __init__(self, call_list):
        self.calls = call_list
        #print type(self.calls)
        self.queue = len(self.calls)
        #print self.queue
    def info(self):
        print "Queue is {} calls long".format(self.queue)
        print "Call list details:"
        #print self.calls
        for i, call in enumerate(self.calls):
            print "Call ID: {} Name: {} Number: {} Reason: {}".format(call.id, call.name, call.number, call.reason)
        return self
    def add(self, new_call):
        self.calls.append(new_call)
        self.queue = len(self.calls)
        return self
    def delete(self):
        self.calls.pop(0)
        self.queue = len(self.calls)
        return self
    def delete_by_phone_number(self, phone_number):
        pass


cc1 = CallCenter(call_list)

call4 = Call(4, "Pedro", "305-888-3300", datetime.datetime(2018,8,1,1,31), "insomnia")
call5 = Call(5, "Kiki", "713-220-3789", datetime.datetime(2018,8,1,1,28), "internet challenge")

cc1.info().add(call4).info().delete().add(call5).info().delete().info()