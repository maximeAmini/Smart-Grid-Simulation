<template>
    <div class="page1">
        <h1>Gerer les clients</h1>
        <div class="container">
            <ul class="responsive-table">
                <li class="table-header">
                    <div class="col col-1">Client Id</div>
                    <div class="col col-2">Nom </div>
                    <div class="col col-3">Adress</div>
                    <div class="col col-4">Telephone</div>
                </li>
                <li class="table-row" v-for='form in forms' v-bind:key='form.name'>
                    <div class="col col-1" data-label="Job Id">{{form.id_client}}</div>
                    <div class="col col-2" data-label="Customer Name">{{form.nom}} {{form.prenom}}</div>
                    <div class="col col-3" data-label="Amount">{{form.adress}}</div>
                    <div class="col col-4" data-label="Payment Status">{{form.tel}}</div>
                </li>
            </ul>
        </div>
        <div class="loader-container">
            <Loader v-if="this.done" />
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
            axios.get('http://localhost:4000/client/getAll/').then((res) => {
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

<style lang="scss" scoped>
.loader-container{
    display: flex;
    justify-content: center;
    margin-top:10%;
}

.container {
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 10px;
    padding-right: 10px;
}

h2 {
    font-size: 26px;
    margin: 20px 0;
    text-align: center;

    small {
        font-size: 0.5em;
    }
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
</style>