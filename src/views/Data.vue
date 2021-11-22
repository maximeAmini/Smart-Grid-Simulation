<template>

<h1>Les données</h1>  
<Tabs :id="this.$route.params.id"/>

</template>

<script>


   import Tabs from '@/components/Tabs.vue'
   
   export default {
       name: "Data",

        components: {
            
            Tabs,
        }
     }
</script>
