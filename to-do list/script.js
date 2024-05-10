const listContainer = document.getElementById("list-container");
const InputBox = document.getElementById("input-box");


function addTask(){
    if(InputBox.value==='') alert("enter a valid data !");
    else {  
        let li = document.createElement("li");
        li.innerHTML = InputBox.value;
        listContainer.appendChild(li);
    } 

    InputBox.value = "";
    saveTask();
};


function saveTask() {
    localStorage.setItem("data",listContainer.innerHTML);
};


function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();