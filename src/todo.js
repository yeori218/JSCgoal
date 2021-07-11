const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");
const TODO_KEY = "todos";
let toDos = [];

function saveToDos(){
    localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

function deleteTodo(e){
    const li = e.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const btn = document.createElement("button");
    btn.innerText = "❌";
    btn.addEventListener("click", deleteTodo);
    li.appendChild(btn);
    li.appendChild(span);
    toDoList.appendChild(li);
}

function handleToDo(e){
    e.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDo);

const savedToDos = localStorage.getItem(TODO_KEY);
if(savedToDos !== null){
    const parsedToDo = JSON.parse(savedToDos);
    toDos = parsedToDo;
    parsedToDo.forEach(paintToDo);
}