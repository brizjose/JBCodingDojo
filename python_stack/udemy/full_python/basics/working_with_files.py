# create a file in a folder

# the w mode overrides content, if any

myfile = open("folder/friends.txt", "w")

# write content into the file

myfile.write("Mike")

myfile.write("\nDrago")

# close the file so we can open it and see the contents
myfile.close()

# the apend mode is used to write new content without overriding existing

myfile = open("folder/friends.txt", "a")

myfile.write("\nTammy")

myfile.close()

