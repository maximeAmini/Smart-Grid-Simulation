<template>
    <Menu @open="close"/>
    <Nav :isClose="this.isClose"  @open="close"/>
    <router-view class="page"/>
</template>

<script>
import Nav from '@/components/menu/Nav.vue'
import Menu from '@/components/menu/Menu.vue'

export default{
    components: {
        Nav,
        Menu
    },
    data() {
        return {
            isClose: false
        }
    },
    methods:{
        close(){
            this.isClose= !this.isClose
        }
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
    margin-left:20px;
    padding-top:15vh;
    padding-left:20px;
    padding-right:20px;
}

@media screen and (max-width: 768px) {
   
}
</style>
