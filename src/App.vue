<template>
    <Nav />
    <router-view class="page"/>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default{
    components: {
        Nav
    }
}
</script>

<style>
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.page{
    margin-left:20%;
    padding-top:20px;
    padding-left:20px;
    padding-right:20px;
}

@media screen and (max-width: 768px) {
    .page{
        margin-left:10vh;
    }
}
</style>
