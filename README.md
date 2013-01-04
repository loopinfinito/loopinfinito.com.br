<a href="http://loopinfinito.com.br">
	<img src="https://raw.github.com/loopinfinito/loopinfinito.com.br/master/_source/images/readme-cabecalho.jpg" alt="Loop Infinito" />
</a>

O [Loop Infinito](http://loopinfinito.com.br) é um blog focado em
desenvolvimento web front-end, como HTML5, JavaScript e CSS, em produtividade e
estilo de vida escrito por [Caio Gondim](http://twitter.com/caio_gondim) e
[Almir Filho](http://twitter.com/almirfilho), com a ajuda de muitos contribuidores.

## Como contribuir

Se você encontrou um erro e quer nos enviar a correção ou deseja escrever um
post, o primeiro passo é rodar o blog em sua máquina. Nós usamos o
[Jekyll](https://github.com/mojombo/jekyll), um gerador de site estático, como
plataforma do blog. Pra usá-lo é necessário ter o [git](http://git-scm.com/downloads) e
[Ruby](http://www.ruby-lang.org/pt/downloads/) instalados.

Para instalar o [Jekyll](https://github.com/mojombo/jekyll), digite o comando:
```bash
$ gem install jekyll
```

Instale o [Pygments](http://pygments.org/) para o _syntax highlight_:
```bash
$ sudo easy_install Pygments
```

E a _gem_ do [LESS](http://lesscss.loopinfinito.com.br/) para compilar os
arquivos `.less` no momento do _build_:
```bash
$ gem install less
```

Depois, faça um clone do blog:
```bash
$ git clone git://github.com/loopinfinito/loopinfinito.com.br.git
```

E, finalmente, para gerar o blog digite:
```bash
$ cd loopinfinito.com.br
$ jekyll
```

Agora você já pode visitar o site na url `http://localhost:4000`.
Toda mudança que for feita será automaticamente detectada e o Jekyll irá rodar
o _build_ novamente.

## Licença

<a rel="license" href="http://creativecommons.org/licenses/by/3.0/br/deed.en_US">
	<img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by/3.0/br/88x31.png" />
</a>
<br />
Este trabalho está licenciado sobre a licença <a rel="license" href="http://creativecommons.org/licenses/by/3.0/br/deed.en_US">Creative Commons Attribution 3.0 Brazil</a>.
