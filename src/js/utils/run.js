function run (ShopifyService, $cookies, $rootScope) {

    let cart = $cookies.get('shine_cart');

    if (!cart) {
      ShopifyService.createCart().then( cart => {
        $cookies.put('shine_cart', cart.id);
      });
    }

    $rootScope.$on('$stateChangeSuccess', data => {
      ShopifyService.getCart().then( cart => {
        $rootScope.$broadcast('cartQty', cart.lineItemCount);
      });
    });

}

run.$inject = ['ShopifyService', '$cookies', '$rootScope'];
export { run };