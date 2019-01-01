# ask user for name
name = input('Hi, what is your name?  ').strip()

# ask user for age
age = input('What is your age?  ').strip()

# ask user for city
city = input('What city do you live in?  ').strip()

# ask user what they enjoy
joy = input('What do you enjoy to do?  ').strip()

# create output text
output = 'Hello, %s!  I see you live in %s and that you enjoy %s!' % (name, city, joy)
output2 = 'Hi people, {} is {} years old. He comes from {} and enjoys {}.'.format(name,age,city,joy)

# print output to screen
print(output)
print(output2)