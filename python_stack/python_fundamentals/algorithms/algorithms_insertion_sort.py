def insertion(arr):
    for i in range(0,len(arr)):
        num = arr[i]
        print num
        for j in range(i-1,len(arr),-1):
            ber = arr[j]
            print ber
            if arr[j]>num:
                arr[j+1]=arr[j]
            else:
                arr[j+1]=num
            print arr
insertion([65,54,43,23])


