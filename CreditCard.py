#loop until the input be all numbers
valid = False
while not valid:

    cardNumber = input("Number: ")   
    if cardNumber.isnumeric():
        valid = True


    
sum_of_digits = 0
for i, digit in enumerate(reversed(cardNumber)):
    if i % 2 == 0:
        sum_of_digits += int(digit)
    else:
        double_digit = int(digit) * 2
        sum_of_digits += (double_digit // 10) + (double_digit % 10)

if sum_of_digits % 10 == 0:
    checkCard = str(cardNumber)
    if len(checkCard) == 15 and checkCard.startswith('34' or '37'):
        print('AMEX')
    elif len(checkCard) == 16 and checkCard.startswith('51' or '55'):
        print('MASTERCARD')
    elif len(checkCard) == 13 or 16 and checkCard.startswith('4'):
        print('VISA')
    else:
        print('INVALID')
else:
    print('INVALID')