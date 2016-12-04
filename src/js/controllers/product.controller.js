import _ from 'lodash';

function ProductController ($stateParams, $http, ShopifyService, $scope) {

  const vm = this;
  const pid = $stateParams.id;

  vm.tagline = 'Organic Beard Oil';
  vm.atcURL  = '#';

  init();

  function init () {
    $http.get('assets/js/products.json').then( res => {
      vm.products = res.data;
      vm.product = _.find(vm.products, { sku: pid })
    });

    ShopifyService.fetchProduct(pid).then( res => {
      vm.atcURL = ShopifyService.atcButton(res);
      $scope.$apply();
    });

  }
}

ProductController.$inject = ['$stateParams', '$http', 'ShopifyService', '$scope'];
export { ProductController };