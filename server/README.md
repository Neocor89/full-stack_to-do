![my badge](https://badgen.net/badge/adonis/backend/purple?icon=awesome)
![badge](https://badgen.net/badge/ue/frontend/green?icon=maven)
# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

### `Backend`

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

Or manually clone the repo and then run `npm install`.
#
### *Start Server*
Go to your current project and run the command : 

```
adonis serve --dev
```
### *Migrations*

Run the following command to run startup migrations.

```js
adonis migration:run
```
### *Options*
You can check the different actions of the **adonis** commands by adding :   
<span style="color: #d9ed92; font-weight: 500; font-size: 15px">--help</span>

#### Example
Here is an example of the *options to make a controller*
```js
adonis make:controller
```
By adding the command <span style="color: #d9ed92">--help</span> we access the description of the following options :
```js
adonis make:controller --help

Usage:
  make:controller <name> [options]

Arguments:
  name           Name of the controller

Options:
  --resource     Create resourceful methods on the controller
  --type <value> The type can be http or ws
```