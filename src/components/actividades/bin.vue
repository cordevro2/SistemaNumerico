<template>
  <v-container  class="background3">
<!--________________________ACTIVIDAD - AHORCADO_________________________-->
    <v-row no-gutters>
      <v-col>
<!-----------------------------TITULO------------------------------------->
        <v-row>
          <v-col >
            <div class="title"><h1>ACTIVIDAD - Moving</h1></div>
          </v-col>
        </v-row>
<!-----------------------------EXPLICACIÖN------------------------------------->        
        <v-row no-gutters> 
            <v-col align="center">
              <div class="div_p2">
               <p>
                  En este MiniGame, tiene que pasar el Número Decimal a un Número Binario
                  <br> 
                  <b>¡Ojo con los circulos Rojos! </b>                        
              </p>
              </div>
            </v-col>
          </v-row>
        <v-row>
<!---------------------------------BOX GAME------------------------------------->             
        <v-col align="center">  
          <v-row no-gutters>
            <v-col align="center">
            <div class="box_game">
              <div class="nav_menu" v-show="act1.player==true" >
<!-----------------------------BARRA DE VIDA(CORAZONES)------------------------------------->         
                <v-row>
                  <v-col cols="3">
                    <transition name="bounce">
                      <img v-show="act1.img==0"  class="life" src="./img/life0.png" width="90px" alt="">
                    </transition> 
                    <transition name="bounce">
                      <img v-show="act1.img==1"  class="life" src="./img/life1.png" width="90px" alt="">   
                    </transition>  
                    <transition name="bounce">  
                      <img v-show="act1.img==2"  class="life" src="./img/life2.png" width="90px" alt="">
                    </transition> 
                    <transition name="bounce">
                      <img v-show="act1.img==3"  class="life" src="./img/life3.png" width="90px" alt="">
                    </transition> 
                    <transition name="bounce">  
                      <img v-show="act1.img==4"  class="life" src="./img/life4.png" width="90px" alt="">
                    </transition> 
                     <transition name="bounce">
                      <img v-show="act1.img==5"  class="life" src="./img/life5.png" width="90px" alt="">
                    </transition> 
                  </v-col>
                </v-row>
                </div>
<!-----------------------------BARRA DE VIDA(CORAZONES)------------------------------------->                   
              <v-btn v-show="act1.player==false" @click="play()" class="btn_play" x-large icon fab outlined color="cyan">
                <v-icon size="90">
                  mdi-play
                </v-icon>
              </v-btn> 
<!-----------------------------JUGADOR Y ENEMIGOS------------------------------------->                              
                <div v-show="act1.player==true" id="player0" @mousedown="input(0)" class="div_player"><h2>{{act1.bin1}}</h2></div>
                <div v-show="act1.player==true" id="player1" @mousedown="input(1)" class="div_player"><h2>{{act1.bin2}}</h2></div>
                <div v-show="act1.obj>=1" id="player1E" @mouseover="colicion()" class="div_playerE"><h2>{{act1.bin1}}</h2></div>
                <div v-show="act1.obj>=2" id="player2E" @mouseover="colicion()" class="div_playerE"><h2>{{act1.bin2}}</h2></div>
                <div v-show="act1.obj>=3" id="player3E" @mouseover="colicion()" class="div_playerE"><h2>{{act1.bin1}}</h2></div>
                <div v-show="act1.obj>=4" id="player4E" @mouseover="colicion()" class="div_playerE"><h2>{{act1.bin2}}</h2></div>
                <div v-show="act1.obj>=5" id="player5E" @mouseover="colicion()" class="div_playerE"><h2>{{act1.bin1}}</h2></div>
                <div v-show="act1.obj>=6" id="player6E" @mouseover="colicion()" class="div_playerE"><h2>{{act1.bin2}}</h2></div>
            </div>
            </v-col>
          </v-row>
        </v-col> 
        <v-col>
<!-----------------------------BOX_DECIMAL------------------------------------->          
          <v-row>
            <v-col align="center">
              <div class="box_decimal">
                <h1>DECIMAL</h1>
                <h2>{{act1.ndecimal}}</h2>
              </div>
            </v-col>
          </v-row>
