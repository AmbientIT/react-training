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

Créer un comosant React
 - TodoList

TodoListContainer est un wrapper pour TodoList.

Ce component doit recevoir le tableau en props et afficher les données en utilisant les composants réalisés precedement
