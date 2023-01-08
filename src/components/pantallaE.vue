<template>
  <v-container fluid class="background-entrada">
    <v-row no-gutters>
      <v-col align="center">
        <input type="button"/>
        <div class="content">
          <router-link :to="{ name: 'home' }" class="text-decoration-none routernone">
            <v-img class="play mt-10 px-n12" src="..\assets\Icons\play.svg"></v-img>
          </router-link>
          <div class="sombra"></div>
        </div>
        <v-img width="500px" class="my-4" src="..\assets\Logo\Sistema Numerico3.png"></v-img>
      </v-col>
    </v-row>
  
  </v-container>
</template>

<script>
export default {
  name: "PantallaEntrada",
  data: () => ({

  }),

  beforeDestroy() {
    },
};
</script>


