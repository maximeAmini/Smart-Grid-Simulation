<template>

        <div class="container">
            <ul class="responsive-table">
                <li class="table-header">
                    <div class="col col-1">id_client</div>
                    <div class="col col-2">index </div>
                    <div class="col col-4">Date</div>
                </li>
                <li class="table-row" v-for='form in forms' v-bind:key='form.name'>
                    <div class="col col-1" data-label="id_client">{{form.id_capteur}}</div>
                    <div class="col col-2" data-label="index">{{form.index}}</div>
                    <div class="col col-4" data-label="Date">{{form.date}}</div>
                </li>
            </ul>
        </div>
  <Loader v-if="this.done" />
</template>

<script>

   import axios from 'axios'

   import Loader from '@/components/Loader.vue'

   import Tabs from '@/components/Tabs.vue'

   

   export default {

       name: "Tabs",
       props:{id_capteur: Integer},

       data() {

           return {

               forms: 0,

               done: true,



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

            axios.get('http://localhost:4000/capteur/getOneC/'+this.id_capteur

).then((res) => {

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

<style scoped>

</style>
<style lang="scss" scoped>

.title {
    margin-bottom: 30px;
    display: flex;
}

.title input{
        padding: 10px 70px 10px 32px;
        font-size: 18px;
        color: #666;
        border-radius: 34px;
        margin-left: auto;
}

.container {
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 10px;
    padding-right: 10px;
}

.responsive-table {
    li {
        border-radius: 3px;
        padding: 25px 30px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;
    }

    .table-header {
        background-color: #95A5A6;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 0.03em;
    }

    .table-row {
        background-color: #ffffff;
        box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
    }

    .col-1 {
        flex-basis: 10%;
    }

    .col-2 {
        flex-basis: 40%;
    }

    .col-3 {
        flex-basis: 25%;
    }

    .col-4 {
        flex-basis: 25%;
    }

    @media all and (max-width: 767px) {
        .table-header {
            display: none;
        }

        .table-row {}

        li {
            display: block;
        }

        .col {

            flex-basis: 100%;

        }

        .col {
            display: flex;
            padding: 10px 0;

            &:before {
                color: #6C7A89;
                padding-right: 10px;
                content: attr(data-label);
                flex-basis: 50%;
                text-align: right;
            }
        }
    }
}

@media screen and (max-width: 768px) {
  .title input{
        padding: 15px;
        font-size: 14px;
        color: #666;
        border-radius: 34px;
        margin-left: auto;
    } 
}
</style>
