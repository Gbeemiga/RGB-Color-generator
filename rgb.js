const btn = document.querySelector('#btn')
const display = document.querySelector('.color')



function genRGB () {
    function genNum () {
        return Math.floor(Math.random() * 255 )
    }
    return `rgb(${genNum()}, ${genNum()}, ${genNum()})`
}

btn.addEventListener('click', function () {
    const RGB = genRGB()
    document.body.style.background = RGB
    display.innerText = RGB
})




