const todos = [];
const  description = document.getElementById("description-input");
const  title = document.getElementById("title-input");
const showTodos = document.querySelector('.todos');
let newNote;

function handleSave() {
    // e.preventDefault();
    newNote = {title:title.value, desc:description.value};
    todos.push(newNote);
    console.log(newNote)
    showTodos.innerHTML = '';
    
    todos.forEach(todo => {
        showTodos.innerHTML += `
        <div class="info-info">
            <div class="head-title info-title">${todo.title}</div>
            <div class="head-desc info-desc">${todo.desc}</div>
            <div class="head-del info-del">
            <button class="cross-btn">
                <div class="line-1 line"></div>
                <div class="line-2 line"></div>
            </button>
            </div>
        </div>`;
    })

}

