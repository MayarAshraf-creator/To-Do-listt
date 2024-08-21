const inputButton = document.getElementById('taskinput');
const taskadd = document.getElementById('addbtn');
const tasklist = document.getElementById('tasklist'); 
const taskdelete = document.getElementById('detbtn');


window.onload =function(){displayDate()}

function addbtn(){
    const task =taskinput.value.trim();
    if (task) { 
        createTaskelement(task);

        taskinput.value = '';
       
   }else
{
    alert ('please enter a task')}
    
}

taskadd.addEventListener('click',addbtn);

function createTaskelement(task){
    const listitem =document.createElement('li')

    listitem.textContent =task;
   

    tasklist.appendChild(listitem);
}

taskdelete.addEventListener('click',(e) => {
    while (tasklist.hasChildNodes()) {
        tasklist.removeChild(tasklist.firstChild);
      }
} )

