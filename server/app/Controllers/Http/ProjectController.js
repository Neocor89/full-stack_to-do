'use strict'


/*
* methode async index()
:return tous les projects associés aux users
*/

const project = use('App/Models/Project');

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
}

module.exports = ProjectController
