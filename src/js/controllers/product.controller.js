function ProductController ($stateParams, $http, ShopifyService, $scope, $state, $sce, ngProgressLite) {

  const vm = this;
  const pid = $stateParams.id;

  vm.tagline    = 'Organic Beard Oil';
  vm.addToCart  = addToCart;
  vm.changeQty  = changeQty;
  vm.prodObj    = { variant: 0, quantity: 1 };

  init();
  ngProgressLite.start();

  function init () {

    ShopifyService.fetchProduct(pid).then( product => {
      vm.product = product;
      vm.description = $sce.trustAsHtml(product.description);
      vm.atcURL = ShopifyService.atcButton(product);
      vm.prodObj.variant = product.variants[0];
      $scope.$apply(); // Hate This!!
      ngProgressLite.done();
    });

  }

  function changeQty (how) {
    vm.prodObj.quantity = (how === 'up') ? vm.prodObj.quantity + 1 : vm.prodObj.quantity - 1;
    // Can't dip below 1 :)
    if (vm.prodObj.quantity === 0) {
      vm.prodObj.quantity = 1;
    }
  }

  function addToCart () {
     ShopifyService.getCart().then( cart => {
       cart.createLineItemsFromVariants(vm.prodObj).then( x => {
          $state.go('layout.cart');
        });
     });
  }
}

ProductController.$inject = ['$stateParams', '$http', 'ShopifyService', '$scope', '$state', '$sce', 'ngProgressLite'];
export { ProductController };