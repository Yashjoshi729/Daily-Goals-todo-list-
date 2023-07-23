const title = document.getElementById("title")
const description = document.getElementById("description")
const form = document.querySelector("form")
const container = document.querySelector(".container")

const task = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : []

showtask()

function showtask() {
    task.forEach((value, index) => {
        const div = document.createElement('div')
        div.setAttribute('class', 'task')

        const innerdiv = document.createElement("div")
        div.append(innerdiv)

        const p = document.createElement('p')
        p.innerText = value.title
        p.style.textTransform="uppercase"
        innerdiv.append(p)

        const span = document.createElement('span')
        span.innerText = value.description
        innerdiv.append(span)

        const btn = document.createElement("button")
        btn.setAttribute('class', 'deletebtn')
        btn.innerText = "-"

        btn.addEventListener('click', () => {
            removetask()
            task.splice(index, 1)
            localStorage.setItem("tasks", JSON.stringify(task))

            showtask()
        })

        div.append(btn)

        container.append(div)
    })
}

function removetask() {
    task.forEach((value, index) => {

        const div = document.querySelector(".task")
        div.remove()
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    removetask()

    task.push({
        title: title.value,
        description: description.value
    })

    localStorage.setItem("tasks", JSON.stringify(task))
    console.log(task)
    showtask()
})