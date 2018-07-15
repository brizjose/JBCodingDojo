def bubble_sort(arr):
    switch = 0
    count = 0
    while count <= switch:
        for i in range(0,len(arr)-1):
            if arr[i] > arr[i+1]:
                # print "switch pre = {}".format(switch)
                arr[i], arr[i+1] = arr[i+1], arr[i]
                switch += 1
                # print "switch post {}".format(switch)
        count += 1
        # print "count # {}".format(count)
    print arr
bubble_sort([6,5,4,3,2,1])
        