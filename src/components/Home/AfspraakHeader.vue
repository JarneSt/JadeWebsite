<template>
<div class="d-flex bg">

  <!--OLD
  <div class="d-flex w-50 flex-column justify-content-start leftblockheader mt-auto mb-auto ">
    <h1 id="title">Investeer in jezelf</h1>
    <p>Word nu de beste versie van jezelf, door voor jezelf te kiezen.</p>
    <input class="noBlur" type="button" value="MAAK NU EEN AFSPRAAK" @click="redirectAppointment">
  </div>
  <img id="deskPic" class="mt-auto mb-auto" src="../../assets/logo.jpeg" />
-->

  <div class="d-flex w-50 flex-column justify-content-center leftblockheader mt-auto mb-auto ">
    <h1 class="text-center" id="title">Investeer in jezelf</h1>
    <p class="text-center">Word nu de beste versie van jezelf, door voor jezelf te kiezen.</p>
    <input class="noBlur text-center m-auto" type="button" value="MAAK NU EEN AFSPRAAK" @click="redirectAppointment">
  </div>

</div>
</template>

<script>

export default {
  name: "AfspraakHeader",
  methods: {
    redirectAppointment(){
      window.open("https://coaching-jade-staal.reservio.com/")
    }
  },
  mounted() {
    document.addEventListener("scroll", function (){
      console.log(scrollY);
      let nav = document.querySelector(".navbar");
      nav.classList.toggle("navRed", window.scrollY > 0);
    })
  }
}
</script>

<style scoped>
.blackRect {
  background: #c7effc;
  width: 20%;
}

* {
  font-family: 'Open Sans', sans-serif;
  transition: background-color 0.2s;
}
div {


/*
  background-image: url("../../assets/_DSC0074.jpg");
  background-size: 100% 100%;

 */

}

#deskPic {
  border-radius: 25px 25px 25px 25px;
  box-shadow: 3px 5px 7px -6px black;
  height: 313px;
  width: auto;
}

.bg {

  background: #8ac7db;

  padding: 20px;
/*
  background-image: url("../../assets/_DSC0074.jpg");
  background-size: 100% 100%;

   */

  height: 800px;
  background-image: url("../../assets/_DSC0074.jpg");

  background-size: cover;
  justify-content: space-evenly;
}


input {
  background: #29323d;
  margin-top: 100px;
  color: white;
  font-weight: bold;
  width: 250px;
  padding: 15px;
  border-radius: 25px 25px 25px 25px;
  outline: none;
  border: 2px solid #29323d;
}

.leftblockheader {
background: white;
    border-radius: 25px 25px;
    padding: 24px;
  box-shadow: 3px 5px 7px -6px black;
}




input:hover {
  color: black;
  background: white;
  border: 2px solid #9cbac9;
}


.leftblockheader img {
  margin-left: auto;
  margin-right: auto;
}

#title {
  color: #29323d;
  text-align: left;
}

p{
  font-size: 25px;
  text-align: left;
}

h1 {
  font-weight: bold;
}

@media only screen and (max-width: 992px){
  .leftblockheader {
    width: 75% !important;
  }
  input {
    width: 104%;
  }
  p {
    font-size: 17px;
  }
  .bg {
    padding: 0 !important;
    background-image: url("../../assets/_DSC0119.jpg");
  }


}
</style>