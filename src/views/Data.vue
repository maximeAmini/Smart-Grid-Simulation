<template>
    <Tabs :forms="this.forms"/>
    <Loader v-if="this.done" />
</template>

<script>
   import axios from 'axios'
   import Loader from '@/components/Loader.vue'
   import Tabs from '@/components/Tabs.vue'
   
   export default {
       name: "Suivie",
       data() {
           return {
               forms: 0,
               done: true,
               errors:true
            }
        },
        components: {
            Loader,
            Tabs,
        },
        methods:{
            newdate(n){
                var d = new Date(n)
                var date = d.getDate()+'-'+(d.getMonth()+1)+'-'+d.getFullYear();
                var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
                var fullDate = date+' '+hours;
                return fullDate;

            }
        },
        created() {
            axios.get('http://localhost:4000/capteur/getOneC/'+this.$route.param.id_capteur).then((res) => {
                if (res.status == 200) {
                    this.forms = res.data
                    /*this.forms.sort(function(a,b){
                        var c = new Date(a.date);
                        var d = new Date(b.date);
                        return d-c;
                    });*/
                    this.done= false
                }
            })
            .catch(err=>{
                console.log(err)
            })   
        }
    }
</script>
