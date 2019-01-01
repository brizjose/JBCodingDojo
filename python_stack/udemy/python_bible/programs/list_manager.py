known_users = ['Alice','Bob','Claire','Emma','Fred','Georgie','Harry']

def check_user(name):
    if name in known_users:
        print("User recognized")
        return (True, name)
    else:
        print("User not recognized")
        return (False, name)

def remove_req(name):
    req = input("Would you like to be removed from the list? (Y/N)  ").strip().upper()
    if req == "Y":
        known_users.remove(name)
        message = "OK, you have been removed."
        print(message)
        return (True, name)
    else:
        message = "OK, you're still on the list."
        print(message)
        return (False, name)

def add_req(name):
    req = input("Would you like to be added to the list? (Y/N)  ").strip().upper()
    if req == "Y":
        known_users.append(name)
        message = "OK, you have been added."
        print(message)
        return(True, name)
    else:
        message = "OK, goodbye!"
        print(message)
        return (False, name)

while True:
    print("Hi! My name is Travis")
    name = input("What is your name?  ").strip().capitalize()
    user = check_user(name)
    if user[0]:   
        print("Hello {}".format(user[1]))
        req = remove_req(name)
    else:
        print("I haven't met you yet, {}!".format(user[1]))
        req = add_req(name)


