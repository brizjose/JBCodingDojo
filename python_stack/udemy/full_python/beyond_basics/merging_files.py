from datetime import datetime

now = datetime.now()
filename = datetime.strftime(now, "%Y-%m-%d-%H-%M-%S-%f") + ".txt"
print(filename)

with open('files/file1.txt', 'r') as file1:
    f1 = file1.read()
with open('files/file2.txt', 'r') as file2:
    f2 = file2.read()
with open('files/file3.txt', 'r') as file3:
    f3 = file3.read()
with open('files/%s' % filename, 'w') as filename:
    filename.write(f1 + "\n" + f2 + "\n" + f3)

    