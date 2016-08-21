# Ambient IT React Training

#### Exercice utilisés lors de la formation ReactJS

### Prérequis
Pour suivre ce workshop vous devez avoir installé git et node.js.
Pour la dernière partie consacrer à React-native, il vous faudra également installer Android studio.

### Démarage

#### Install
```sh
$ git clone https://github.com/AmbientIT/react-training.git
$ cd react-training && npm install
```

#### Run
```sh
$ npm start
```

#### Instructions
Dans src/app creer un répértoire components.

Dans ce répértoire créer 3 composants React:
 - Card
 - CardImage
 - Button

à partir de
```html
<section>
  <h1>{config.APP_TITLE}</h1>
  <div>Webpack is doing its thing with React and ES2015</div>
  <div className="flex mb2 border flex-center">
    <img
      style={styles}
      src="img/placeholder.svg"
      width="96"
      height="96"
      className="flex-none m2"
      role="presentation"
    />
    <div className="flex-auto p2 border">
      <h3>John snow</h3>
      <p>Lord commander</p>
      <p>
        <button
          type="button"
          className="btn btn-primary white"
        >
        Do something
        </button>
      </p>
    </div>
  </div>
</section>
```

Et remplacer le tout dans App.jsx
