function ShopifyService ($cookies) {

  // Enable Shopify API
  const shopClient = ShopifyBuy.buildClient({
    apiKey: 'c27b41e89448aa9747d3a89862ab6be4',
    domain: 'beardshine.myshopify.com',
    appId: '6'
  });

  // Products
  this.fetchAllProducts  = fetchAllProducts;
  this.fetchProduct      = fetchProduct;
  this.atcButton         = atcButton;

  // Cart
  this.createCart     = createCart;
  this.getCart        = getCart;


  function fetchAllProducts() {
    return shopClient.fetchAllProducts();
  }

  function fetchProduct(id) {
    return shopClient.fetchProduct(id);
  }

  function atcButton(product) {
    let variant = product.variants[0];
    return variant.checkoutUrl(1);
  }

  function createCart() {
    return shopClient.createCart();
  }

  function getCart() {
    let cartId = $cookies.get('shine_cart');
    return shopClient.fetchCart(cartId);
  }



}

ShopifyService.$inject = ['$cookies'];
export { ShopifyService };