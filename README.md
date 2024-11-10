# 🧙‍♂️ Jogo de Heróis - Calculadora de Ataques

## Descrição

Este projeto é um programa de console em Node.js que simula um sistema de ataques de heróis em um jogo de aventura. O programa permite que o usuário crie um herói com as propriedades de **nome**, **idade** e **tipo** (ex: mago, guerreiro, monge, ninja) e exibe uma mensagem personalizada de ataque com base no tipo do herói. Para coletar os dados do usuário, o código utiliza o módulo `readline` do Node.js, permitindo uma interação direta pelo terminal.

## Objetivo

O programa tem o objetivo de:
1. Solicitar ao usuário informações sobre o herói, incluindo o nome, a idade e o tipo.
2. Criar uma instância de uma classe `Heroi` com as informações fornecidas.
3. Usar o método `atacar` da classe `Heroi` para exibir uma mensagem específica de ataque de acordo com o tipo do herói:
   - **mago**: "usou magia"
   - **guerreiro**: "usou espada"
   - **monge**: "usou artes marciais"
   - **ninja**: "usou shuriken"

Caso o tipo do herói seja diferente dos tipos pré-definidos, o ataque será descrito como "realizou um ataque básico".

## Estrutura do Projeto

- **Classe `Heroi`**: Define as propriedades e o método `atacar`, responsável por exibir a mensagem de ataque específica.
- **Entrada de dados**: Captura as propriedades do herói (nome, idade e tipo) via `readline`, proporcionando uma experiência de entrada interativa.
- **Saída de dados**: Uma mensagem dinâmica que informa o tipo de ataque usado pelo herói.

## Exemplo de Saída

Após inserir os dados, o programa exibe uma mensagem como:

```
O mago atacou usando magia
```

Para o exemplo acima, o usuário inseriu:
- Nome: Gandalf
- Idade: 150
- Tipo: mago

