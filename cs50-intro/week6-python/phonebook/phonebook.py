import csv

with open("phonebook.csv", "a", newline="") as file:
    name = input("Name: ")
    number = input("Number: ")

    writer = csv.writer(file)
    writer.writerow([name, number])
