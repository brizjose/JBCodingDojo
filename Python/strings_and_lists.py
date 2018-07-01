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
half_1 = slice(0,len(items)/2)
half_2 = slice(len(items)/2,len(items))
first_half = items[half_1]
second_half = items[half_2]
print(first_half)
print(second_half)
second_half.insert(0,first_half)
print second_half
