---
title: Simulando conexões no <span>Mac</span>
layout: post
author: Caio Gondim
author_link: http://twitter.com/caio_gondim
resumo: O Network Link Conditioner é uma ferramenta que acompanha o Xcode 4.1 ou superior. Com ela é possível simular diferentes tipos e condições de conexão, tanto em relação a velocidade como qualidade. Uma mão na roda para testarmos sites em conexões móveis sem precisar sair do computador.
image: images/posts/2012-07-11-simulando-conexoes-no-mac.jpg
tags: Mac
keywords: mac, os x, conexão, simulando conexão, mobile, móvel, bsd, network, firewall
comments: true
---
O Network Link Conditioner é uma ferramenta que acompanha o Xcode 4.1 ou superior.
Com ela é possível simular diferentes tipos e condições de conexão, tanto em relação a velocidade como qualidade.
Uma mão na roda para testarmos sites em conexões móveis sem precisar sair do computador.

## Instalando

Para instalar essa maravilha, é preciso estar rodando pelo menos o OS X 10.7 (Lion).
- Baixe o Xcode pela [App Store](http://itunes.apple.com/us/app/xcode/id497799835?mt=12)
- Depois que o Xcode estiver instalado, vá para a pasta `/Applications/Utilities/Network Link Conditioner/`
- Dê um clique duplo no arquivo **Network Link Conditioner.prefPane** para instalá-lo no *System Preferences*

## Utilizando

A ferramenta é bastante simples de usar.
Para simular uma conexão, escolha um perfil que deseja simular e aperte em **ON**.
Um ícone irá aparecer na sua *menubar* indicando que a ferramenta está em uso.

<img src="/images/posts/2012-07-11-network-link-conditioner-profiles.jpg" alt="Network Link Conditioner profiles" class="img" width="700" height="300" />

Por padrão, o Network Link Conditioner vem com 11 diferentes tipos de perfis, mas se mesmo assim isso for pouco para seu espírito *hardcore*, é possível também adicionar perfis customizados.
Neles podemos fazer ajustes mais finos das condições da rede que desejamos simular, como banda, latência e quantidade de pacotes perdidos.

<aside class="fonte">
	<h3>Referência</h3>
	<ul>
		<li>→<a href="http://osxdaily.com/2011/08/10/simulate-internet-connectivity-bandwidth-speeds-network-link-conditioner/" alt="Simulate Internet Connection &amp; Bandwidth Speeds with Network Link Conditioner" title="Simulate Internet Connection &amp; Bandwidth Speeds with Network Link Conditioner">OS X Daily: Simulate Internet Connection &amp; Bandwidth Speeds with Network Link Conditioner</a></li>
	</ul>
</aside>