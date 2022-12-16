<template>
    <div id="ejercicio1">
        <h1>DATE</h1>
        <p>Mensaje principal: "{{menssage}}"</p>
        <p>comentario invertido computado: "{{reversedMenssage}}"</p>
    </div>
</template>

<script>
    export default {
        el:'#ejercicio1',
        data:()=>{
            return{
            menssage: "karen morales"
           }
        },
        computed:{
            reversedMenssage: function(){
                return this.menssage.split('').reverse().join('')
            }
        },
    };
</script>
<style scoped>
h1{
    background-color: rgb(188, 150, 223);
    border: 1px solid rgb(195, 240, 189);






}

h1:hover {

color: rgb(161, 10, 188);


}


p{
    background-color: rgb(224, 203, 244);
}
</style>





