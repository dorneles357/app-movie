<template>
  <router-view/>
</template>

<style>
:root{
  --color-link: #42b983;
  --color-font: #2c3e50;
  --color-border:#716E6E;
  --font-family: Avenir, Helvetica, Arial, sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1280px;
  padding: 0px 30px 0px 30px;
}

@media(max-width:500px) {
  #app{
    padding: 0px 10px 0px 10px;
  }
}
</style>
