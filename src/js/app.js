// Imports
import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';

import { config } from './utils/config';
import { run } from './utils/run';

import { LayoutController } from './controllers/layout.controller';
import { HomeController } from './controllers/home.controller';
import { ProductController } from './controllers/product.controller';
import { CartController } from './controllers/cart.controller';

import { ShopifyService } from './services/shopify.service';

// Registration
angular
  .module('app', ['ui.router', 'ngCookies'])
  .config(config)
  .run(run)
  .controller('LayoutController', LayoutController)
  .controller('HomeController', HomeController)
  .controller('ProductController', ProductController)
  .controller('CartController', CartController)
  .service('ShopifyService', ShopifyService)
;