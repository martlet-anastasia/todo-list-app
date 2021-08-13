// Create block for cards
export function cardBlockOverlay() {
    const cardBlock = document.createElement('div')
    cardBlock.className = 'mx-5 mt-5 flex flex-col items-center'
    cardBlock.id = 'cardBlock'

    root.append(cardBlock)
}


// Create card function with CSS styles
export function createCard(cardInput) {
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
    cardBlock.append(card)
}


// View with cards
export function renderCard(model) {
    model.forEach(eachTask => {
        createCard(eachTask)
    })
}


// Button to open modal window to add new task
export function addNewTaskBtn() {
    const addNewTask = document.createElement('div')
    const addNewTaskBtn = document.createElement('button')
    addNewTask.className = 'sm:fixed top-0 right-0 pt-1 sm:mr-3 sticky bg-white flex justify-center'
    addNewTaskBtn.className = 'bg-blue-600 rounded-none sm:rounded-lg px-6 py-2 text-white sm:text-sm hover:bg-blue-700'
    addNewTaskBtn.textContent = 'Add new task'
    addNewTaskBtn.id = "addBtn"

    addNewTask.append(addNewTaskBtn)
    root.append(addNewTask)
}


// Create modal window to add new task
export function createModal() {
    // Variables declaration
    const modalOverlay = document.createElement('div')
    const modal = document.createElement('div')
    const modalBackground = document.createElement('div')
    const modalSpan = document.createElement('span')
    const modalMain = document.createElement('div')
    const modalMainContainer = document.createElement('div')
    const modalMainContent = document.createElement('div')
    const modalIcon = document.createElement('div')
    const modalTitleBlock = document.createElement('div')
    const modalTitle = document.createElement('h3')
    const modalTextBlock = document.createElement('div')
    const modalText = document.createElement('p')
    const btnBlock = document.createElement('div')
    const btnCreate = document.createElement('button')
    const btnCancel = document.createElement('button')
    const inputContainer = document.createElement('div')
    const inputTitleLabel = document.createElement('label')
    const inputTitleDiv = document.createElement('div')
    const inputTitle = document.createElement('input')
    const inputTextLabel = document.createElement('label')
    const inputTextDiv = document.createElement('div')
    const inputText = document.createElement('input')
    const inputTimeLabel = document.createElement('label')
    const inputTimeDiv = document.createElement('div')
    const inputTime = document.createElement('input')

    // Set classes
    modalOverlay.className = "fixed z-10 inset-0 overflow-y-auto hidden"
    modal.className = "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    modalBackground.className = "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
    modalSpan.className = "hidden sm:inline-block sm:align-middle sm:h-screen"
    modalMain.className = "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
    modalMainContainer.className = "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
    modalMainContent.className = "sm:flex sm:items-start"
    modalIcon.className = "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10"
    modalTitleBlock.className = "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"
    modalTitle.className = "text-lg leading-6 font-medium text-gray-900"
    modalTextBlock.className = "mt-2 mb-4"
    modalText.className = "text-sm text-gray-500"
    btnBlock.className = "bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
    btnCreate.className = "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
    btnCancel.className = "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
    inputTitleLabel.className = "block text-sm font-medium text-gray-700"
    inputTextLabel.className = "block text-sm font-medium text-gray-700"
    inputTimeLabel.className = "block text-sm font-medium text-gray-700"
    inputTitleDiv.className = "mt-2 mb-3 relative rounded-md shadow-sm border-2 border-transparent"
    inputTextDiv.className = "mt-2 mb-3 relative rounded-md shadow-sm border-2 border-transparent"
    inputTimeDiv.className = "mt-2 mb-3 relative rounded-md shadow-sm border-2 border-transparent"
    inputTitle.className = "block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
    inputText.className = "block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
    inputTime.className = "block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"

    // Set other attributes
    modalOverlay.id = "modalOverlay"
    btnCreate.type = "submit" 
    btnCancel.type = "button"
    btnCreate.id = "btnCreate"
    btnCancel.id = "btnCancel"
    inputTitleLabel.htmlFor = "input-title"
    inputTextLabel.htmlFor = "input-text" 
    inputTimeLabel.htmlFor = "input-time" 
    inputTitle.type = "text"
    inputText.type = "text"
    inputTime.type = "text"
    inputTitle.name = "input-title"
    inputText.name = "input-text"
    inputTime.name = "input-time"
    inputTitle.id = "input-title"
    inputText.id = "input-text"
    inputTime.id = "input-time"
    inputTitle.placeholder = "Enter task title"
    inputText.placeholder = "Enter task description"
    inputTime.placeholder = "Enter task time"
    inputTitle.required = true
    inputText.required = true
    inputTime.required = true

    // Add SVG (innerHTML)
    modalIcon.innerHTML += '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"/></svg>'

    // Add text content
    modalTitle.textContent = "Create new task"
    modalText.textContent = "Fill in the fields below to create a new task"
    btnCreate.textContent = "Create"
    btnCancel.textContent = "Cancel"
    inputTitleLabel.textContent = "Title"
    inputTextLabel.textContent = "Text"
    inputTimeLabel.textContent = "Time"

    // Append all elements together
    inputTitleDiv.append(inputTitle)
    inputTextDiv.append(inputText)
    inputTimeDiv.append(inputTime)
    inputContainer.append(inputTitleLabel, inputTitleDiv, inputTextLabel, inputTextDiv, inputTimeLabel, inputTimeDiv)
    modalTextBlock.append(modalText)
    modalTitleBlock.append(modalTitle, modalTextBlock, inputContainer)
    modalMainContent.append(modalIcon, modalTitleBlock)
    modalMainContainer.append(modalMainContent)
    btnBlock.append(btnCreate, btnCancel)
    modalMain.append(modalMainContainer, btnBlock)
    modal.append(modalBackground, modalSpan, modalMain)
    modalOverlay.append(modal)

    // Append to root
    root.append(modalOverlay)
}


// Check fields to not be empty
function isEmpty(input) {
    if(!input.value) {
        input.parentElement.classList.remove('border-transparent')
        input.parentElement.classList.add('border-red-500')
        setTimeout(EmptyRemove, 1000, input)
    }
}
function EmptyRemove(input) {
    input.parentElement.classList.remove('border-red-500')
    input.parentElement.classList.add('border-transparent')
}


// Add info about new task to ToDOs object
export function newTaskPush(obj) {
    const title = document.querySelector('#input-title')
    const text = document.querySelector('#input-text')
    const time = document.querySelector('#input-time')
    
    if(title.value && text.value && time.value) {
        const newTask = {}
        newTask.title = title.value
        newTask.text = text.value
        newTask.time = time.value

        obj.push(newTask)
        return newTask
    } else {
        isEmpty(title)
        isEmpty(text)
        isEmpty(time)
    }
}


// Clean input field
export function cleanInput() {
    const title = document.querySelector('#input-title')
    const text = document.querySelector('#input-text')
    const time = document.querySelector('#input-time')
    
    // clean input fields
    title.value = ''
    text.value = ''
    time.value = ''
}
