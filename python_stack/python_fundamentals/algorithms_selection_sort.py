def selection_sort(arr):
    new_arr = []
    min = arr[0]
    for i in range(0,len(arr)):
        print len(arr)
        if arr[i]<min:
            min = arr[i]
    new_arr.append(min)
    print new_arr
selection_sort([6,4,2,1])
