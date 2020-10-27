document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  const newTaskForm = document.getElementById("create-task-form")  
  const listItem = document.getElementById("tasks")

  newTaskForm.addEventListener ('submit', function(e){
    e.preventDefault()    
    let newTask = e.target['new-task-description'].value
    newTaskForm.reset()
    listItem.innerHTML += `<li> <div class='todo-task'>${newTask}</div> <button class='remove'> X </button> <button class='edit'> Edit </button> </li>`
  })


  document.addEventListener ('click', function(e){
    console.log(e.target)
    if (e.target.className === 'remove') {
      e.target.parentElement.remove()
    } else if (e.target.className === 'edit') {
      editTodo(e)
    }
  })


  function editTodo(e) {
    let editedTask = e.target.previousElementSibling.previousElementSibling.innerText
    e.target.parentElement.innerHTML = `<form class="edit-todo" action="#" method="post">
    <input type="text" id="edit-task-description" name="edit-task-description" value= ${editedTask}>
    <input type="submit" value="Edit Task">
  </form>`
  let editForm = document.querySelector('.edit-todo')
    editForm.addEventListener ('submit', function(e){
      e.preventDefault()
      let editedTask = e.target['edit-task-description'].value
      e.target.parentElement.innerHTML = `<div class='todo-task'>${editedTask}</div> <button class='remove'> X </button> <button class='edit'> Edit </button>`
    })
  }

})
