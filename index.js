
function addTodo(event){
    event.preventDefault();
    const item = document.createElement('li');
    item.innerText = document.getElementById('item').value;
    item.addEventListener('click', completeTodo);

    const button = document.createElement('button');
    button.innerText = 'x';
    button.addEventListener('click', removeTodo);
    item.appendChild(button);

    
    const list = document.querySelector('ul');
    list.appendChild(item);
    
}

document.querySelector('form').addEventListener('submit', addTodo);

function removeTodo(event){
    event.target.parentNode.remove()
}

function completeTodo(event){
    const checked = event.target.getAttribute('aria-checked')
    if(checked === 'true'){
        event.target.setAttribute('aria-checked', 'false')
    } else {
        event.target.setAttribute('aria-checked', 'true')
    }
}