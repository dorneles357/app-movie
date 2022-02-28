<template>
    <div id="box-upload">
        <h1>Escolhas as novas anotações</h1>
        <form @submit.stop.prevent="submitMovie" >
            <div class='box-data'>
                <input type="text" v-model="api.movie" name="name" id="name" placeholder="Escolha um titulo">
            </div>
            <button  class="btn">Adicionar</button>
        </form>

        <form action="" @submit.stop.prevent="submitTag">
        <div class="box-data">
            <input type="text" v-model="api.tag" name="name" id="tag" placeholder="Digite uma nova tag ">
        </div>  

        <button type="submit" class="btn">Adicionar</button>
        </form>

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
        return{
            api:
                {
                    movie:'',
                    tag: ''
                }
        }
    },
    methods:{
        submitMovie(){
            const data = {"name": this.api.movie};

            console.log(data)
        },
        submitTag(){
            const data = {"name": this.api.tag};
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