<template>
    <div class="w-full min-h-screen bg-slate-900 flex justify-center items-center text-white">
        <h2>Hallo, Deny Ramanda</h2>
        <div class="myBtn ml-4">
            Click
        </div>
    </div>
</template>
<script setup>
    definePageMeta({
        middleware: 'auth',
        title: 'Hallo Page'
    })
    const route = useRoute()
</script>