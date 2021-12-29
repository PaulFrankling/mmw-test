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
    {{this.$route.params.id}}
  </section>
</template>

<script>
export default {
  name: "ProductIdPage",
  data() {
    return {
      id: this.$route.params.product_id
    };
  },
};
</script>