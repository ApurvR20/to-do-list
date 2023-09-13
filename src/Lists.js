import { getAllData, updateStorage } from "./Storage";
let id = 0;
let Lists = getAllData();

/* Function to create Lists */
const ListFactory = () => {

    const obj = {'tasks' : {}};
    id++;
    return obj;
}


//get the list by its name
const getList = (listName) => Lists[listName];

//get All lists
const getAllLists = () => Lists;

//get key of first list 
const getFirstListKey = () => {
    for(const key in Lists)
    return key;
}

//get list of nearest valid key if listname is deleted
const nearestValidListKey = (listName) => {

    const ListKeys = Object.keys(Lists);
    const len = ListKeys.length;
    if(len == 1) return '';
    if(ListKeys[len-1] == listName) return ListKeys[len-2];
    
    let i;
    
    for(i = 0; i<len-1; i++)
    {
        if(ListKeys[i] == listName)
        break;
    }

    return ListKeys[i+1];
} 

//add a list
const addList = (listName) => {
    const obj = ListFactory();
    Lists[listName] = obj;
    updateStorage(Lists);
}

//delete a list
const deleteList = (listName) => {
    delete Lists[listName];
    updateStorage(Lists);
}

//update Lists when tasks added
const updateLists = (prop) => {
    Lists = prop;
    updateStorage(Lists);
}


export { addList ,deleteList , getList, getAllLists, getFirstListKey,nearestValidListKey, updateLists };

