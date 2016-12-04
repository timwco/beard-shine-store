// Enable Shopify API
const shopClient = ShopifyBuy.buildClient({
  apiKey: 'c27b41e89448aa9747d3a89862ab6be4',
  domain: 'beardshine.myshopify.com',
  appId: '6'
});

shopClient.fetchAllProducts().then(function (products) {

  products.forEach( product => {
    let variant = product.variants[0];
    let checkoutURL = variant.checkoutUrl(1);     

    // Find Element & Create Div Container
    let elem = document.querySelector(`[data-id='${product.id}']`);
    let container = document.createElement("div");

    // Set Div contents with ATC button
    container.innerHTML = renderButton(checkoutURL);

    // Display ATC Button
    elem.appendChild(container);
  });
});


// HTML For Buy Button
function renderButton (url) {
  return `<a href="${url}" class="btn btn-white">Buy Now</a>`;
}


