import random
score = random.randint(60,100)

grade_grid = {}
for i in range (60,69):
    grade_grid[i] = "D"
for i in range (70,79):
    grade_grid[i] = "C"
for i in range (80,89):
    grade_grid[i] = "B"
for i in range (90,100):
    grade_grid[i] = "A"

def grade_gen(grade):
    return grade_grid[grade]
    
print "Your score: {}".format(score)+"; your grade is {}".format(grade_gen(score)) 