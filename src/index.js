  const taskForm = document.getElementById("create-task-form")  
  const tasks = document.getElementById("tasks")
  const taskInputField = document.getElementById("new-task-description")
  const dropdown = document.getElementById('importance-dropdown')
  const editInputField = document.getElementById("edit-task-description")
  const editDropdown = document.getElementById('edit-importance-dropdown')



  function setStyle(importanceValue){
    let color
    if (importanceValue === "High") {
      color = "red"
    } else if (importanceValue === "Medium") {
      color = "orange"
    } else if (importanceValue === "Low") {
      color = "green"
    }
    return color
  }

  function addToList(inputValue, importanceValue){
    let LI = document.createElement("LI")
    LI.innerHTML = inputValue
    const color = setStyle(importanceValue)
    let deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = "X"
    deleteBtn.className = "remove"
    let editBtn = document.createElement("button")
    editBtn.innerHTML = "Edit"
    editBtn.className = "edit"
    LI.appendChild(deleteBtn)
    LI.appendChild(editBtn)
    tasks.appendChild(LI)
    taskForm.reset()
  }
  
  taskForm.addEventListener ('submit', function(e){
    e.preventDefault()    
    let userInput = taskInputField.value
    let importanceValue = dropdown.value
    addToList(userInput, importanceValue)
  })


  document.addEventListener ('click', function(e){
    console.log(e.target)
    if (e.target.className === 'remove') {
      e.target.parentElement.remove()
    } 
    // else if (e.target.className === 'edit') {
    //   editTodo(e)
    // }
  })


  // function editTodo(e) {
  //   debugger
  //   let editedTask = e.target.previousElementSibling.previousSibling
  //   // ADD VALUE TO EDIT FORM
  //   e.target.parentElement.innerHTML = `<form class="edit-todo" action="#" method="post">
  //   <input type="text" id="edit-task-description" name="edit-task-description">
  //   <select name="" id="edit-importance-dropdown">
  //   <option value="High">High</option>
  //   <option value="Medium">Medium</option>
  //   <option value="Low">Low</option>
  //   </select>
  //   <input type="submit" value="Edit Task">
  //   </form>`
  // let editForm = document.querySelector('.edit-todo')
  //   editForm.addEventListener ('submit', function(e){
  //     e.preventDefault()
  //     debugger
  //     let editUserInput = editInputField.value
  //     let editImportanceValue = editDropdown.value
  //     addToList(editUserInput, editImportanceValue)
  //     // e.target.parentElement.innerHTML = `<div class='todo-task'>${editedTask}</div> <button class='remove'> X </button> <button class='edit'> Edit </button>`
  //   })
  // }