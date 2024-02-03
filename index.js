let form = document.querySelector("form")
let myTasks = document.querySelector("#myTasks")

function addTask(task){
    let li = document.createElement("li");
    li.innerHTML = `<input type = "checkbox" class="chckBox"/><span class="usrTsk">${task}</span><button class= "deletebtn">X</button>`;
    myTasks.appendChild(li);
}
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let input = document.querySelector('#userTask');
    let task = input.value;
    addTask(task);
    input.value = "";
})
    
myTasks.addEventListener('click', (event)=>{
    if(event.target.tagName === "BUTTON"){
        const listItem = event.target.parentElement;
        myTasks.removeChild(listItem)
    }
})

