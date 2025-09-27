const container = document.querySelector('#container')

let num = 16
let square, numOfDivs

const grid = document.querySelector('#grid')





function populate(num) {
    square = num * num
    numOfDivs = 100 / num
    for (let i = 0; i < square; i++) {
        const div = document.createElement('div')
        div.style.height = `${numOfDivs}%`
        div.style.width = `${numOfDivs}%`
        div.style.boxSizing = "border-box"
        div.style.border = "1px solid silver"
        container.appendChild(div)
    }
}



populate(num)

grid.addEventListener('click', () => {
    let inp = Number(prompt('Enter number of divs (10 - 100): '))
    if (inp < 10 || inp > 100) {
        num = Number(prompt('Enter number of divs (10 - 100): '))
    }
    container.innerHTML = ""
    populate(inp)

    const child = document.querySelectorAll('#container > div')

    child.forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.classList.add('div-black')
        })
    })






})

const child = document.querySelectorAll('#container > div')

let color = child.forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.classList.add('div-black')
    })
})

const reset = document.querySelector('#reset')

let btReset = reset.addEventListener('click', () => {
    // child.forEach(el => {
    //     el.classList.remove('div-black')
    // })
    location.reload()


})


