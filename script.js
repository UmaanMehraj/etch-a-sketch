const container = document.querySelector('#container')

let num = 16
let square, numOfDivs

const grid = document.querySelector('#grid')

grid.addEventListener('click', () => {
    num = parseInt(prompt('Enter number of divs (10 - 100): '))
    if (num < 10 || num > 100) {
        num = parseInt(prompt('Enter number of divs (10 - 100): '))
    }

    populate(num)

})


let count = 0


function populate(num) {
    square = num * num
    numOfDivs = 100 / num
    while (count < square && (num >= 10 && num <= 100)) {
        const div = document.createElement('div')
        div.style.height = `${numOfDivs}%`
        div.style.width = `${numOfDivs}%`
        div.style.boxSizing = "border-box"
        div.style.border = "1px solid silver"
        container.appendChild(div)
        count++
    }
}

populate(num)



const child = document.querySelectorAll('#container > div')

child.forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.classList.add('div-black')
    })
})

const reset = document.querySelector('#reset')

reset.addEventListener('click', () => {
    child.forEach(el => {
        el.classList.remove('div-black')
    })

})

