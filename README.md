## Ebytr-To-do-list

Protótipo de uma lista de tarefas editável com uso de front e backend conectado ao banco de dados para atender a necessidade da empresa Ebytr, que solicitou um App para que seu quadro de funcionários possa se organizar de uma forma mais prática.

### OBS
O projeto ainda não está terminado, faltando toda sua estilização e a funcionalidade do botão Edit.

Para rodar o programa é necessário ter os seguintes programas instalados:
 - Git; 
 - Node.js;
 - MySQL.
 
 ### Para executá-lo localmente

Basta clonar o projeto:
```
git@github.com:Ivan-Mastrangelo/Ebytr-To-do-list.git
```
Entrar no diretório criado:
```
  cd Ebytr-To-do-list
  ```
Instalar as dependências do projeto:
```
  npm install
  ```
Será necessário a pessoa configurar as variávei de ambiente do backend para conectar tanto o backend ao banco, como ao frontend.

Entre na pasta backend
```
cd backend
```
Na raiz do backend crie o arquivo .env e substitua usuário, senha e o nome do banco de dados, mantendo HOSTNAME e PORT como estão, ao inserir este script.
```
MYSQL_USER=usuário_do_BD
MYSQL_PASSWORD=suasenha
MYSQL_DATABASE=nome_do_seu_BD
HOSTNAME=localhost
PORT=3001
```
Iiniciar o servidor do backend:
```
  npm start
  ```
Sair da pasta e entrar na pasta frontend
```
cd ..
cd frontend
```
Iniciar a aplicação
```
npm start
```
Após esses comandos, acesse no navegador:
```
  http://localhost:3000/
  ```
Para rodar os testes do backend basta entrar na pasta beckend e executar o comando
```
npm run coverage
```
---
