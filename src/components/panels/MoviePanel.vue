<template>
<div class="modal" v-for="item in api" :key="item">
    <h3>{{item.name}}</h3>
    <div class="modal__header">
    <p>{{item.type}}</p>
    <p>{{item.size}}</p>
    </div>
    <tag-panel/>
    <div class="modal__footer">
        <btn-delete @click="remove(item.id)"/>
        <btn-edit />
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
    props:{
        name:String,
        type:String,
        size:String,
    },
    data(){
        return{
                api:[]
        }   
    },
    methods:{
        remove(event){
            const data = this.api;
            
            data.forEach((item, index) =>{
                if(item.id == event){
                    data.splice(index, 1)
                }
            })
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