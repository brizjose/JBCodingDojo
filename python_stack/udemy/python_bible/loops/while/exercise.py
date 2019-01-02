from random import choice

questions = ["Why is the sky blue? ", "Why are trees tall? ", "Where are the dinosaurs? "]
question = choice(questions)
answer = input(question).strip().lower()

end = "just because"

while answer != end:
    answer = input("But why? ").strip().lower()

print("Oh... okay")
