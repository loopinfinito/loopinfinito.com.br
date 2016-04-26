# Como contribuir

Se você quiser contribuir com alguma correção ou melhora, o primeiro passo é
instalar as dependências do projeto em sua máquina. O Loop Infinito é
estaticamente gerado com o [metalsmith][metalsmith] e todas suas dependências
são baseadas em node.js.


## Instalando as dependências globais

Você precisa ter apenas o [node.js][node] v4+ e, opcionalmente, o [grunt][grunt]
instalados na sua máquina para rodar o projeto.


### Instale o node.js

Você pode instalar o node.js de diversas maneiras. Algumas são:
[homebrew][brew] (como abaixo), [nvm][nvm] e [várias outras][outras].

```bash
$ brew install node
```


### Instale o grunt (opcional)

Todos os workflows estão automatizados com o grunt. No entanto, não é necessário
ter o `grunt-cli` instalado globalmente para utilizá-los, mas se você quiser
facilidade, aconselho sua instalação:

```bash
$ npm install grunt-cli -g
```


## Instalando o projeto

Finalmente, faça um clone do projeto:

```bash
$ git clone git://github.com/loopinfinito/loopinfinito.com.br.git
```

Depois, instale as dependências locais:

```bash
$ cd loopinfinito.com.br
$ npm install
```


## Rodando o projeto

Após concluídas todas as instalações, você está apto a rodar o projeto
localmente com:

```bash
$ grunt run
```

Ou, sem o `grunt-cli`:

```bash
$ npm run grunt -- run
```

Sua cópia do Loop Infinito agora está acessível via _http://localhost:8888_.


### Workflows

TODO


## Guideline para contribuições

TODO


[metalsmith]: http://metalsmith.io
[node]: https://nodejs.org
[grunt]: http://gruntjs.com
[brew]: http://brew.sh
[nvm]: https://github.com/creationix/nvm
[outras]: https://gist.github.com/isaacs/579814
