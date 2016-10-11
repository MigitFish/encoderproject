
//setting it up to repeat right as typing
document.getElementById("inputArea").addEventListener("keydown",function(){
  document.getElementById("textArea").innerHTML = "<p>" + document.getElementById("inputText").value + "</p>"
});

//setting up all the buttons and their to be functions
/*function currentChange(x){
  var x = 0;
  if(x==0){
    toEcho();
  }
  else if(x==1){
    toCeaserCipher();
  }
  else if(x=2){
    toRunes();
  }
  else if(x==3){
    toHieroglyphics();
  }
}


function toEcho() {
    document.getElementById('id')
}
function toCaeserCipher() {

}
function toHieroglyphics(){

}
function toRunes(){

}
*/
