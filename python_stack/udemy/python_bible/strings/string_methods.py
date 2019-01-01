# string methods follow the string you want to act on

# strings are immutable data types, so any method ran on them is view only

"hello".count("e")

text = 'hello world'
counter = text.count('e')

upcase = text.upper()

lowcase = text.lower()

capital = text.capitalize()

title = text.title()

print(counter, upcase, lowcase, capital, title)

#check if all is lowercase
text.islower()
#check if is uppercase
text.isupper()
#check if title case
text.istitle()
# if all is letters, if spaces it returns false
text.isalpha()
# if contains only numbers
text.isdigit()
# if contains only alphanumeric characters
text.isalnum()

# search for pieces of text

greeting = "happy birthday"

ind = greeting.index("birthday")
print(ind)
# the return is the index where the string "birthday" starts

fin = greeting.find("i")
print(fin)

# difference between find() and index() is that find() returns -1 if not found and index() throws an error

# remove certain characters or whitespaces with strip()

way = "  baby I love your way       "
yaw = way.strip()
print(yaw)

y = "00000happy birthday0000"
z = y.strip("0")
print(z)

# clean only left or right hand side:
z = y.lstrip("0")
print(z)
z = y.rstrip("0")
print(z)

#join
a = "ready"
b = "set"
c = "go"
d = "!"
separator = "-"
e = separator.join([a,b,c]) + d
print(e)