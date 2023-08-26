import {setList, getList, getListKeysAll} from "./Lists";
const UI = document.createElement('div');

const topbar = document.createElement('div');
topbar.textContent = 'To-do';

//make left pane
const list_pane = document.createElement('div');
const list_title = document.createElement('p');
list_title.textContent = 'Lists';

list_pane.appendChild(list_title);

const prev_lists = document.createElement('div');
//display prev list_pane here
prev_lists.addEventListener("storage", ()=>{
    
    console.log("this works");
    prev_lists.textContent = 'him';
    prev_lists.replaceChildren();
    const Lists = [...getListKeysAll()];
    Lists.forEach((key) => {
        const list = document.createElement('div');
        list.textContent = key;
        prev_lists.appendChild(list);
    })
})

list_pane.appendChild(prev_lists);
//maybe make it div?
const new_list_btn = document.createElement('button');
new_list_btn.textContent = "New List" ; //add plus btn here

const new_list_form = document.createElement('form');
new_list_form.style.visibility = 'collapse';
const label_list_name = document.createElement('label');
const list_name = document.createElement('input');
list_name.setAttribute('type','text');
list_name.placeholder = 'List Name';
list_name.id = 'g';//make a function to generate new id and add here
label_list_name.setAttribute('for',list_name.id);


new_list_btn.addEventListener('click', ()=>{
    new_list_btn.style.visibility = 'collapse';
    new_list_form.style.visibility = 'visible';
});

const add_list = document.createElement('button');
add_list.textContent = '+';
add_list.addEventListener('click',(e)=>{
    e.preventDefault();
    new_list_form.style.visibility = 'collapse';
    new_list_btn.style.visibility = 'visible';
    //another function that adds project to storage

    const listID = setList(list_name.value); 
    console.log('hola');
    list_name.value = '';
})

const cancel_list = document.createElement('button');
cancel_list.textContent = 'X';
cancel_list.addEventListener('click',(e)=>{
    e.preventDefault();
    new_list_form.style.visibility = 'collapse';
    new_list_btn.style.visibility = 'visible';
    list_name.value = '';
})


const list_components = [label_list_name,list_name,add_list,cancel_list];
list_components.forEach(e => {
    new_list_form.appendChild(e);
})




//check if opening dialog box is ui or app_logic


list_pane.appendChild(new_list_btn);


const new_task_form = document.createElement('form');
new_list_form.style.visibility = 'collapse';

const task_title = document.createElement('label');
const input_title = document.createElement('input');
input_title.id = 'input_title';
input_title.placeholder = 'Enter title here';
task_title.setAttribute('for','input_title');

const task_priority = document.createElement('label');
const select_priority = document.createElement('select');
select_priority.id = 'priority';
task_priority.setAttribute('for','priority');
// ['Low','Medium','High'].forEach(e => {
//     const option = document.createElement('option');
//     option.value = e;
//     option.textContent = e;
//     select_priority.appendChild(option);
// })

const date_label = document.createElement('label');
date_label.setAttribute('for','date');
const date_input = document.createElement('input');
date_input.type = 'date';
date_input.id = 'date';

const add_task_btn = document.createElement('button');
add_task_btn.textContent = 'Add';
add_task_btn.addEventListener('click',()=>{
    /* add fucntion that adds it to storage */
});

const cancel_task = document.createElement('button');
cancel_task.textContent = 'Cancel';
cancel_task.type = 'reset';
cancel_task.addEventListener('click', ()=>{
    new_list_form.style.visibility = 'collapse';
    new_list_btn.style.visibility = 'visible';
})

const arr = [task_title,input_title,task_priority,select_priority,date_label,date_label,add_task_btn, cancel_task]

arr.forEach(e => {
    new_task_form.appendChild(e);
})

UI.appendChild(topbar);
UI.appendChild(list_pane);
UI.appendChild(new_list_btn);
UI.appendChild(new_list_form);

export default UI;


