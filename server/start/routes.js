'use strict'


/*
| 
+ Création du Projet adonis avec :
: LDC = 'adonis new server --api-only'
|
+ Usage:
: adonis + new + <name_project> + [options]
|
+ Available Commands: & Description
: new                Create a new AdonisJs application
: serve              Start Http server
: key:generate       Generate secret key for the app
: make:hook          Make a new lucid model hook
: make:listener      Make a new event or redis listener
: make:middleware    Make a new HTTP or Ws Middleware
: make:migration     Create a new migration file
: make:model         Make a new lucid model
|
+ HELP Commands
: adonis <serve> --help
: adonis <command> --help
|
+ [options] Flag & Description
: --api-only          Scaffold project for api server
: --api               Scaffold project for api server
|
|
* Lancement Projet
: 👉   Get started with the following commands
: cd server
: adonis serve --dev
|
*/



/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/*
: Creation Route 'Post' avec endpoint "aut/register"
: Vérification du endpoint avec Postman sur : 
* localhost:3333/auth/register
: + LDC : "adonis make:controller User " = Création d'un Dossier controllers
: Création lien entre endpoint UserController.register & Route.post
: Route.post('aut/register', 'UserController.register');
|
* User_Test for Login connection API
{
  "email": "test@email.com",
  "password": "123456"
}
|
*/




Route.group(() => {
  //: Gestion de l'ensemble des Route.group :
  //: Créé depuis UserController file
  Route.post('auth/register', 'UserController.register');
  Route.post('auth/login', 'UserController.login');
})
.prefix('api');

