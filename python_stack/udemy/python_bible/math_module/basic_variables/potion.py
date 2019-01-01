import random

health = 50

difficulty = 1

boost = int(random.randint(25,50) / difficulty)

health = health + boost

print(health)

