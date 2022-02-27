<template>
    <user-header/>
    <profile-input/>
</template>

<script>
import UserHeader from '../components/headers/UserHeader.vue';
import ProfileInput from '../components/inputs/ProfileInput.vue';

export default {
    name:'Profile',
    components:{
        UserHeader,
        ProfileInput,
    }
}
</script>