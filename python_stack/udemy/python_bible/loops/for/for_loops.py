# range creates an iterable of numbers, starting from the lower limit up to and not including the upper limit

r = range(1,4)
for i in r:
    print(i)

print('---------')

# for works with any iterable

for l in "abc":
    print(l)

print('---------')

# adding steps

for n in range(1,11,2):
    print(n)

print('---------')

# for loops with conditions

vowels = 0
consonants = 0
word = "supercalifragilisticexpialidocious is the magic word"
for i in word:
    if i.lower() in 'aeiou':
        vowels = vowels + 1
    elif i == " ":
        pass
    else:
        consonants = consonants + 1

print("There are {} vowels".format(vowels))
print("There are {} consonants".format(consonants))
