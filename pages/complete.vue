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
    <div class="container main-content">
      <h1 class="title mt-6">
        Thank You <br />
        For Your Enquiry!
      </h1>
      <p class="subtitle mt-3">We will be in touch with you soon.</p>
      <nuxt-link to="/" class="button is-medium is-uppercase"
        >Return to Start</nuxt-link
      >
    </div>
  </section>
</template>


<script>
export default {
  name: 'CompletePage',
}
</script>
