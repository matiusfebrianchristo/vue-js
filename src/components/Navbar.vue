<template>
  <div class="container">
  <b-navbar toggleable="lg" type="light" >
    <b-navbar-brand href="#">My Site</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link> 
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/list">List</router-link> 
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/list/book">Book</router-link> 
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/list/category">Category</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/list/author">Author</router-link>
        </li>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style>

</style>