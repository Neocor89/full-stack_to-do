'use strict'



//* On inclus le fichier créé et sa méthode 
const Project = use('App/Models/Project');
const AuthorizationService = use('App/Services/AuthorizationService');


/*
* methode async index()
:return tous les projects associés aux users
*/
class ProjectController {
  async index({ auth }) {
    //: auth en parameter
    const user = await auth.getUser();
    //: On attend authentication, des infos du user
    return await user.projects().fetch();
  }
  
  async create({ auth, request }) {
    const user = await auth.getUser();
    //: Récupération du user
    const { title } = request.all();
    const project = new Project();
    project.fill({ 
      title,
    });
    await user.projects().save(project);
    //: Association du project avec le user
    return project;
    //: Retourne le project
  }

  async destroy({ auth, request, params }) {
    //: Route avec /:id = params 
    //: destroy = Route Delete 
    const user = await auth.getUser();
    //: On récupère le user
    const { id } = params;
    const project = await Project.find(id);
    //: On atttend que le project soit trouvé
    AuthorizationService.verifyPermission(project, user);
    //: On vérifie la permission du project & user
    await project.delete();
    //: On supprime le project
    return project;
  }

  async update({ auth, request, params }) {
    const user = await auth.getUser();
    const { id } = params;
    const project = await Project.find(id);
    AuthorizationService.verifyPermission(project, user);
    project.merge(request.only('title'));
    await project.save();
    return project;
  }

}


module.exports = ProjectController
