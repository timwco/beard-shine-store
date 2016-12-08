function ShopifyService () {

  // Enable Shopify API
  const shopClient = ShopifyBuy.buildClient({
    apiKey: 'c27b41e89448aa9747d3a89862ab6be4',
    domain: 'beardshine.myshopify.com',
    appId: '6'
  });

  this.fetchProduct = fetchProduct;
  this.atcButton    = atcButton;
  this.createCart   = createCart;

  function fetchProduct(id) {
    return shopClient.fetchProduct(id);
  }

  function atcButton (product) {
    let variant = product.variants[0];
    return variant.checkoutUrl(1);
  }

  function createCart () {
    return shopClient.createCart();
  }

  function setCart(cart) {
    shopCart.cart = cart;
  }

}

ShopifyService.$inject = [];
export { ShopifyService };