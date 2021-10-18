<template>
    <nav>
        <router-link to="/" class="title"><i class="icone fas fa-heartbeat"></i> <span class="text">Gestion App</span></router-link>
        <router-link class="link" to="/"><i class="icone fas fa-tachometer-alt"></i> <span class="text">Tableau de bord</span></router-link>
        <router-link class="link" to="/Afficher"><i class="icone fas fa-database"></i> <span class="text">Gérer les données</span></router-link>
        <router-link class="link" to="/simulateur"><i class="icone fas fa-bolt"></i> <span class="text">Simulateur</span></router-link>
        <router-link class="link" to="/test"><i class="icone fas fa-bolt"></i> <span class="text">test</span></router-link>
    </nav>
</template>


<style scoped>
    nav{
        position: fixed;
        height: 100vh;
        width: 20%;
        background-color: #263238;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .title {
        padding: 1rem;
        font-size: 1.5rem;
        font-weight: bolder;
        background: #fff;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        display: flex;
        text-align: left;
        align-items: center;
    }

    .title .icone{
        font-size: 40px !important;
        color: #fff !important;
    }

    .link{
        padding: 1rem;
        width: 100%;
        text-decoration: none;
        font-weight: bolder;
        color:white;
        display: flex;
        align-items: center;
    }

    .icone {
        font-size:25px;
        margin-right:15px !important;
    }

    nav a.router-link-active{
        background-color: white;
        color: #263238;
        border-radius: 3rem;
        border-top-left-radius: 0rem;
        border-bottom-left-radius: 0rem;
        transition-timing-function: ease-in-out;
        transition: 1s;
    }
    .table-responsive {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
    }

    @media screen and (max-width: 767.98px) {
        .text{
            display:none
        }
        nav{
            width: 10vh !important;
            text-align: center;
        }
        .icone{
            margin-right:0px;
            text-align: center
        }
    }
</style>