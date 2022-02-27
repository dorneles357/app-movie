<template>
    <user-header/>
    <btn-upload/>
    <movie-panel/>
</template>

<script>
import UserHeader from '../components/headers/UserHeader.vue';
import BtnUpload from '../components/buttons/BtnUpload.vue';
import MoviePanel from '../components/panels/MoviePanel.vue';
export default {
    name:'Home',
    components:{
        UserHeader,
        BtnUpload,
        MoviePanel,
    },
}
</script>