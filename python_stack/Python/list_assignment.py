a = ['magical unicorns',19,'hello',98.98,'world']
def function_alchemy(a):
    words = []
    nums = []
    for i in a:
        if type(i) == str:
            words.append(i)
        if type(i) != str and type(i) != bool:
            nums.append(i)
    style = type(a[0])
    if all(type(i)==int for i in a):
        print "The list you entered is of integer type."
    elif all(type(i)==str for i in a):
        print "The list you entered is of string type"
    else:
        print "The list you entered is of mixed type."
    if words != []:
        print "String: "+ " ".join(words)    
    if nums != []:
        print "Sum:", sum(nums)
    
            
function_alchemy(a)
