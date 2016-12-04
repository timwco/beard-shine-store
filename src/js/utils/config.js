function config ($urlRouterProvider, $stateProvider) {

 $stateProvider

  // Home Page
  .state('layout', {
    abstract: true,
    templateUrl: 'templates/layouts/layout.html'
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


 $urlRouterProvider.otherwise('/');

}

config.$inject = ['$urlRouterProvider', '$stateProvider'];
export { config };