// Imports
import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';
import 'angular-animate';

import { config } from './utils/config';
import { run } from './utils/run';

import { LayoutController } from './controllers/layout.controller';
import { ProductController } from './controllers/product.controller';
import { ShopController } from './controllers/shop.controller';
import { CartController } from './controllers/cart.controller';

import { ShopifyService } from './services/shopify.service';

// Registration
angular
  .module('app', ['ui.router', 'ngCookies', 'ngAnimate'])
  .config(config)
  .run(run)
  .controller('LayoutController', LayoutController)
  .controller('ProductController', ProductController)
  .controller('ShopController', ShopController)
  .controller('CartController', CartController)
  .service('ShopifyService', ShopifyService)
;