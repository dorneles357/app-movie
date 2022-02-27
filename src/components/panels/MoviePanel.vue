<template>
<div class="modal" v-for="item in api" :key="item">
    <h3>{{item.name}}</h3>
    <div class="modal__header">
    <p>{{item.type}}</p>
    <p>{{item.size}}</p>
    </div>
    <tag-panel/>
    <div class="modal__footer">
        <btn-delete/>
        <btn-edit/>
    </div>
</div> 
</template>


<script>
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
            api:
            [
                {
                    name: "Meu primeiro video",
                    type: '.mp4',
                    size: '3mb'
                },
                {
                    name: "Naruto Vs Jesus",
                    type: '.mp4',
                    size: '3mb'
                },
                                {
                    name: "Final da Tarde",
                    type: '.mp4',
                    size: '3mb'
                },
                                {
                    name: "Manhã de Primavera",
                    type: '.mp4',
                    size: '3mb'
                },
            ]
        }   
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