<!-----------------------------BOX_BINARIO------------------------------------->               
          <v-row >
            <v-col align="center">
              <div class="box_input">
                <h1>BINARIO</h1>
                <h2>{{act1.nbinario}}</h2>
                </div>
            </v-col>
          </v-row>
<!-----------------------------BOTON DE VERIFICACION------------------------------------->            
          <v-row>
            <v-col>
              <v-btn class="" color="#009688" @click="verificar()" :disabled="act1.player==false" dark block x-large rounded>
                <v-icon dark x-large>mdi-check-circle</v-icon>
                  <h2>Verificar</h2>
                </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      </v-col>
<!-----------------------------BARRA DE PROGRESO------------------------------------->         
       <v-progress-linear dark color="cyan" :value="value" height="20">
      <template v-slot:default="{ value }">
        <strong>{{ Math.ceil(value) }}%</strong>
      </template>
    </v-progress-linear>
    </v-row>
    
  </v-container> 
</template>

<script>

export default {
  name: "Binario",
  data: () => ({
      value:0,
      velocidad:2000,
      intervalo:0,
      act1:{
      player:false,
      img:5,
      ndecimal:10,  
      nbinario:"",
      cbin:0,
      arrayN:[],
      agru:0,  
      obj:0,
      time:0,
      bin1:0,
      bin2:1,
      Nrandom1:0,
      Nrandom2:0,
      Nrandom3:0,
      Nrandom4:0
    }
  }),
  //  mounted() {
  //   this.$nextTick(() => {
  //       this.intervalo =setInterval(() => {
  //           console.log("helos");
  //         this.tiempo();
  //       }, 1000);
  //     });
  //   },

  destroyed() {
    clearInterval(this.intervalo);
  },

  methods:{

// --------------FUNCION DE ALERTA POSITIVA---------------
     Alerta_Excelente() {
      this.$swal({
        icon: "success",
        iconColor: "#009688",
        title: '<h1 class="alert_text">¡Bien!<h2>',
        toast: true,
        position: "center-right",
        showConfirmButton: false,
        timer: 3000,
      });
    },
// --------------FUNCION DE ALERTA INTERROGATIBA---------------
    Alerta_Info() {
      this.$swal({
        icon: "info",
        iconColor: "#FFB74D",
        title: '<h1 class="alert_text">¡!<h2>',
        toast: true,
        position: "center-right",
        showConfirmButton: false,
        timer: 3000,
      });
    },
// --------------FUNCION DE ALERTA ADVERTENCIA---------------
    Alerta_Warning() {
      this.$swal({
        icon: "warning",
        iconColor: "#FF9800",
        toast: true,
        position: "center-left",
        showConfirmButton: false,
        timer: 3000,
      });
    },
// --------------FUNCION DE ALERTA NEGATIVA---------------
    Alerta_Mal() {
      this.$swal({
        icon: "error",
        iconColor: "#E91E63",
        title: '<h1 class="alert_text">¡Nop!<h2>',
        toast: true,
        position: "center-right",
        showConfirmButton: false,
        timer: 3000,
      });
    },
// --------------FUNCION PARA VERIFICAR SI LOS DATOS DIGITADOS SON IGUALES---------------
    verificar(){
      if(this.act1.cbin==parseFloat(this.act1.nbinario)){
         this.Alerta_Excelente();
         this.next();
      }else{
        this.act1.nbinario="";
        this.act1.arrayN=[];
        this.Alerta_Mal();
      }
    },
// --------------FUNCION PARA RESTABLECER LOS DATOS---------------
    reset(){
      this.velocidad=2000;
      this.value=0;
      this.act1.img = 5;
      this.act1.obj=0;
      this.act1.nbinario="";
      this.act1.arrayN=[];
    },
// --------------SISTEMA PARA DECTAR LA COLISION ENTRE EL MOUSE Y LOS ENEMIGOS---------------
    colicion(){
      this.act1.img--;
      this.Alerta_Warning()
      if(this.act1.img==0){
        this.$swal({
            icon: "error",
            iconColor: "#E91E63",
            title: '<h3 class="alert_text">¡LLORINDEL!<h3>',
            position: "center",
            padding: "0.5rem",
            allowOutsideClick: false,
            showConfirmButton: true,
            confirmButtonText: '<h2 class="alert_title">Reintentar</h2>',
            confirmButtonColor: "#FF5252",
          }).then((result) => {
            if (result.isConfirmed) {
              this.reset();
              this.play();
            }
          });
        clearInterval(this.intervalo);
      }
    },
// --------------FUNCION PARA PASAR DE NIVEL---------------   
    nivel_next(){
      switch (this.value) {
        case 100:
          clearInterval(this.intervalo)
          this.$swal({
            icon: "success",
            title: '<h3 class="alert_text">¡Genial! Has terminado la Actividad<h3>',
            position: "center",
            padding: "0.5rem",
            allowOutsideClick: false,
            showConfirmButton: true,
            confirmButtonText: '<h2 class="alert_title">Volver a Jugar</h2>',
            confirmButtonColor: "#00BCD4",
          }).then((result) => {
            if (result.isConfirmed) {
              this.reset();
              this.play();
            }
          });
          break;
        case 10:
          clearInterval(this.intervalo);
          this.$swal({
            icon: "success",
            iconColor: "#00BCD4",
            title: '<h3 class="alert_text">¡Perfecto completastes el Primer Nivel!<h3>',
            position: "center",
            padding: "0.5rem",
            allowOutsideClick: false,
            showConfirmButton: true,
            confirmButtonText: '<h2 class="alert_title">Siguiente</h2>',
            confirmButtonColor: "#03A9F4",
          }).then((result) => {
            if (result.isConfirmed) {
              this.play();
              this.velocidad=1500;
            }
          });
          break;
        case 20:
          clearInterval(this.intervalo);
          this.$swal({
            icon: "success",
            iconColor: "#00BCD4",
            title: '<h3 class="alert_text">¡Perfecto completastes el Segundo Nivel!<h3>',
            position: "center",
            padding: "0.5rem",
            allowOutsideClick: false,
            showConfirmButton: true,
            confirmButtonText: '<h2 class="alert_title">Siguiente</h2>',
            confirmButtonColor: "#03A9F4",
          }).then((result) => {
            if (result.isConfirmed) {
              this.play();
              this.velocidad=1000;
            }
          });
          break;
        case 40:
          clearInterval(this.intervalo);
          this.$swal({
            icon: "success",
            iconColor: "#00BCD4",
            title: '<h3 class="alert_text">¡Perfecto completastes el Tercer Nivel!<h3>',
            position: "center",
            padding: "0.5rem",
            allowOutsideClick: false,
            showConfirmButton: true,
            confirmButtonText: '<h2 class="alert_title">Siguiente</h2>',
            confirmButtonColor: "#03A9F4",
          }).then((result) => {
            if (result.isConfirmed) {
              this.play();
              this.velocidad=500;
            }
          });
          break
        case 60:
          clearInterval(this.intervalo);
          this.$swal({
            icon: "success",
            iconColor: "#00BCD4",
            title: '<h3 class="alert_text">¡Perfecto completastes el Cuarto Nivel!<h3>',
            position: "center",
            padding: "0.5rem",
            allowOutsideClick: false,
            showConfirmButton: true,
            confirmButtonText: '<h2 class="alert_title">Siguiente</h2>',
            confirmButtonColor: "#03A9F4",
          }).then((result) => {
            if (result.isConfirmed) {
              this.play();
               this.velocidad=400;
            }
          });
          break
        case 80:
          clearInterval(this.intervalo);
          this.$swal({
            icon: "success",
            iconColor: "#00BCD4",
            title: '<h3 class="alert_text">¡Perfecto completastes el Quito Nivel!<h3>',
            position: "center",
            padding: "0.5rem",
            allowOutsideClick: false,
            showConfirmButton: true,
            confirmButtonText: '<h2 class="alert_title">Siguiente</h2>',
            confirmButtonColor: "#03A9F4",
          }).then((result) => {
            if (result.isConfirmed) {
              this.play();
              this.velocidad=200;
            }
          });
        }
     },
// --------------FUNCION PARA CONTINUAR EL JUEGO------------------
    next(){
      this.act1.ndecimal=Math.floor(Math.random()*100)
      this.act1.nbinario="";
      this.value+=10;
      this.nivel_next();
    },
// --------------FUNCION QUE UTILIZA EL INTERVALO DE TIEMPO PARA MOVER LOS ENEMIGOS------------------
    tiempo(){
      switch (this.act1.obj) {
        case 1:
          this.moving1();
        break;
        case 2:
          this.moving1();
          this.moving2();
        break;
        case 3:
          this.moving1();
          this.moving2();
          this.moving3();
        break;
        case 4:
          this.moving1();
          this.moving2();
          this.moving3();
          this.moving4();
        break;
        case 5:
          this.moving1();
          this.moving2();
          this.moving3();
          this.moving4();
          this.moving5();
        break;
        case 6:
          this.moving1();
          this.moving2();
          this.moving3();
          this.moving4();
          this.moving5();
          this.moving6();
        break;
      }

    },
// --------------FUNCION PARA INICIALIZR EL JUEGO------------------
    play(){
      this.intervalo=setInterval(() => {
        this.tiempo();
      }, this.velocidad);
      this.act1.player=true;
      this.act1.obj++;
      this.player_inico();
      this.moving1();
      this.moving2();
      this.moving3();
      this.moving4();
      this.moving5();
      this.moving6();
    }, 
// --------------FUNCION PARA DIGITAR LOS NUMEROS------------------
// --------------ALMACENA LOS DATOS INPUT EN UN ARRAY------------------
    input(n){
      this.act1.cbin=this.act1.ndecimal.toString(2);
      this.act1.arrayN.push(n);
      this.player_moving(n);
      for (let i = 0; i < this.act1.arrayN.length; i++) {
         this.act1.agru=this.act1.arrayN[i];
      }
      this.act1.nbinario+=this.act1.agru;
    },
//---------------FUNCION PARA EL JUGADOR, REALIZANDO EL MOVIMIENTO INICIAL------------------------
    player_inico(){
        document.getElementById("player0").style.top= Math.round(Math.random()*350)+"px";
        document.getElementById("player0").style.left= Math.round(Math.random()*350)+"px";
        document.getElementById("player1").style.bottom= Math.round(Math.random()*350)+"px";
        document.getElementById("player1").style.right= Math.round(Math.random()*350)+"px";
    },
//---------------FUNCION PARA EL JUGADOR, QUE SE MOVING DE MANERA ALEATOREA----------------------
    player_moving(n){
      if(n==0){
        document.getElementById("player0").style.top= Math.round(Math.random()*350)+"px";
        document.getElementById("player0").style.left= Math.round(Math.random()*350)+"px";
      }else if(n==1){
      document.getElementById("player1").style.bottom= Math.round(Math.random()*350)+"px";
      document.getElementById("player1").style.right= Math.round(Math.random()*350)+"px";
    }},
  
//---------------FUNCION QUE MUEVE DE MANERA RANDOM LA POSICION DE CADA ENEMIGO---------------------- 
    moving1(){
      this.random()
      document.getElementById("player1E").style.top= this.act1.Nrandom1+"px";
      document.getElementById("player1E").style.left= this.act1.Nrandom2+"px";
    },

    moving2(){
      this.random()
      document.getElementById("player2E").style.bottom= this.act1.Nrandom3+"px";
      document.getElementById("player2E").style.right= this.act1.Nrandom4+"px";
    },

    moving3(){
      this.random()
      document.getElementById("player3E").style.top= this.act1.Nrandom1+"px";
      document.getElementById("player3E").style.left= this.act1.Nrandom2+"px";
     
    },

    moving4(){
      this.random()
      document.getElementById("player4E").style.bottom= this.act1.Nrandom3+"px";
      document.getElementById("player4E").style.right= this.act1.Nrandom4+"px";
    },

    moving5(){
      this.random()
      document.getElementById("player5E").style.top= this.act1.Nrandom1+"px";
      document.getElementById("player5E").style.left= this.act1.Nrandom2+"px";
    },

    moving6(){
      this.random()
      document.getElementById("player6E").style.bottom= this.act1.Nrandom3+"px";
      document.getElementById("player6E").style.right= this.act1.Nrandom4+"px";
    },
//---------------FUNCION PARA OBTENER UN NUMERO RANDOM----------------------
    random(){
      this.act1.Nrandom1=Math.round(Math.random()*350);
      this.act1.Nrandom2=Math.round(Math.random()*350);
      this.act1.Nrandom3=Math.round(Math.random()*350);
      this.act1.Nrandom4=Math.round(Math.random()*350);
    }
  }

};

</script>