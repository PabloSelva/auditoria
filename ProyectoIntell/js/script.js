function addTask() {
    const title = document.getElementById('task-title').value;
    const instructions = document.getElementById('task-instructions').value;
    const dueDate = document.getElementById('task-due-date').value;
  
    if (!title || !instructions || !dueDate) {
      alert('Por favor, completa todos los campos.');
      return;
    }
  
    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('div');
    taskItem.classList.add('task');
    taskItem.innerHTML = `
      <h3>${title}</h3>
      <p><strong>Instrucciones:</strong> ${instructions}</p>
      <p><strong>Fecha de Vencimiento:</strong> ${dueDate}</p>
    `;
  
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Eliminar';
    deleteButton.onclick = function() {
      taskItem.remove();  // Eliminar la tarea
    };
  
    const editButton = document.createElement('button');
    editButton.innerText = 'Modificar';
    editButton.onclick = function() {
      alert('Función de modificación de tarea aún no implementada.');
    };
  
    taskItem.appendChild(deleteButton);
    taskItem.appendChild(editButton);
  
    taskList.appendChild(taskItem);
  
    document.getElementById('task-title').value = '';
    document.getElementById('task-instructions').value = '';
    document.getElementById('task-due-date').value = '';
  }
  