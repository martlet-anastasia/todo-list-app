'use strict'

const root = document.querySelector('#root')
root.className = 'm-5 flex flex-col items-center'

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

// Create card function with CSS styles
function createCard(cardInput) {
    // create HTML tags
    const card = document.createElement('div')
    const cardTitle = document.createElement('h2')
    const cardText = document.createElement('p')
    const cardTimeDiv = document.createElement('div')
    const cardTime = document.createElement('p')
    const cardButtonDiv = document.createElement('div')
    const cardDelete = document.createElement('button')
    const cardDone = document.createElement('button')

    // add style
    card.className = 'bg-white shadow overflow-hidden sm:rounded-lg w-60 mb-5'
    cardTitle.className = 'text-lg leading-6 font-medium text-gray-900 px-4 pt-4 sm:px-6'
    cardText.className = 'mt-1 max-w-2xl text-sm text-gray-500 px-4 pb-5 sm:px-6'
    cardTimeDiv.className = 'border-t border-b border-gray-200 bg-gray-50 px-4 py-3 sm:px-6'
    cardTime.className = 'text-xs font-medium text-gray-500'
    cardButtonDiv.className = 'text-sm text-gray-500 px-4 pt-3 pb-2 sm:px-5 flex justify-between'

    // add content
    cardTitle.textContent = cardInput.title
    cardText.textContent = cardInput.text
    cardTime.textContent = cardInput.time
    cardDelete.innerHTML += '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-400 hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
    cardDone.innerHTML += '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400 hover:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'

    // combine all elements into card, append to HTML
    cardTimeDiv.append(cardTime)
    cardButtonDiv.append(cardDelete, cardDone)
    card.append(cardTitle, cardText, cardTimeDiv, cardButtonDiv)
    root.append(card)
}

// Update View with cards
function renderCard(model) {
    model.forEach(eachTask => {
        createCard(eachTask)
    })
}

// Input form to create new task
function addNewCard() {
    // create HTML tags
    const form = document.createElement('form')
    const formLabel = document.createElement('label')
    const formInput = document.createElement('input')
    const formButtom = document.createElement('button')

    // add styles & attributes
    form.className = 'mb-5 flex flex-col w-60 sm:block sm:w-auto'
    form.action = '#'
    formLabel.className = 'sr-only'
    formLabel.htmlFor = 'new_task'
    
    // <input> tag
    formInput.className = 'w-full sm:w-auto mr-5 appearance-none rounded-none px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 sm:rounded-lg shadow-sm -space-y-px focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm'
    formInput.type = 'text'
    formInput.id = 'new_task'
    formInput.placeholder = 'Create new task'
    formInput.required = true

    // <button> tag
    formButtom.className = 'bg-blue-600 rounded-none sm:rounded-lg px-9 py-2 text-white sm:text-sm hover:bg-blue-700'
    formButtom.textContent = 'Add'
    formButtom.type = 'submit'

    form.append(formLabel, formInput, formButtom)
    root.append(form)

}

function renderInput() {
    addNewCard()
}


renderCard(todos)
renderInput()
