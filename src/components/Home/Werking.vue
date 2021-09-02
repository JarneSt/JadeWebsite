<template>
<div class="fullsection">
  <progress-scroll background="#a2bfd1">
  <div class="werking-head mb-5">
    <h1 class="mt-5">Werking</h1>
    <p>Bij mij kunnen jullie terecht voor zowel coaching als orthopedagogische begeleiding.</p>
  </div>
  <div class="d-flex w-75 m-auto desktopVersionSteps">
    <div class="d-flex flex-column w-50">
      <h1 class="roundnumber text-align">01</h1>
      <h2 class="title mt-3">Intake</h2>
      <p class="widthtext m-auto">Tijdens dit gesprek leren wij elkaar kennen. Een klik en een veilig gevoel staan centraal. </p>
    </div>
    <div class="d-flex flex-column w-50">
      <h1 class="roundnumber text-align">02</h1>
      <h2 class="title mt-3">Coachtraject</h2>
      <p class="widthtext m-auto">Tijdens het coachtraject is iedere sessie op maat. Er worden ook opdrachten meegegeven.</p>
    </div>
    <div class="d-flex flex-column w-50">
      <h1 class="roundnumber text-align">03</h1>
      <h2 class="title mt-3">Afrondgesprek</h2>
      <p class="widthtext m-auto">Wanneer het coachtraject is afgelopen doen we een afrondgesprek waarin wij al jouw tools samenvatten.</p>
    </div>
  </div>
  <div class="d-flex w-75 m-auto mobileVersionSteps">
    <div class="d-flex flex-column w-50 m-auto mb-10">
      <h1 class="roundnumber text-align">01</h1>
      <h2 class="title mt-3">Intake</h2>
      <p class="widthtext m-auto">Tijdens dit gesprek leren wij elkaar kennen. Een klik en een veilig gevoel staan centraal. </p>
    </div>
    <div class="d-flex flex-column w-50 m-auto mb-10">
      <h1 class="roundnumber text-align">02</h1>
      <h2 class="title mt-3">Coachtraject</h2>
      <p class="widthtext m-auto">Tijdens het coachtraject is iedere sessie op maat. Er worden ook opdrachten meegegeven.</p>
    </div>
    <div class="d-flex flex-column w-50 m-auto mb-10">
      <h1 class="roundnumber text-align">03</h1>
      <h2 class="title mt-3">Afrondgesprek</h2>
      <p class="widthtext m-auto">Wanneer het coachtraject is afgelopen doen we een afrondgesprek waarin wij al jouw tools samenvatten.</p>
    </div>
  </div>
  </progress-scroll>
</div>
  <hr>
</template>

<script>
export default {
  name: "Werking"
}
</script>

<style scoped>
.mb-10 {
  margin-bottom: 3em !important;
}
.mobileVersionSteps {
  display: none !important;
}
hr {
  color: lightgray;
  height: 4px;
}
.fullsection {
  margin-top: 6em;
  margin-bottom: 4em;
}
.werking-head {
  width: 32%;
  margin: auto;
}
* {
  font-family: 'Open Sans', sans-serif;
}
.widthtext {
  width: 50%;
}

h1, h2 {
  font-weight: bold;
}

.roundnumber {
  margin: auto;
  padding: 20px;
  width: 79px;
  border-radius: 50%;
  background: #edf0f4;
  color: #798da3;
  font-size: 35px;
}
h1,h2 {
  color: #a5c2d0;
}
.title {
}
p {
  color: #798da3;
  font-weight: bolder;
}
@media only screen and (max-width: 992px){
  .desktopVersionSteps {
    display: none !important;
  }

  .mobileVersionSteps {
    display: block !important;
  }

  .widthtext {
    width: 100%;
  }
}
</style>