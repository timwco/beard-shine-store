function CartController (ShopifyService) {

  let vm = this;

  init();

  function init() {

    ShopifyService.getCart().then( cart => {
      vm.products = cart.lineItems;
    });
  }

}

CartController.$inject = ['ShopifyService'];
export { CartController };