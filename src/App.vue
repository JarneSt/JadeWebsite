<template>
  <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img style="display: none" id="navLogo" src="assets/JadeStaal.png"/>
            <h1>Jade Staal</h1>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>


          <div class="collapse navbar-collapse justify-content-end links" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link" to="/">Welkom</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/overmij">Over mij</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/aanbod">Aanbod</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/trajecten">Trajecten</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/tarieven">Tarieven en info</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/shop">Shop</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  </div>

  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

.navbar {
  transition: height 3s;
}
.navRed {
  height: 60px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
}

/*
nav {
  border-bottom: 3px solid #a4bfcf;
}

 */

#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-family: 'Open Sans', sans-serif;
  padding-right: 3em;
}

#nav a.router-link-exact-active {
  color: #81d3f8;
}

@media only screen and (max-width: 975px){
  #nav a.router-link-exact-active {
    color: #FD585C !important;
  }

}

</style>

<style scoped>

.navbar {
  background-color: white;
}

#navLogo {
  width: 30%;
}

.navbar-brand h1 {
  margin-left: 2em;
}
.btn {
  background: #29323d;
  color: white;
  padding-left: 30px;
  padding-right: 30px;
}
.links {
  margin-right: 3em;
}

@media only screen and (max-width: 992px){
  #nav a {
    padding-right: 0;
  }

  .links {
    margin-right: 0;
  }
}
</style>
