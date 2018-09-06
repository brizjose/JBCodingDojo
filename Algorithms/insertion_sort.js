arr = ['mike','baby','samuel','parachute']

function insertionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var value = arr[i]
        for (var j = i -1; j > -1 && arr[j] > value; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = value
    }
    console.log(arr)
}

insertionSort(arr);