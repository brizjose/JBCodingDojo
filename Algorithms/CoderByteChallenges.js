//Longest word:  return the longest word from a string

function LongestWord(e){
	var count = 0;
	var max = 0;
	var ref = "";
	for (var i = 0; i < e.length; i++){
		console.log(e.charCodeAt(i));	
		if (e.charCodeAt(i) >= 65 && e.charCodeAt(i) <= 122){
			count++;
			if (count > max){
				max = count;
				ref = i;
			}	
		}
		else{
			count = 0;
		}
		document.getElementById('result1').innerHTML = max;
		document.getElementById('result2').innerHTML = ref;			
	}
}	
LongestWord("ain't chimera a real word?");

//Return the first factorial of a given number

function firstFactorial(e){
	var arr = [];
	for (var i = 1; i <= e; i++){
		arr.push(i);
	}
	document.getElementById('result1').innerHTML = arr;
	
	function multiplication(){
		var arrIn = arr;
		var multip = 1;
		for (j = 0; j < arrIn.length; j++){
			multip = multip * arr[j];
		}
		document.getElementById('result2').innerHTML = multip;
	}
	multiplication();	
}				
//firstFactorial(8);	

