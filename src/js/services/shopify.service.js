function ShopifyService ($cookies) {

  // Enable Shopify API
  const shopClient = ShopifyBuy.buildClient({
    apiKey: 'c27b41e89448aa9747d3a89862ab6be4',
    domain: 'beardshine.myshopify.com',
    appId: '6'
  });

  // Products
  this.fetchProduct = fetchProduct;
  this.atcButton    = atcButton;

  // Cart
  this.createCart   = createCart;
  this.addToCart    = addToCart;


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

  function addToCart() {
    let cartId = $cookies.get('shine_cart');

    shopClient.fetchCart(cartId).then( cart => {

    });


  }



}

ShopifyService.$inject = ['$cookies'];
export { ShopifyService };