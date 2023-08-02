<template>
<div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16" v-if="detail">
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Detail {{ detail.nama }}</h1>
    <h4 class="text-3xl font-bold text-gray-900 dark:text-white">Harga : {{ detail.harga }}</h4>
</div>
<div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16" v-else>
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white">404</h1>
</div>
</template>

<script>
    import { produk } from '/src/assets/Produk'

    export default {
        props: [
            "id_produk"
        ],
        setup(props){
            const detail = produk.produk.find((item) => {
                return item.id == props.id_produk
            });
            return{
                detail
            }
        }
    }
</script>