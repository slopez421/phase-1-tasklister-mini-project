document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const newTaskDescription = document.getElementById("new-task-description")
    buildToDo(newTaskDescription.value)
  })
});

function buildToDo(toDo){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', deleteToDo)
  btn.textContent = 'x'
  p.textContent = `${toDo} `
  p.appendChild(btn)
  document.querySelector('#tasks').appendChild(p)
}

function deleteToDo(e) {
  e.target.parentNode.remove()
}

function createDropdown() {
  let sel = document.createElement('select')
  let opt = document.createElement('option')
  document.querySelector('p').appendChild(sel)
  document.querySelector('select').appendChild(opt)
}