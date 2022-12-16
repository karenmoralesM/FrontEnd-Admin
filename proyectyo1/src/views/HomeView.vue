<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
<pruebaComponente/>
<directivasData/>
<directivasMetodos/>


    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

import directivasData from '@/components/directivasData.vue';
import directivasMetodos from '@/components/directivasMetodos.vue';




export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    
    directivasData,
    directivasMetodos,
    
   
   
    

  },
 
};
</script>

   