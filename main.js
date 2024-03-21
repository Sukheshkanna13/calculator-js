
const display = document.getElementById("display");
function appendToDisplay(input){
  display.value += input;
}
function clearDisplay(){
  display.value = "";
}
function calculate(){
  try{
    display.value = eval(display.value);
  }
  catch(error){
    display.value = "Error";
  }
}
function percentage(){
  display.value = display.value/100;
}
function negative(){
  display.value = -(display.value);
}