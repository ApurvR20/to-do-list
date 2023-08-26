//hide all lists here?
let id = 1;
const ListFactory = (listName) => {

    const obj = {'id' : id, 'tasks' : {}};
    id++;
    return obj;
}

const example_list = document.createElement('div');
example_list.textContent = 'example_list';


const getList = (listName) => JSON.parse(sessionStorage.getItem(listName));

const getListKeysAll = () => {

    return Object.keys(sessionStorage);
}

const setList = (listName) => {

    const obj = ListFactory(listName);
    sessionStorage.setItem(listName, JSON.stringify(obj));
    console.log(getListKeysAll());
    return obj['id'];
}


// console.log(Lists);

export { setList , getList, getListKeysAll};

