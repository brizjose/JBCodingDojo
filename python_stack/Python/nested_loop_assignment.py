word_list = ['hello','world','my','name','is','Anna']

def cherry_pick(word_list, which):
    new_list = []
    for word in word_list:
        for char in word:
            if char.count('o') > 0:
                new_list.append(word)
    print new_list    
    
cherry_pick(word_list,'o')


