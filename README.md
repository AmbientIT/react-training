# Ambient IT React Training

#### Exercice 7

### Installation
```sh
npm i redux-thunk -S
```
installer le plugin chrome redux

### Instructions
Dans le repertoire src/app/services creer un fichier todoHttpApi qui expose plusieurs methode:
 - findAll(params: object)
 - findOne(id: number)
 - create(todo: object)
 - update(object)
 - delete(id: number)

Intégrer le middleware redux-thunk à votre store

grace au middleware redux-thunk modifier vos actions créator afin qu'ils utilisent les méthodes de todoHttpApi
