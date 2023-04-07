<template>
  <div class="max-w-[225px] w-full mr-[20px]">
    <div class="w-full rounded-[10px] bg-white p-[32px]">
      <nuxt-link
        v-for="(item, key) in sideMenu"
        :key="key"
        :to="item.slug"
        class="flex mb-[24px] mb-[24px]"
      >
        <img
          class="w-[20px] mr-[10px]"
          src="~/assets/images/side-menu/icon-kelola-pengguna.svg"
          :alt="'icon-' + item.slug"
        />
        <p class="text-[#7C818C] text-[14px]">{{ item.name }}</p>
      </nuxt-link>
    </div>
  </div>
</template>
<script setup>
const store = useSideMenuList();
const sideMenu = store.getUserMenuList;

console.log("sideMenu", sideMenu);
</script>
