    
// JS Module  -- 6//16/18

// 1 
function a(){
    return 35;    
}
console.log(a());

// 2
function a(){
    return 4;
}
console.log(a()+a());

// 3
function a(b){
    return b;
}
console.log(a(2)+a(4));

// 4
function a(b){
    return b*4;
    console.log(b);
}
console.log(a(10));

// 5
function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));

// 6
function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );

// 7
function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);

// 8

function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();

// 9
function a(b,c){
    for(var i=b; i<c; i++) {
        console.log(i);
    }
    return b*c;
}
a(0,10);
console.log(a(0,10));

// 10
function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(j);
        }
        console.log(i);
    }
}
a();

// 11
function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
    console.log(j,i);
    }
} 
a();


// 12 
z = 10;
function a(){
    z = 15;
    console.log(z);
}
console.log(z);

// 13
z = 10;
function a(){
        z = 15;
        console.log(z);
}
a();
console.log(z);

// 14
z = 10;
function a(){
    z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
    