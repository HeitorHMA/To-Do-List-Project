let userTask = document.getElementById("userTask")
let myTasks = document.getElementById("myTasks")

function addTask(){
    let li = document.createElement("li");
    li.innerHTML = userTask.value;
    myTasks.appendChild(li);
    let span = document.createElement("span")
    span.innerHTML = "\u00d7"
    li.appendChild(span)
}
document.getElementById('li').onclick = function() {
    li.classList.toggle('active');
}
    
