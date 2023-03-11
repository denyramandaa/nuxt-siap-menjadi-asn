<template>
    <div class="w-full min-h-screen flex items-center justify-center bg-ornament">
        <div class="w-full max-w-[1064px] flex">
            <div class="w-2/5">
                <img src="~/assets/images/home-login.webp" alt="login banner">
            </div>
            <div class="w-3/5 px-[62px] flex justify-center items-center bg-white">
                <div class="w-full">
                    <h1 class="mb-8">
                        <img src="~/assets/images/siapjadiASN-logo.svg" alt="siapjadiASN logo">
                    </h1>
                    <div class="w-full px-16 py-10 rounded-[20px]" style="box-shadow: 0px 4px 40px 0px #ACABB61A">
                        <h2 class="mb-3 font-medium text-[#1A233A] text-[20px]">Login dengan Akun</h2>
                        <p class="text-[#7C818C] text-[14px] mb-[30px]">Masukkan email/username dan password untuk login</p>
                        <div class="w-full">
                            <form class="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="username" class="block mb-2 text-[14px] text-[#7C818C]">Email atau Username</label>
                                    <input type="text" name="username" id="username" class="text-[#1A233A] rounded-[4px] border border-[#D6DDEE] focus:border-[#4f5562] block w-full p-2 text-[14px]" placeholder="budi@gmail.com atau BudiRaharjo" required="">
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 text-[14px] text-[#7C818C] text-[14px]">Password</label>
                                    <div class="relative">
                                        <input :type="toggleShowPassword ? 'password' : 'text'" name="password" id="password" placeholder="••••••••" class="text-[#1A233A] rounded-[4px] border border-[#D6DDEE] focus:border-[#4f5562] block w-full p-2 text-[14px]" required="">
                                        <span class="text-[#2B7DEB] text-[14px] absolute top-0 right-0 h-full flex items-center pr-[10px] cursor-pointer" @click="toggleShowPassword = !toggleShowPassword">{{ toggleShowPassword ? 'show' : 'hide' }}</span>
                                    </div>
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="">
                                        </div>
                                        <div class="ml-3 text-[14px]">
                                            <label for="remember" class="text-gray-500 text-[#1A233A]">Ingat Saya</label>
                                        </div>
                                    </div>
                                    <a href="#" class="text-[14px] font-medium text-[#2B7DEB] hover:underline">Lupa Password?</a>
                                </div>
                                <nuxt-link to="/selamat-datang"><app-button text="Masuk" :primary="true" class="w-full mt-[30px]" /></nuxt-link>
                                <p class="text-[14px] text-[#7C818C] text-center">
                                    Belum punya akun? <NuxtLink to="/register" class="font-medium text-[#2B7DEB] hover:underline">Daftar</NuxtLink>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const toggleShowPassword = ref(false)
</script>

<style lang="scss" scoped>

</style>