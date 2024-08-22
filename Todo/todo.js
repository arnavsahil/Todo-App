let todoList = [
    {
        item: 'Buy Milk', 
        dueDate: '31/07/2024'
    },
    {
        item: 'Go to College', 
        dueDate: '1/08/2024'
    }
];
displayItems();
function addTodo(){
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({item: todoItem, dueDate: todoDate});

    //console.log(todoItem);
    //console.log(todoList);
    inputElement.value = '';
    dateElement.value = '';

    displayItems();
}

function displayItems(){
    //let displayElement = document.querySelector('#todo-items');
    //displayElement.innerText = '';
    let containerElement = document.querySelector('#todo-container');
    let newHtml = '';

    for(let i=0;i<todoList.length;i++){
        //displayElement.innerText = displayElement.innerText + "\n" + todoList[i];
        let item = todoList[i].item;
        let dueDate = todoList[i].dueDate;
        newHtml += `
            <div>
                <span>${item}</span>
                <span>${dueDate}</span> 
                <button onclick="
                    todoList.splice(${i}, 1);
                    displayItems();
                ">Delete</button>
            </div>
        `;
    }
    containerElement.innerHTML = newHtml;

}