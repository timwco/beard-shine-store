function CartController (ShopifyService, $state) {

  let vm = this;
 
  vm.removeItem = removeItem;

  init();

  function init() {
    ShopifyService.getCart().then( cart => {
      vm.products = cart.lineItems;
      vm.subtotal = cart.subtotal;
      vm.checkoutUrl = cart.checkoutUrl;
    });
  }

  function removeItem(id) {
    ShopifyService.getCart().then( cart => {
      cart.removeLineItem(id).then( cart => {
        $state.reload();
      });
    });
  } 

}

CartController.$inject = ['ShopifyService', '$state'];
export { CartController };