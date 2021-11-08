<template>
    <div class="bulb-hover">
        <div class="bulb-area1" :class="{active: isActive}"></div>
        <div class="bulb-area2"></div>
        <div class="bulb-area2"></div>
        <div class="bulb-area2"></div>
    </div>
</template>

<script>
    export default {
        name: "Ampoule",
        props: {
            isActive: Boolean
        }
    }
</script>

<style scoped>
    .bulb-hover{
        -webkit-transform: scale (0.5);
        -moz-transform: scale (0.5);
        -ms-transform: scale (0.5);
        transform: scale(0.5);
    }
    .bulb-area1 {
        width: 280px;
        height: 280px;
        margin:130px auto 0 auto;
        border-radius: 50%;
        background: #e7e2e2;
        transition:0.6s;  
    }
    .bulb-area2 {
        margin: -20px auto 0 auto;
        width: 142px; 
        height: 0; 
        border-left: 16px solid transparent;
        border-right: 16px solid transparent;
        border-top: 40px solid #c7bfbf;
        position: relative;
        transition:0.6s;
    }
    .active{
        background: #eaec68;
        border-top-color: #eaec68;
        box-shadow: 0 0 55px 25px rgba(255,255,0,0.4);
    }
</style>