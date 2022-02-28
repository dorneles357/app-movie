<template>
    <form id="box-upload" >
        <div class="container">
            <!-- The real file input -->
            <input type="file" class="container__input" @submit.stop.prevent="submitName" />

            <!-- The upload icon -->
            <div class="container__icon"></div>

            <!-- The label -->
        </div>
        <div id="input" >
            <input type="text" v-model="upload.name" name="name" id="name" placeholder="Nome">
        </div>

        <button type="submit" id="btn">Enviar</button>

        <div id="msg">
            <h3>Esperando arquivo ...</h3>
        </div>
    </form>
</template>

<script>
export default {
    name:'UploadInput',  
    data(){
        return{
            upload:
            {
                arquive: '',
                name: ''
            }
        }
    },
    methods:{
        submitName(){
            const data = {'name': this.upload.name}
            console.log(data)
        }
    }  
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
.container {
    height: 25px;
    margin: auto;
    position: relative;
    max-width: 550px;
    align-items: center;
    display: flex;

    border: 1px solid var(--color-border);
    border-radius: 10px;
}

.container__input {

    height: 25px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;

}

#input{
    display: flex;
    flex-direction: column;
    /* align-items: center; */
}
#input > input{
    font: var(--font-family);
    border: 1px solid var(--color-input-border);
    border-radius: 5px;
    margin: 20px;
    max-width: 550px;
    height: 40px;
}

#btn{
    margin-top: 50px;
    margin-bottom: 20px;
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
    margin-top: 30px;
    padding-top: 30px;
}

</style>