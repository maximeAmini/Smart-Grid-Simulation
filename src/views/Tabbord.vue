<template>
    <div>
        <h1>Tableau de bord</h1>
        <Ampoule :isActive="true"/>
    </div>
</template>

<script>
   import Ampoule from '@/components/Data.vue'
   export default {
       name: "Suivie",
        components: {
            Ampoule
        }
    }
</script>
