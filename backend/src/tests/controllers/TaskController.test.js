const { expect } = require('chai');
const sinon = require('sinon');
const TaskService = require('../../services/TasksService');
const TaskController = require('../../controllers/TaskController');

describe('Testar o CRUD da camada Controller', () => {
  const allTasks = [
    {
      id: 1,
      title: 'tarefa',
      description: 'como executar tarefa',
    },
    {
      id: 2,
      title: 'outra tarefa',
      description: 'como executar outra tarefa',
    },
  ];

  const request = {};
  const response = {};

  before(() => {
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
    sinon.stub(TaskService, 'getAllTasks').resolves(allTasks);
  });
  after(() => {
    TaskService.getAllTasks.restore();
  });

  it('Testa se a funçao getAllTasks retorna o status 200 e a lista de tarefas', async () => {
    await TaskController.getAllTasks(request, response);
    expect(response.status.calledWith(200)).to.be.equal(true);
    expect(response.json.calledWith(allTasks)).to.be.equal(true);
  });

  before(() => {
    request.params = { id: 1 };
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
    sinon.stub(TaskService, 'getTaskById').resolves(allTasks[0]);
  });
  after(() => {
    TaskService.getTaskById.restore();
  });

  it('Testa se a função getTaskById retorna com status 200 e a tarefa solicitada', async () => {
    await TaskController.getTaskById(request, response);

    expect(response.status.calledWith(200)).to.be.equal(true);
    expect(response.json.calledWith(allTasks[0])).to.be.equal(true);
  });

  const task = {
    id: 1,
    title: 'tarefa',
    description: 'como executar',
  };

  before(() => {
    request.body = {
      title: 'tarefa',
      description: 'como executar',
    };
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
    sinon.stub(TaskService, 'createTask').resolves(task);
  });
  after(() => {
    TaskService.createTask.restore();
  });

  it('Verifica se ao criar tarefa retorna o status 201 e seu json', async () => {
    await TaskController.createTask(request, response);

    expect(response.status.calledWith(201)).to.be.equal(true);
    expect(response.json.calledWith(task)).to.be.equal(true);
  });
  before(() => {
    request.params = { id: 1 };
    request.body = {
      title: 'tarefa editada',
      description: 'como executar',
    };
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
    sinon.stub(TaskService, 'updateTask').resolves(1);
  });
  after(() => {
    TaskService.updateTask.restore();
  });
  it('Testar se a atualização retorna status e mensagem esperada.', async () => {
    await TaskController.updateTask(request, response);

    expect(response.status.calledWith(200)).to.be.equal(true);
    expect(response.json.calledWith(task)).to.be.equal(true);
  });
});
