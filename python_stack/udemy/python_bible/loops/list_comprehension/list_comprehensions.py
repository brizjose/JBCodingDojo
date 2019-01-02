#  list comprehensions combine for loops, if statements, and variables to create lists

# syntax:

# [[element] [for [element] in [list]] [optional condition]] 

# create a list of all even numbers from 0 t0 100

# element = each number; list = range(1,101); condition = if statement

even_numbers = [x for x in range(1,101) if x % 2 == 0]

print(even_numbers)

# create lists out of a list of words

sentence = "The quick brown fox jumps over the lazy dog"
words = sentence.split()

answer = [[w.upper(), w.lower(), len(w)] for w in words]

print(answer)

# create lists out of a list of words with a condition

answer = [[w.upper(), w.lower(), len(w)] for w in words if len(w) == 5]

print(answer)

