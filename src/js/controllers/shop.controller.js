function ShopController (ShopifyService, $scope, ngProgressLite) {

  const vm = this;

  vm.products = [];

  init();
  ngProgressLite.start();

  function init() {
    ShopifyService.fetchAllProducts().then( products => {
      vm.products = products.reverse();
      $scope.$apply(); // Hate This!!
      ngProgressLite.done();
    });
  }

}

ShopController.$inject = ['ShopifyService', '$scope', 'ngProgressLite'];
export { ShopController };