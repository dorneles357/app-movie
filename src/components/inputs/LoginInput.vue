<template>
    <div id="box">
        <div id="logo">
            <h2>MovieApp</h2>
        </div>
        <form id="input" @submit.stop.prevent="submit">
            <input v-model="email" type="email" name="email" id="email" placeholder="Email">
            <input v-model="password" type="password" name="password" id="password" placeholder="Senha">
            <button type="submit" id="btn">Entrar</button>
        </form>
    </div>
</template>

<script>
export default {
    name:'LoginInput',
    data(){
        return{
                email:'',
                password:'',
        }
    },
    methods:{
        submit(){
            const payload = {email:this.email, password: this.password};
            console.log(payload)
        }
    }
}
</script>

<style scoped>
    #box{
        font: var(--font-family);
        margin:auto;
        max-width: 350px;
        height: 500px;
        border: 1px solid var(--color-input-border);
        border-radius: 20px;

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
        border: 1px solid var(--color-input-border);
        border-radius: 5px;
        margin: 20px 0px 20px 0px;
        width: 300px;
        height: 40px;
    }

    #btn{
        font: var(--font-family);
        height: 40px;
        width: 100px;
        border: 1px solid var(--color-border);
        border-radius: 10px;
    }
    #btn:hover{
        color: var(--color-link);
    }
    #logo{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 99%;
        border: 1px solid var(--color-link);
        width: 140px;
        height: 140px;
    }
    h2{
        color: var(--color-font);
    }
</style>