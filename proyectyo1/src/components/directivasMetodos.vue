<template>
  <div id="inicio de vue">
<h1>Mostrar datos <code> v-on:click </code> </h1>
<button v-on:click=" mostrarDatos" class="boton1 btn-lg">Muestre Datos
<span></span>
<span></span>
<span></span>
<span></span>
</button>

</div>
</template>

<script>
export default {
data(){
  return{
    name:'Inicio de vue',
    

  }
},

methods: {
 mostrarDatos:function(){
 alert('Como estas')


 }
},

}

</script>

<style scoped>
button{
 position: relative;
 padding: 10px 15px;
 border :none;
 background-color: rgb(25, 19, 30);
color: #f9f3f3;
cursor: pointer;
transition: .5s;
overflow: hidden;

  
  
}


button:hover{
  color: rgb(233, 235, 243);

}

button span{
position: absolute;
background-color: antiquewhite;
}

button span:nth-child(1){
width: 100%;
height: 1px;
top: 0%;
left: -100%;
}

button span:nth-child(2){
width: 100%;
height: 1px;
bottom: 0;
left: -100%;
}

button span:nth-child(3){
width: 1px;
height: 100%;
bottom: 0;
left: 0;
}

button span:nth-child(4){
width: 1px;
height: 100%;
top: -100%;
right: 0;
}

button:hover span:nth-child(1){
  left: 0;
}
button:hover span:nth-child(2){
 right: 0;
}
button:hover span:nth-child(3){
  bottom: 0;
}

button:hover span:nth-child(4){
  top: 0;
}

</style>
