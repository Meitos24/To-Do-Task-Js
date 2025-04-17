'use strict';

let tareas = [];

const input = document.getElementById('new-task');
const addBtn = document.getElementById('add-task-btn');
const emptyMessage = document.getElementById('empty-message');
const container = document.getElementById('task-list');

addBtn.addEventListener('click', () => {
    // Reemplazar texto
    emptyMessage.textContent = '';
    const texto = input.value;

    // Limpiar input
    input.value = '';

    mostrarTareas(texto);

});

function mostrarTareas(textoInput) {
    const divTarea = document.createElement('div');
    divTarea.textContent = textoInput;
    divTarea.classList.add('task-item');
    container.appendChild(divTarea);
}