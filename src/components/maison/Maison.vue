<template>
    <div class="maison">
        <Compteur :form='form' @couper="couper"/>
        <Ampoule :isActive="isActive"/>
    </div>
</template>

<script>
import Compteur from '@/components/maison/Compteur.vue'
import Ampoule from '@/components/maison/Ampoule.vue'
export default {
    name: "Suivie",
    components: {
        Ampoule,
        Compteur
    },
    props: {
        form: Object
    },
    data() {
        return {
            isActive: true
        }
    },
    methods:{
        couper(){
            this.isActive=false
        }
    }
}
</script>

<style scoped>
    .maison{
        width: 50%;
        height: 100vh;
        display: flex;
        align-items: center;
    }
    @media screen and (max-width: 1032px) {
        .maison{
            width:100%;
        }
    }
</style>
