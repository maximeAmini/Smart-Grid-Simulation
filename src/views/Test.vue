<template>
    <div>{{this.forms}} {{this.$route.params.id_client}}</div>
</template>

<script>
   import axios from 'axios'
   export default {
       name: "Suivie",
       data() {
           return {
               forms: 0,
            }
        },
        created() {
            axios.get('http://localhost:4000/client/getAll/').then((res) => {
                if (res.status == 200) {
                    this.forms = res.data
                    this.done= false
                }
            })
            .catch(err=>{
                console.log(err)
            })   
        }
    }
</script>