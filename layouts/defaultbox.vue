<template>
    <div class="w-full bg-ornament">
        <div class="max-w-[1020px] mx-auto bg-white mt-[40px]">
            <AppHeader />
            <div class="w-full px-[24px] py-[30px] bg-[#F0F3F8]">
                <div class="bg-white w-full py-[26px] px-[40px]">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>