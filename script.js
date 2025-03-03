//Init an empty array called tasks
let tasks = []

//Add an event listener to the "Add Task button" that calls a function
document.getElementById('addTaskBtn').addEventListener('click', function (){
    //Get the value of the input box and store it in the variable called taskInput
    let taskInput = document.getElementById('taskInput').value

    //Check if taskInput has something in it
    if(taskInput){
        //add new string to task array
        tasks.push(taskInput)

        //clear input field after adding the task
        document.getElementById('taskInput').value = ''

        //call function to update task display
        displayTasks()
    }
})

taskInput.addEventListener("keydown", (event) => {
        //Get the value of the input box and store it in the variable called taskInput
        let taskInput = document.getElementById('taskInput').value

        if (event.key === "Enter"){
            //Check if taskInput has something in it
            if(taskInput){
                //add new string to task array
                tasks.push(taskInput)

                //clear input field after adding the task
                document.getElementById('taskInput').value = ''

                //call function to update task display
                displayTasks()
            }
        }
  });
  

//function to display tasks in the list
function displayTasks() {
    //select the unordered list in the html
    let taskList = document.getElementById('taskList')

    //clear existing task list before updating it
    taskList.innerHTML = ''

    //loop through each task in the array and create a list item
    tasks.forEach((task, index)=> {
        //create a new <li> element for each task
        let li = document.createElement('li')

        //add css for styling
        li.classList.add(
            'list-group-item',
            'd-flex',
            'justify-content-between',
            'align-items-center'
        )
        
    li.innerHTML = `${task} <button class="btn btn-success btn-sm" onclick="removeTask(${index})"> √ </button>`

    //append new task onto task list
    taskList.appendChild(li)
    })
}

//function to remove task
function removeTask(index){
    //remove task at given index
    tasks.splice(index, 1)
    //call function to display tasks
    displayTasks()
}

//event listener for clear all function
document.getElementById('clearTaskBtn').addEventListener('click', function (){
    //empty tasks array to remove all tasks
    tasks = []
    //call function to display tasks
    displayTasks()
})

function taskCounter(count){
    
}