function config ($urlRouterProvider, $stateProvider) {

 $stateProvider

  // Home Page
  .state('layout', {
    abstract: true,
    templateUrl: 'templates/layouts/layout.html',
    controller: 'LayoutController as vm'
  })
  .state('layout.home', {
    url: '/',
    templateUrl: 'templates/pages/home.html',
    controller: 'HomeController as vm'
  })

  // Interior Pages
  .state('inner', {
    abstract: true,
    templateUrl: 'templates/layouts/layout-inner.html',
    controller: 'LayoutController as vm'
  })
  .state('inner.about', {
    url: '/about',
    templateUrl: 'templates/pages/about.html'
  })
  .state('inner.contact', {
    url: '/contact',
    templateUrl: 'templates/pages/contact.html'
  })
  .state('inner.faq', {
    url: '/faq',
    templateUrl: 'templates/pages/faq.html'
  })

  // Product Pages
  .state('inner.single', {
    url: '/product/:id',
    templateUrl: 'templates/products/single.html',
    controller: 'ProductController as vm'
  })

  // Cart Pages
  .state('inner.cart', {
    url: '/cart',
    templateUrl: 'templates/products/cart.html',
    controller: 'CartController as vm'
  })


 $urlRouterProvider.otherwise('/');

}

config.$inject = ['$urlRouterProvider', '$stateProvider'];
export { config };