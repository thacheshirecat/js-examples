let funString = 'Fun Game'
document.getElementById('fun-game').innerHTML = funString

let listId = 4

const funGame = function () {
    funString = funString.slice(1, funString.length).trim()
    document.getElementById('fun-game').innerHTML = funString
    if (funString.length <= 0) {
        funString = 'Fun Game'
        document.getElementById('fun-game').innerHTML = 'Fun Game'
    }
}
const addToList = function () {
    document.getElementById(
        'example-list'
    ).innerHTML += `<li id="list-item-${listId}">
                        ${document.getElementById('list-input').value}
                        <button onclick="deleteListItem('list-item-${listId}')">
                            Delete
                        </button>
                    </li>`
    listId++
    document.getElementById('list-input').value = ''
}

const deleteListItem = function (item) {
    document.getElementById(item).remove()
}
