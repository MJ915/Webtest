<template >
  <v-toolbar class="headNav">
    <v-layout row wrap class="layout">
      <v-flex lg1 xl2 class="hidden-md-and-down"></v-flex>



      <div class="logoDiv">
        <v-btn class="logoBtn" href="/" flat>
          <!-- img src="../assets/logo_pmml.png"-->
          <img src="../assets/logo_pmml_03.svg" class="svgLogo">

        </v-btn>
      </div>

      <v-spacer class="hidden-md-and-down"></v-spacer>
      <!--xs phone, sm pad, md pad & low pc, lg mid pc, xl high pc-->

      <v-toolbar-items class="hidden-md-and-down navMenuVar">
        <v-btn class="navMenu" @click="goFinder();" flat>Finder</v-btn>
        <v-btn class="navMenu" @click="goAbout();" flat>About</v-btn>
        <v-btn class="navMenu" href="https://docs.google.com/spreadsheets/d/14pDCMfhYCyTRfsl_RaWa-_viDwsNpGyLSRhHFMH3R1s/edit?usp=sharing" flat>Edit</v-btn>
      </v-toolbar-items>

      <v-flex lg1 xl2 class="hidden-md-and-down"></v-flex>

    </v-layout>
  </v-toolbar>

</template>

<script>
export default {
  methods: {
    goFinder: function() {
      this.$router.push({path:'/'});
    },
    goAbout: function() {
      this.$router.push({path:'about'});
    }
  }
}

</script>

<style lang="css" scoped>
.headNav {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  background-color: rgba(89, 97, 100, 0.8);
}

.container {
  padding-top: 0;
  height: inherit;
}

.layout {
  height: inherit;
}

.logoDiv {
  height: 100%;
}

@media only screen and (max-width: 1263px){
  .logoDiv {
    width: 100%;
  }
}

.logoBtn {
  padding: 0;
  margin: 0px;
  height: 100%;
}

@media only screen and (max-width: 690px){
  .svgLogo {
    height: 4.4rem!important;
    margin-top: 0.1rem;
  }
}

@media only screen and (min-width: 691px) and (max-width: 960px){
  .svgLogo {
    height: 4rem!important;
    margin-top: 0.1rem;
  }
}

.svgLogo {
height: 64px;
}

.navMenuVar {
  height: 100%;
}

.navMenu {
  border-style: none;
  margin: 1rem 8px;
  color: white;
  font-size: 1.5rem;
}

.navTabVar {
  width: 100%;
}

.tabBtn {
  width: 7rem;
}

@media only screen and (max-width: 1263px) and (min-width:601px){
  .tabBtn {
    width: 10rem;
  }
}

.tabBtnAbout {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
