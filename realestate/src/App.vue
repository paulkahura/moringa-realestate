<template>
  <div id="app">
      <!-- ======= Property Search Section ======= -->


      <!-- ======= Header/Navbar ======= -->
      <nav class="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
        <div class="container">
          <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <img src="intime.png"  class="logo">
          <a class="navbar-brand text-brand" href="#">Moringa<span class="color-b">Homes</span></a>
          <button type="button" class="btn btn-link nav-search navbar-toggle-box-collapse d-md-none" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-expanded="false">
            <span class="fa fa-search" aria-hidden="true"></span>
          </button>
          <div class="navbar-collapse collapse justify-content-center" id="navbarDefault">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/" class="nav-link" href="#">Home</router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#property">Property</a>
              </li>
              
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Agent Admin
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <router-link to="/dashboard" class="dropdown-item">Admin Login</router-link>
                </div>
              </li>
              
            </ul>
          </div>

        </div>
      </nav><!-- End Header/Navbar -->

    <router-view/>
      
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="copyright-footer">
                <p class="copyright color-text-a">
                  &copy; Copyright
                  <span class="color-a">Moringa Homes </span> All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer><!-- End  Footer -->

      <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
      <div id="preloader"></div>
    
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      name:"",
      type:"",
      beds:"",
      garage:"",
      baths:"",
      filteredProps:"",

    }
  },
  methods: {
    closeModal(){
      var modal = document.getElementById('search');
      console.log(modal);
    }
  }
  
}
</script>

<style>

</style>

