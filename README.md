# Ambient IT React Training

#### Exercice 8 redux-form

### Installation
```sh
npm i axios -S
```

### Instructions
url de la ressource : http://localhost:3000/api/todo
Dans le repertoire src/app/services creer un fichier todoHttpApi qui expose plusieurs methodes utilisant axios:
 - findAll(params: object)
 - findOne(id: number)
 - create(todo: object)
 - update(object)
 - delete(id: number)

Intégrer le middleware redux-thunk à votre store

grace au middleware redux-thunk modifier vos actions créator afin qu'ils utilisent les méthodes de todoHttpApi
