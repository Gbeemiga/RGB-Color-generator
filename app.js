const colors = ['dodgerblue', 'slategray', 'purple', 'aquamarine', 'tomato']

const btn = document.querySelector('#btn')
const display = document.querySelector('.color')

function genColors () {
    return Math.floor(Math.random() * colors.length)
}


btn.addEventListener('click', function () {
    
    const newColor = genColors()

    document.body.style.background = colors[newColor]

    display.innerText = colors[newColor]

})