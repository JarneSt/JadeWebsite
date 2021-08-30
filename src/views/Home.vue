<template>
  <div>
    <AfspraakHeader/>
    <Werking/>
    <VoordelenCoaching/>
  </div>
</template>

<script>
// @ is an alias to /src

import AfspraakHeader from "../components/Home/AfspraakHeader";
import Werking from "../components/Home/Werking";
import VoordelenCoaching from "../components/Home/VoordelenCoaching";
export default {
  name: 'Home',
  components: {
    VoordelenCoaching,
    Werking,
    AfspraakHeader
  }
}
</script>
