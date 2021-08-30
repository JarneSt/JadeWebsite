<template>
<div class="d-flex bg">

  <div class="d-flex w-50 flex-column justify-content-start leftblockheader mt-auto mb-auto ">
    <h1 id="title">Investeer in jezelf</h1>
    <p>Word nu de beste versie van jezelf, door voor jezelf te kiezen.</p>
    <input class="noBlur" type="button" value="MAAK NU EEN AFSPRAAK" @click="redirectAppointment">
  </div>
  <img id="deskPic" class="mt-auto mb-auto" src="../../assets/logo.jpeg" />

</div>
</template>

<script>

export default {
  name: "AfspraakHeader",
  methods: {
    redirectAppointment(){
      window.open("https://coaching-jade-staal.reservio.com/")
    }
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

  background-image: url("../../assets/desk.png");
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
  border: 2px solid #29323d;
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

@media only screen and (min-width: 992px){

}
</style>