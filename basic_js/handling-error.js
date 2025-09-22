// Controls flow and error handling


// block statemaent
var x = 1;
{
    // var x outside is the same scope as the var x statement within the block
    var x = 2;
}
console.log(x);
// Exception handling statements
/*
throw "Error2";
throw 42
throw true
*/
try{
    var a = 2
    if (a != 3){
        throw {
            toString(){
                return "I'm an object!";
            }
        }
    }
    else{
        console.log("...")
    }

}
catch(e){
    console.log(e)
}
finally{
    console.log("Don't care if error happening!")
}
console.log("Continue programs!")


