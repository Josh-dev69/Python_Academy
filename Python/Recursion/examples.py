#!/usr/bin/python3
"""
    Recursion Examples
""" 
def openRussianDoll(doll):
    if doll == 1:
        print("All dolls are opened")
    else:
        openRussianDoll(doll - 1)
        print(doll)

openRussianDoll(5)

def firstMethod():
    secondMethod()
    print("I am the first Method")

def secondMethod():
    thirdMethod()
    print("I am the Second Method")

def thirdMethod():
    fourthMethod()
    print("I am the Third Method")

def fourthMethod():
    print("I am the Last Method")

firstMethod()