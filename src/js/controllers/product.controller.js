import _ from 'lodash';

function ProductController ($stateParams, $http, ShopifyService, $scope) {

  const vm = this;
  const pid = $stateParams.id;

  vm.tagline = 'Organic Beard Oil';
  vm.atcURL  = '#';

  init();

  function init () {

    ShopifyService.fetchProduct(pid).then( product => {
      $http.get('assets/js/products.json').then( res => {
        vm.products = res.data;
        vm.product = _.find(vm.products, { sku: pid })
        vm.atcURL = ShopifyService.atcButton(product);
      });
    });

  }
}

ProductController.$inject = ['$stateParams', '$http', 'ShopifyService', '$scope'];
export { ProductController };