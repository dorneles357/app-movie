<template>
<div class="modal">
    <h3>{{api.name}}</h3>
    <div class="modal__header">
    <p>{{api.type}}</p>
    <p>{{api.size}}</p>
    </div>
    ...<!--TAGS-->..
    <div class="modal__footer">
        <btn-delete/>
        <btn-edit/>
    </div>
</div> 
</template>


<script>
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
            api:
                {
                    name: "Meu primeiro video",
                    type: '.mp4',
                    size: '3mb'
                }
        }
    }

}
</script>

<style scoped>
.modal {
    max-width: 180px;
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