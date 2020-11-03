#!/usr/bin/python3

import cgi
f = cgi.FieldStorage()
num1 = f.getfirst("num1", "0")
num2 = f.getfirst("num2", "0")
try:
    result = int(num1) + int(num2)
except:
    result = 0

print("")
print(result)
