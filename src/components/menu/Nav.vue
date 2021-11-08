<template>
    <nav v-show="this.isClose">
        <div class="closeBtn"><span @click="$emit('open')"><i class="fa fa-times-circle" ></i></span></div>        
        <router-link class="link" to="/"><i class="icone fas fa-tachometer-alt"></i> <span class="text">Tableau de bord</span></router-link>
        <router-link class="link" to="/gestion"><i class="icone fas fa-database"></i> <span class="text">Gérer les données</span></router-link>
        <router-link class="link" to="/simulateur"><i class="icone fas fa-bolt"></i> <span class="text">Simulateur</span></router-link>
    </nav>
</template>

<script>
export default {
    name: "nav",
    props: {
        isClose: Boolean
    },
}
</script>

<style scoped>
    nav{
        position: fixed;
        height: 100vh;
        width: 300px;
        background-color: #373a47;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 200;
        left: 0;
        transition:1s left,1s width,1s opacity;
    }

    .closeBtn{
        padding: 1rem;
        height: 10vh;
        text-align: right;
        display: flex;
        justify-content: right;
        align-items: center;
        width: 100%;
    }

    .title {
        padding: 1rem;
        width: 100%;
        text-decoration: none;
        font-weight: bolder;
        color:white;
        display: flex;
        align-items: center;
    }

    .title .icone{
        font-size: 40px !important;
        color: #fff !important;
    }

    .link{
        margin-left: 10%;
        padding: 1rem;
        width: 100%;
        text-decoration: none;
        font-weight: 700;
        color:white;
        display: flex;
        align-items: center;
    }

    .icone {
        font-size:20px;
        margin-right:15px !important;
        color:#b8b7ad
    }

    nav a.router-link-active .icone{
        color: #c94e50;
        transition-timing-function: ease-in-out;
        transition: 1s;
    }
    .table-responsive {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
    }
</style>