<template>
    <div class="chip" v-for="tag in tags" :key="tag">
    <!-- Content -->
    <div class="chip__content">
        {{tag.name}}
    </div>
     <span @click="remove">x</span>
</div>
</template>

<script>
export default {
    name:'PanelEditTag',
    data(){
        return{
            tags:
            [
                {name: "Julio"},
                {name: 'Outro Julio'} 
            ]
        }
    },
    methods:{
        removeTag(){
            //remover tag
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