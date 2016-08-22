# Ambient IT React Training

#### Exercice 2 Containers

#### Instructions
Dans src/app creer un répértoire containers.

Dans ce répértoire créer 1 composant React:
 - TodoListContainer

Initialiser le state comme ceci
```js
this.state = {
  list: [
    {
      id: 0,
      title: 'Apprendre React',
      description: 'Formation de 3 jours',
      isDone: false,
    },
    {
      id: 1,
      title: 'Ranger le bureau',
      description: 'ne pas oublier les tiroirs',
      idDone: false,
    },
  ],
};
```

Créer un composant React
 - TodoList

TodoListContainer est un wrapper pour TodoList.

TodoListContainer doit disposer de deux méthodes:
 - onTodoUpdate(todo: Object)
 - onTodoRemove(id: number)
implémenter ces méthodes et les passer au component TodoList en props et les binder sur les bouttons

Ce component doit recevoir le tableau en props et afficher les données en utilisant les composants réalisés precedement
