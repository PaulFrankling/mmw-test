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
        <div class="column is-3">
          <h1>{{ this.$route.params.id }}</h1>
        </div>
        <div class="column is-3">
          <h1>{{ this.$route.params.id }}</h1>
        </div>
        <div class="column is-6">
          <h1>{{ this.$route.params.id }}</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductIdPage",
};
</script>