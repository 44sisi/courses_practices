import numpy as np
import matplotlib.pyplot as plt
import sys
import os
import shutil
import json
import fractions as frac
import csv


# Session 4 - Sequence Data Structures
# Activity 5: Create a table
print("+{}+".format("-"*58))
print("|{:^58}|".format("Worldwide Smartphone Sales (Thousands of Units)".upper()))

print("+{}+{}+{}+{}+".format("-"*16, "-"*15, "-"*12, "-"*12))
print("|{:^16}|{:^15}|{:^12}|{:^12}|".format(
    "Quarter", "Android", "iOS", "Other"))
print("+{}+{}+{}+{}+".format("-"*16, "-"*15, "-"*12, "-"*12))

print("|{:^16}|{:^15,}|{:^12,}|{:^12,}|".format("2017 Q2", 321188, 44314, 733))
print("|{:^16}|{:^15,}|{:^12,}|{:^12,}|".format("2017 Q1", 327164, 51993, 821))
print("|{:^16}|{:^15,}|{:^12,}|{:^12,}|".format("2016 Q4", 352670, 77039, 530))
print("|{:^16}|{:^15,}|{:^12,}|{:^12,}|".format("2016 Q3", 327674, 43000, 756))

print("+{}+{}+{}+{}+".format("-"*16, "-"*15, "-"*12, "-"*12))


# SESSION 8 - Increasing Program Scale
# External Modules
x = np.arange(0, 2*np.pi, 0.1)
y = np.sin(x)
plt.plot(x, y)
plt.show()


# SESSION 8 - Increasing Program Scale
# Deliverable
# (a) When a condition is met, entirely exit the program.
while True:
    message = input("enter 'exit' to exit, 'skip' to skip: ")
    if message == "exit":
        sys.exit(0)
    if message == "skip":
        break

# (b)
# Get a list of all file names in a folder.
# Then, move some of the files to another folder.
source = "Session8-source"
destination = "Session8-destination"
sourceFiles = [f for f in os.listdir(source)]
print(sourceFiles)

if len(sourceFiles) != 0:
    for file in sourceFiles:
        new_path = shutil.move(f"{source}/{file}", destination)
        print(new_path)

# (c) Convert a complex nested dictionary to a form that can be stored in a file.
dictionary = {
    "Laptop": {
        "sony": 1,
        "apple": 2,
        "asus": 5
    },
    "Camera": {
        "sony": 2,
        "samsung": 1,
        "nikon": 4
    }
}

with open("Session8.json", "w") as outfile:
    json.dump(dictionary, outfile)

with open("Session8.json", "r") as infile:
    data = json.load(infile)
print(data)
print(data["Laptop"])

# (d) Store and represent numbers as fractions, to perform fraction multiplication.
a = frac.Fraction('2.2')
b = frac.Fraction('5/4')
c = a*b
print(a, b, c)

# (e) Read from a comma-separated value file into a list.
with open("Session8.csv", "r") as infile:
    csv_reader = csv.reader(infile)
    data = list(csv_reader)
    print(data)


# Session 9 - OOP
# Programming Quesiton 3
# a) Create a class called RobotPart, which contains the following:
#       Attributes: name (string) - Also take in this value in the constructor
#       Methods: do() - Running this method will cause the text "Now Moving" to appear on screen
# b) Create three more classes Wheel, Arm and Sensor. Each of these classes are RobotParts.
#       For the sensor class only, implement a do() method, which will cause the text "Now Detecting" to appear on screen
# c) Create the class Robot. A Robot can have any number of RobotParts.
#       The constructor of the Robot class takes no parameters.
#       Implement an addPart() method, which adds new RobotParts to the robot
#       Implement a doAll() method, which will trigger the do() action on every RobotPart on the robot
#       Implement a display() method, which will display the names of all RobotParts attached to the robot, one RobotPart per line, in the order in which the parts were added by the addPart() method.
class RobotPart:
    def __init__(self, name):
        self.name = name

    def do(self):
        print("Now Moving")


class Wheel(RobotPart):
    def __init__(self, name):
        super().__init__(name)


class Arm(RobotPart):
    def __init__(self, name):
        super().__init__(name)


class Sensor(RobotPart):
    def __init__(self, name):
        super().__init__(name)

    def do(self):
        print("Now Detecting")


class Robot:
    def __init__(self):
        self.parts = []

    def addPart(self, part):
        self.parts.append(part)

    def doAll(self):
        for part in self.parts:
            part.do()

    def display(self):
        for part in self.parts:
            print(part.name)


# Session 10 - Dynamo - Programming Questions

# Q1
# The user will enter a date in the format DD-MM-YYYY.
# Use appropriate code to extract and separate the date, month (as a number) and year,
# and convert them into an appropriate data type.
# First, check to see if the month is a valid one - Only 1 to 12 is acceptable.
# Then, check to see if the date is valid for the given month -
# Remember, months like January and March have 31 days, while months like April only have 30.
# February is a bit special. It has 28 days most years, but 29 days on leap years.
# A leap year is defined as a year which is divisible by four,
# except for years that are also divisible by 100, unless also divisible by 400.
# If the input violates any of the above rules, it is invalid. Output the word invalid.
# Otherwise, if it passes all tests, then it is a valid date. Output the word valid.

date = input("Input DD-MM-YYYY: ")
day = int(date[:2])
month = int(date[3:5])
year = int(date[7:])


def checkMonth(month):
    return 1 <= month <= 12


def leapYear(year):
    if year % 4 != 0 or (year % 100 == 0 and year % 400 != 0):
        return False
    else:
        return True


def monthDays(month, year):
    if month in [1, 3, 5, 7, 8, 10, 12]:
        return 31
    elif month != 2:
        return 30
    elif leapYear(year):
        return 29
    else:
        return 28


def checkDay(day, month, year):
    return 1 <= day <= monthDays(month, year)


if checkMonth(month) and checkDay(day, month, year):
    print("valid")
else:
    print("invalid")


# session 11 - Grasshopper
# Programming Questions
class Car:
    def __init__(self, purpose, length):
        self.purpose = purpose
        self.length = length

    def calcLoad(self):
        return self.length


class Engine(Car):
    def __init__(self, power, length):
        super().__init__("engine", length)
        self.power = power

    def calcLoad(self):
        return self.length - self.power


class Train:
    def __init__(self):
        self.cars = []
        # self.length = 0

    def add(self, car):
        self.cars.append(car)
        # self.length += car.length

    def display(self):
        for car in self.cars:
            print(car.purpose)

    def calcLength(self):
        length = 0
        for car in self.cars:
            length += car.length
        return length

    def testTrain(self):
        load = 0
        for car in self.cars:
            load += car.calcLoad()
        if load <= 0:
            print("Train OK")
        else:
            print("Train Overloaded")


# Test Case for (b)
c = Car("passenger", 3)
print(c.calcLoad())  # 3
e = Engine(10, 1)
print(e.calcLoad())  # -9

# Test case for (c)
t = Train()
t.add(Engine(10, 1))
t.add(Car("passenger", 3))
t.add(Car("freight", 3))
t.testTrain()               # Train OK
t.add(Car("freight", 5))
t.testTrain()               # Train Overloaded
