<template>
    <div id="btn-upload">
        <router-link to="/upload" class="link-menu">
            <p>+</p>
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
     margin: auto;
     display: flex;
     align-items: center;
     justify-content: center;
     border: 1px solid var(--color-link);
     height: 70px;
     width: 70px;
     border-radius: 99%;
 }
 .link-menu{
     font: var(--font-family);
     text-align: center;
     font-size: 80px;
     font-weight: 900;
     text-decoration: none;
     color: var(--color-border);
 }

 .link-menu:hover{
     color: var(--color-link);
 }

</style>