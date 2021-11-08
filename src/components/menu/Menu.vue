<template>
    <nav>
        <span @click="$emit('open')"><i class="icone fa fa-bars"></i></span>
        <div class="user"></div>
    </nav>
</template>

<style scoped>
    nav{
        position: fixed;
        height: 10vh;
        width: 100%;
        background-color: #373a47;
        color: white;
        display: flex;
        align-items: center;
        z-index: 199;
        padding: 10px;
    }

    .icone{
        margin-left:20px;
        font-size: 30px;
    }

    .user{
        margin-left:auto;
        margin-right:20px;
        background: white;
        border-radius: 100%;
        height: 40px;
        width: 40px;
    }

</style>