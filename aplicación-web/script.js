const taskForm = document.getElementById('');
const taskInput = document.getElementById('');
const taskList = document.getElementById('');
const clearBtn = document.getElementById('');
// Cargar tareas desde localStorage
document.addEventListener('DOMContentLoaded', loadTasks);

// Agregar tarea
taskForm.addEventListener('submit', function (e) {
 e.preventDefault();
 addTask(taskInput.value);
 taskInput.value = '';
});



