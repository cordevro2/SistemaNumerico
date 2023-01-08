<template>
  <v-app>
    <!--Nav/Bar-->
    <v-app-bar
      app
      dark
      prominent
      src="../assets/Background/background-entrada.jpg"
      absolute
      fade-img-on-scroll
      elevation="5"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(0,0,0,0.9), rgba(0,0,125,.1)"
          height="480px"
        ></v-img>
      </template>

      <!-- Boton del Menu -->
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="my-auto ml-1"
        x-large
        fab
        outlined>
      </v-app-bar-nav-icon>

      <!--Title Imagen -->
         <v-toolbar-title class="mt-12 ml-n2 title_class">
          <router-link :to="{ name: 'home'}" class="text-decoration-none">
           <img width="400px" src="..\assets\Logo\Sistema Numerico3.png" alt="">
          </router-link>
         </v-toolbar-title>

      <v-spacer></v-spacer>
   
        <!-- Menu de Botones -->
        <v-tabs 
          right icons-and-text 
          slider-color="light-blue" 
          slider-size="3"
          fixed-tabs
          hide-slider
          >

          <v-tab :to="{ name: 'contenido' }" class="text-decoration-none mx-auto px-1 tabs_box">Contenido
            <v-icon  x-large class="mb-5">fas fa-clone</v-icon>
          </v-tab>

          <v-tab :to="{ name: 'actividades' }" class="text-decoration-none mx-auto px-1 tabs_box">Actividades
            <v-icon x-large class="mb-5">fas fa-list-ol</v-icon>
          </v-tab>

          <v-tab :to="{ name: 'evaluacion' }" class="text-decoration-none mx-auto px-1 tabs_box">Evaluación
            <v-icon x-large class="mb-5">fas fa-clipboard-check</v-icon>
          </v-tab>
        </v-tabs>
    </v-app-bar>


    <!-- Menu lateral -->
    <v-navigation-drawer v-model="drawer" dark absolute temporary src="../assets/Background/nar-backgound.jpg">
        
      <v-list-item>
        <v-subheader>SISTEMA NUMERICO</v-subheader>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          dense
          router
          :to="item.router"
        >
          <v-list-item-icon class="my-3">
            <v-icon x-large>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="mr-10">{{item.title}}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template>
        <v-row  no-gutters justify="center">
          <v-col cols="11">
            <v-btn class="mt-5" @click.stop="act = !act" block rounded outlined dark color="cyan"> 
              <v-icon>mdi-playlist-music</v-icon> <h2>Musica</h2>  </v-btn>
    
            <v-btn class="mt-5" :to="{ name: 'pantallaE'}" block rounded  outlined dark color="#E91E63"> 
              <v-icon>mdi-close-thick</v-icon> <h2>Salir</h2>  </v-btn>
          </v-col>
        </v-row>
      </template>
    </v-navigation-drawer>

    <v-bottom-sheet v-model="act" width="400" >
        <audio id="music" hidden autoplay loop>
          <source  src="../assets/multimedia/Radwimps-Sparkle 8bit.mp3" type="audio/mpeg" />
        </audio>
      <v-card class="mb-10" shaped>
      
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>RADWIMPS</v-list-item-title>
              <v-list-item-subtitle>Sparkle- 8bit</v-list-item-subtitle>
            </v-list-item-content>

            <v-spacer></v-spacer>

            <v-list-item-icon>
               <v-btn icon @click="volumenBajo()">
                <v-icon>mdi-volume-medium</v-icon>
              </v-btn>
              <v-btn icon @click="musicPause()">
                <v-icon>mdi-pause</v-icon>
              </v-btn>
              <v-btn icon @click="musicPlay()">
                <v-icon>mdi-play</v-icon>
              </v-btn>
              <v-btn icon @click="volumenAlto()">
                <v-icon>mdi-volume-high</v-icon>
              </v-btn>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-card>
    </v-bottom-sheet>
        

    <!-- Contenido -->
    <v-main>
      <transition name="bounce">
        <router-view> 
        </router-view>
      </transition>
    </v-main>
  </v-app>

</template>


<style>
.tabs_box{
  background:rgba(0, 0, 0, 0.0);
}

</style>

<script>
export default {
  name: "PantallaPrincipal",
  data: () => ({
  act:true,
  drawer: null,
  items: [
      { 
        title: "HOME", 
        icon: "mdi-home", 
        router: "/home" 
      },

      {
        title: "ACERCA DE...",
        icon: "mdi-account-details-outline",
        router: "/creditos",
      },
    ],
  }),

   beforeDestroy() {
    },

  mounted() {
    document.getElementById("music").volume = 0.2;
  },

  methods:{
    musicPlay(){
      document.getElementById('music').play();
      document.removeEventListener('click', this.musicPlay);
    },

    musicPause(){
      document.getElementById('music').pause();
      document.removeEventListener('click', this.MusicPause);
    },

     volumenAlto(){
      document.getElementById("music").volume = 0.8;
    },
     volumenBajo(){
      document.getElementById("music").volume = 0.2;
    }
  }

};
</script>