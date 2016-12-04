function config ($urlRouterProvider, $stateProvider) {

 $stateProvider

  .state('layout', {
    abstract: true,
    templateUrl: 'templates/layout.html'
  })
  .state('layout.home', {
    url: '/',
    templateUrl: 'templates/home.html'
  })

  .state('inner', {
    abstract: true,
    templateUrl: 'templates/layout-inner.html',
  })
  .state('inner.about', {
    url: '/about',
    templateUrl: 'templates/about.html'
  })


 $urlRouterProvider.otherwise('/');

}

config.$inject = ['$urlRouterProvider', '$stateProvider'];
export { config };