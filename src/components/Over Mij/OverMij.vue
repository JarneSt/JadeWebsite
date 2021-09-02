<template>
<div class="fullContainer">
    <div class="firstcolumn">
      <!--<img id="jadePic" src="../../assets/Jade.png" />-->
      <div class="d-flex">
        <div class="widthFirstRow">
          <img id="jadePic" src="../../assets/testbanner-removebg-preview.png"/>
        </div>
        <div class="w-50 m-auto secondRow">
          <h1 id="title">Life Coach</h1>
        </div>
      </div>
    </div>
    <div class="text-lg-start secondcolumn">
      <div class="textblock">
        <p>Welkom! Ik ben Jade Staal, een gedreven en gepassioneerd persoon. </p>
        <p>Ik ben heel mijn leven al geboeid door mensen, dit startte in het helpen van mijn vrienden en naasten.
          Maar ook begon ik al vroeg met het opzoeken van stoornissen. Ik ben ervan overtuigd dat wij controle kunnen
          hebben over onze mindset en ons leven.</p>
        <p>
          Ik zelf heb doorheen mijn leven ook al een groeiproces doorstaan in mijn eigen persoonlijke ontwikkeling,
          op deze manier ben ik mijn passie tegengekomen. Ik ben dagdagelijks bezig met mijn eigen bewustzijn,
          op die manier ben ik nu in staat om al mijn passies uit te voeren en mij niet te laten tegenhouden
          door mogelijke drempels of tegenslagen, ik wil anderen erin steunen om dit ook te kunnen doen.</p>
        <p>Momenteel ben ik zelfstandig persoonlijke ontwikkelingscoach en praktijkgerichte orthopedagoge in bijberoep en
          daarnaast ben ik leefgroepbegeleidster bij VZW Kids.</p>
      </div>
      <h1>Studies</h1>
      <ul>
        <li v-for="studie in studies">{{studie}}</li>
      </ul>
      <h1>Ervaring</h1>
      <ul>
        <li v-for="ervaring in ervaringen">{{ervaring}}</li>
      </ul>
    </div>
</div>
</template>

<script>
export default {
  name: "OverMij",
  data(){
    return {
      studies : [
          'Coachopleiding tot Life coach',
        'Professionele Bachelor Praktijkgericht Orthopedagoog',
        '1/3 professionele Bachelor Toegepaste Psychologie',
        'HSP coach in opleiding'],
      ervaringen : [
          'Buitengewoon basisonderwijs \'De Dolfijn\': ASS, hechting, ADHD,..',
          'Ons Kinderhuis kamertraining: kwetsbare jongeren ondersteunen naar een zelfstandig leven',
          'VZW Kids: ASS, hechting, spraak-en taalstoornissen',
          'Eenzaamheid en dementie in WZC Prinsenpark'
      ]
    }
  }
}
</script>

<style scoped>

.rightContainerPicture {

}

#title {
  font-size: 100px;
  margin: auto;
  /* color: floralwhite; */
  text-shadow: 1px 1px black;
}
ul li {
  text-align: left;
}
h1 {
  font-weight: bold;
}
* {
  font-family: 'Open Sans', sans-serif;
}
.textblock {
  text-align: left;
  padding: 20px;
}

.firstcolumn {
  /*
  border-bottom: 5px solid #FE7CB9;
  border-top: 5px solid #FE7CB9;
  */
  background-image: url("../../assets/john-fowler-RsRTIofe0HE-unsplash.jpg");
  /*background-image: url("../../assets/symbol-scatter-haikei-blue.svg");

   */
  background-position: revert;
  background-size: cover;
}

.secondcolumn {
  padding-left: 40px;
  padding-right: 63px;
}
#jadePic {
  width: 40%;
  height: auto;
}

@media only screen and (min-width: 993px){
  #jadePic {
    width: 100%;
  }
}

@media only screen and (max-width: 992px){
  #jadePic {
    width: 100%;
    height: auto;
  }
  .secondRow {
    display: none;
  }
  .widthFirstRow {
    width: 100%;
  }
}

@media only screen and (max-width: 630px){
  .widthFirstRow {
    width: 100%;
  }
}
</style>