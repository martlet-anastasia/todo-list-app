'use strict'
// Import function
import { createCard, renderCard, createModal, newTaskPush, addNewTaskBtn, cardBlockOverlay, cleanInput } from "./templates.js"

// Create list of ToDo tasks
const todos = [
    {
        title: 'Task 1 - sleep',
        text: 'Sleep at least 9 hours',
        time: '22:00'
    },
    {
        title: 'Task 2 - buy a cake',
        text: 'Find lovely place with tasty pastry',
        time: '08:30'
    },
    {
        title: 'Task 3 - drink coffee',
        text: 'Drink ice cappuccino',
        time: '09:00'
    },
]

// App
addNewTaskBtn()
cardBlockOverlay()
renderCard(todos)
createModal()

// Event Listener
const root = document.querySelector('#root')
const cardBlock = document.querySelector('#cardBlock')
const btnAddTask = document.querySelector('#addBtn')
const modalWindow = document.querySelector('#modalOverlay')
const btnCreate = document.querySelector('#btnCreate')
const btnCancel = document.querySelector('#btnCancel')

btnAddTask.addEventListener('click', event => {
    modalWindow.classList.toggle('hidden')
})

btnCancel.addEventListener('click', event => {
    modalWindow.classList.toggle('hidden')
    // clean input fields
    cleanInput()
})

btnCreate.addEventListener('click', event => {
    // push new task to already exists object of ToDOs & update View
    let newTask = newTaskPush(todos)
    if (newTask !== undefined) {
        createCard(newTask) 
    // hide modal window
    modalWindow.classList.toggle('hidden') 
    // clean input fields
    cleanInput()
    }
})

