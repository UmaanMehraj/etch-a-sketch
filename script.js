const container = document.querySelector('#container')

const num = 32
const square = num * num
const x = 100 / num


let count = 0


while (count < square && (num >= 10 && num <= 100)) {
    const div = document.createElement('div')
    div.style.height = `${x}%`
    div.style.width = `${x}%`
    div.style.boxSizing = "border-box"
    div.style.border = "1px solid silver"
    container.appendChild(div)
    count++
}

let child = document.querySelectorAll('#container > div')

child.forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.classList.add('div-black')
    })
})

