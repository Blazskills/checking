
// Function to trigger body background color
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

card.addEventListener('mousemove', runEvent);

function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
  heading.textContent = `Mousex: ${e.offsetX} MouseY: ${e.offsetY}`
  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY},40 )`;

}



//New Function for delete

document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    console.log('Delete Item')
    e.target.parentElement.parentElement.remove()
  }
}

//Local Storage 
localStorage.setItem('name', 'ILesanmi')
const name = localStorage.getItem('name')
console.log(name)


let check;
check = localStorage.getItem('name')
console.log(`I'm checking for ${check} in my Localstorage`)





document.querySelector('form').addEventListener('submit',
  function (e) {
    const task = document.querySelector('#task').value;
    let tasks;
    if (localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks))
    localStorage.setItem('task', task);
    alert('task saved')
    e.preventDefault()
  });

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function (task) {
  console.log(task)
});


























// let val;

// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function(script) {
//   console.log(script.getAttribute('src'));
// });

// console.log(val);