<template>
    <div id="box-upload">
        <h1>Escolhas as novas anotações</h1>
        <div class='box-data'>
        <input type="text" name="name" id="name" placeholder="Escolha um titulo">
        </div>
        <button type="submit" @click="updateMovie($event)" class="btn">Adicionar</button>

        <div class="box-data">
        <input type="text" name="name" id="tag" placeholder="Digite uma nova tag ">
        </div>  

        <button type="submit" @click="createTags($event)" class="btn">Adicionar</button>

        <div>
            <panel-edit-tag/>
        </div>
    </div>
</template>

<script>
import PanelEditTag from '../panels/TagEditPanel.vue';
export default {
    name:'EditInput',
    components:{
        PanelEditTag,
    },
    data(){

    },
    methods:{
        updateMovie(){

        },
        createTags(){
            
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

.box-data{
    display: flex;
    flex-direction: column;
}
.box-data > input{
    font: var(--font-family);
    border: 1px solid var(--color-border);
    border-radius: 5px;
    margin: 20px;
    max-width: 550px;
    height: 40px;
}

.btn{
    margin-bottom: 20px;
    font: var(--font-family);
    height: 40px;
    width: 100px;
    border: 1px solid var(--color-border);
    border-radius: 10px;
}
.btn:hover{
    color: var(--color-link);
}

</style>