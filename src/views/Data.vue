<template>
    <Tabs :id_capteur="this.$route.param.id_capteur"/>

</template>

<script>


   import Tabs from '@/components/Tabs.vue'
   
   export default {
       name: "Suivie",

        components: {
            
            Tabs,
        }
     }
</script>
