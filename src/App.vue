<template>
  <router-view/>
</template>

<style>
:root{
  --color-input-border: #716E6E;
  --color-to-dark: white;
  --color-danger:#DC3545;
  --color-link: #42b983;
  --color-font: #2c3e50;
  --color-border:#E5E5E5;
  --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}
#app {
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 900px;
  padding: 0px 30px 0px 30px;
  margin: auto;
}

@media(max-width:500px) {
  #app{
    padding: 0px 10px 0px 10px;
  }
}
</style>
