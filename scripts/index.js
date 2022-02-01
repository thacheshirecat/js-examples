let titleShown = true

const changeTitle = () => {
    if (titleShown) {
        document.getElementById('title').style.display = 'none'
        titleShown = false
    } else {
        document.getElementById('title').style.display = 'block'
        titleShown = true
    }
}
const doNothing = () => {
    document.getElementById('input').value = ''
    document.getElementById('input').placeholder = 'Thanks!'
}

const num = 2

switch (num) {
    case 1:
        console.log('Switch 1')
        break
    case 2:
        console.log('Switch 2')
        break
    case 3:
        console.log('Switch 3')
        break
    default:
        console.log('Default')
}
