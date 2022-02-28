<template>
    <user-header/>
    <upload-input/>
</template>

<script>
import UserHeader from '../components/headers/UserHeader.vue';
import UploadInput from '../components/inputs/UploadInput.vue';
export default {
    name:'UploadMovie',
    components:{
        UserHeader,
        UploadInput,
    }
}
</script>