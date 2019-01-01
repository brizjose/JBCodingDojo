# open a file
# open is a built in python method that creates a python file object

myfile = open('sample.txt')
print(type(myfile))
#if you want to see methods available for a python file object:
dir(myfile)

# read the file
# read is a method that converts the file conent to string, so we are storing a string in variable content

content = myfile.read()
print("file content:\n", content)

# release computre resources

myfile.close()

# convert content to list
# the content would originally be text divided by \n characters

mylist = content.splitlines()
print(mylist)