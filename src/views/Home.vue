<template>
    <user-header/>
    <btn-upload/>
    <div id="panel">
            <movie-panel/>
    </div>
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

<style scoped>
    #panel{
        display: flex;
        justify-content: center;
        padding: 20px 0px 20px 0px;
        max-width: 1270px;
        flex-wrap: wrap;

    }
</style>