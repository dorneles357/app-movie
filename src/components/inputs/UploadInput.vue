<template>
    <form id="box-upload" enctype="multipart/form-data">
        <form >
            <br>
            <input type="file"  multiple ref="files" @change.capture.prevent="submitEvent">
            <br>
            <br>
        </form>
        <form @submit.stop.prevent="submit">
            <br>
            <input type="text" placeholder="Titulo" name="name" id="name" v-model="name" >
            <br>
            <br>
            <button type="submit">enviar</button>
        </form>
    </form>

</template>

<script>
import Movie from '../../services/movies'
export default {
    name:'UploadInput',  
    data(){
        return{
            name:'',
            arquive:''
        }
    },
    methods:{
            submitEvent(event){
                this.arquive = event.target.files[0];
                console.log(this.arquive)
            },
            submit(){
              let form  = new FormData();
                form.append('file', this.arquive);
                form.append('name', this.name);
                
                console.log(this.arquive)
             Movie.store(form).then(res =>{
                    console.log(res);
                }) 

            }
        }, 
}
</script>

<style scoped>
#box-upload{
    padding-top:30px;
    margin: auto;
    border: 1px solid var(--color-border);
    border-radius: 20px;
    height: 500px;
    max-width: 600px;
}


</style>