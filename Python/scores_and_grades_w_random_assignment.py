import random
grade = random.randint(60,100)
# print grade
output = ""
output = "Score: "+str(grade)

grade_grid = {
    xrange(60,69) : "D",
    xrange(70,79) : "C",
    xrange(80,89) : "B",
    xrange(90,100) : "A"
}

letter = ""
for grade in grade_grid:
    print grade
    if grade in grade_grid:
        letter = grade_grid[grade]
        print letter

print output
