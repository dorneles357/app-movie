<template>
    <user-header/>
    <btn-upload/>
</template>

<script>
import UserHeader from '../components/headers/UserHeader.vue';
import BtnUpload from '../components/button/BtnUpload.vue';
export default {
    name:'Home',
    components:{
        UserHeader,
        BtnUpload,
    },
}
</script>