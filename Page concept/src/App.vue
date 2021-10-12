<template>
  <nav class= "navbar navbar-expand-sm bg-light navbar-light">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link to="/" class="nav-link">Admin</router-link>
      </li>
      <li class="nav-item">
        <router-link to="Manager" class="nav-link">Manager</router-link>
      </li>
      <li class="nav-item">
        <router-link to="Member" class="nav-link">Member</router-link>
      </li>
    </ul>
  </nav>
  <router-view/>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav .navbar-nav li a.router-link-exact-active{
  color:blueviolet !important;
}
</style>
