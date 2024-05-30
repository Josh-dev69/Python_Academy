Recursion is a way of solving a problem by having function call itself. it is a method of solving a problem where the solution depends on the solution of a similar instance.
 - Performing the same operations multiple times with different inputs
 - Base condition is needed to stop recursion, otherwise infinite loop will occur.

Basic Syntax of a recursive function
def functionName(parameters):
    if exit from condition is satisfied:
        return (some value)
    else:
        functionName(modified parameters)