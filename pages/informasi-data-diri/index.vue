<template>
    <div>
        <div class="w-full relative flex items-center justify-between mb-[26px]">
            <div class="timeline--line">
                <div class="relative w-full h-full timeline--line-color" :class="percentageDone"></div>
            </div>
            <div v-for="(item, key) in steps" :key="key" class="relative">
                <div class="w-[40px] h-[40px] flex items-center justify-center rounded-full text-[16px] font-medium mb-2 mx-auto" :class="item.isReady ? 'bg-[#2B7DEB] text-white': 'bg-[#F5FAFF] text-[#7C818C]'">{{ item.id }}</div> 
                <p class="font-medium text-[14px]" :class="item.isReady ? 'text-[#2B7DEB]': 'text-[#7C818C]'">{{ item.label }}</p>
            </div>
        </div>
        <div class="sliderSection w-full overflow-hidden">
            <div class="sliderSection--slide w-[400%] flex" :class="{ 'toMiddle': steps[1].isReady, 'toEnd': steps[2].isReady }">
                <div class="sliderSection--1 w-1/4" :class="steps[0].isReady && !steps[1].isReady ? 'h-auto' : 'h-0'">
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
                                <select id="education" class="bg-white border border-gray-300 text-sm rounded-[6px] block w-full p-2.5">
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
                                <select id="province" class="bg-white border border-gray-300 text-sm rounded-[6px] block w-full p-2.5">
                                    <option selected>Choose a country</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select>
                            </div>
                            <div class="w-1/2">
                                <label for="city" class="block mb-[6px] text-[14px] text-[#7C818C]">Kota/Kabupaten</label>
                                <select id="city" class="bg-white border border-gray-300 text-sm rounded-[6px] block w-full p-2.5">
                                    <option selected>Choose a country</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="mb-[32px]">
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
                <div class="sliderSection--2 w-1/4" :class="steps[1].isReady && !steps[2].isReady ? 'h-auto' : 'h-0'">
                    <h2 class="text-[#1A233A] font-medium mb-[20px]">Langkah 2 : Informasi Kelas Belajar</h2>
                    <div class="mb-[14px] w-full">
                        <label for="class-chooose" class="block mb-[6px] text-[14px] text-[#7C818C]">Pilih Kelas</label>
                        <select id="class-chooose" class="bg-white border border-gray-300 text-sm rounded-[6px] block w-full p-2.5">
                            <option selected>Choose a country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div class="accordion mb-[20px] w-full border border-[#D6DDEE] rounded-tl-[10px] rounded-tr-[10px]">
                        <div class="w-full bg-[#F0F3F8] py-[12px] px-[20px] flex items-center justify-between rounded-tl-[10px] rounded-tr-[10px] cursor-pointer" @click="closeAccordion1 = !closeAccordion1">
                            <h3 class="text-[#1A233A] font-medium">Program 1</h3>
                            <img src="~/assets/images/arrow-down.svg" alt="arrow down" class="w-[16px]" :class="{ 'rotate-180': !closeAccordion1 }">
                        </div>
                        <div class="w-full overflow-hidden" :class="closeAccordion1 ? 'h-0' : 'h-auto'">
                            <div class="w-full p-[20px] flex">
                                <img src="~/assets/images/example-img-class.png" alt="illustrasi paket" class="mr-[20px] rounded-[10px] w-[50px] h-[50px]">
                                <div class="relative">
                                    <h4 class="mb-[4px] text-[#1A233A] text-[14px] font-medium">Paket TWK</h4>
                                    <p class="text-[14px] mb-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius lacus urna, sed congue nibh malesuada a. Praesent scelerisque mollis turpis eget imperdiet. Vestibulum ut cursus mi, a gravida nulla. Pellentesque accumsan ultrices maximus.</p>
                                    <div class="mb-[12px]">
                                        <div class="flex">
                                            <div class="w-1/2 pr-[14px]">
                                                <label for="campus-choose" class="block mb-[6px] text-[14px] text-[#7C818C]">Kampus/Institut Pilihan 1</label>
                                                <select id="campus-choose" class="bg-white border border-gray-300 text-sm rounded-[6px] block w-full p-2.5">
                                                    <option selected>Choose a country</option>
                                                    <option value="US">United States</option>
                                                    <option value="CA">Canada</option>
                                                    <option value="FR">France</option>
                                                    <option value="DE">Germany</option>
                                                </select>
                                            </div>
                                            <div class="w-1/2">
                                                <label for="prodi-choose" class="block mb-[6px] text-[14px] text-[#7C818C]">Prodi Pilihan 1</label>
                                                <select id="prodi-choose" class="bg-white border border-gray-300 text-sm rounded-[6px] block w-full p-2.5">
                                                    <option selected>Choose a country</option>
                                                    <option value="US">United States</option>
                                                    <option value="CA">Canada</option>
                                                    <option value="FR">France</option>
                                                    <option value="DE">Germany</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-[12px]">
                                        <div class="flex">
                                            <div class="w-1/2 pr-[14px]">
                                                <label for="campus-choose" class="block mb-[6px] text-[14px] text-[#7C818C]">Kampus/Institut Pilihan 2 (Optional)</label>
                                                <select id="campus-choose-2" class="bg-white border border-gray-300 text-sm rounded-[6px] block w-full p-2.5">
                                                    <option selected>Choose a country</option>
                                                    <option value="US">United States</option>
                                                    <option value="CA">Canada</option>
                                                    <option value="FR">France</option>
                                                    <option value="DE">Germany</option>
                                                </select>
                                            </div>
                                            <div class="w-1/2">
                                                <label for="prodi-choose-2" class="block mb-[6px] text-[14px] text-[#7C818C]">Prodi Pilihan 2 (Optional)</label>
                                                <select id="prodi-choose-2" class="bg-white border border-gray-300 text-sm rounded-[6px] block w-full p-2.5">
                                                    <option selected>Choose a country</option>
                                                    <option value="US">United States</option>
                                                    <option value="CA">Canada</option>
                                                    <option value="FR">France</option>
                                                    <option value="DE">Germany</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion mb-[20px] w-full border border-[#D6DDEE] rounded-tl-[10px] rounded-tr-[10px]">
                        <div class="w-full bg-[#F0F3F8] py-[12px] px-[20px] flex items-center justify-between rounded-tl-[10px] rounded-tr-[10px] cursor-pointer" @click="closeAccordion2 = !closeAccordion2">
                            <h3 class="text-[#1A233A] font-medium">Program 2</h3>
                            <img src="~/assets/images/arrow-down.svg" alt="arrow down" class="w-[16px]" :class="{ 'rotate-180': !closeAccordion2 }">
                        </div>
                        <div class="w-full overflow-hidden" :class="closeAccordion2 ? 'h-0' : 'h-auto'">
                            <div class="w-full p-[20px] flex">
                                <img src="~/assets/images/example-img-class.png" alt="illustrasi paket" class="mr-[20px] rounded-[10px] w-[50px] h-[50px]">
                                <div class="relative">
                                    <h4 class="mb-[4px] text-[#1A233A] text-[14px] font-medium">Paket TWK</h4>
                                    <p class="text-[14px] mb-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius lacus urna, sed congue nibh malesuada a. Praesent scelerisque mollis turpis eget imperdiet. Vestibulum ut cursus mi, a gravida nulla. Pellentesque accumsan ultrices maximus.</p>
                                    <div class="mb-[12px]">
                                        <div class="flex">
                                            <div class="w-1/2 pr-[14px]">
                                                <label for="campus-choose" class="block mb-[6px] text-[14px] text-[#7C818C]">Kampus/Institut Pilihan 1</label>
                                                <select id="campus-choose" class="bg-white border border-gray-300 text-sm rounded-[6px] block w-full p-2.5">
                                                    <option selected>Choose a country</option>
                                                    <option value="US">United States</option>
                                                    <option value="CA">Canada</option>
                                                    <option value="FR">France</option>
                                                    <option value="DE">Germany</option>
                                                </select>
                                            </div>
                                            <div class="w-1/2">
                                                <label for="prodi-choose" class="block mb-[6px] text-[14px] text-[#7C818C]">Prodi Pilihan 1</label>
                                                <select id="prodi-choose" class="bg-white border border-gray-300 text-sm rounded-[6px] block w-full p-2.5">
                                                    <option selected>Choose a country</option>
                                                    <option value="US">United States</option>
                                                    <option value="CA">Canada</option>
                                                    <option value="FR">France</option>
                                                    <option value="DE">Germany</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-[12px]">
                                        <div class="flex">
                                            <div class="w-1/2 pr-[14px]">
                                                <label for="campus-choose" class="block mb-[6px] text-[14px] text-[#7C818C]">Kampus/Institut Pilihan 2 (Optional)</label>
                                                <select id="campus-choose-2" class="bg-white border border-gray-300 text-sm rounded-[6px] block w-full p-2.5">
                                                    <option selected>Choose a country</option>
                                                    <option value="US">United States</option>
                                                    <option value="CA">Canada</option>
                                                    <option value="FR">France</option>
                                                    <option value="DE">Germany</option>
                                                </select>
                                            </div>
                                            <div class="w-1/2">
                                                <label for="prodi-choose-2" class="block mb-[6px] text-[14px] text-[#7C818C]">Prodi Pilihan 2 (Optional)</label>
                                                <select id="prodi-choose-2" class="bg-white border border-gray-300 text-sm rounded-[6px] block w-full p-2.5">
                                                    <option selected>Choose a country</option>
                                                    <option value="US">United States</option>
                                                    <option value="CA">Canada</option>
                                                    <option value="FR">France</option>
                                                    <option value="DE">Germany</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion mb-[32px] w-full border border-[#D6DDEE] rounded-tl-[10px] rounded-tr-[10px]">
                        <div class="w-full bg-[#F0F3F8] py-[12px] px-[20px] flex items-center justify-between rounded-tl-[10px] rounded-tr-[10px] cursor-pointer" @click="closeAccordion3 = !closeAccordion3">
                            <h3 class="text-[#1A233A] font-medium">Program 3</h3>
                            <img src="~/assets/images/arrow-down.svg" alt="arrow down" class="w-[16px]" :class="{ 'rotate-180': !closeAccordion3 }">
                        </div>
                        <div class="w-full overflow-hidden" :class="closeAccordion3 ? 'h-0' : 'h-auto'">
                            <div class="w-full p-[20px] flex">
                                <img src="~/assets/images/example-img-class.png" alt="illustrasi paket" class="mr-[20px] rounded-[10px] w-[50px] h-[50px]">
                                <div class="relative">
                                    <h4 class="mb-[4px] text-[#1A233A] text-[14px] font-medium">Paket TWK</h4>
                                    <p class="text-[14px] mb-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius lacus urna, sed congue nibh malesuada a. Praesent scelerisque mollis turpis eget imperdiet. Vestibulum ut cursus mi, a gravida nulla. Pellentesque accumsan ultrices maximus.</p>
                                    <div class="mb-[12px]">
                                        <div class="flex">
                                            <div class="w-1/2 pr-[14px]">
                                                <label for="campus-choose" class="block mb-[6px] text-[14px] text-[#7C818C]">Kampus/Institut Pilihan 1</label>
                                                <select id="campus-choose" class="bg-white border border-gray-300 text-sm rounded-[6px] block w-full p-2.5">
                                                    <option selected>Choose a country</option>
                                                    <option value="US">United States</option>
                                                    <option value="CA">Canada</option>
                                                    <option value="FR">France</option>
                                                    <option value="DE">Germany</option>
                                                </select>
                                            </div>
                                            <div class="w-1/2">
                                                <label for="prodi-choose" class="block mb-[6px] text-[14px] text-[#7C818C]">Prodi Pilihan 1</label>
                                                <select id="prodi-choose" class="bg-white border border-gray-300 text-sm rounded-[6px] block w-full p-2.5">
                                                    <option selected>Choose a country</option>
                                                    <option value="US">United States</option>
                                                    <option value="CA">Canada</option>
                                                    <option value="FR">France</option>
                                                    <option value="DE">Germany</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-[12px]">
                                        <div class="flex">
                                            <div class="w-1/2 pr-[14px]">
                                                <label for="campus-choose" class="block mb-[6px] text-[14px] text-[#7C818C]">Kampus/Institut Pilihan 2 (Optional)</label>
                                                <select id="campus-choose-2" class="bg-white border border-gray-300 text-sm rounded-[6px] block w-full p-2.5">
                                                    <option selected>Choose a country</option>
                                                    <option value="US">United States</option>
                                                    <option value="CA">Canada</option>
                                                    <option value="FR">France</option>
                                                    <option value="DE">Germany</option>
                                                </select>
                                            </div>
                                            <div class="w-1/2">
                                                <label for="prodi-choose-2" class="block mb-[6px] text-[14px] text-[#7C818C]">Prodi Pilihan 2 (Optional)</label>
                                                <select id="prodi-choose-2" class="bg-white border border-gray-300 text-sm rounded-[6px] block w-full p-2.5">
                                                    <option selected>Choose a country</option>
                                                    <option value="US">United States</option>
                                                    <option value="CA">Canada</option>
                                                    <option value="FR">France</option>
                                                    <option value="DE">Germany</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sliderSection--3 w-1/4" :class="steps[2].isReady ? 'h-auto' : 'h-0'">
                    <h2 class="text-[#1A233A] font-medium mb-[20px]">Langkah 3 : Tanggapan Pengguna</h2>
                    <div class="w-full mb-[14px]">
                        <label for="wish" class="block mb-[6px] text-[14px] text-[#7C818C]">Apa harapan kamu bersama dengan siapjadiASN?</label>
                        <textarea class="text-[#1A233A] rounded-[6px] border border-[#D6DDEE] focus:border-[#4f5562] block w-full py-[12px] px-[10px] text-[14px]" name="wish" id="wish" cols="30" rows="5" placeholder="Saya bisa mendapatkan pengalaman belajar yang maksimal"></textarea>
                    </div>
                    <div class="mb-[32px] w-full">
                        <label for="appereance-source" class="block mb-[6px] text-[14px] text-[#7C818C]">Dari mana kamu mengetahui siapjadiASN?</label>
                        <select id="appereance-source" class="bg-white border border-gray-300 text-sm rounded-[6px] block w-full p-2.5">
                            <option selected>Choose a country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                </div>
                <div class="sliderSection--4 w-1/4">
                    <p>empty</p>
                </div>
            </div>
            <div class="flex justify-end">
                <div v-if="!steps[1].isReady" class="flex">
                    <nuxt-link to="/selamat-datang"><AppButton text="Kembali" :primary="false" class="mr-[24px]" /></nuxt-link>
                    <AppButton text="Lanjutkan" :primary="true" @click="steps[1].isReady = true" />
                </div>
                <div v-if="steps[1].isReady && !steps[2].isReady" class="flex">
                    <AppButton text="Halaman Sebelumnya" :primary="false" class="mr-[24px]" @click="steps[1].isReady = false" />
                    <AppButton text="Lanjutkan" :primary="true" @click="steps[2].isReady = true" />
                </div>
                <div v-if="steps[2].isReady" class="flex">
                    <AppButton text="Halaman Sebelumnya" :primary="false" class="mr-[24px]" @click="steps[2].isReady = false" />
                    <nuxt-link to="/dashboard"><AppButton text="Simpan" :primary="true" /></nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const img = ref('~/assets/images/example-img-profile.png')
definePageMeta({
    layout: 'defaultbox'
})
const closeAccordion1 = ref(false)
const closeAccordion2 = ref(true)
const closeAccordion3 = ref(true)
const steps = ref([
    {
        id: 1,
        label: 'Informasi Data Diri',
        isReady: true
    },{
        id: 2,
        label: 'Informasi Kelas Belajar',
        isReady: false
    },{
        id: 3,
        label: 'Tanggapan Pengguna',
        isReady: false
    }
])
const percentageDone = computed(() => {
    if(!steps.value[1].isReady) return 'zero'
    return steps.value[2].isReady ? 'full' : 'half'
})
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