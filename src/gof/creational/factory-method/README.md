# Factory Method

É um padrão de projeto criacional que fornece uma interface para criar objetos em uma superclasse, mas permite que as subclasses alterem o tipo de objeto que será construído.
O padrão Factory Method sugere que você substitua chamadas diretas de construção de objetos por chamadas para um metódo fábrica especial.

## Exemplo

Imagine que você está desenvolvendo um jogo de luta e precisa criar um sistema de criação de personagens. O sistema deve permitir que você crie diferentes tipos de personagens, como guerreiros, magos e arqueiros. Para isso, você pode criar uma classe abstrata `Character` que define um método abstrato `createCharacter` e, em seguida, criar subclasses concretas para cada tipo de personagem.

```js
abstract class Character {
  abstract createCharacter() {}
}

class Warrior extends Character {
  createCharacter() {
    return new WarriorCharacter();
  }
}

class Mage extends Character {
  createCharacter() {
    return new MageCharacter();
  }
}

class Archer extends Character {
  createCharacter() {
    return new ArcherCharacter();
  }
}

class WarriorCharacter {
  constructor() {
    console.log('Warrior created');
  }
}

class MageCharacter {
  constructor() {
    console.log('Mage created');
  }
}

class ArcherCharacter {
  constructor() {
    console.log('Archer created');
  }
}
```

Neste exemplo, a classe `Character` define um método abstrato `createCharacter` que deve ser implementado por suas subclasses. As subclasses concretas `Warrior`, `Mage` e `Archer` implementam esse método e retornam uma instância de `WarriorCharacter`, `MageCharacter` e `ArcherCharacter`, respectivamente.
