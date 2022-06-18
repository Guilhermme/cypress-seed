# SEED PARA PROJETO AUTOMAÇÃO DE TESTES FRONT-END E API's

### Neste projeto é utilizada a ferramenta cypress.io

* Extensões sugeridas

1. Cypress
2. ESlint
3. Cucumber Gherkin

### No terminal digite o comando abaixo para que o node instale as dependencias

```
npm i
```


### Variaveis de Ambiente comandos e observações sobre o projeto

* Sua pasta cypress.json é a env "pai", onde ficam as configurações globais independente de qualquer ambiente.

* Sua pasta config é a env "filho" onde ficam as configurações de cada ambiente `develop`, `producao` e `stage`.

* Sua pasta integration é onde ficam os aruivos de testes `API` e `FRONTEND`

* Sua pasta support `API` e `FRONTEND` ficam os comandos e funções para auxilio nos testes.


1. Para alternar entre qual ambiente executar vá na pasta `plugins` no arquivo `index.js` siga o exemplo abaixo.

2. Altere a linha 19 colocando entre string o nome do arquivo env ex: `const file = config.env.configFile || 'stage'`. 



### Para que o node chame o cypress e abra uma interface para executar os testes em interface

```
npm run cy:open
```

### Para que o node chame o cypress e execute apenas os testes de front em headless

```
npm run cy:front
```

### Para que o node chame o cypress e execute apenas os testes de back em headless

```
npm run cy:back
```

### Para que o node chame o cypress e execute apenas um arquivo de teste em headless

```
npm run cy:feature **/NAMEFILE.test.js
```
