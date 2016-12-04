// Imports
import angular from 'angular';
import 'angular-ui-router';

import { config } from './utils/config';
import { HomeController } from './controllers/home.controller';
import { ProductController } from './controllers/product.controller';

import { ShopifyService } from './services/shopify.service';

// Registration
angular
  .module('app', ['ui.router'])
  .config(config)
  .controller('HomeController', HomeController)
  .controller('ProductController', ProductController)
  .service('ShopifyService', ShopifyService)
;