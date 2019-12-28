// cannot use 'form' because already used in greeting.js

const toDoForm = document.querySelector(".js-toDoForm"); 
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
const toDos = [];

// you cannot save object to localStorage
// can only save string: JSON.stringify
function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
} 

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    const span = document.createElement("span");
    span.innerText = text;
    const newId = toDos.length + 1;

    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value ="";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            console.log(toDo.text);
        })
    } 
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();