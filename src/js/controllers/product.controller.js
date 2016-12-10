import _ from 'lodash';

function ProductController ($stateParams, $http, ShopifyService, $scope) {

  const vm = this;
  const pid = $stateParams.id;

  vm.tagline    = 'Organic Beard Oil';
  vm.addToCart  = addToCart;
  vm.changeQty  = changeQty;
  vm.prodObj    = { variant: 0, quantity: 1 };

  init()

  function init () {

    ShopifyService.fetchProduct(pid).then( product => {
      $http.get('assets/js/products.json').then( res => {
        vm.products = res.data;
        vm.product = _.find(vm.products, { sku: pid });
        vm.atcURL = ShopifyService.atcButton(product);
        vm.prodObj.variant = product.variants[0];
      });
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
       console.log(vm.prodObj);
       cart.createLineItemsFromVariants(vm.prodObj).then( x => {
          console.log(x);
        });
     });
  }
}

ProductController.$inject = ['$stateParams', '$http', 'ShopifyService', '$scope'];
export { ProductController };