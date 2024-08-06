# Flyweight

O padrão Flyweight é um padrão de projeto estrutural que permite que você use compartilhamento para suportar eficientemente grandes quantidades de objetos de forma eficiente.

## Quando usar?

Use o padrão Flyweight quando:

- Seu aplicativo usa um grande número de objetos.
- Os custos de armazenamento são altos devido à grande quantidade de objetos.
- A maioria dos estados de objetos pode ser feita extrínseca.
- Muitos objetos podem ser substituídos por poucos objetos compartilhados.
- O aplicativo não depende do estado dos objetos.
- O aplicativo não modifica o estado dos objetos após a criação.
- O aplicativo pode armazenar e gerenciar objetos compartilhados.
- O aplicativo pode dividir o estado dos objetos em intrínseco e extrínseco.
- O aplicativo pode representar o estado extrínseco como um conjunto de parâmetros.
- O aplicativo pode passar o estado extrínseco para os objetos compartilhados.
