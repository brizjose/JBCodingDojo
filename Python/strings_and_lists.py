words = "It's thanksgiving day. It's my birthday,too!"
print words.find("day")
print words.replace("day", "month")

x = [2,54,-2,7,12,98]
print max(x)
print min(x)

x = ["hello",2,54,-2,7,12,98,"world"]
print x[0]
print x[-1]
y = [x[0], x[-1]]
print y

items = [19,2,54,-2,7,12,98,32,10,-3,6]
items.sort()
print items
first_half = items[:len(items)/2]
second_half = items[len(items)/2:]
print first_half
print second_half
second_half.insert(0,first_half)
print second_half