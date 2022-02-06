//Fun Game Variable
let funString = 'Fun Game'
document.getElementById('fun-game').innerHTML = funString
//List Variables
let listItems = [
    { id: 1, task: 'Bake a Cake' },
    { id: 2, task: 'Walk the Doge' },
    { id: 3, task: 'Code' },
]
let listId = 1
let listInitialized = false
//Family Naming Variables
let namelessFamily = ['Toby', 'LuLu', 'Sparkles', 'JoJo']
//Fun Game Methods
const funGame = function () {
    funString = funString.slice(1, funString.length).trim()
    document.getElementById('fun-game').innerHTML = funString
    if (funString.length <= 0) {
        funString = 'Fun Game'
        document.getElementById('fun-game').innerHTML = 'Fun Game'
    }
}
//List Methods
const addToList = function () {
    if (!listInitialized) {
        for (i = 0; i < listItems.length; i++) {
            value = listItems[i].task
            document.getElementById(
                'example-list'
            ).innerHTML += `<li id="list-item-${listId}">${value}</li>
                        <button id="delete-item-${listId}" onclick="deleteListItem(${listId})">Delete</button>`
            listId++
        }
        listInitialized = true
    } else {
        value = document.getElementById('list-input').value
        document.getElementById(
            'example-list'
        ).innerHTML += `<li id="list-item-${listId}">${value}</li>
                        <button id="delete-item-${listId}" onclick="deleteListItem(${listId})">Delete</button>`
        listItems.push({ id: listId, task: value })
        listId++
        document.getElementById('list-input').value = ''
    }
}
const deleteListItem = function (id) {
    const index = listItems
        .map((item) => {
            return item.id
        })
        .indexOf(id)
    listItems.splice(index, 1)
    document.getElementById(`list-item-${id}`).remove()
    document.getElementById(`delete-item-${id}`).remove()
}
//Family Naming Methods
const populateFamily = function (array) {
    for (i = 0; i < array.length; i++) {
        document.getElementById(
            'family-list'
        ).innerHTML += `<li>${array[i]}</li>`
    }
}
const createFamily = function (cb) {
    let namedFamily = namelessFamily.map((dog) => {
        dog = `${dog} ${document.getElementById('family-input').value}`
        return dog
    })
    document.getElementById('family-list').innerHTML = ``
    cb(namedFamily)
}
//Methods to run when page initializes
addToList()
populateFamily(namelessFamily)
