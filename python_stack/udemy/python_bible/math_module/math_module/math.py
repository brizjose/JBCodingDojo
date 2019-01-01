import math

# more in depth number libraries are numpy and scipy

#rounding
num = 2 / 3
print(num)
print(math.floor(num))
print(math.ceil(num))

#special numbers
print(math.pi)
print(math.e)

#trigonometry
print(math.cos(0))
print(math.asin(0))
print(math.acos(0))
print(math.sin(math.pi/2))
print(math.sin(math.pi))
# to make sin of pi exactly zero:
print(math.floor(math.sin(math.pi)))
#pythagorean theorem
print(math.hypot(3,4))

#powers .. this returns float
print(math.pow(2,3))
#or .. this returns int
print(2**3)

#exponential
print(math.exp(2))

#natural log
print(math.log(math.e))
print(math.log(2/3))

#base 10 log
print(math.log10(1000))

#base 2 log
print(math.log2(3))

