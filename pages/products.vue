<template>
  <section class="section content has-text-centered">
    <div class="theme-switch-wrapper">
      <label class="theme-switch" for="checkbox">
        <input type="checkbox" id="checkbox" />
        <div class="slider round">
          <i class="fas fa-moon"></i>
          <i class="fas fa-sun pl-1"></i>
        </div>
      </label>
    </div>
    <div class="container products-page">
      <div class="columns">
        <div
          class="column is-4"
          v-for="product in products"
          :key="product.product_id"
        >
          <div class="card">
            <div
              v-if="product.exclusive > 0"
              class="exclusive-banner is-uppercase"
            >
              <h6>Exclusive</h6>
            </div>
            <div class="card-image">
              <figure class="image is-4by3">
                <img :src="product.image" :alt="product.name" />
              </figure>
            </div>
            <h5 class="mt-2 product-name">{{ product.name }}</h5>
            <h6 class="rrp-price">£{{ product.rrp_price }}</h6>
            <h6 class="sale-price is-uppercase" v-if="product.sale_price > 0">
              Sale £{{ product.sale_price }}
            </h6>
            <a href="/" class="button is-medium is-uppercase mb-5">Enquire about this item</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductPage",
  data() {
    return {
      products: [
        {
          product_id: 612476,
          name: "BOSS Multi Colour Triple Pack T Shirts",
          image:
            "https://github.com/mmw-frontend/frontend_test/blob/master/images/product-images/612476.jpg?raw=true",
          rrp_price: "35",
          sale_price: "29",
          exclusive: 1,
        },
        {
          product_id: 578992,
          name: "Emporio Armani J06 Slim Fit Jeans Blue",
          image:
            "https://github.com/mmw-frontend/frontend_test/blob/master/images/product-images/578992.jpg?raw=true",
          rrp_price: "135",
          sale_price: "0",
          exclusive: 0,
        },
        {
          product_id: 629441,
          name: "adidas Originals Gazelle Trainers Burgundy",
          image:
            "https://github.com/mmw-frontend/frontend_test/blob/master/images/product-images/629441.jpg?raw=true",
          rrp_price: "75",
          sale_price: "0",
          exclusive: 0,
        },
      ],
    };
  },
};
</script>