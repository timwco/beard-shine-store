// Imports
import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';

import { config } from './utils/config';
import { HomeController } from './controllers/home.controller';
import { ProductController } from './controllers/product.controller';

import { ShopifyService } from './services/shopify.service';

// Registration
angular
  .module('app', ['ui.router', 'ngCookies'])
  .config(config)
  .controller('HomeController', HomeController)
  .controller('ProductController', ProductController)
  .service('ShopifyService', ShopifyService)


  .run( (ShopifyService, $cookies) => {

    let cart = $cookies.get('shine_cart');

    if (!cart) {
      ShopifyService.createCart().then( cart => {
        $cookies.put('shine_cart', cart.id);
      });
    }

  })
;