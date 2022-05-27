'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')


class Project extends Model {

  user() {
    return this.belongsTo('App/Models/User');
  }

  tasks () {
    return this.hasMany('App/Models/Task')
  }
}


/*
+ Pause projet 
|
? Reprendre le projet en faisant :
: Dans terminal1 = powershel1 = commande npm install
* cd server + :: adonis serve --dev ::
|
+ Ajout de l'option LDC :
* :: adonis make:controller Task ::
|
?: Avant dernière étape LDC réalisée = 
?:: Enregistrement dans la BDD d'une nouvelle demande
: :: adonis migration:run ::
|
:Dans terminal2 = node2 = commande en dessous
* cd server + adonis make:controller Project
*/

module.exports = Project
