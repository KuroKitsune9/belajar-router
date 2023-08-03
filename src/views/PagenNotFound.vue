<template>
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Register</h1>
    </div>
    </template>
    
    <script>
        import { onMounted } from 'vue'
    
        export default {
            setup(props, context){
                onMounted(() => {
                    context.emit("id-menu", 3);
                })
            }
        }
    </script>