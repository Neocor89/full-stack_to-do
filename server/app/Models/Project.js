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
? Reprendre en faisant étapes cci-dessous :
: Dans terminal1 = powershel = commande npm install
* cd server + adonis run serve
:Dans terminal2 = node2 = commande en dessous
* cd server + adonis make:controller Project
*/

module.exports = Project
