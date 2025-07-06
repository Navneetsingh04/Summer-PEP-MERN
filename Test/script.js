function addTask(){
    const taskList = document.getElementById("list");
    const task = document.getElementsByName("Task")[0].value;
    console.log(task);

    const list = document.createElement("li");
    list.innerHTML = `
    <span>${task}</span>
    <button class="deleteTask"> Delete</button>
    `;

    taskList.appendChild(list);
    // delete button
    list.querySelector(".deleteTask").addEventListener("click", () => {
        taskList.removeChild(list);
    });
    // erase input text
    document.getElementsByName("Task")[0].value="";
}