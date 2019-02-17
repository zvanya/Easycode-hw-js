// Todo manager
// 1. создать задачу
//      а. обработка формы
//          - проверить данные перед добавлением (валидация)
//      б. добавить задачу в массив
//      в. добавить данные в таблицу
//      г. очистить форму
// 2. удалить задачу
//      а. подтверждение
//      б. удаление данных из таблицы
//      в. удаление данных из массива
// 3. редактировать задачу
//      а. взять данные из массива
//      б. поместить в форму
//      в. обработать форму на редактирование
//          - валидация
//      г. обновить данные в массиве
//      д. обновить данные в таблице
//      е. очистить форму

const todosStorage = {
    todos: []
};

const editMode = {isEdit: false, todoId: null};

// UI Elements
const formCol = document.querySelector('.form-col');
const form = document.forms['addTodoForm'];
const table = document.querySelector('.table tbody');
const title = form.elements['title'];
const text = form.elements['text'];
const btnPrimary = form.querySelector(".btn-primary");

// event handling
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (!title.value || !text.value) return alertMessage('alert-danger', 'Введите title и text');
    
    if (editMode.isEdit && editMode.todoId !== null) {
        editTodoItem(editMode.todoId, title.value, text.value);
        alertMessage('alert-info', 'Задача обновлена успешно');
        formReset();
    } else {
        addNewTodoToStorage(title.value, text.value);
        alertMessage('alert-info', 'Задача добавлена успешно');
        form.reset();
    }
});

table.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-todo')) {
        const id = e.target.closest('[data-id]').dataset.id;
        deleteTodoFromStorage(id);
        alertMessage('alert-info', 'Задача удалена успешно');
        return;
    }
    
    if (e.target.classList.contains('edit-todo')) {
        editMode.isEdit = true;
        editMode.todoId = e.target.closest('[data-id]').dataset.id;
        setFormToEdit(editMode.todoId);
    }
});


// alert messages
/**
 *
 * @param {String} className
 * @param {String} message
 */
function alertMessage(className, message) {
    removeAlert();
    
    const template = alertTemplate(className, message);
    formCol.insertAdjacentHTML('afterbegin', template);
    
    setTimeout(removeAlert, 2000);
}

function removeAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) formCol.removeChild(currentAlert);
}


/**
 * generateId - создает произвольную строку
 * @returns {string} - новый id
 */
const generateId = () => {
    const uniqueValues = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    return "ssssssssss".replace(/s/g, () => uniqueValues[Math.floor(Math.random() * uniqueValues.length)]);
};

/**
 * addNewTodoToStorage - добавляет новый todo в storage а потом в view
 * @param {String} title
 * @param {String} text
 * @returns {[]} currentTodos
 */
function addNewTodoToStorage(title, text) {
    if (!title) return console.log('Please provide todo title');
    if (!text) return console.log('Please provide todo text');
    
    const newTodo = {title, text, id: generateId()}
    todosStorage.todos.push(newTodo);
    
    // Добавим в разметку
    addNewTodoToView(newTodo);
    
    return todosStorage.todos;
}

/**
 *
 * @param {String} id
 * @returns {[]} currentTodos
 */
function deleteTodoFromStorage(id) {
    const checkIdRes = checkId(id);
    if (checkIdRes.error) return console.log(checkIdRes.msg);
    
    let removedTask;
    
    for (let i = 0; i < todosStorage.todos.length; i++) {
        if (todosStorage.todos[i].id === id) {
            removedTask = todosStorage.todos.splice(i, 1);
            break;
        }
    }
    
    // удаляем с разметки
    deleteTodoFromView(id);
    
    return removedTask;
}


/**
 *
 * @param {String} id
 */
function checkId(id) {
    if (!id) return { error: true, msg: 'Передайте id удаляемой задачи.' };
    
    const idIsPresent = todosStorage.todos.some((todo) => todo.id === id );
    if (!idIsPresent) return { error: true, msg: 'Задачи с таким id несуществуе' };
    
    return { error: false, msg: '' };
}


// View functions

function formReset() {
    form.reset();
    editMode.isEdit = false;
    editMode.todoId = null;
    btnPrimary.textContent = "Add task";
}

/**
 *
 * @param {String} id
 */
function deleteTodoFromView(id) {
    const target = document.querySelector(`[data-id="${id}"]`);
    target.parentElement.removeChild(target);
    
    formReset();
}

/**
 *
 * @param {*} task
 */
function addNewTodoToView(todo) {
    const template = todoTemplate(todo);
    table.insertAdjacentHTML('afterbegin', template);
}

/**
 *
 * @param {*} todo
 * todo {
 *  id: string;
 *  title: string;
 *  text: string;
 * }
 */
function todoTemplate(todo) {
    return `
        <tr data-id="${todo.id}">
            <td>${todo.title}</td>
            <td>${todo.text}</td>
            <td>
                <i class="fas fa-trash remove-todo"></i>
                <i class="fas fa-edit edit-todo"></i>
            </td>
        </tr>
    `;
}

/**
 *
 * @param {String} className
 * @param {String} message
 */
function alertTemplate(className, message) {
    return `
        <div class="alert ${className}">${message}</div>
    `;
}

function editTodoInView(id, title, text) {
    const checkIdRes = checkId(id);
    if (checkIdRes.error) return console.log(checkIdRes.msg);
    
    let tr = document.querySelector(`[data-id="${id}"]`);
    let td = tr.querySelectorAll("td");
    
    // debugger;
    
    td[0].innerHTML = title;
    td[1].innerHTML = text;
}

addNewTodoToStorage('My title 1', 'My text 1');
addNewTodoToStorage('My title 2', 'My text 2');
addNewTodoToStorage('My title 3', 'My text 3');


// Make editing work

/**
 * editTodoItem - Изменяет поля title и text todoItem с id равным id
 * @param {String} id
 * @param {String} title
 * @param {String} text
 * @returns {boolean}
 */
function editTodoItem(id, title, text) {
    const checkIdRes = checkId(id);
    if (checkIdRes.error) return console.log(checkIdRes.msg);
    
    for (let i = 0; i < todosStorage.todos.length ; i++) {
        if (todosStorage.todos[i].id === id) {
            todosStorage.todos[i].title = title;
            todosStorage.todos[i].text = text;
            break;
        }
    }
    
    editTodoInView(id, title, text);
    
    return true;
}

function setFormToEdit(id) {
    // 1. найти нужную задачу в нашем storage
    // 2. в поле title и text записываем значение title, text с todo котору мы получили из strogae
    // получить доступ к submit кнопке и перезаписать ее на save
    
    const checkIdRes = checkId(id);
    if (checkIdRes.error) return console.log(checkIdRes.msg);
    
    for (let i = 0; i < todosStorage.todos.length; i++) {
        if (todosStorage.todos[i].id === id) {
            title.value = todosStorage.todos[i].title;
            text.value = todosStorage.todos[i].text;
            btnPrimary.textContent = "Save";
        }
    }
}


