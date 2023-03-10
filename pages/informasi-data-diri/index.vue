<template>
    <div class="w-full">
        <UserHeader />
        <div class="max-w-[1020px] mx-auto bg-white mt-[100px] p-[40px]">
            <div class="w-full relative flex items-center justify-between mb-[26px]">
                <div v-for="(item, key) in 3" :key="key" class="bg-white">
                    <div class="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#2B7DEB] text-[16px] text-white font-medium mb-2 mx-auto">{{ item }}</div> 
                    <p class="font-medium text-[14px] text-[#2B7DEB]">Informasi Data Diri</p>
                </div>
            </div>
            <h2 class="text-[#1A233A] font-medium mb-[20px]">Langkah 1 : Informasi Data Diri</h2>
            <div class="relative w-[80px] h-[80px]">
                <img :src="img" class="w-full h-full rounded-full object-cover" alt="profile image">
                <img src="~/assets/images/edit-photo.svg" alt="icon edit photo" class="w-[50px] absolute bottom-[-16px] right-[-16px]">
                <input @change="onFileChange" type="file" name="profile-image" class="w-full h-full rounded-full absolute left-0 top-0 opacity-0" capture>
            </div>
            <div class="mb-[14px] mt-[26px]">
                <div class="flex">
                    <div class="w-1/2 pr-[14px]">
                        <label for="full-name" class="block mb-[6px] text-[14px] text-[#7C818C]">Nama Lengkap</label>
                        <input type="text" name="full-name" id="full-name" class="text-[#1A233A] rounded-[6px] border border-[#D6DDEE] focus:border-[#4f5562] block w-full p-2 text-[14px]" placeholder="budi@gmail.com atau BudiRaharjo" required="">
                    </div>
                    <div class="w-1/2">
                        <label class="block mb-[6px] text-[14px] text-[#7C818C] w-full">Jenis Kelamin</label>
                        <div class="w-full flex h-[36px]">
                            <div class="flex items-center mr-[14px]">
                                <input id="male" type="radio" value="" name="default-radio" class="w-[24px] h-[24px] text-blue-600 bg-[#2B7DEB] border-[#2B7DEB]">
                                <label for="male" class="ml-2 text-[14px] text-[#1A233A]">Laki-laki</label>
                            </div>
                            <div class="flex items-center">
                                <input checked id="female" type="radio" value="" name="default-radio" class="w-[24px] h-[24px] text-blue-600 bg-[#2B7DEB] border-[#2B7DEB]">
                                <label for="female" class="ml-2 text-[14px] text-[#1A233A]">Perempuan</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mb-[14px]">
                <div class="flex">
                    <div class="w-1/2 pr-[14px]">
                        <label for="education" class="block mb-[6px] text-[14px] text-[#7C818C]">Pendidikan Terakhir</label>
                        <select id="education" class="bg-gray-50 border border-gray-300 text-sm rounded-[6px] block w-full p-2.5">
                            <option selected>Choose a country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div class="w-1/2">
                        <label for="graduate-date" class="block mb-[6px] text-[14px] text-[#7C818C]">Tahun Lulus</label>
                        <input type="number" name="graduate-date" id="graduate-date" class="text-[#1A233A] rounded-[6px] border border-[#D6DDEE] focus:border-[#4f5562] block w-full p-2 text-[14px]" placeholder="2022" required="">
                    </div>
                </div>
            </div>
            <div class="mb-[14px] w-full">
                <label for="campus-name" class="block mb-[6px] text-[14px] text-[#7C818C]">Asal Sekolah/Institusi</label>
                <input type="text" name="campus-name" id="campus-name" class="text-[#1A233A] rounded-[6px] border border-[#D6DDEE] focus:border-[#4f5562] block w-full p-2 text-[14px]" placeholder="Universitas Indonesia" required="">
            </div>
            <div class="mb-[14px]">
                <div class="flex">
                    <div class="w-1/2 pr-[14px]">
                        <label for="province" class="block mb-[6px] text-[14px] text-[#7C818C]">Provinsi Domisili</label>
                        <select id="province" class="bg-gray-50 border border-gray-300 text-sm rounded-[6px] block w-full p-2.5">
                            <option selected>Choose a country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div class="w-1/2">
                        <label for="city" class="block mb-[6px] text-[14px] text-[#7C818C]">Kota/Kabupaten</label>
                        <select id="city" class="bg-gray-50 border border-gray-300 text-sm rounded-[6px] block w-full p-2.5">
                            <option selected>Choose a country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="mb-[14px]">
                <div class="flex">
                    <div class="w-1/2 pr-[14px]">
                        <label for="province" class="block mb-[6px] text-[14px] text-[#7C818C]">Nomor HP/WhatsApp</label>
                        <input type="text" name="number-phone" id="number-phone" class="text-[#1A233A] rounded-[6px] border border-[#D6DDEE] focus:border-[#4f5562] block w-full p-2 text-[14px]" placeholder="081124567780" required="">
                    </div>
                    <div class="w-1/2">
                        <label for="city" class="block mb-[6px] text-[14px] text-[#7C818C]">Akun Instagram</label>
                        <input type="text" name="instagram-account" id="instagram-account" class="text-[#1A233A] rounded-[6px] border border-[#D6DDEE] focus:border-[#4f5562] block w-full p-2 text-[14px]" placeholder="@budiraharjo" required="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const img = ref('~/assets/images/example-img-profile.png')
const onFileChange = (e) => {
    const files = e.target.files || e.dataTransfer.files;
    if (!files.length) return;
    createImage(files[0])
}
const createImage = (file) => {
      var image = new Image();
      var reader = new FileReader();

      reader.onload = (e) => {
        img.value = e.target.result;
      };
      reader.readAsDataURL(file);
}
</script>

<style lang="scss" scoped>

</style>