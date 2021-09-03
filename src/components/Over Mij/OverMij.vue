<template>
<div class="fullContainer">
    <div class="firstcolumn">
      <!--<img id="jadePic" src="../../assets/Jade.png" />-->
      <div class="d-flex">
        <div class="w-50 m-auto secondRow">
          <h1 id="title">About Me</h1>
        </div>
        <div class="widthFirstRow">
          <img id="jadePicMobile" src="../../assets/_DSC0007-removebg-preview.png" alt="Jade"/>
        </div>
      </div>
    </div>
    <div class="text-lg-start secondcolumn">
        <div class="textblock1">

          <div class="containerText">
            <h1>Welkom!</h1>
            <p id="shortInfo">Ik ben <strong>Jade Staal</strong>, een gedreven en gepassioneerd persoon. </p>
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

          <div class="containerImage">
            <img id="jadePicDesktop" src="../../assets/_DSC0007-removebg-preview.png" alt="Jade"/>
          </div>
        </div>






      <div>
        <div class="ervaringen">
          <h1>Ervaring</h1>
          <div style="padding: 6em" :style="'background: '+ervaring.bgcolor" v-for="ervaring in ervaringen">
            <img :src="require('../../assets/ervaring/' + ervaring.image)">
            <h6 style="padding-top:3em;">{{ervaring.title}}</h6>
            <p>{{ervaring.info}}</p>
          </div>
        </div>
      </div>
      <div style="background-color: #f7f6f6;">
        <div class="studies">
          <div v-for="studie in studies1">
            <font-awesome-icon :icon="studie.icon" />
            <p class="studieTitle">{{studie.title}}</p>
          </div>
        </div>
      </div>

      <div style="background-color: #f7f6f6;">
        <div class="studies">
          <div v-for="studie in studies2">
            <font-awesome-icon :icon="studie.icon" />
            <p class="studieTitle">{{studie.title}}</p>
          </div>
        </div>
      </div>
</div>
</div>
</template>

<script>
export default {
  name: "OverMij",
  data(){
    return {
      studies1 : [
        {
          title : '1/3 Professionele Bachelor Toegepaste Psychologie',
          icon : ['fas', 'university']
        },
          {
            title : 'Professionele Bachelor Praktijkgericht Orthopedagoog',
            icon : ['fas', 'user-graduate']
          },
        ],
      studies2 : [
        {
          title : 'Coachopleiding tot Life Coach',
          icon : ['far', 'life-ring']
        },
        {
          title : 'HSP coach in opleiding',
          icon : ['fas', 'balance-scale-right']
        }
      ]
      ,
      ervaringen : [
        {
          title : "Ons Kinderhuis kamertraining: ",
          info : "kwetsbare jongeren ondersteunen naar een zelfstandig leven",
          image : "onsKinderhuis.png",
          link : "https://kinderhuis.net/",
          bgcolor : "#EF5359"
        },
        {
          title : "Buitengewoon basisonderwijs \"De Dolfijn\":",
          info : "ASS, hechting, ADHD,..",
          image : "DeDolfijn.jpg",
          link : "https://sites.google.com/dedolfijn.info/dedolfijn",
          bgcolor : "#fff"
        },
        {
          title : "VZW Kids:",
          info : "ASS, hechting, spraak-en taalstoornissen",
          image : "kids.png",
          link : "https://www.kids.be/",
          bgcolor: "#009FAC"
        },
        {
          title : "WZC Prinsenpark",
          info : "Eenzaamheid en dementie",
          image : "prinsenpark.png",
          link : "https://www.korian.be/nl/woonzorgcentra/kor/47-residentie-prinsenpark",
          bgcolor: "#fff"
        }
      ]
    }
  }
}
</script>

<style scoped>
.firstcolumn {
  display: none;
}
.ervaringen img {
  width: 20%;
}


#jadePicMobile {
  display: none;
}
#jadePicDesktop {
  display: block;
  width: 255px;
}
svg {
  margin-top: 15px;
  margin-bottom: 20px;
  font-size: 50px;
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
.textblock1 {
  text-align: left;
  padding: 20px;
  width: 50%;
  margin: auto;
  display: flex;
}

.studies,.ervaringen {
  text-align: center;
  margin: auto;
}



.studies {
  display: flex;
  padding: 20px;
  justify-content: space-evenly;
}


.textblock2 div {
  text-align: center;
}
.studieTitle {
  font-size: 17px;
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
@media only screen and (max-width: 1400px){
  .ervaringen img {
    width: 30% !important;
  }
}

@media only screen and (min-width: 1400px){
  .textblock1 {
    width: 50% !important;
  }
  .containerText {
    width: 50%;
  }
  .containerImage {
    margin: auto;
  }
}
@media only screen and (min-width: 1200px){
  .textblock1 {
    width: 30% !important;
    padding-left: 10em;
    margin-top: 1em;
  }
  .containerText {
    padding: 20px;
  }
}

@media only screen and (min-width: 992px){
  .textblock1 {
    width: 87% !important;
  }
}

@media only screen and (max-width: 992px){
  #jadePicMobile {
    width: 22% !important;
    height: auto;
    margin: auto;
    display: block;
  }
  .firstcolumn {
    display: block;
  }

  #jadePicDesktop {
    display: none;
  }
  .textblock1, .studies, .ervaringen {
    margin: 0;
    width: 100%;
  }
  h1 {
    text-align: center;
  }
  .secondRow {
    display: none;
  }
  .widthFirstRow {
    width: 100%;
  }
  .studies {
    display: block;
  }
}


@media only screen and (max-width: 630px){
  .widthFirstRow {
    width: 100%;
  }
  .ervaringen img {
    width: 100% !important;
  }
}
</style>