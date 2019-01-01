films = {
    "The Magicians": [3,5],
    "Homecoming": [18,5],
    "Sabrina": [15,5],
    "The Others": [12,5]
}

movies = list(films.keys())

def welcome():
    print("Here are our movies: %s " % movies)
    movie = input("What movie would you like to watch?  ").strip().title()
    selection = check_movie(movie)
    return selection

def check_movie(movie):
    if movie in films:
        return(True, movie)
    else:
        print("We don't have that film.")
        return(False, movie)

def check_age(age, movie):
    if age >= films[movie][0]:
        print("Appropriate movie for your age!")
        return(True, movie)
    else:
        print("This is not a movie that's appropriate for your age")
        return(False, movie)

def check_tickets(movie):
    if films[movie][1] > 0:
        print("Excellent, have %s tickets left, enjoy the movie!" % films[movie][1])
        films[movie][1] = films[movie][1] - 1
        return(True, movie)
    else:
        print("Sorry, that one sold out!")
        return(False, movie)

while True:
    selection = welcome()
    if selection[0]:
        age = int(input("What is your age?  ").strip())
        appropriate = check_age(age, selection[1])
        if appropriate[0]:
            availability = check_tickets(selection[1])
    else:
        print("Good bye!")
