# Builder

É um padrão de projeto criacional que permite a construção de objetos complexos passo a passo. O padrão permite que você produza diferentes tipos e representações de um objeto usando o mesmo código de construção.
Ele traz um processo passo a passo para a construção de um objeto. O objeto é construído passo a passo, onde cada passo é executado por um método diferente.

## Exemplo

Imagine que você está desenvolvendo um sistema de construção de casas. O sistema deve permitir que você construa diferentes tipos de casas, como casas de madeira, casas de concreto e casas de vidro. Para isso, você pode criar uma classe abstrata `HouseBuilder` que define métodos abstratos para construir as partes da casa, como a fundação, as paredes e o telhado, e, em seguida, criar subclasses concretas para cada tipo de casa.

```js
abstract class HouseBuilder {
  abstract buildFoundation(): void;
  abstract buildWalls(): void;
  abstract buildRoof(): void;
}

class WoodenHouseBuilder extends HouseBuilder {
  buildFoundation() {
    console.log('Building wooden foundation');
  }

  buildWalls() {
    console.log('Building wooden walls');
  }

  buildRoof() {
    console.log('Building wooden roof');
  }
}
```
