<template>
    <div id="box-upload">
        <div>
            <br>
            <input type="file" @change.capture.prevent="submitEvent">
            <br>
            <br>
        </div>
        <form @submit.stop.prevent="submit">
            <br>
            <input type="text" placeholder="Titulo" name="name" id="name" v-model="name" >
            <br>
            <br>
            <button type="submit">enviar</button>
        </form>
    </div>

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
                this.name = this.name_movie;
                console.log(this.arquive)
            },
            submit(){
              let form  = new FormData();
                form.append('imagem', this.arquive);
                form.append('name', this.arquive.name);

                const data ={
                    name: this.name,
                    file: form
                }
                 console.log(data)

               Movie.store(data).then(res =>{
                    console.log(json);
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