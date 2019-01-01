correct_pw = "python123"
first_name = input("Please enter name: ")
last_name = input("Please enter last name: ")

password = input("Enter password: ")

while password != correct_pw:
    password = input("Please try again: ")

message = "Hello %s %s, you are logged in!" % (first_name, last_name)

print(message)

