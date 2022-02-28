<template>
    <div class="chip" v-for="tag in tags" :key="tag">
    <!-- Content -->
    <div class="chip__content">
        {{tag.name}}
    </div>
     <span @click="removeTag(tag.id)">x</span>
</div>
</template>

<script>
export default {
    name:'PanelEditTag',
    data(){
        return{
            tags:
            [
                {id: 1, name: "Julio"},
                {id: 2, name: 'Outro Julio'} 
            ]
        }
    },
    methods:{
        removeTag(event){
            const data = this.tags;

            data.forEach((item, index) => {
                if(item.id == event){
                    data.splice(index, 1);
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