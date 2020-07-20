import random as r
def midle(low, high):
  return r.randint(low,high)
ans = input("Enter the y/Y if you would play or n/N  ")
print("\n Guess the number Between 1 to 100")
response= 'N'
low = 1
high = 100
if(ans == 'Y' or ans == 'y'):
  while(response == 'N' or response == 'n'):
    mid = midle(low, high)
    print("\n Your number is {}".format(mid))
    response = input("\nEnter Y/y if is it your no. otherwise N/n ")
    if(response == 'N' or response == 'n'):
      a=input("\nEnter Y\y if your no is bigger Otherwise N/n")
      if(a == 'Y' or a == 'y'):
        low = mid + 1
      else:
        high = mid - 1
print("\nThank You")
