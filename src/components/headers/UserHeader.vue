<template>
    <div id="nav-box">
        <div id="home">
            <router-link to="/home" class="link-menu" id="name">MovieApp</router-link>
        </div>
        <div id="nav-bar">
            <!-- <router-link to="/profile" class="link-menu" id='profile'>Perfil</router-link> -->
            <router-link to="/login" @click="logout" class="link-menu">Sair</router-link>
        </div>
    </div>
</template>

<script>
import Cookie from 'js-cookie';
import Auth from '../../services/auth';
export default {
    name: 'UserHeader',
    methods:{
        async logout(){
            const token = Cookie.get('token');
            const res = await Auth.logout(token)
            console.log(token)
        }
    }
}
</script>

<style scoped>
#nav-box{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
#nav-bar{
    display: flex;
    justify-content: space-between;
}

.link-menu{
    font: var(--font-family);
    text-decoration: none;
    color: var(--color-font);
    padding: 20px 0px 20px 0px;
}
.link-menu:hover{
    color: var(--color-link);
}
#name{
    font-weight: 600;
}
#profile{
    padding: 20px 50px 20px 0px;
}

</style>