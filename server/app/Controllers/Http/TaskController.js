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

  async destroy({ auth, request, params }) {
    //: Route avec /:id = params 
    //: destroy = Route Delete 
    const user = await auth.getUser();
    //: On récupère le user
    const { id } = params;
    const task = await Task.find(id);
    //: On atttend que le tache soit trouvée
    const project = await task.project().fetch();
    //: Récupèration de la tache du project
    AuthorizationService.verifyPermission(project, user);
    //: On vérifie la permission du project & user
    await task.delete();
    //: On attend la suppression de la tache
    return task;
    //: On renvoi le tache supprimée
  }

  async update({ auth, request, params }) {
    //: Route avec /:id = params 
    //: destroy = Route Delete 
    const user = await auth.getUser();
    //: On récupère le user
    const { id } = params;
    const task = await Task.find(id);
    //: On atttend que le tache soit trouvée
    const project = await task.project().fetch();
    //: Récupèration de la tache du project
    AuthorizationService.verifyPermission(project, user);
    //: On vérifie la permission du project & user
    task.merge(request.only([
      'description',
      'completed',
    ]));
    //: On fusionne le changement de la tache avec l'ancienne
    await task.save();
    //: On sauvegarde la nouvelle tache
    return task;
    //: On renvoi la nouvelle tache
  }

}

module.exports = TaskController
