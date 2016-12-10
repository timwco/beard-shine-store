function ShopController (ShopifyService, $scope) {

  const vm = this;

  vm.products = [];

  init();

  function init() {
    ShopifyService.fetchAllProducts().then( products => {
      console.log(products);
      vm.products = products.reverse();
      $scope.$apply(); // Hate This!!
    });
  }

}

ShopController.$inject = ['ShopifyService', '$scope'];
export { ShopController };