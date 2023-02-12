<template>
    <div class="w-full min-h-screen bg-slate-900 flex justify-center items-center text-white">
        Hallo, Deny Ramanda
    </div>
</template>
<script setup>
    definePageMeta({
        middleware: 'auth',
        title: 'Hallo Page'
    })
    const route = useRoute()
    console.log(route)
</script>