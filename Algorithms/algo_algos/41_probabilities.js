function weightedRandom(){
    var weights = [0.1, 0.15, 0.2, 0.25, 0.3];
    var list = ['volcano', 'tsunami', 'earthquake', 'blizzard', 'meteor'];
    var max = 0;
    var count = 0;
    for(var i = 0; i < weights.length; i++){
        if(weights[i] > max){
            max = weights[i];
            count++;
        }
            }
    console.log(list[count-1]);
}
weightedRandom();