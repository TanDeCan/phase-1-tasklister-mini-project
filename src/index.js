document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    addingTask(e.target.new_task_description.value)
    form.reset()
  })
});

function addingTask(task){
  let p = document.createElement("p")
  let btn = document.createElement("button")
  btn.addEventListener('click', deleteTask)
  btn.textContent = 'x'
  p.textContent = `${task} `
  p.appendChild(btn)
  document.querySelector("#tasks").appendChild(p)
}

function deleteTask(e){
  e.target.parentNode.remove()
}