<template>
<div class="modal" v-for="item in api" :key="item">
    <h3>{{item.name}}</h3>
    <div class="modal__header">
    <p>{{item.type}}</p>
    <p>{{item.size}}</p>
    </div> 
    <tag-panel :tags="tags"/>
    <div class="modal__footer">
        <btn-delete @click="remove(item.id)"/>
        <btn-edit @click="edit(item.id)" :route="{name:'Edit', params:{id:item.id}}"/>
    </div>
</div> 
</template>


<script>
import Movies from '../../services/movies';
import TagPanel from './TagPanel.vue';
import BtnDelete from '../buttons/BtnDelete.vue';
import BtnEdit from '../buttons/BtnEdit.vue';

export default {
    name: 'MoviePanel',
    components:{
        BtnDelete,
        BtnEdit,
        TagPanel,
    },
    data(){
        return{
                api:[],
                tags:[{name:'bom'}, {name:'não tão bom'}]
        }   
    },
    methods:{
        remove(event){
            const data = this.api;
            console.log(event)
            data.forEach((item, index) =>{
                if(item.id == event){
                    if(confirm("Deseja excluir esse arquivo?")){
                        data.splice(index, 1)
                        Movies.delete(event).then(res=>{
                            console.log(res)
                        })
                    }
                }
            })
        },
        edit(event){
            console.log(event)
        },

        route(){
            this.$router.push({name: "upload"})
        }
    },
    mounted(){
        Movies.index().then(res =>{
            this.api = res.data
        })
    }

}
</script>

<style scoped>
.modal {
    margin: 2px;
    width: 180px;
    border: 1px solid var(--color-border);
    border-radius: 4px;
}

.modal__header {
    display: flex;
    justify-content: space-around;
    font-size: 10px;
    border-bottom: 1px solid var(--color-border);
}

.modal__footer {
    padding:10px 0px 10px 0px;
    display: flex;
    justify-content: space-around;
    border-top: 1px solid var(--color-border);
}

</style>