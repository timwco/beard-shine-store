function ShopController (ShopifyService, $scope, ngProgressLite) {

  const vm = this;

  vm.products = [];
  vm.loading = true;

  init();
  ngProgressLite.start();

  function init() {
    ShopifyService.fetchAllProducts().then( products => {
      vm.products = products.reverse();
      vm.loading = false; // Disable Loading
      $scope.$apply(); // Hate This!!
      ngProgressLite.done();
    });
  }

}

ShopController.$inject = ['ShopifyService', '$scope', 'ngProgressLite'];
export { ShopController };