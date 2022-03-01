<template>
    <router-link :to="route" id="edit" >
        <P>Editar</P>
    </router-link>
</template>

<script>
export default {
    name:'BtnEdit', 
    props:{
        route:{
            type: Object, 
        }
    }
}
</script>

<style scoped>
#edit{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-family: var(--font-family);
    text-align: center;
    text-decoration: none;
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