#Lista de Tarefas com Docker Compose e Apache
Este projeto é uma aplicação web de lista de tarefas (To-Do List) servida por um container Apache configurado com Docker Compose. A aplicação permite adicionar, marcar como concluídas e remover tarefas, com persistência no localStorage do navegador.

#Estrutura do Projeto
meu-todo-list/
├── docker-compose.yml
├── app/
│   ├── index.html
│   ├── script.js
│   ├── README.md

#Funcionalidades
-Adicionar Tarefas: Insira título (obrigatório) e descrição (opcional).
-Marcar como Concluída: Alterne o estado de uma tarefa com um clique.
-Remover Tarefas: Exclua tarefas indesejadas.
-Persistência: Tarefas são salvas no localStorage do navegador.
-Design Responsivo: Interface moderna com Tailwind CSS, adaptável a diferentes tamanhos de tela.

#Pré-requisitos
-Docker e Docker Compose instalados.
-Navegador moderno (Chrome, Firefox, etc.).
-Conhecimento básico em HTML, JavaScript, Docker e Apache.

#Como Executar
-Clone o repositório:
git clone https://github.com/SEU_USUARIO/meu-todo-list.git
cd meu-todo-list

#Inicie o container:
docker-compose up -d
Acesse a aplicação em http://localhost:8080.

Para parar o container:
docker-compose down

#Tecnologias Utilizadas
Docker Compose: Orquestração do container Apache.
Apache (httpd): Servidor web.
HTML5: Estrutura da página.
Tailwind CSS (CDN): Estilização responsiva.
JavaScript: Interatividade e manipulação do DOM.
localStorage: Persistência de dados no navegador.

#Capturas de Tela (Descrição Textual)
Tela Inicial: Um formulário com campos para título e descrição, um botão azul "Adicionar Tarefa" e uma lista vazia abaixo.
Tarefa Adicionada: Cada tarefa aparece em um retângulo cinza com título, descrição, e botões "Concluir" (verde) e "Remover" (vermelho).
Tarefa Concluída: O texto da tarefa fica riscado e o botão "Concluir" muda para "Desmarcar".

Possíveis Melhorias
Adicionar um backend (ex.: Node.js ou Flask) para salvar tarefas em um banco de dados.
Implementar autenticação de usuários.
Adicionar filtros para tarefas (concluídas, pendentes).

Autor

Bruno Borges Fagundes
