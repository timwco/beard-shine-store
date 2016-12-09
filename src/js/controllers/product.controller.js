import _ from 'lodash';

function ProductController ($stateParams, $http, ShopifyService, $scope) {

  const vm = this;
  const pid = $stateParams.id;

  vm.tagline    = 'Organic Beard Oil';
  vm.addToCart  = addToCart;
  vm.changeQty  = changeQty;
  vm.prodObj    = {
    product: {},
    qty: 1
  };

  init()

  function init () {

    ShopifyService.fetchProduct(pid).then( product => {
      $http.get('assets/js/products.json').then( res => {
        vm.products = res.data;
        vm.product = _.find(vm.products, { sku: pid });
        vm.atcURL = ShopifyService.atcButton(product);
        vm.prodObj.product = product;
      });
    });

  }

  function changeQty (how) {
    vm.prodObj.qty = (how === 'up') ? vm.prodObj.qty + 1 : vm.prodObj.qty - 1;
    // Can't dip below 1 :)
    if (vm.prodObj.qty === 0) {
      vm.prodObj.qty = 1;
    }
  }

  function addToCart () {
    
  }

}

ProductController.$inject = ['$stateParams', '$http', 'ShopifyService', '$scope'];
export { ProductController };