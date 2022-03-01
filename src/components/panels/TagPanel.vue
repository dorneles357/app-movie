<template>
    <div class="chip" v-for="tag in tags" :key="tag">
    <div class="chip__content">
        {{tag.name}}
    </div>
</div>
</template>

<script>
export default {
    name:'PanelEditTag',
    props:{
        tags:{type: Object}
    }
}
</script>



<style scoped>
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
</style>