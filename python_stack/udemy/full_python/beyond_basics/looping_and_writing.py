temperatures = [10, -20, -289, 100]

def c_to_f(c):
    if c < -273.15:
        return "That temperature makes no sense!"
    else:
        f = c * 9/5 + 32
        with open("temperatures.txt", "a") as temps:
            temps.write(str(f) + "\n")
        return f

for t in temperatures:
    print(c_to_f(t))

