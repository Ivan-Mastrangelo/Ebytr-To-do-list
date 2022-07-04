const { expect } = require('chai');
const sinon = require('sinon');
const { Task } = require('../../DataBase/models');
const TaskService = require('../../services/TasksService');

describe('Testar o CRUD da camada service', () => {
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
  before(() => {
    sinon.stub(Task, 'findAll').resolves(allTasks);
    sinon.stub(Task, 'findByPk').resolves(allTasks[0]);
  });
  after(() => {
    Task.findAll.restore();
    Task.findByPk.restore();
  });
  it('testa se a função getAllTasks retorna todas as tarefas', async () => {
    const response = await TaskService.getAllTasks();
    expect(response).to.be.an('array');
    expect(response[0]).to.be.an('object');
    expect(response[0]).to.have.property('id');
    expect(response[0]).to.have.property('title');
    expect(response[0]).to.have.property('description');
  });
  it('testa se a função getTaskById retorna a tarefa correta pelo id', async () => {
    const response = await TaskService.getTaskById(1);
    expect(response.id).to.be.equal(1);
    expect(response.title).to.be.equal('tarefa');
    expect(response.description).to.be.equal('como executar tarefa');
  });

  const newTask = {
    id: 3,
    title: 'mais uma tarefa',
    description: 'como executar mais uma tarefa',
  };
  before(() => {
    sinon.stub(Task, 'create').resolves(newTask);
  });
  after(() => {
    Task.create.restore();
  });
  it('Testa se nova tarefa é incluída com sucesso', async () => {
    const resolves = await TaskService.createTask(newTask);
    expect(resolves).to.be.a('object');
    expect(resolves).to.include.all.keys('id', 'title', 'description');
  });
  const taskUpdate = {
    id: 1,
    title: 'altera tarefa',
    description: 'como executar tarfea alterada',
  };
  before(() => {
    sinon.stub(Task, 'update').resolves([1]);
  });
  after(() => {
    Task.update.restore();
  });
  it('Verificar se alteração do objeto retorna com valor 1', async () => {
    const resolves = await TaskService.updateTask(taskUpdate);

    expect(resolves).to.be.equal(1);
  });
  const oldTask = {
    id: 5,
    title: 'tarefa',
    description: 'como executar tarfea',
  };
  before(() => {
    sinon.stub(Task, 'destroy').resolves(oldTask);
  });
  after(() => {
    Task.destroy.restore();
  });
  it('Verificar se tarefa foi excluída', async () => {
    const resolves = await TaskService.deleteTask(oldTask);
    expect(resolves).to.be.equal(undefined);
  });
});
