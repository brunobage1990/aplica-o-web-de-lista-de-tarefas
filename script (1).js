document.addEventListener('DOMContentLoaded', () => {
    carregarTarefas();
});

function adicionarTarefa() {
    const titulo = document.getElementById('titulo').value.trim();
    const descricao = document.getElementById('descricao').value.trim();
    
    if (!titulo) {
        alert('O título é obrigatório!');
        return;
    }

    const tarefa = {
        id: Date.now(),
        titulo,
        descricao,
        concluida: false
    };

    salvarTarefa(tarefa);
    renderizarTarefa(tarefa);
    
    document.getElementById('titulo').value = '';
    document.getElementById('descricao').value = '';
}

function renderizarTarefa(tarefa) {
    const lista = document.getElementById('lista-tarefas');
    const li = document.createElement('li');
    li.className = `p-3 bg-gray-50 rounded-md flex justify-between items-center ${tarefa.concluida ? 'line-through text-gray-500' : ''}`;
    li.innerHTML = `
        <div>
            <h3 class="font-semibold">${tarefa.titulo}</h3>
            <p class="text-sm text-gray-600">${tarefa.descricao || 'Sem descrição'}</p>
        </div>
        <div class="flex gap-2">
            <button onclick="toggleConcluida(${tarefa.id})" class="text-green-500 hover:text-green-700">
                ${tarefa.concluida ? 'Desmarcar' : 'Concluir'}
            </button>
            <button onclick="removerTarefa(${tarefa.id})" class="text-red-500 hover:text-red-700">Remover</button>
        </div>
    `;
    lista.appendChild(li);
}

function salvarTarefa(tarefa) {
    const tarefas = JSON.parse(localStorage.getItem('tarefas') || '[]');
    tarefas.push(tarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function carregarTarefas() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas') || '[]');
    tarefas.forEach(renderizarTarefa);
}

function toggleConcluida(id) {
    const tarefas = JSON.parse(localStorage.getItem('tarefas') || '[]');
    const tarefa = tarefas.find(t => t.id === id);
    if (tarefa) {
        tarefa.concluida = !tarefa.concluida;
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
        document.getElementById('lista-tarefas').innerHTML = '';
        carregarTarefas();
    }
}

function removerTarefa(id) {
    let tarefas = JSON.parse(localStorage.getItem('tarefas') || '[]');
    tarefas = tarefas.filter(t => t.id !== id);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    document.getElementById('lista-tarefas').innerHTML = '';
    carregarTarefas();
}