# Singleton

O padrão Singleton é um padrão de projeto de criação que garante que uma classe tenha apenas uma instância e forneça um ponto global de acesso a ela.
Ele resolve problemas como:

- Garantir que uma classe tenha apenas uma instância
- Fornecer um ponto global de acesso a essa instância
- Controlar o acesso concorrente a instância única
- Reduzir o uso de memória e evitar vazamentos de memória
- Evitar que o objeto seja recriado várias vezes

Porém pode ser considerado um anti-padrão, pois pode dificultar a manutenção e teste do código além de violar o princípio da responsabilidade única, pois a classe Singleton é responsável por sua própria criação e gerenciamento.
