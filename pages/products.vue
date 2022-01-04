<template>
  <section class="section content has-text-centered product-pages">
    <div class="theme-switch-wrapper">
      <label class="theme-switch" for="checkbox">
        <input type="checkbox" id="checkbox" />
        <div class="slider round">
          <i class="fas fa-moon"></i>
          <i class="fas fa-sun pl-1"></i>
        </div>
      </label>
    </div>
    <div class="container products-content">
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
                <img
                  :src="
                    require(`~/assets/images/products/${product.product_id}.jpg`)
                  "
                  :alt="product.name"
                />
              </figure>
            </div>
            <h5 class="mt-2 product-name">{{ product.name }}</h5>
            <h6
              class="rrp-price"
              v-bind:style="[
                product.sale_price > 0
                  ? { 'text-decoration': 'line-through' }
                  : { 'text-decoration': 'none' },
              ]"
            >
              £{{ product.rrp_price }}
            </h6>
            <h6 class="sale-price is-uppercase" v-if="product.sale_price > 0">
              Sale £{{ product.sale_price }}
            </h6>
            <NuxtLink
              :to="{ name: 'product-id', params: { id: product.product_id } }"
              class="button product-button is-medium is-uppercase mb-5"
              >Enquire about this item</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  activated() {
    // Call fetch again if last fetch more than 30 sec ago
    if (this.$fetchState.timestamp <= Date.now() - 30000) {
      this.$fetch();
    }
  },
  async fetch() {
    this.products = await fetch(
      "https://frontendtest.mainlinemenswear.co.uk/products"
    ).then((res) => res.json());
  },
};
</script>

<style lang="scss">
html {
  min-height: 100%;
  background-image: var(--product-background);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>
