word = 'supercalifragilisticexpialidocious'

penultimate = word[-2]

print(penultimate)

# slizing with index

# we want to get 'cali'
segment1 = word[word.index('cal'):word.index('fra')]
print(segment1)

# we want to get 'docious'
segment2 = word[word.index('do'):]
print(segment2)

word2 = "antidisestablishmentarianism"
answer = word2[word2.index('esta'):word2.index('aria')]
print(answer)