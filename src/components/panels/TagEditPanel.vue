<template>
    <div class="chip" v-for="tag in data" :key="tag.item">
    <!-- Content -->
    <div class="chip__content">
        {{tag.name}}
    </div>
     <span @click="removeTag(tag.id)">x</span>
</div>
</template>

<script>
import Tag from '../../services/tags';
export default {
    
    name:'PanelEditTag',
    props:{
        data:{type: Array}
    },
    data(){
        return{
        
        }
    },
    methods:{
        removeTag(event){
            const tag = this.data;

            tag.forEach((item, index) => {
                if(item.id == event){
                    Tag.delete(event).then(res=> console.log(res))
                    tag.splice(index, 1);
                    
                }
            });
        },
        createTag(){
            //add tag
        }
    }
}
</script>



<style scoped>
.chip {
    /* Center the content */
    align-items: center;
    display: inline-flex;
    justify-content: center;

    /* Background color */
    background-color: var(--color-border);

    /* Rounded border */
    border-radius: 9999px;

    /* Spacing */
    padding: 4px 8px;
}

.chip__content {
    margin-right: 4px;
}

span{
    color: var(--color-danger);
    cursor: pointer;
}
span:hover{
    transform: scale(1.2);
}
</style>