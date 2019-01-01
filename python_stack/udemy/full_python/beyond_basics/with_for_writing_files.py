# with is the preferred method for writing files instead of the traditional one

# traditional

myfile = open("file.txt", "w")
myfile.write("Hello again!")
myfile.close()

# with

with open("file2.txt", "w") as myfile2:
    myfile2.write("Hi there!")

    # no need to close