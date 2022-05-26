'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')


class Project extends Model {

  user() {
    return this.belongsTo('App/Models/User');
  }
}


/*
+ Pause projet 
|
? Reprendre en faisant étapes ci-dessous :
: Dans terminal1 = powershel1 = commande npm install
* cd server + :: adonis serve --dev ::
|
+ Après chaque ajout de nouvel option faire
* :: adonis migration:run ::
|
?: Avant dernière étape LDC réalisée
: :: adonis migration:run ::
|
:Dans terminal2 = node2 = commande en dessous
* cd server + adonis make:controller Project
*/

module.exports = Project
