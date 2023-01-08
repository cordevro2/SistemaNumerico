<template>
  <v-container fluid class="background-contenido height">
    <v-row no-gutters >
      <v-row class="mr-5">
        <v-col align="center">
          <v-btn :to="{ name: 'decimal' }" color="indigo" class="btn_background mx-5" block outlined dark rounded x-large>
            <!-- <v-icon class="my-n ml-n3" size="50">mdi-gamepad-round-left</v-icon> -->
            <h1>decimal</h1>
          </v-btn>
        </v-col>
        <v-col align="center">
          <v-btn :to="{ name: 'octal' }" color="pink"  class="btn_background mx-5" block outlined dark rounded x-large>
            <!-- <v-icon class="my-n ml-n3" size="50"> mdi-gamepad-round-up </v-icon> -->
            <h1>octal</h1>
          </v-btn>
        </v-col>
        <v-col align="center">
          <v-btn :to="{ name: 'binario' }" color="cyan"  class="btn_background mx-5" block outlined dark rounded x-large>
            <!-- <v-icon class="my-n ml-n3" size="50"> mdi-gamepad-round-right</v-icon> -->
            <h1>binario</h1>
          </v-btn>
        </v-col>
       <!--  <v-col align="center">
          <v-btn :to="{ name: 'hexadecimal' }" color="deep-orange" class="btn_background mx-5" block outlined dark rounded x-large>
            <v-icon class="my-n ml-n3" size="50"> mdi-gamepad-round-down</v-icon>
            <h1>hexadecimal</h1>
          </v-btn>
        </v-col -->
      </v-row>
    </v-row>
    <v-row no-gutters>
      <v-col align="center">
        <v-main style="padding: 10px 0px 0px">
              <transition name="bounce">
                <router-view></router-view>
              </transition>
        </v-main>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.btn_background{
  background-color: rgba(0, 0, 0, 0.5); 
   /* border-bottom:4px solid rgb(255, 255, 255) ; */
}
</style>

<style ang="ccs" src="./actividades/css/dec.css"></style>
<style ang="ccs" src="./actividades/css/oct.css"></style>
<style ang="ccs" src="./actividades/css/bin.css"></style>
<style ang="ccs" src="../css/animaciones.css"></style>

<script>
export default {
  name: "Actividades",
  data: () => ({
    //
  }),

  beforeDestroy() {
  },
};
</script>
