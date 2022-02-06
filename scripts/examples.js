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
//Date Stuff
const date = new Date()

console.log('Date: ' + date.getDate())
console.log('Day: ' + date.getDay())
console.log('Month: ' + date.getMonth())
console.log('Year: ' + date.getFullYear())
console.log('Hours: ' + date.getHours())
console.log('Minutes: ' + date.getMinutes())
console.log('Time: ' + date.getTime())

const timer = function () {
    const newTime = new Date()
    const newT = newTime.getTime()
    const oldT = date.getTime()
    const difference = ((newT - oldT) / 1000).toFixed(2)

    if (difference >= 60) {
        const seconds = (difference - Math.floor(difference / 60) * 60).toFixed(
            2
        )
        document.getElementById('clock').innerHTML = `It has been ${Math.floor(
            difference / 60
        ).toFixed(0)} minutes and ${seconds} seconds`
    } else {
        document.getElementById(
            'clock'
        ).innerHTML = `It has been ${difference} seconds`
    }
}
//Methods to run when page initializes
addToList()
populateFamily(namelessFamily)
setInterval(timer, 10)
