def returning(p):
    return p

def printing(p):
    print(p)

hi = returning("9")

printing(returning("8") + hi)