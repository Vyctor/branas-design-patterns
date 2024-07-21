# ABSTRACT FACTORY

O padrão Abstract Factory é um padrão de projeto criacional que permite que você produza famílias de objetos relacionados sem especificar suas classes concretas.

## Exemplo

Imagine que você está desenvolvendo um sistema de controle de estoque para uma loja de eletrônicos. O sistema deve permitir que você gerencie produtos de diferentes categorias, como smartphones, tablets e notebooks. Além disso, você deve ser capaz de listar produtos de diferentes marcas, como Apple, Samsung e Microsoft.

Para implementar isso, você pode criar uma interface `Product` que define um método `createProduct` e, em seguida, criar interfaces concretas para cada categoria e marca de produto.

```js
interface Product {
  createProduct(): void;
}

interface Brand {
  createBrand(): void;
}

class Smartphone implements Product {
  createProduct() {
    console.log('Smartphone created');
  }
}

class Tablet implements Product {
  createProduct() {
    console.log('Tablet created');
  }
}

class Notebook implements Product {
  createProduct() {
    console.log('Notebook created');
  }
}

class Apple implements Brand {
  createBrand() {
    console.log('Apple created');
  }
}

class Samsung implements Brand {
  createBrand() {
    console.log('Samsung created');
  }
}

class Microsoft implements Brand {
  createBrand() {
    console.log('Microsoft created');
  }
}
```

Em seguida, você pode criar uma interface `ProductFactory` que define métodos para criar produtos e marcas. Em seguida, você pode criar interfaces concretas para cada categoria de produto, como `SmartphoneFactory`, `TabletFactory` e `NotebookFactory`, e para cada marca de produto, como `AppleFactory`, `SamsungFactory` e `MicrosoftFactory`.

```js
interface ProductFactory {
  createProduct(): Product;
  createBrand(): Brand;
}

class SmartphoneFactory implements ProductFactory {
  createProduct() {
    return new Smartphone();
  }

  createBrand() {
    return new Apple();
  }
}

class TabletFactory implements ProductFactory {
  createProduct() {
    return new Tablet();
  }

  createBrand() {
    return new Samsung();
  }
}

class NotebookFactory implements ProductFactory {
  createProduct() {
    return new Notebook();
  }

  createBrand() {
    return new Microsoft();
  }
}
```

Por fim, você pode criar uma classe `ProductManager` que recebe uma fábrica concreta e usa-a para criar produtos e marcas.

```js
class ProductManager {
  private productFactory: ProductFactory;

  constructor(productFactory: ProductFactory) {
    this.productFactory = productFactory;
  }

  createProduct() {
    const product = this.productFactory.createProduct();
    product.createProduct();

    const brand = this.productFactory.createBrand();
    brand.createBrand();
  }
}

const smartphoneFactory = new SmartphoneFactory();
const productManager = new ProductManager(smartphoneFactory);
productManager.createProduct();
```
