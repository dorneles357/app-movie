<template>
    <form id="box-upload" enctype="multipart/form-data">
        <form class="input" >
            <br>
            <input type="file"  multiple ref="files" @change.capture.prevent="submitEvent">
            <br>
            <br>
        </form>
        <form @submit.stop.prevent="submit" class="input">
            <br>
            <input type="text" placeholder="Titulo" name="name" id="name" v-model="name">
            <br>
            <br>
            <button type="submit" id="btn">enviar</button>
        </form>
        <h1 id="msg">Esperando arquivo ...</h1>
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
            },
            submit(){
              let form  = new FormData();
                form.append('file', this.arquive);
                form.append('name', this.name);
                
    
                Movie.store(form).then(res =>{
                    if(res.data && res.data.message === "created"){
                        document.getElementById('msg').innerHTML = "Ok"
                    }else{
                        document.getElementById('msg').innerHTML = "Campo inválido, confira as informações"
                    }

                    setTimeout(()=>{document.getElementById('msg').innerHTML = "Esperando arquivo ..."}, 3000)
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
.input{
    display: flex;
    flex-direction: column;
}
.input > input{
    font: var(--font-family);
    border: 1px solid var(--color-input-border);
    border-radius: 5px;
    margin: 20px;
    max-width: 550px;
    height: 30px;
}
#btn{
    margin:auto;
/*         margin-top: 50px;
    margin-bottom: 20px; */
    font: var(--font-family);
    height: 40px;
    width: 100px;
    border: 1px solid var(--color-border);
    border-radius: 10px;
}
#btn:hover{
    color: var(--color-link);
}

#msg{
    padding-top: 50px;
    margin-top: 40px;
}

</style>