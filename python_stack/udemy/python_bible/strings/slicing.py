string = 'ABCDEFG123456'

this = string[1]

print(this)

# slice

# variable[start:end:step]

slice1 = string[2:6:2]
slice2 = string[2:6:1]

print(slice1)
print(slice2)

slice3 = string[:4]
slice4 = string[5:]
slice5 = string[5::2]

print(slice3)
print(slice4)
print(slice5)

# reverse with slice
slice6 = string[::-1]
slice7 = string[:6:-1]

print(slice6)
print(slice7)
