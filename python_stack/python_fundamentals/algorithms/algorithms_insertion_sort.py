def insertion(arr):
    for i in range(0,len(arr)):
        # print "i loop :",arr[i]
        num = arr[i]
        for j in range(i-1,-1,-1):
            # print "j loop :",arr[j]
            ber = arr[j]
            if num < ber:
                arr[i] = arr[j]
                arr[j] = num
        print arr
insertion([3,2,1,0])


