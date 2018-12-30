# default parameter value can be set

def converter(fahr, cel=9/5):
    return (fahr -32) / cel

fahrenheit = float(input("Enter temp in Fahrenheit: "))

print(converter(fahrenheit))

# if you want to override the default value, enter a second parameter, like

print(converter(4, 3))
