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
+ User_Test for Login connection API
:: POST localhost:3333/auth/login ::
{
  "email": "test@email.com",
  "password": "123456"
}
|
:: POST localhost:3333/projects ::
* Poster un titre 
{
  "title": "test"
}
* Récupérer le titre 
:: GET localhost:3333/projects ::
	{
		"id": 1,
		"user_id": 1,
		"title": "test",
		"created_at": "2022-05-27 13:37:24",
		"updated_at": "2022-05-27 13:37:24"
	}
|
*/



Route.group(() => {
  //: Gestion de l'ensemble des Route.group :
  //: Créé depuis Controllers file
  Route.post('auth/register', 'UserController.register');
  Route.post('auth/login', 'UserController.login');

  Route.get('projects', 'ProjectController.index').middleware('auth');
  //: Schéma du Projects, 'nom_du_fichier.methode_lié_au_user'
  Route.post('projects', 'ProjectController.create').middleware('auth');
  //: création user 
  Route.delete('projects/:id', 'ProjectController.destroy').middleware('auth');
})
.prefix('api');

