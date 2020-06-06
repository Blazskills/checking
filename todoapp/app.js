// Default UI Vars

const form = document.querySelector('#task-form')
const taskInput = document.querySelector('#task')
const filter = document.querySelector('#filter')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const btn = document.querySelector('.btn')

// Load all event Listeners

loadEventListerners();

//LOad all even Listerners

function loadEventListerners() {

  //DOM LOAD EVENT
  document.addEventListener('DOMContentLoaded', getTasks)

  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  //Clear task event
  clearBtn.addEventListener('click', clearTasks);
  // Filter task event
  filter.addEventListener('keyup', filterTasks)
}

// Get Tasks From LS

function getTasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))

  }
  tasks.forEach(function (task) {
    //If not empty, Create Li element 

    const li = document.createElement('li')

    //Add class to it
    li.className = 'collection-item';

    //create text node and append to li
    li.appendChild(document.createTextNode(task));

    //create new link element 
    const link = document.createElement('a');


    //Add class
    link.className = 'delete-item secondary-content';


    //Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';

    // Append the link to li
    li.appendChild(link);

    //Append li to ul
    taskList.appendChild(li)
  })
}


//Add Task 
function addTask(e) {
  if (taskInput.value === '') {
    alert('Please Add Task')
  }
  //If not empty, Create Li element 

  const li = document.createElement('li')

  //Add class to it
  li.className = 'collection-item';

  //create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));

  //create new link element 
  const link = document.createElement('a');


  //Add class
  link.className = 'delete-item secondary-content';


  //Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';

  // Append the link to li
  li.appendChild(link);

  //Append li to ul
  taskList.appendChild(li)

  //Store in LS
  storeTaskInLocalStorage(taskInput.value);


  //Clear Input After Collected

  taskInput.value = '';
  e.preventDefault()
}

//Store Task
function storeTaskInLocalStorage(taskl) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))

  }

  tasks.push(taskl)
  localStorage.setItem('tasks', JSON.stringify(tasks))
}


//REmove task one by one
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are You Sure ?')) {
      e.target.parentElement.parentElement.remove();

      //Remove from LS
      removeTaskFormLocalStorage(e.target.parentElement.parentElement)
    }

  }

}

function removeTaskFormLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))

  }
  tasks.forEach(function(task, index){
    if(taskItem.textContent === task){
      tasks.splice(index, 1)

    }
  })
  localStorage.setItem('tasks', JSON.stringify(tasks))
}
//Remove all task at once . Clear all task
function clearTasks() {
  // taskList.innerHTML = ''

  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  //Clear from LS
  clearTaskFromStorage()

}
//Clear Task from LS
function clearTaskFromStorage(){
localStorage.clear()
}

function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach
    (function (task) {
      const item = task.firstChild.textContent;
      if (item.toLowerCase().indexOf(text) !== -1) {
        task.style.display = 'block';

      } else {
        task.style.display = 'none';
      }


    });
}