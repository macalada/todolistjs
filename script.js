var input = document.getElementById("userInput");
var button = document.getElementById("enterButton");
var ul = document.querySelector('ul');

function checkInput(){
    return input.value.length;  
}
function createList(){
    var li= document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value='';
}
function addList(){
    if (checkInput() > 0){
        createList();
    }
}
function enterInput(event){
    if (checkInput() > 0 && event.keyCode===13){
        createList();
    }
    
}

button.addEventListener("click", addList);
input.addEventListener("keypress", enterInput);
