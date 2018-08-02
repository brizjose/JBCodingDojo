#Draw Stars Pt.1

def draw_stars(arr):
    for i in arr:
        print "*"*i
draw_stars([4, 6, 1, 3, 5, 7, 25])

#Part 2

def draw_any(arr):
    for i in arr:
        if type(i) == int:
            print i * "*"
        elif type(i) == str:
            print len(i) * i.lower()[0]

draw_any([4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"])        