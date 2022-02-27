 <template>
    <login-and-register-login />
    <register-input />
</template>

<script>
import LoginAndRegisterLogin from '../components/headers/LoginAndRegisterLogin.vue';
import RegisterInput from '../components/inputs/RegisterInput.vue';
export default {
    name:'Register',
    components:{
        LoginAndRegisterLogin,
        RegisterInput,
    }
}
</script>