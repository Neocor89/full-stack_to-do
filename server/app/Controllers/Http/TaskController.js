'use strict'

const Project = use('App/Models/Project');
const Task = use('App/Models/Task');
const AuthorizationService = use('App/Services/AuthorizationService');
//: On importe l'utilisation de l'authorization


class TaskController {

  async index({ auth, request, params }) {
    const user = await auth.getUser();
    const { id } = params;
    const project = await Project.find(id);
    AuthorizationService.verifyPermission(project, user);
    return await project.tasks().fetch();
  }

  async create({ auth, request, params }) {
    const user = await auth.getUser();
    //: Récupération du user
    const { description } = request.all();
    const { id } = params;
    const project = await Project.find(id);
    //: On va chercher le project
    AuthorizationService.verifyPermission(project, user);
    //: On vérifie et authorise au user à accéder au Project
    const task = new Task();
    //: Création de la task = Todo
    task.fill({ 
      description,
    });
    await project.tasks().save(task);
    return task;
  }

}

module.exports = TaskController
