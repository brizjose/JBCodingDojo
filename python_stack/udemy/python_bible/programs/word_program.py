# get sentence from user
original = input("Please enter a sentence here:  ").strip().lower()

# split sentence into words
words = original.split()

# for each word, look for vowel index
def vowel_index(word):
    vowel_index = 0
    for letter in word:
        if letter not in "aeiou":
            vowel_index = vowel_index + 1
        else:
            return vowel_index

# word conversion
def convert_words(word, index):
    new_word = ""
    if index == 0:
        new_word = word + "yay"
    else:
        new_word = word[index:] + word[:index] + "ay"
    return new_word
        
# create new word array
word_arr = []

for word in words:
    i = vowel_index(word)
    w = convert_words(word, i)
    word_arr.append(w)

# stick words back together
pig_sentence = " ".join(word_arr).capitalize()

# output the final string
print(pig_sentence)
