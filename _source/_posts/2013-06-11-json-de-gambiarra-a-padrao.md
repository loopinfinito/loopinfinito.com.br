---
title: <span>JSON</span>. De gambiarra a padrão
layout: post
author: Caio Gondim
author: Caio Gondim
author_link: http://twitter.com/caio_gondim
author_profile: https://plus.google.com/109656206006790732674/
image: images/posts/2013-04-30-json.jpg
tags: javascript
comments: false
keywords: >
  tags
resumo: >
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
---

<style>
  .parallax {
    width: 700px;
    height: 432px;
    background-image: url(/images/posts/2013-06-11-json-sample-bg.jpg);
    margin-left: -50px;
  }

  .json-logo {
    background-color: transparent !important;
    background-image: none !important;
    width: 349px !important;
    left: 50% !important;
    margin-left: -175px;
    top: 50%;
    margin-top: -175px;
  }
</style>

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<div class="parallax">
  <img class="json-logo" src="/images/posts/2013-06-11-json-logo.png" alt="JSON logo" />
</div>

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, libero,
sapiente, voluptatum dignissimos nihil nisi ut qui veritatis reprehenderit
similique expedita officia eius officiis voluptates dolore. Aperiam assumenda
iste molestias. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Dolorum excepturi fuga itaque maiores voluptas hic deserunt praesentium sapiente
id impedit. Quaerat, neque, omnis ab praesentium numquam totam odio quibusdam
consequatur.



<aside class="fonte">
  <h3>Referência</h3>
  <ul>
    <li>→
      <a href="http://google.com">
        Lorem Ipsum
      </a>
      <span class="comment">// Lorem </span>
    </li>
  </ul>
</aside>


<script>
  (function () {
    'use strict';

    var $parallax = $('.parallax')
    var parallaxInit = $('.parallax').offset().top - $(document).height()

    $(window).on('scroll', function(event) {

      var documentScrollTop = $(document).scrollTop()
      var bgPos = 0

      if (documentScrollTop > parallaxInit) {
        bgPos = ($(document).scrollTop() - parallaxInit) * 0.8
        $('.parallax').css('background-position', '0 -' + bgPos + 'px')
      }

    })
  }())
</script>
