table = [1,2,3,4,5,6,7,8,9,10,11,12]
row = "x "
for item in table:
    row += '{} '.format(item)
print row

for i in range (1,13):
    row = [item*i for item in range (1, len(table)+1)]
    formater = ""
    for item in row:
        formater += "{} ".format(item)
    print formater