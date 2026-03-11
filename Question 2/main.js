const btnAdd = document.getElementById('add');
const btnRemove = document.getElementById('remove');
const list = document.getElementById('list');
const removedItem = document.getElementById('removed-item');
const count = document.getElementById('count');

btnAdd.addEventListener('click', (e) => {
    e.preventDefault();

    let item = document.getElementById('item');

    let listItem = document.createElement('li');
    let listItems = document.querySelectorAll('li');

    listItem.textContent = item.value;
    list.appendChild(listItem);

    changeColor(listItems);
    item.value= "";
})

let removedElements= [];

btnRemove.addEventListener('click', (e) => {
    e.preventDefault();

    let text = document.getElementById('item');
    
    let listItems = document.querySelectorAll('li');

    for (let i = 0; i < listItems.length; i++) {
        let element = listItems[i];

        if (element.textContent.toLowerCase() === text.value.trim().toLowerCase()) {
            removedElements.push(element.textContent)
            list.removeChild(list.children[i])
            changeColor(listItems);
            break;
        }
    }

    displayResult(removedElements);
    text.value = "";
})

function changeColor(listItems) {
    for (let i = 1; i < listItems.length; i++) {
        const element = listItems[i];

        if (i % 2 === 0) {
            element.style.backgroundColor = 'White';  
        } 
        else{
            element.style.backgroundColor = 'Yellow';
        }
    }
}

function displayResult(array){
    let num = array.length;
    
    removedItem.textContent = array[array.length - 1];
    removedItem.style.color = 'red';
    removedItem.style.fontWeight = 'bold';

    if (array.length === 1) {
        count.textContent = `(${num}) item removed`;
    } else {
        count.textContent = `(${num}) items removed`;
    }
    
    count.style.color = 'green';
}


