<template>
    <div id="btn-upload">
        <router-link to="/upload" class="link-menu" >
            +
        </router-link>
    </div>
</template>
<script>
export default {
    name: 'BtnUpload',
}
</script>

<style scoped>
#btn-upload{
    margin:auto;
    border: 1px solid var(--color-link);
    border-radius: 99%;
    height: 40px;
    width: 40px;

    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
}

.link-menu{
    text-decoration: none;
    color: var(--color-border);
    font-family: var(--font-family);
    font-size: 60px;
    font-weight: 900px;
}

.link-menu:hover{
    color: var(--color-link)
}
</style>