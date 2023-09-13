
const updateStorage = (Lists) => localStorage.setItem('listData',JSON.stringify(Lists));

let listData = localStorage.getItem('listData');

if(listData == null || listData === "{}")
{
    const defaultObj = {'default' : {'tasks' : {}}};updateStorage(defaultObj);
}

const getAllData = () => {
    
    //wonder if this check is neccessary anymore
    let x = localStorage.getItem('listData');
    if(x!='')
    x = JSON.parse(localStorage.getItem('listData'));
    return x;
}




export {getAllData, updateStorage};
