<template>
    <div class="compteur">
        <div class="diode">
            <div class="clin" v-show="this.diode"></div>
        </div>
        <h1>SONALGAZ</h1>
        <div class="infos">
            <h2>N° {{this.form.id_cmp}}</h2>
            <h3>
                <span>{{this.index_cmp}} Kwh</span>
                <br>
                HEUR PLIENE
            </h3>
            <div class="show">
                <button class="btn">+</button>
                <button class="btn">-</button>
            </div>
        </div>
        <div class="clips" @click="erreur(1,'ouverture du compteur')"></div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Compteur',
    props: {
        form: Object
    },
    data() {
        return {
            index_cmp: this.form.index,
            diode: false,
            timer: 0
        }
    },
    methods: {
        getDate(){
            var d = new Date();
            var date = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
            var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
            var fullDate = date+' '+hours;
            return fullDate;
        },
        add() {
            axios.post('http://localhost:4000/capteur/addIndex/', {
                id_cmp: this.form.id_cmp,
                index_cmp: this.index_cmp,
                date: this.getDate()
            }).then(() => {
               console.log("okey")
            }).catch((error) => {
               console.log(error)
            })
        },
        erreur(type,discr) {
            axios.post('http://localhost:4000/capteur/addErreur/', {
                id_cmp: this.form.id_cmp,
                type: type,
                discr: discr,
                date: this.getDate()
            }).then((rep) => {
               console.log(rep)
            }).catch((error) => {
               console.log(error)
            })
            if(type==1){
                this.arret()
            }
        },
        arret(){
            clearInterval(this.timer)
            console.log("fait")
            this.$emit('couper')
        }
    },
    
    mounted() {
            //indice de consomation
            this.timer = setInterval(function () { 
                var a_index = this.index
                this.index_cmp=this.index_cmp + (Math.floor(Math.random() * (1000 - 100)) + 100)
                this.diode = !this.diode

                //vérifié que tout ce passe bien
                if((this.index_cmp-a_index)>1000000){
                    this.erreur(2,'sur-consomation')
                }else  if((this.index_cmp-a_index)==0){
                    this.erreur(3,'arret du compteur inexpliqué')
                }
            }.bind(this), 3000)

            //envoyé les données de consomation
            setInterval(function () {
                this.add()
            }.bind(this), 300000)
    },
}
</script>

<style scoped>
    .compteur{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        width: 500px;
        padding: 20px;
        margin: 5px;
        border: 1px solid black;
        border-radius: 1.75rem;
        text-align: center;
    }
    h1{
        color: #d4d257;
        margin-top:10px;
        text-shadow: 1px 1px 1px #111;
    }
    .infos{
        background-color: #eaeaf5;
        border-radius: 1.75rem;
        width: 80%;
        margin-left: 10%;
        margin-top: 10%;
        padding-top:10px;
        box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    }
    h3{
        padding:10px;
        background-color: #0f2706;
        color:rgb(207, 199, 199);
        width: 50%;
        margin-left: 25%;
        margin-top:60px;
        margin-bottom:60px;
    }

    h3 span{
        text-align: right;
    }
    .diode{
        padding:10px;
        width: 10px;
        height: 10px;
        margin-left: 48%;
    }
    .clin{
        padding: 1px;
        width: 9px;
        height: 9px;
        background-color: red;
    }

    .btn{
        font-size:20px;
        width: 50px;
        height: 50px;
        border-bottom-left-radius: 0.2rem;
        border-bottom-right-radius: 0.2rem;
        background-color: #869399;
        margin-right: 10px;
        margin-left: 10px;

    }

    .clips {
        height:5px;
        background-color: black;
        width: 40%;
        margin-left:30%;
        margin-top: 80px;
        margin-bottom:80px;
    }

    @media screen and (max-width: 767.98px) {
        .compteur{
            width:100%;
        }
    }
</style>