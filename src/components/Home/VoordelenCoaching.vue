<template>
<div class="fullSection">

  <div class="desktopVersionVoordelen">
    <h1 class="mt-5">Voordelen van coaching</h1>

    <div class="d-flex justify-content-evenly mt-lg-5">
      <div>
        <font-awesome-icon :icon="['far', 'flag']" />
        <h2>Voordeel 1</h2>
        <p>Je bereikt je doelen sneller</p>
      </div>

      <div>
        <font-awesome-icon :icon="['fas', 'eye']" />
        <h2>Voordeel 2</h2>
        <p>Blinde vlekken worden zichtbaar</p>
      </div>

      <div>
        <font-awesome-icon :icon="['fas', 'male']" />
        <h2>Voordeel 3</h2>
        <p>Je wordt zelfredzamer</p>
      </div>
    </div>
  </div>
  <div class="mobileVersionVoordelen">
    <h1 class="mt-5 mb-5">Voordelen van coaching</h1>

    <div class="d-flex justify-content-evenly mt-xl-5 containerVoordelen">
      <div class="mb-4">
        <font-awesome-icon :icon="['far', 'flag']" />
        <h2>Voordeel 1</h2>
        <p>Je bereikt je doelen sneller</p>
      </div>

      <div class="mb-4">
        <font-awesome-icon :icon="['fas', 'eye']" />
        <h2>Voordeel 2</h2>
        <p>Blinde vlekken worden zichtbaar</p>
      </div>

      <div class="mb-4">
        <font-awesome-icon :icon="['fas', 'male']" />
        <h2>Voordeel 3</h2>
        <p>Je wordt zelfredzamer</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "VoordelenCoaching"
}
</script>


<style scoped>
.mobileVersionVoordelen {
  display: none;
}

* {
  font-family: 'Open Sans', sans-serif;
}
h1 {
  font-weight: bold;
}
svg {
  font-size: 35px !important;
}

.fullSection {
  margin-top: 5em;
}

@media only screen and (max-width: 992px){
  .desktopVersionVoordelen {
    display: none;
  }

  .mobileVersionVoordelen {
    display: block;
  }
  .containerVoordelen {
    flex-direction: column !important;
  }

}
</style>