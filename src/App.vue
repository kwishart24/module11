<template>
  <div id="app" class="container">
    <TheNavigation />
    <router-view />
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue";

export default {
  components: { TheNavigation },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 0;
  margin-top: 2em;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

.container {
  text-align: center;
  font-family: Arial, sans-serif;
  margin: 50px auto;
  background-color: #cec2eb;
  width: 60%;
  padding: 2em;
}

h1 {
  font-weight: 700;
}

button {
  margin-top: 30px;
  padding: 10px 20px;
  font-size: 18px;
  background-color: aquamarine;
  border-color: aquamarine;
  font-weight: 700;
}
.author {
  font-style: italic;
  color: #555;
  margin-top: 5px;
}

/* nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
