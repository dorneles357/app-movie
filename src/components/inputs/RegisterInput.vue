<template>
    <div id="box">
        <form id="input" @submit.stop.prevent="register">
            <input v-model="name" type="text" name="name" id="name" placeholder="Nome">
            <input v-model="email" type="email" name="email" id="email" placeholder="Email">
            <input v-model="password" type="password" name="password" id="psw" placeholder="Senha">
            <input v-model="conf_psw" type="password" name="conf_psw" id="conf_psw" placeholder="Confirme a senha">
            <button type="submit" id="btn">Entrar</button>
        </form>
        
    </div>    
</template>

<script>
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
        register(){
            const data_resgister = {
                name: this.name,
                email: this.email,
                password: this.password,
                conf_pws: this.conf_psw
            };

            console.log(data_resgister) 
        }
    }
}
</script>

<style scoped>
    #box{
        padding-top:30px;
        margin: auto;
        border: 1px solid var(--color-border);
        border-radius: 20px;
        height: 500px;
        max-width: 600px;


        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }
    #input{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #input > input{
        font: var(--font-family);
        border: 1px solid var(--color-border);
        border-radius: 5px;
        margin: 20px;
        width: 100%;
        height: 40px;
    }
    #btn{
        margin-top: 50px;
        margin-bottom: 20px;
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