<template>
    <div class="flex items-center justify-center">
        <div class="max-w-[500px] text-center py-[120px]">
            <img src="~/assets/images/welcome-illustration.jpg" alt="ilustrasi selamat datang" class="w-[333px] mb-[20px]">
            <h1 class="text-[#1A233A] text-[20px] font-medium mb-[20px]">Selamat datang di <p class="text-[#2B7DEB] inline">siapJadi<span class="text-[#FED500]">ASN</span></p></h1>
            <p class="text-[#1A233A] text-[14px] mb-[20px]">Mulailah langkah Anda dengan melengkapi data diri Anda terlebih dahulu agar Anda dapat mengakses seluruh fitur pada SiapJadiASN</p>
            <nuxt-link to="/informasi-data-diri"><app-button :primary="true" text="Lengkapi Data Diri" class="w-max mx-auto cursor-pointer" /></nuxt-link>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'defaultbox'
})
</script>

<style lang="scss" scoped>

</style>