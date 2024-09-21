let display = document.getElementById('result');
function appendValue(value){
    if(display.value === "0" && value !== "."){
        display.value = value;
    }
    else{
        display.value += value;
    }
}

function clearDisplay(){
    display.value = "0";
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
    if(display.value === ""){
        display.value = "0";
    }
}

function calculate(){
    try{
        display.value = eval(display.value.replace('*' , '*').replace('/' , '/'));

    }
    catch(e){
        display.value = 'error';
    }
}