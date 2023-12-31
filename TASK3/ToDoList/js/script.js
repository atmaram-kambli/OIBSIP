const todos = [];
const  description = document.getElementById("description-input");
const  title = document.getElementById("title-input");
const showTodos = document.querySelector('.todos');
let newNote;

function handleSave() {
    newNote = {title:title.value, desc:description.value};
    todos.push(newNote);
    console.log(newNote)
    showTodos.innerHTML = '';
    
    todos.forEach(todo => {
        showTodos.innerHTML += `
        <div class="info-info">
            <div class="info-title">${todo.title}</div>
            <div class="info-desc">${todo.desc}</div>
            <div class="info-del">
            <button class="cross-btn" onclick='deleteNote(this.parentNode.parentNode)'>
                <div class="line-1 line"></div>
                <div class="line-2 line"></div>
            </button>
            </div>
        </div>`;
    })
}

function deleteNote(parentElement) {
    // console.log(parentElement);
    // console.log(parentElement.parentNode.children)
    
    // Find the index of the parent element in the todos array
    const index = Array.from(parentElement.parentNode.children).indexOf(parentElement);
    console.log(index)
    
    // Remove the parent element from the DOM
    parentElement.remove();
    // Remove the corresponding entry from the todos array
    todos.splice(index, 1);
}

