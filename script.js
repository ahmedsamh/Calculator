function Append(val){
    document.getElementById("number").value +=val;
}
function Clear(){
    document.getElementById("number").value ="";
}
function erase(){
    var length=document.getElementById("number").value.length;
    document.getElementById("number").value = document.getElementById("number").value.substring(0,length-1);
}
function result(z){
    if (document.getElementById("number").value=="/" || document.getElementById("number").value=="*" || document.getElementById("number").value=="%" || document.getElementById("number").value=="-" || document.getElementById("number").value=="+" ){
        Clear();
    }
    var result = eval(document.getElementById("number").value);
    Clear();
    document.getElementById("number").value += result;
}