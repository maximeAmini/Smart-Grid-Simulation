<template>
  <div class="home">
      <div class="container">  
        <Maison v-for='form in forms' v-bind:key='form.name' :form='form'/>
      </div>
  </div>
</template>

<script>
import Maison from '@/components/maison/Maison.vue'

export default {
  name: 'Home',
  data() {
    return {
      forms: [{id_cmp:'01', index:78200}],
    }
  },
  components: {
    Maison
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
