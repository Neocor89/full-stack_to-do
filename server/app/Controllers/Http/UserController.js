'use strict'

/* 
: Dossier UserController est créé via la LDC : 
* adonis  make:controller User
: Il crée un lien entre endpoint UserController.register & Route.post
*/

//: On récupère l'acces User dans le dossier 'App/Models/User'
const User = use('App/Models/User');

class UserController {

  async login({ request, auth }) {
    const { email, password } = request.all();
    const token = await auth.attempt(email, password);
    return token;
  }

  async register({ request }) {
    //: Fonction 'async' car requête api

     //: On accepte toutes les types de request pour 'email' & 'password'
     const { email, password } = request.all();

     //: Puis on crée le user avec son schéma
      await User.create({ 
       //: Est on attend confirmation de cr&ation auprès de l'API
       email, 
       password,
       username: email,
      })
      //: Puis on return le user créé
    return this.login(...arguments);
  }
}


/*
|
+ Au stade reister on a problem de connection des Users à la DB :
: Il faut donc télécharger dans le terminal 'Powershell'
* npm install sqlite3 --save
: + Vérif des commands pour gérer sqlite3 + database & dossier 'migrations':
* adonis --help
:: migration:run       Run all pending migrations
+  migration DB
: Pour le lancement de la BDD on va utiliser la command :
* adonis migration:run 
: On obtient :
:: migrate: 1503250034279_user.js
:: migrate: 1503250034280_token.js
:: Database migrated successfully
+ DB User & Token crées
|
*/

module.exports = UserController
