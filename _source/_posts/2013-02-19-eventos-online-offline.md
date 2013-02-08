---
title: Eventos online e offline
layout: post
author: Caio Gondim
author_link: http://twitter.com/caio_gondim
author_profile: https://plus.google.com/109656206006790732674/
image: images/posts/2013-02-19-eventos-online-offline.jpg
tags: html
comments: false
keywords: >
  html5, eventos, events
resumo: >
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet ex
  voluptas asperiores reiciendis ipsum voluptate natus voluptatibus hic
  cum fugiat fugit beatae consectetur est! Optio laboriosam dolorum praesentium
  officia et.
---

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia ex voluptatum
exercitationem quos consequatur accusantium consequuntur ipsa ea at similique
rem sint! Nesciunt debitis nisi ipsa eligendi sint fuga mollitia.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate suscipit
veritatis odio vero repudiandae similique minima aperiam incidunt consequuntur
commodi. Voluptate numquam eveniet nihil officia incidunt repellendus inventore
harum accusamus.


<aside class="fonte">
  <h3>Referência</h3>
  <ul>
    <li>→
      <a href="#">
			Lorem Ipsum
      </a>
      <span class="comment">// Lorem </span>
    </li>
  </ul>
</aside>


<style>

  /* Widget
   -------------------- */
  .widget-conexao-status {
    position: fixed;
    top: 50% !important;
    left: 50% !important;
    margin-top: -150px;
    margin-left: -150px;
    width: 300px !important;
    height: 300px !important;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.7);
    -webkit-box-shadow: rgba(0, 0, 0, 0.7);
    -moz-box-shadow: rgba(0, 0, 0, 0.7);
    -ms-box-shadow: rgba(0, 0, 0, 0.7);
    box-shadow: rgba(0, 0, 0, 0.7);
    opacity: 0;
  }

  /* Plug
   -------------------- */
  .widget-plug {
    position: absolute !important;
    background-image: none !important;
    background-color: transparent !important;
    -webkit-transition: all 0.4s ease-out 0.7s;
    -moz-transition: all 0.4s ease-out 0.7s;
    -ms-transition: all 0.4s ease-out 0.7s;
    transition: all 0.4s ease-out 0.7s;
  }

  .widget-plug-macho {
    width: 166px !important;
  }

  .widget-plug-femea {
    width: 140px !important;
  }

  /* Widget online
   -------------------- */
  .online .widget-conexao-status {
    opacity: 0;
    -webkit-transform: scale(1.3);
    -moz-transform: scale(1.3);
    -ms-transform: scale(1.3);
    transform: scale(1.3);
    -webkit-transition: all 0.4s 0.7s ease-out;
    -moz-transition: all 0.4s 0.7s ease-out;
    -ms-transition: all 0.4s 0.7s ease-out;
    transition: all 0.4s 0.7s ease-out;
  }
    .online .widget-plug {
      transform: scale(1);
      -webkit-transition: all 0.5s 0s ease-in;
      -moz-transition: all 0.5s 0s ease-in;
      -ms-transition: all 0.5s 0s ease-in;
      transition: all 0.5s 0s ease-in;
    }

    .online .widget-plug-macho {
      bottom: 45px !important;
      left: 45px !important;
    }

    .online .widget-plug-femea {
      top: 45px !important;
      left: 115px !important;
    }

  /* Widget offline
   -------------------- */
  .offline .widget-conexao-status {
    opacity: 1;
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    -webkit-transition: all 0.5s ease-in;
    -moz-transition: all 0.5s ease-in;
    -ms-transition: all 0.5s ease-in;
    transition: all 0.5s ease-in;
  }

    .offline .widget-plug-macho {
      bottom: 20px !important;
      left: 20px !important;
    }

    .offline .widget-plug-femea {
      top: 20px !important;
      left: 140px !important;
    }

</style>

<div class="widget-conexao-status">
  <img class="widget-plug widget-plug-macho" src="/images/posts/2013-02-19-plug-macho.png" alt="" />
  <img class="widget-plug widget-plug-femea" src="/images/posts/2013-02-19-plug-femea.png" alt="" />
</div>

<script>
  $(function() {
    $('body')
      .addClass('online')

    $(window)
      .on('online', function(event) {
        $('body')
          .removeClass('offline')
          .addClass('online')
      })
      .on('offline', function(event) {
        $('body')
          .removeClass('online')
          .addClass('offline')
      })
  })
</script>
