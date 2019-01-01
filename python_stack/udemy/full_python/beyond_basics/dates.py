# this is the library used to work with dates and times
from datetime import datetime


# example of calculation of time since...
delta = datetime.now() - datetime(1900, 12, 31)


# return number of days between dates
print(delta.days)


# display today's date
today = datetime.now()
print(today.date())


# methods available
print(dir(datetime))

# create a datetime object:
then = datetime(1950, 12,31, 12, 1, 1, 8908)
print(then)

# create a datetime object from string:
new_date = datetime.strptime("2018-10-08", "%Y-%m-%d").date()
print(new_date)

# another example, notice we mimic the structure of the numeric data provided with the format indicated in second param
new_datetime = datetime.strptime("2018/10/08 13:04", "%Y/%m/%d %H:%M")
print(new_datetime)

# convert datetime object into a string
# use strftime = string from time
my_year = new_datetime.strftime("%Y")
my_date = new_datetime.strftime("%m/%Y")
print(my_year)
print(my_date)
print(new_date.year)
print(new_date.month)
print(new_date.day)