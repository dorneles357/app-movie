<template>
    <div id="btn-upload">
        <router-link :to="to" class="link-menu">{{name}}</router-link>
    </div>
</template>
<script>
export default {
    name: 'BtnUpload',
    props:{
        to: String,
        name: String,
    }
}
</script>

<style scoped>
 #click-menu{
     
 }
</style>