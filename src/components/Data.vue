<template>
    <div class="card">
        <div class="date">
            Aujourd'hui: 
            <h1>{{newdate().jour}}</h1>
            {{newdate().mois+' '+newdate().année}}
        </div>
        <div class="data">
            <h3> Consomation du jour <i class="fa fa-check-circle" style="color:green; text-align:right" aria-hidden="true" v-if="!errors" ></i></h3>
            <h1>
                250000kwh
            </h1>
        </div>
    </div>
</template>

<script>
   export default {
       name: "Data",
        methods:{
            newdate(){
                var d = new Date()
                var Mois  = [ 'janvier', 'février', 'mars',      'avril',   'mai',      'juin', 
                       'juillet', 'août',    'septembre', 'octobre', 'novembre', 'décembre' ]
                var date = {
                    jour: d.getDate(),
                    mois: Mois[d.getMonth()+1],
                    année: d.getFullYear()
                }
                //var hours = d.getHours() + ":" + d.getMinutes();
                var fullDate = date;
                return fullDate;

            }
        }
    }
</script>

<style scoped>
    .card {
        width: 30%;
        height: 250px;
        background-color: #fff;
        background: linear-gradient(#f8f8f8, #fff);
        box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
        margin: 1.5rem;
        display: flex;
        background: transparent;
    }
    .date{
        width: 30%;
        height: 100%;
        font-family: monospace;
        padding: .75rem;
        font-weight: 900;
        background-color:rgba(0, 159, 227, 0.4);
        color: #fff;
        
        text-align: center;
        display: flex;
        flex-direction:column ;
        align-items: center;
        justify-content: space-between;
        
    }

    .date h1{
        font-size: 4rem;
        opacity: 1;
    }

    .data{
        width: 70%;
        padding: .75rem;
    }
    
    .data h3{
        width:100%;
    }

    @media screen and (max-width: 768px) {
        .card{
            width: 100%;
        }
    }
</style>