<template>
  <div
    class="w-full min-h-screen flex justify-center items-center text-white flex-wrap bg-ornament"
  >
    <div>
      <img
        src="~/assets/images/siapjadiASN-logo.svg"
        alt="logo siapjadiASN"
        class="mb-[20px]"
      />
      <nuxt-link to="/login"><AtomsAppButton text="Masuk" :primary="true" /></nuxt-link>
    </div>
  </div>
</template>
<script>
definePageMeta({
  layout: "defaultreset",
});
</script>
