const input = document.getElementById("todo-input");
const listCont = document.getElementById("list-container");

function addTask(){
    if(input.value === ''){
        alert("First Add Some Task!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listCont.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "X";
        li.appendChild(span);
    }
    input.value = "";
    saveData();
}

listCont.addEventListener("click",function(e)
{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listCont.innerHTML);
}

function tasks(){
    listCont.innerHTML = localStorage.getItem("data");
}
tasks();