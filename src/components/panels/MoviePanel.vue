<template>
<div id="orderby">
    <div class="container">
    <label class="container__label" id="asc">
        <input type="radio" class="container__input" @click="orderByASC($event)"/>
        ASC
    </label>
    <label class="container__label container__label--selected"  id="desc" @click="orderByDESC($event)">
        <input type="radio" class="container__input">
        DESC
    </label>
</div>
</div>
<div class="modal" v-for="item in api" :key="item">
    <h3>{{item.name}}</h3>
    <div class="modal__header">
    <p>{{item.type}}</p>
    <p>{{item.size}}</p>
    </div> 
    <div class="modal__footer">
        <btn-delete @click="remove(item.id)"/>
        <btn-edit @click="edit(item.id)" :route="{name:'Edit', params:{id:item.id}}"/>
    </div>
</div> 

<!-- <div class="chip" v-for="tag in tags" :key="tag">
    <div class="chip__content">
        {{tag.name}}
    </div> 
</div>  -->
</template>


<script>
import Movies from '../../services/movies';
import BtnDelete from '../buttons/BtnDelete.vue';
import BtnEdit from '../buttons/BtnEdit.vue';

export default {
    name: 'MoviePanel',
    components:{
        BtnDelete,
        BtnEdit,
    },
    data(){
        return{
                api:[],
                tags:[],
                _id:''
        }   
    },
    methods:{
        remove(event){
            this._id = event;
            const data = this.api;
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
        orderByASC(event){
            const asc = document.getElementById('asc');
            const desc = document.getElementById('desc');
            const class_select_asc = asc.classList.contains('container__label--selected');
            const class_select_desc= desc.classList.contains('container__label--selected');
            if(class_select_desc){
                desc.classList.remove('container__label--selected');
                asc.classList.add('container__label--selected');

                Movies.orderbyASC().then(res=>{
                    this.api = res.data
                })
            }else{

            }
        },
        orderByDESC(event){
            const asc = document.getElementById('asc');
            const desc = document.getElementById('desc');
            const class_select_asc = asc.classList.contains('container__label--selected'); 
            if(class_select_asc){
                asc.classList.remove('container__label--selected');
                desc.classList.add('container__label--selected');

                Movies.orderbyDESC().then(res=>{
                    this.api = res.data
                })
            }else{

            }
        }
    },
    async mounted(){
        const data = await Movies.index();
        this.api = data.data;
    }
}
</script>

<style scoped>
#orderby{
    margin-top: 10px;
    margin-bottom: 30px;
    width: 100%;
}
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
.chip {
    align-items: center;
    display: inline-flex;
    justify-content: center;


    background-color: var(--color-border);


    border-radius: 9999px;


    padding: 4px 8px;
}

.chip__content {
    margin-right: 4px;
    font-size: 12px;
}

span{
    color: var(--color-danger);
    cursor: pointer;
}
span:hover{
    transform: scale(1.2);
}

.container {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 9999px;
    display: inline-flex;
    padding: 4px;
}

.container__label {
    border-radius: 9999px;
    cursor: pointer;
    padding: 4px 8px;
}

.container__label--selected {
    background-color: #357edd;
    color: #fff;
}

.container__input {
    display: none;
}
</style>