[![Build Status](https://travis-ci.org/ReactiveX/rxjs.svg?branch=master)](https://travis-ci.org/ReactiveX/rxjs)
[![Coverage Status](https://coveralls.io/repos/github/ReactiveX/rxjs/badge.svg?branch=master)](https://coveralls.io/github/ReactiveX/rxjs?branch=master)
[![npm version](https://badge.fury.io/js/%40reactivex%2Frxjs.svg)](http://badge.fury.io/js/%40reactivex%2Frxjs)
[![Join the chat at https://gitter.im/Reactive-Extensions/RxJS](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/Reactive-Extensions/RxJS?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![Selenium Test Status](https://saucelabs.com/browser-matrix/rxjs5.svg)](https://saucelabs.com/u/rxjs5)

# BRxJS

Biblioteca de Extensões Reativas para Javascript traduzida para Português. Esta é uma tradução do RxJS 5 em sua versão estável. O RxJS é uma reescrita de [Reactive-Extensions/RxJS](https://github.com/Reactive-Extensions/RxJS) e é a última versão pronta para produção do RxJS. Esta reescrita é para ter uma melhor performance, melhor modularidade, melhores debugs, ficar compatível com versões anteriores, com algumas mudanças essenciais que reduzem a superfície da API.

[Apache 2.0 License](LICENSE.txt)

- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Contribution Guidelines](CONTRIBUTING.md)
- [Maintainer Guidelines](doc/maintainer-guidelines.md)
- [Creating Operators](doc/operator-creation.md)
- [Migrating From RxJS 4 to RxJS 5](MIGRATION.md)
- [API Documentation (WIP)](http://reactivex.io/rxjs)

## Versions In This Repository

- [master](https://github.com/ReactiveX/rxjs/commits/master) - commits que serão incluidos no próximo lançamento de next _minor_ ou _patch_
- [next](https://github.com/ReactiveX/rxjs/commits/next) - commits que serão incluídos no próximo lançamento de _major_ (novidades)

Maioria dos Pull Requests devem ser feitas para **master**, ao menos que você saiba que é uma novidade.

## Importante

Por contribuir ou comentar em problemas neste repositório, tenha lido ou não, você está concordando com o [Contributor Code of Conduct](CODE_OF_CONDUCT.md). Parecido com regra de tráfego, ignorância não te dá imunidade.

## Instalação e uso

### ES6 via npm

```sh
npm install rxjs
```

Para importar o conjunto de funcionalidades em seu projeto:

```js
import Rx from 'rxjs/Rx';

Rx.Observable.of(1,2,3)
```

Para importar somente os que você está usando (útil para projetos com preocupação com tamanho):

```js
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

Observable.of(1,2,3).map(x => x + '!!!'); // etc
```

Para importar o que você precisa e usá-lo com o operador [bind operator](https://github.com/tc39/proposal-bind-operator):

> Nota: Esta sintaxe adicional requere [transpiler support](http://babeljs.io/docs/plugins/transform-function-bind/) e esta sintaxe pode ser completamente do TC39 sem aviso! Use sob sua responsabilidade.

```js
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operator/map';

Observable::of(1,2,3)::map(x => x + '!!!'); // etc
```

### CommonJS via npm

Para instalar esta biblioteca para uso em CommonJS (CJS), use o seguinte comando:

```sh
npm install rxjs
```

Importar toda funcionalidade:

```js
var Rx = require('rxjs/Rx');

Rx.Observable.of(1,2,3); // etc
```

Importar somente o que você precisa e empacotar o Observable (útil para cenários com preocupação com tamanho):

```js
var Observable = require('rxjs/Observable').Observable;
// empacote o Observable com métodos apropriados
require('rxjs/add/observable/of');
require('rxjs/add/operator/map');

Observable.of(1,2,3).map(function (x) { return x + '!!!'; }); // etc
```

Importar operadores e usá-los _manualmente_, faça o seguinte (também útil para empacotamentos):

```js
var of = require('rxjs/observable/of').of;
var map = require('rxjs/operator/map').map;

map.call(of(1,2,3), function (x) { return x + '!!!'; });
```

Você também pode usar os métodos acima para criar seu próprio Observable e exportá-lo do seu próprio módulo.


### Todos Tipos de Módulo (CJS/ES6/AMD/TypeScript) via npm

Para instalar esta biblioteca via [npm](https://www.npmjs.org) **version 3**, use o seguinte comando:

```sh
npm install @reactivex/rxjs
```

Isto irá incluir _builds_ com CJS/Global e pode ser usado para todos os tipos de módulo.

Se você está usando a **versão 2** do npm, antes desta biblioteca alcançar uma versão estável, você precisa especificar a versão da biblioteca explicitamente:

```sh
npm install @reactivex/rxjs@5.0.0
```

### CDN

Para CDN, você pode usar [unpkg](https://unpkg.com/):
  
https://unpkg.com/rxjs/bundles/Rx.min.js

#### Uso com Node.js:

```js
var Rx = require('@reactivex/rxjs');

Rx.Observable.of('olá mundo')
  .subscribe(function(x) { console.log(x); });
```

## Metas

- Fornecer melhor performance que versões anteriores do RxJS
- Modelar/Seguir o [Observable Spec Proposal](https://github.com/zenparsing/es-observable) para o observable.
- Fornecer mais estruturas de arquivos modulares em uma variedade de formatos
- Fornecer mais possibilidade de debug que versões anteriores do RxJS

## Construções/Testes

A estrutura de _build_ e teste é relativamente primitiva no momento. Há vários scripts do npm que podem rodar:

- build_es6: Transpila os arquivos TypeScript de `src/` para `dist/es6`
- build_cjs: Transpila os arquivos TypeScript de `dist/es6` para `dist/cjs`
- build_amd: Transpila os arquivos TypeScript de `dist/es6` para `dist/amd`
- build_global: Transpila/Empacota os arquivos CommonJS de `dist/cjs` para `dist/global/Rx.js`
- build_all: Executa todos os itens acima na ordem correta.
- build_test: constrói ES6, então CommonJS, para então rodar os testes com `jasmine`
- build_perf: constrói ES6, CommonJS, então o global, para então rodar os testes de performance com `protractor`
- build_docs: gera documentação de API de `dist/es6` para `dist/docs`
- build_cover: roda cobertura de código `istanbul` contra testes de caso
- test: roda testes com `jasmine`, deve ter sido construído para rodar.
- tests2png: gera diagramas de sequência em PNG a partir de casos de teste.

`npm run info` irá listar scripts disponíveis.

### Exemplo

```sh
# constrói tudo!
npm run build_all
```

## Testes de Performance

Rode `npm run build_perf` ou `npm run perf` para começar os testes de performance com `protractor`.
Rode `npm run perf_micro` para começar o operador de benchmarking de teste de micro desempenho.

## Adicionando documentação
RxNext usa [ESDoc](https://esdoc.org/) para gerar documentação de API. Se refira à documentação do ESDoc para sintaxe. Rode `npm run build_docs` para gerar.

## Gerando diagramas de sequência em PNG

O script `npm run tests2png` requere alguns pacotes nativos instalados localmente: `imagemagick`, `graphicsmagick`, e `ghostscript`.

Para Mac OS X com [Homebrew](http://brew.sh/):

- `brew install imagemagick`
- `brew install graphicsmagick`
- `brew install ghostscript`
- Você pode precisar instalar as fonts Ghostscript manualmente:
  - Faça o download do tarball do [gs-fonts project](https://sourceforge.net/projects/gs-fonts)
  - `mkdir -p /usr/local/share/ghostscript && tar zxvf /path/to/ghostscript-fonts.tar.gz -C /usr/local/share/ghostscript`

Para Debian Linux:

- `sudo add-apt-repository ppa:dhor/myway`
- `apt-get install imagemagick`
- `apt-get install graphicsmagick`
- `apt-get install ghostscript`

Para Windows e outros Sistemas operacionais, confira as instruções de download aqui:

- http://imagemagick.org
- http://www.graphicsmagick.org
- http://www.ghostscript.com/
