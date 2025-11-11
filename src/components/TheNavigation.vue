<template>
  <nav>
    <router-link to="/about">About</router-link> |
    <router-link to="/">Random Quotes</router-link> |
    <router-link to="/contact">Contact</router-link>
  </nav>
</template>

<style lang="css">
    nav .active-link{
        color: green;
        /* border-bottom: 2px solid pink; */
    }
</style>