# tuples are immutable types, like strings

# structure:  comma separated list; in practice they are wrapped in parentheses to make it more clear what you're doing

# they are iterable, so we can select indexes and slices

our_tuple = 1,2,3,'a','b','c'

print(type(our_tuple))

print(our_tuple[3])
print(our_tuple[3:len(our_tuple)])

# immutable means they cannot be changed after they are created.  Just like you can't change a letter in a word without having to recreate the whole word

# convert other data types to tuples:

list1 = ['a', 'b', 1]
list1 = tuple(list1)

print(list1)

# tuples support multiple assignment from other data types:

a,b,c = 1,2,3
print(a)
print(b)
print(c)

a,b,c = [6,7,8]
print(a)
print(b)
print(c)

a,b,c = "369"
print(a)
print(b)
print(c)
