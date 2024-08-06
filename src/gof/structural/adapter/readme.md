# Adapter

É um padrão de projeto estrutural utilizado para converter uma estrutura de uma classe em outra, criando compatibilidade e removendo acoplamento.

## Quando usar?

- Quando você deseja usar uma classe existente, mas sua interface não é compatível com a interface que você precisa.
- Quando você deseja criar uma classe reutilizável que coopere com classes não relacionadas ou não previstas, ou seja, classes que não necessariamente possuem interfaces compatíveis.
- Quando você deseja usar várias subclasses existentes, mas é impraticável adaptar suas interfaces por meio de herança para cada uma delas. Uma classe adaptadora pode adaptar a interface de sua classe-mãe.
- Quando você deseja reutilizar várias subclasses existentes que carecem de algumas funcionalidades que não podem ser adicionadas a cada classe. Uma classe adaptadora pode fornecer essas funcionalidades.
- Quando você deseja reutilizar classes que estão em bibliotecas ou módulos, mas não deseja modificar o código-fonte original. Uma classe adaptadora pode ser criada para fornecer a interface necessária.
