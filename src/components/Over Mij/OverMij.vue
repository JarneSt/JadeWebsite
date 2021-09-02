<template>
<div class="fullContainer">
    <div class="firstcolumn">
      <!--<img id="jadePic" src="../../assets/Jade.png" />-->
      <div class="d-flex">
        <div class="w-50 m-auto secondRow">
          <h1 id="title">About Me</h1>
        </div>
        <div class="widthFirstRow">
          <img id="jadePic" src="../../assets/_DSC0007-removebg-preview.png"/>
        </div>
      </div>
    </div>
    <div class="text-lg-start secondcolumn">

        <div class="textblock1">
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


        <div style="background-color: #f7f6f6;">
          <div class="studies">
            <h1>Studies</h1>
            <div v-for="studie in studies">
              <font-awesome-icon :icon="studie.icon" />
              <p class="studieTitle">{{studie.title}}</p>
            </div>
          </div>
        </div>

      <div style="background-color: #fff;">
        <div class="ervaringen">
          <h1>Ervaring</h1>
          <div v-for="ervaring in ervaringen">
            <font-awesome-icon :icon="ervaring.icon" />
            <p>{{ervaring.title}}</p>
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
      studies : [
          {
            title : 'Coachopleiding tot Life Coach',
            icon : ['far', 'life-ring']
          },
          {
            title : 'Professionele Bachelor Praktijkgericht Orthopedagoog',
            icon : ['fas', 'user-graduate']
          },
          {
            title : '1/3 professionele Bachelor Toegepaste Psychologie',
            icon : ['fas', 'university']
          },
          {
            title : 'HSP coach in opleiding',
            icon : ['fas', 'balance-scale-right']
          }
        ],
      ervaringen : [
        {
          title : 'Buitengewoon basisonderwijs \'De Dolfijn\': ASS, hechting, ADHD,..',
          icon : ['far', 'life-ring']
        },
        {
          title : 'Ons Kinderhuis kamertraining: kwetsbare jongeren ondersteunen naar een zelfstandig leven',
          icon : ['fas', 'user-graduate']
        },
        {
          title : 'VZW Kids: ASS, hechting, spraak-en taalstoornissen',
          icon : ['fas', 'university']
        },
        {
          title : 'Eenzaamheid en dementie in WZC Prinsenpark',
          icon : ['fas', 'balance-scale-right']
        }
      ]
    }
  }
}
</script>

<style scoped>
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
}

.studies,.ervaringen {
  text-align: center;
  padding: 20px;
  width: 50%;
  margin: auto;
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


#jadePic {
  width: 60% !important;
  margin-right: 10em;
  height: auto;
}

@media only screen and (min-width: 993px){
  #jadePic {
    width: 100%;
  }
}

@media only screen and (max-width: 992px){
  #jadePic {
    width: 22% !important;
    height: auto;
    margin: auto;
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
}

@media only screen and (max-width: 630px){
  .widthFirstRow {
    width: 100%;
  }
}
</style>