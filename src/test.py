vowels = ["a","e","i","o","u","A","E","I","O","U"]
s = "hello"
lst = list(s)
i = 0
j = len(s) - 1
for k in range(0,len(s)):
    if lst[i] in vowels and lst[j] in vowels:
        lst[i],lst[j] = lst[j],lst[i]
        i += 1
        j -= 1
    elif lst[i] in vowels and lst[j] not in vowels:
        j -= 1
    elif lst[i] not in vowels and lst[j]  in vowels:
        i += 1
    else:
        i = 1
        j += 1
print( "".join(lst))