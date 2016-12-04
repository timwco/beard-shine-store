function HomeController ($http) {

  const vm = this;

  $http.get('assets/js/products.json').then( res => {
    vm.products = res.data;
  });

}

HomeController.$inject = ['$http'];
export { HomeController };