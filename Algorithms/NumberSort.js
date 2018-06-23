function numSort(arr){

    if (arr.length % 2 > 0){
    arr.push(0);
    }

    var middle = arr.length/2;
    var arrR = [];
    var arrL = [];

    for (i = 0; i < arr.length; i++){
        if (i < middle){
            arrR.push(arr[i]);
        }
        else{ 
            arrL.push(arr[i]);
        }	
    }
    document.getElementById('result1').innerHTML = arrR;
    document.getElementById('result2').innerHTML = arrL;

}	
numSort([7,3,5,1,8,9,3,5,6,3,8,4,2]);
