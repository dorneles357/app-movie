<template>
    <div id="box">
        <div id="input">
            <input type="text" name="name" id="name" :placeholder="api.name">
            <input type="email" name="email" id="email" :placeholder="api.email">
            <input type="password" name="password" id="psw" placeholder="Senha">
            <input type="password" name="conf_psw" id="conf_psw" placeholder="Confirme a senha">
        </div>
        <button type="submit" id="btn">Alterar</button>
    </div>    
</template>

<script>
export default {
    name: 'RegisterInput',
    data(){
        return{
            api:
                {
                    name:"Ebenézer",
                    email: "ebenezerdorneles@gmail.com",
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
    }
    #input{
        display: flex;
        flex-direction: column;
    }
    #input > input{
        font: var(--font-family);
        border: 1px solid var(--color-border);
        border-radius: 5px;
        margin: 20px;
        max-width: 550px;
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