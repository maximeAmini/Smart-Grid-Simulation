<template>
    <div>
        <h1>Informations sur le client</h1>

        <Loader v-if="this.done1" />
    </div>
</template>

<script>
    import axios from 'axios'
    import Loader from '@/components/Loader.vue'
 
    export default {
       name: "Client",
       data() {
           return {
               client: 0,
               compteur: 0,
               index: 0,
               done1: true,
               done2: true,
               done3: true,
               errors:true
            }
        },
        components: {
            Loader,
          
        },
        methods:{
            getClient(){
                axios.get('http://localhost:4000/client/getOne/'+this.$route.params.id).then((res) => {
                    if (res.status == 200) {
                        this.client = res.data
                        this.done1= false
                    }
                })
                .catch(err=>{
                    console.log(err)
                }) 
            },
            getCompteur(){
                axios.get('http://localhost:4000/compteur/getOneC/'+this.$route.params.id).then((res) => {
                    if (res.status == 200) {
                        this.compteur = res.data
                        this.done2= false
                    }
                })
                .catch(err=>{
                    console.log(err)
                }) 
            },
            getIndex(){
                axios.get('http://localhost:4000/capteur/getOneC/'+this.compteur[0].id_compteur).then((res) => {
                    if (res.status == 200) {
                        this.index = res.data
                        this.done3= false
                    }
                })
                .catch(err=>{
                    console.log(err)
                }) 
            }
        },
        created() {
            this.getClient()
            this.getCompteur()
        }
    }
</script>
