<template>
    <user-header/>
    <edit-input/>
</template>

<script>
import UserHeader from '../components/headers/UserHeader.vue';
import EditInput from '../components/inputs/EditInput.vue';
export default {
    name:'Edit',
    components:{
        UserHeader,
        EditInput,
    },
}
</script>