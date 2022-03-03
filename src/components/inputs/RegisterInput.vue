<template>
    <form id="box" @submit.stop.prevent="register">
        <div id="input" >
            <input v-model="name" type="text" name="name" id="name" placeholder="Nome">
            <input v-model="email" type="email" name="email" id="email" placeholder="Email">
            <input v-model="password" type="password" name="password" id="psw" placeholder="Senha">
            <input v-model="conf_psw" type="password" name="conf_psw" id="conf_psw" placeholder="Confirme a senha">    
        </div>
        <button type="submit" id="btn">Entrar</button>
        
    </form>    
</template>

<script>
import Auth from '../../services/auth';
export default {
    name: 'RegisterInput',
    data(){
        return{
            name:'',
            email:'',
            password:'',
            conf_psw: '',
        }
    },
    methods:{
        async register(){
            const data_resgister = {
                name: this.name,
                email: this.email,
                password: this.password,
                passwordConf: this.conf_psw
            };
        
            const res = await Auth.register(data_resgister);
            
            if(res.data && res.data.message == "User created"){
                alert('Usuário criado com sucesso, Faça o login e aproveite!')
                this.$router.push({name : "Login"})
            }else{
                alert('Verifique se as informações estão corretas e os campos devidamente preenchidos.')
            }
            
        }
    }
}
</script>

<style scoped>
    #box{
        padding-top:30px;
        margin: auto;
        border: 1px solid var(--color-input-border);
        border-radius: 20px;
        height: 500px;
        max-width: 600px;


        display: flex;
        
        flex-direction: column;
        justify-content: space-evenly;
    }
    #input{
        display: flex;
        flex-direction: column;
    }
    #input > input{
        font: var(--font-family);
        border: 1px solid var(--color-input-border);
        border-radius: 5px;
        margin: 20px;
        max-width: 550px;
        height: 40px;
    }
    #btn{
        margin:auto;
/*         margin-top: 50px;
        margin-bottom: 20px; */
        font: var(--font-family);
        height: 40px;
        width: 100px;
        border: 1px solid var(--color-border);
        border-radius: 10px;
    }
    #btn:hover{
        color: var(--color-link);
    }

</style>