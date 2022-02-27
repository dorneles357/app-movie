<template>
    <div id="nav">
        <router-link to="/login">Login</router-link> |
        <router-link to="/register">Cadastro</router-link>
    </div>
</template>

<script>
export default {
    name:'LoginAndRegisterLogin',
}
</script>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: var(--color-font);
}

#nav a.router-link-exact-active {
  color: var(--color-link);
}
</style>