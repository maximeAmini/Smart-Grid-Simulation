<template>
   <div class="page1">
       <h1><i class="icone fas fa-database"></i> Gérer les données</h1>

       <table>
           <tr>
               <th>Compteur</th>
               <th>Index</th>
               <th>Date</th>
           </tr>
           <tr v-for='form in forms' v-bind:key='form.name'>
               <td>{{form.id_cmp}}</td>
               <td>{{form.index_cmp}}</td>
               <td>{{newdate(form.date)}}</td>
           </tr>
       </table>
       <div class="loader-container">
            <Loader v-if="this.done"/>
       </div>
   </div>
</template>

<script>
   import axios from 'axios'
   import Loader from '@/components/Loader.vue'
   export default {
       name: "Suivie",
       data() {
           return {
               forms: 0,
               done: true
            }
        },
        components: {
            Loader,
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
            axios.get('http://localhost:4000/capteur/getAll/').then((res) => {
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

<style>
@keyframes fadein {
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}

table {
    margin-top:20px;
    border-collapse:collapse;
    width:100%;
}

th, td{
    padding:15px;
    text-align: left;
    border-bottom:#dee2e6;
}

tr{
    animation: fadein 2s;
    -moz-animation: fadein 2s; /* Firefox */
    -webkit-animation: fadein 2s; /* Safari et Chrome */
    -o-animation: fadein 2s; /* Opera */
}

tr:nth-child(1){
    animation:none;
    background-color: #eec0c6;
    background-image: linear-gradient(315deg, #eec0c6 0%, #7ee8fa 74%);
    color:white;
    border-radius: .75rem;
}

tr:nth-child(odd){
    background-color: rgba(0, 0, 0, 0.05);
}

.tables{
    display: flex;
    justify-content: center;
}

.loader-container{
    display: flex;
    justify-content: center;
    margin-top:10%;
}

@media screen and (max-width: 767.98px) {
    table {
        overflow-x: auto;
    }
}
</style>