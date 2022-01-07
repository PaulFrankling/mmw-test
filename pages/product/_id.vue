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
      <form
        class="control"
        action="https://frontendtest.mainlinemenswear.co.uk/submit"
        method="POST"
        id="form"
      >
        <div class="columns card">
          <div class="column is-3">
            <div
              v-if="product.product[0].exclusive > 0"
              class="exclusive-banner is-uppercase"
            >
              <h6>Exclusive</h6>
            </div>
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  :src="
                    require(`~/assets/images/products/${product.product[0].product_id}.jpg`)
                  "
                  :alt="product.product[0].name"
                />
              </figure>
            </div>
            <h5 class="product-name mt-2">{{ product.product[0].name }}</h5>
            <h6
              class="rrp-price"
              v-bind:style="[
                product.product[0].sale_price > 0
                  ? { 'text-decoration': 'line-through' }
                  : { 'text-decoration': 'none' },
              ]"
            >
              £{{ product.product[0].rrp_price }}
            </h6>
            <h6
              class="sale-price is-uppercase"
              v-if="product.product[0].sale_price > 0"
            >
              Sale £{{ product.product[0].sale_price }}
            </h6>
            <div>
              <input
                type="hidden"
                name="productId"
                :value="product.product[0].product_id"
              />
            </div>
          </div>
          <div class="column is-3 has-text-centered">
            <div>
              <label class="is-uppercase size-label">Select your size*</label>
            </div>
            <div class="select size-select">
              <select
                name="sizeSelected"
                class="is-uppercase has-text-centered"
                required
              >
                <option :value="product.sizes[0].size">Small</option>
                <option :value="product.sizes[1].size">Medium</option>
                <option :value="product.sizes[2].size" selected>Large</option>
                <option :value="product.sizes[3].size">X Large</option>
                <option :value="product.sizes[4].size">XX Large</option>
              </select>
            </div>
          </div>
          <div class="column is-6">
            <div class="field">
              <label class="label has-text-left-desktop">Full Name*</label>
              <div class="control">
                <input
                  class="input"
                  id="fullname"
                  placeholder="John Smith"
                  name="fullname"
                  type="text"
                  required
                />
              </div>
            </div>

            <div class="field">
              <label class="label has-text-left-desktop">Email*</label>
              <div class="control">
                <input
                  class="input"
                  id="email"
                  placeholder="john.smith@example.com"
                  name="email"
                  type="email"
                  required
                />
              </div>
            </div>
            <div class="control has-text-left-desktop">
              <div>
                <label class="has-text-weight-bold label"
                  >Have you found this item cheaper on a competitor
                  website?*</label
                >
              </div>
              <label class="radio">
                <input type="radio" name="competitor" value="yes" />
                Yes
              </label>
              <label class="radio">
                <input type="radio" name="competitor" value="no" checked />
                No
              </label>
            </div>
            <div class="control has-text-left-desktop mt-2">
              <label class="has-text-weight-bold label">Competitor URL</label>
              <input class="input" name="competitorUrl" type="text" />
            </div>
            <div>
              <label
                class="has-text-weight-bold label has-text-left-desktop mt-5"
                >Enquiry Message*</label
              >
              <textarea
                class="textarea"
                rows="3"
                name="enquiry"
                id="enquiry"
                minlength="50"
                maxlength="200"
                required
              ></textarea>
            </div>
            <legend class="has-text-left-desktop mb-2 has-text-weight-bold">
              Fields marked with an *asterisk are compulsory.
            </legend>
            <div class="field is-grouped is-grouped-right">
              <p class="control">
                <button
                  class="button is-primary is-uppercase submit-btn"
                  type="submit"
                >
                  Submit Your Enquiry
                </button>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ params, $http }) {
    const product = await $http.$get(
      `https://frontendtest.mainlinemenswear.co.uk/product/${params.id}`
    );
    return { product };
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
