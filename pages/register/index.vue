<template>
    <div class="w-full min-h-screen flex items-center justify-center">
        <div class="w-full max-w-[1064px] flex">
            <div class="w-2/5">
                <img src="~/assets/images/home-login.webp" alt="login banner">
            </div>
            <div class="w-3/5 px-[62px] flex justify-center items-center">
                <div class="w-full">
                    <h1 class="mb-8">
                        <img src="~/assets/images/siapjadiASN-logo.svg" alt="siapjadiASN logo">
                    </h1>
                    <div class="w-full px-16">
                        <h2 class="mb-3 font-medium text-[#1A233A] text-[20px]">Daftar</h2>
                        <p class="text-[#7C818C] text-[14px] mb-[30px]">Daftar untuk bisa mengerjakan Try Out di siapjadiASN</p>
                        <div class="w-full">
                            <form class="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="name" class="block mb-2 text-[14px] text-[#7C818C]">Nama Lengkap</label>
                                    <input type="text" name="name" id="name" class="text-[#1A233A] rounded-[4px] border border-[#D6DDEE] focus:border-[#4f5562] block w-full p-2 text-[14px]" placeholder="Nama Lengkap" required="">
                                </div>
                                <div>
                                    <label for="username" class="block mb-2 text-[14px] text-[#7C818C]">Username</label>
                                    <input type="text" name="username" id="username" class="text-[#1A233A] rounded-[4px] border border-[#D6DDEE] focus:border-[#4f5562] block w-full p-2 text-[14px]" placeholder="Username" required="">
                                </div>
                                <div>
                                    <label for="email" class="block mb-2 text-[14px] text-[#7C818C]">Email</label>
                                    <input type="email" name="email" id="email" class="text-[#1A233A] rounded-[4px] border border-[#D6DDEE] focus:border-[#4f5562] block w-full p-2 text-[14px]" placeholder="namaemail@gmail.com" required="">
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 text-[14px] text-[#7C818C] text-[14px]">Password</label>
                                    <div class="relative">
                                        <input :type="toggleShowPassword ? 'password' : 'text'" name="password" id="password" placeholder="••••••••" class="text-[#1A233A] rounded-[4px] border border-[#D6DDEE] focus:border-[#4f5562] block w-full p-2 text-[14px]" required="">
                                        <span class="text-[#2B7DEB] text-[14px] absolute top-0 right-0 h-full flex items-center pr-[10px] cursor-pointer" @click="toggleShowPassword = !toggleShowPassword">{{ toggleShowPassword ? 'show' : 'hide' }}</span>
                                    </div>
                                </div>
                                <div>
                                    <label for="passwordconfirmation" class="block mb-2 text-[14px] text-[#7C818C] text-[14px]">Password</label>
                                    <div class="relative">
                                        <input :type="toggleShowPasswordConf ? 'password' : 'text'" name="passwordconfirmation" id="passwordconfirmation" placeholder="••••••••" class="text-[#1A233A] rounded-[4px] border border-[#D6DDEE] focus:border-[#4f5562] block w-full p-2 text-[14px]" required="">
                                        <span class="text-[#2B7DEB] text-[14px] absolute top-0 right-0 h-full flex items-center pr-[10px] cursor-pointer" @click="toggleShowPasswordConf = !toggleShowPasswordConf">{{ toggleShowPasswordConf ? 'show' : 'hide' }}</span>
                                    </div>
                                </div>
                                <div class="flex items-center justify-between">
                                    <p class="text-[#1A233A] text-[14px]">Dengan klik tombol “Selanjutnya”, saya menyetujui <a href="#" class="text-[#2B7DEB] font-medium">Aturan Penggunaan dan Kebijakan Privasi SiapJadiASN</a></p>
                                </div>
                                <button type="submit" class="w-full text-white rounded-[4px] bg-[#2B7DEB] py-[10px] text-[14px]">Selanjutnya</button>
                                <p class="text-[14px] text-[#7C818C] text-center">
                                    Sudah punya akun? <NuxtLink to="/login" class="font-medium text-[#2B7DEB] hover:underline">Masuk</NuxtLink>
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
const toggleShowPasswordConf = ref(false)
</script>

<style lang="scss" scoped>

</style>