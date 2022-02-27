<template>
    <div id="box">
        <div id="logo">
            <h2>MovieApp</h2>
        </div>
        <div id="input">
            <input type="email" name="email" id="email" placeholder="Email">
            <input type="password" name="password" id="password" placeholder="Senha">
        </div>
        <button type="submit" id="btn">Entrar</button>
    </div>
</template>

<script>
export default {
    name:'LoginInput',
}
</script>

<style scoped>
    #box{
        font: var(--font-family);
        margin:auto;
        max-width: 350px;
        height: 500px;
        border: 1px solid var(--color-border);
        border-radius: 20px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }
    #input{
        display: flex;
        flex-direction: column;
    }

    #input > input{
        font: var(--font-family);
        border: 1px solid #716E6E;
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