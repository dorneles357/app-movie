<template>
  <router-view/>
</template>

<style>
:root{
  --color-link: #42b983;
  --color-font: #2c3e50;
  --color-border:#bbb7b7;
  --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}
#app {
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
