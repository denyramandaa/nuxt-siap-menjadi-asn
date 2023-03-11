<template>
    <div class="w-full bg-ornament">
        <div class="max-w-[1020px] mx-auto bg-white mt-[40px]" style="box-shadow: 4px 11px 25px 0px #00000012">
            <AppHeader />
            <div class="w-full px-[24px] py-[30px] bg-[#F0F3F8]">
                <div class="bg-white w-full py-[26px] px-[40px] rounded-[10px]" style="box-shadow: 0px 4px 40px 0px #ACABB61A">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>