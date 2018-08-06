def selection_sort(arr):
    min = arr[0]
    for i in range(0,len(arr)):
        for j in range(i,len(arr)):
            min = arr[i]
            if arr[j] < min:
                arr[i], arr[j] = arr[j], arr[i]
    print arr
selection_sort([6,5,4,3,2,1])
