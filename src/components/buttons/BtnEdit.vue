<template>
    <button type="button" id="edit" to='/edit'>Editar</button>
</template>

<script>
export default {
    name:'BtnEdit'
}
</script>

<style scoped>
#edit{
    height: 30px;
    width: 60px;
    border-radius: 10px;
    border: 1px solid var(--color-border);
    background: var(--color-link);
    color: var(--color-to-dark);
    cursor: pointer;
}

#edit:hover{
    border: 2px solid var(--color-link);
    transform: scale(1.1);
}


</style>