def push_front(arr,val):
    arr.append(val)
    print len(arr)
    print arr
    arr[0], arr[1], arr[2], arr[3], arr[4] = arr[4], arr[0], arr[1], arr[2], arr[3]
    print arr
push_front([1,2,3,4],5)    