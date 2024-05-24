let result = document.getElementById("display");

function insert(value){
  result.value = result.value + value;
}

function deletechar(){
  result.value = result.value.slice(0, -1);
}

function cleardisplay(){
  result.value = "";
}

function calculate(){
  try{
    result.value = eval(result.value);
  }
  catch(error){
    result.value = "Error"
  }
}

function key(){
  if(result.value == ""){
    result.value = "-";
  }
  else if(result.value =="-"){
    result.value = "";
  }
  else{
    result.value = result.value*-1
  }
} 