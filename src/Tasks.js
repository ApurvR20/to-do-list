import { updateLists } from "./Lists";
const TaskFactory = (dueDate, priority) => {

    const obj = {'dueDate' : dueDate, 'priority' : priority};
    return obj;
}

const addTask = (listData, listName, taskName, dueDate, priority) => {

    listData[listName]['tasks'][taskName] = TaskFactory(dueDate,priority);
    updateLists(listData);

    }

const removeTask = (listData, listName, taskName) => {
    
    delete listData[listName]['tasks'][taskName];
    updateLists(listData);
}

export {addTask, removeTask};
