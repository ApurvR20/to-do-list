
import {addList, deleteList,getList, getAllLists, getFirstListKey, nearestValidListKey} from "./Lists";
import { addTask,removeTask } from "./Tasks";

const UI = document.createElement('div');
UI.id = 'ui';
let current_list = getFirstListKey();

//topbar
const topbar = document.createElement('div');
topbar.id = 'topbar';
topbar.textContent = 'To-do';

//list pane
const list_pane = document.createElement('div');
list_pane.id = 'listPane';

const list_title = document.createElement('p');
list_title.textContent = 'Lists';
list_pane.appendChild(list_title);

const prev_lists = document.createElement('div');
prev_lists.id = 'prev_lists';
list_pane.appendChild(prev_lists);

const new_list_btn = document.createElement('button');
new_list_btn.textContent = "New List" ;
list_pane.appendChild(new_list_btn);
new_list_btn.addEventListener('click', ()=>{
    new_list_btn.style.visibility = 'collapse';
    new_list_form.style.visibility = 'visible';
    list_name.focus();
});

const new_list_form = document.createElement('form');
new_list_form.style.visibility = 'collapse';
list_pane.appendChild(new_list_form);

const list_name = document.createElement('input');
list_name.classList.add('input_field');
list_name.setAttribute('type','text');
list_name.placeholder = 'List Name';

//task pane
const task_pane = document.createElement('div');
task_pane.id = 'taskPane';
const task_pane_title = document.createElement('p');
task_pane_title.textContent = current_list;
task_pane.appendChild(task_pane_title);

const prev_tasks = document.createElement('div');
prev_tasks.id = 'task_list';
task_pane.appendChild(prev_tasks);

//function to display tasks
const display_prev_tasks = (listName) => {

    prev_tasks.replaceChildren();
    const tasks = getList(listName)['tasks'];
    current_list = listName;
    for (const task in tasks)
    {
        const task_details = document.createElement('div');
        task_details.classList.add('task_details');

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'checkbox';
        
        checkbox.addEventListener('click', ()=> {
            if(checkbox.checked){
                removeTask(getAllLists(), current_list, task);
                prev_tasks.removeChild(task_details);
            }
        })
        

        let title = document.createElement('div');
        title.id = 'task_title';
        title.textContent = `${task}`;

        //find a better name
        let first_half = document.createElement('div');
        first_half.classList.add('first_half');

        let info = document.createElement('div');
        info.classList.add('task_info');

        let dueDate = document.createElement('div');
        dueDate.textContent = `${tasks[task]['dueDate']}`;

        let priority = document.createElement('div');
        priority.textContent = `${tasks[task]['priority']}`;


        first_half.appendChild(checkbox);
        first_half.appendChild(title);
        info.appendChild(dueDate);
        info.appendChild(priority);
        task_details.appendChild(first_half);
        task_details.appendChild(info);
        prev_tasks.appendChild(task_details);
    }
}
display_prev_tasks(getFirstListKey());

//display a list on list pane
const display_list = (listName) => {

    const list = document.createElement('div');
    const list_container = document.createElement('div');
    list.textContent = listName;
    list_container.classList.add('list_container');
    list.addEventListener('click',()=>{
        current_list = listName;
        display_prev_tasks(listName);
        task_pane_title.textContent = current_list;
    });

    const delete_list_btn = document.createElement('button');
    delete_list_btn.textContent = 'X';
    delete_list_btn.addEventListener('click', (e)=>{
        
        e.preventDefault();
        const nearest_valid_key = nearestValidListKey(listName);
        if(nearest_valid_key != '')
        {
            display_prev_tasks(nearest_valid_key);
            current_list = nearest_valid_key;
        }
        else {
            prev_tasks.replaceChildren();
            task_pane_title.textContent = '';
            new_task_btn.style.visibility = 'collapse';
        }
        deleteList(listName);
        prev_lists.removeChild(list_container);
    })
    
    list_container.appendChild(list);
    list_container.appendChild(delete_list_btn)
    prev_lists.appendChild(list_container);
}

let Lists = getAllLists();
for(const listName in Lists)
{
    display_list(listName);
}

//list form
const add_list = document.createElement('button');
add_list.textContent = '+';
add_list.addEventListener('click',(e)=>{
    e.preventDefault();
    current_list = list_name.value;
    new_list_form.style.visibility = 'collapse';
    new_list_btn.style.visibility = 'visible';
    addList(list_name.value); 
    display_list(list_name.value); 
    display_prev_tasks(list_name.value);
    task_pane_title.textContent = list_name.value;
    list_name.value = '';
    new_task_btn.style.visibility = 'visible';
})

const cancel_list = document.createElement('button');
cancel_list.textContent = 'X';
cancel_list.addEventListener('click',(e)=>{
    e.preventDefault();
    new_list_form.style.visibility = 'collapse';
    new_list_btn.style.visibility = 'visible';
    list_name.value = '';
})


const list_components = [list_name,add_list,cancel_list];
list_components.forEach(e => {
    new_list_form.appendChild(e);
})

//task form
const new_task_form = document.createElement('form');
new_task_form.id = 'ntf';
new_task_form.style.visibility = 'collapse';
task_pane.appendChild(new_task_form);


const task_title = document.createElement('input');
task_title.classList.add('input_field');
task_title.id = 'task_title';
task_title.placeholder = 'Enter title here';

const new_task_btn = document.createElement('button');
new_task_btn.textContent = 'New Task';
task_pane.appendChild(new_task_btn);
new_task_btn.addEventListener('click',(e)=>{
    e.preventDefault();
    new_task_form.style.visibility = 'visible';
    new_task_btn.style.visibility = 'collapse';
    task_title.focus();
})

const task_priority = document.createElement('select');
task_priority.id = 'priority';
task_priority.setAttribute('for','priority');
task_priority.classList.add('input_field');
['Low','Medium','High'].forEach(e => {
    const option = document.createElement('option');
    option.value = e;
    option.textContent = e;
    task_priority.appendChild(option);
})

const date_input = document.createElement('input');
date_input.classList.add('input_field');
date_input.type = 'date';
date_input.id = 'date';

const add_task_btn = document.createElement('button');
add_task_btn.textContent = 'Add';
add_task_btn.addEventListener('click',(e)=>{

    e.preventDefault();
    
    if(task_title != '' && date_input.value != '')
    {
        
        new_task_btn.style.visibility = 'visible';
        new_task_form.style.visibility = 'collapse';
        /* add fucntion that adds it to storage */
        const listData = getAllLists();   
        addTask(listData, current_list, task_title.value, date_input.value, task_priority.value);
        task_title.value = '';
        date_input.value = '';
        task_priority.value = 'Low';
        display_prev_tasks(current_list);
    }

});

const cancel_task = document.createElement('button');
cancel_task.textContent = 'Cancel';
cancel_task.type = 'reset';
cancel_task.addEventListener('click', (e)=>{
    e.preventDefault();
    new_task_btn.style.visibility = 'visible';
    new_task_form.style.visibility = 'collapse';
    task_title.value = '';
})

const arr = [task_title,task_priority,date_input,add_task_btn, cancel_task]

arr.forEach(e => {
    new_task_form.appendChild(e);
})

UI.appendChild(topbar);
UI.appendChild(list_pane);
UI.appendChild(task_pane);

export default UI;