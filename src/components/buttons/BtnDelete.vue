<template>
    <button type="button" id="delete">Excluir</button>
</template>

<script>
export default {
    name:'BtnDelete' 
}
</script>

<style scoped>
    #delete{
        height: 30px;
        width: 60px;
        color: var(--color-to-dark);
        background: var(--color-danger);
        border-radius: 10px;
        border: 1px solid var(--color-border);
        cursor: pointer;
    }

    #delete:hover{
        border: 2px solid var(--color-danger);
        transform: scale(1.1);
    }

</style>