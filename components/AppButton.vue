<template>
    <div class="p-[10px] rounded-[4px] cursor-pointer text-center" :class="!primary ? 'bg-[#F5FAFF]' : 'bg-[#2B7DEB]'">
        <p class="text-[14px] font-medium" :class="primary ? 'text-[#fff]' : 'text-[#2B7DEB]'">{{ text }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    text: {
        type: String,
        default: "Button"
    },
    primary: {
        type: Boolean,
        default: false
    }
})
</script>