<template>
    <login-and-register-login />
    <login-input />
</template>

<script>
import LoginAndRegisterLogin from '../components/headers/LoginAndRegisterLogin.vue';
import LoginInput from '../components/inputs/LoginInput.vue'
export default {
    name:'Login',
    components:{
        LoginAndRegisterLogin,
        LoginInput,
    }
}
</script>