<template>
  <div class="home">
      <div class="container">  
        <Compteur v-for='form in forms' v-bind:key='form.name' :form='form'/>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Compteur from '@/components/Compteur.vue'

export default {
  name: 'Home',
  data() {
      return {
          forms: [{id_cmp:'01', index:78200},{id_cmp:'02', index:8200},{id_cmp:'03', index:8200},{id_cmp:'04', index:8200}],
        }
  },
  components: {
    Compteur
  }
}
</script>

<style scoped>
.container{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
</style>
