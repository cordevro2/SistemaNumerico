<template>
  <v-container  class="background2">
<!-- ACTIVIDAD 1 - AHORCADO -->
<!--------------------------------------------------------------------------->
    <v-row no-gutters>
      <v-col>
        <v-row>
          <v-col>
<!-----------------------------TITULO---------------------------------------->
            <div class="title"><h1>ACTIVIDAD - Ahorcado</h1></div>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col align="center" cols="5">
            <div class="div_estructura">
              <transition name="bounce">
              <img v-show="act1.img == 0" src="./img/hangman0.png" width="89%"/>
              </transition>
               <transition name="bounce">
              <img v-show="act1.img == 1" src="./img/hangman1.png" width="90%"/>
              </transition>
               <transition name="bounce">
              <img v-show="act1.img == 2" src="./img/hangman2.png" width="90%"/>
              </transition>
               <transition name="bounce">
              <img v-show="act1.img == 3" src="./img/hangman3.png" width="90%"/>
              </transition>
               <transition name="bounce">
              <img v-show="act1.img == 4" src="./img/hangman4.png" width="90%"/>
              </transition>
               <transition name="bounce">
              <img v-show="act1.img == 5" src="./img/hangman5.png" width="90%"/>
              </transition>
            </div>
          </v-col>
          <v-col align="center">
<!------------------------------PARRAFO--------------------------------------->
            <v-row no-gutters>
              <v-col>
                <div>
                  <div class="div_p">
                    En esta Actividad tienes que convertir este Número Decimal
                    <b>{{ act1.ndecimal }}</b>
                    en un Número OCTAL
                  </div>
                </div>
              </v-col>
            </v-row>
            <v-row >
              <v-col align="center">
                <div class="div_imput">
                  <h1>{{ act1.result }}</h1>
                </div>
              </v-col>
            </v-row>
<!-------------------------------BOTONES--------------------------------------->
            <v-row no-gutters>
              <v-col align="center">
                <div class="fondo_btn">
                  <v-btn class="btn1 my-2" rounded outlined color="#D81B60" :disabled="this.act1.btn2" @click="input(0)" large>
                    <h1>0</h1>
                  </v-btn>
                  <v-btn class="btn2 ml-1 my-2" rounded outlined color="#D81B60" :disabled="this.act1.btn2" @click="input(1)" large>
                    <h1>1</h1>
                  </v-btn>
                  <v-btn class="btn3 ml-1 my-2" rounded outlined color="#D81B60" :disabled="this.act1.btn2" @click="input(2)" large>
                    <h1>2</h1>
                  </v-btn>
                  <v-btn class="btn4 ml-1 my-2" rounded outlined color="#D81B60" :disabled="this.act1.btn2" @click="input(3)" large>
                    <h1>3</h1>
                  </v-btn>
                  <v-btn class="btn5 ml-1 my-2" rounded outlined color="#D81B60" :disabled="this.act1.btn2" @click="input(4)" large>
                    <h1>4</h1>
                  </v-btn>
                  <v-btn class="btn6 ml-1 my-2" rounded outlined color="#D81B60" :disabled="this.act1.btn2" @click="input(5)" large>
                    <h1>5</h1>
                  </v-btn>
                  <v-btn class="btn7 ml-1 my-2" rounded outlined color="#D81B60" :disabled="this.act1.btn2" @click="input(6)" large>
                    <h1>6</h1>
                  </v-btn>
                  <v-btn class="btn8 ml-1" rounded outlined color="#D81B60" :disabled="this.act1.btn2" @click="input(7)" large>
                    <h1>7</h1>
                  </v-btn>
                </div>
<!--------------------------------BOTON DE VERIFICACION------------------------------------->
                <v-row>
                  <v-col>
                    <v-btn class="" color="#009688" @click="verificar(1)" :disabled="this.act1.btn" block dark x-large rounded>
                      <v-icon dark x-large>mdi-check-circle</v-icon>
                      <h2>Verificar</h2>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-progress-linear dark color="pink" :value="value" height="20">
      <template v-slot:default="{ value }">
        <strong>{{ Math.ceil(value) }}%</strong>
      </template>
    </v-progress-linear>

  </v-container>
</template>

<script>
export default {
  props: {},
  name: "Octal",
  data: () => ({
    value: 0,
    act1: {
      btn: true,
      btn2: false,
      img: 0,
      cont: 0,
      separador: [],
      sum: 0,
      numbers: [],
      result: "",
      ndecimal: 10,
      octal: 0,
    },
  }),

  destroyed() {
  },


  methods: {
//-------------------FUNCION para ver la Consola------------------------------- 
    console() {
      console.log(this.act1.cont, " contador");
      console.log(this.act1.separador, " separador");
      console.log(this.act1.numbers, " numbers");
      console.log(this.act1.result, " resultado");
      console.log(this.act1.ndecimal, " ndecimal");
      console.log(this.act1.n2decimal, " n2decimal");
      console.log(this.act1.octal, " octal");
    },

//------------------FUNCIONES de ALERTAS-----------------------------------------  
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

//------------------FUNCION IMPUT DE LOS BOTONES---------------------------------
    input(n) {
      this.agrupar(n);
      this.convertidor();
      this.act1.btn = false;
      this.act1.btn2 = true;
    },

//------------------AGRUPA LOS NUMEROS QUE DIGITA EN UNA ARRAY-------------------
//------------------DESPUES LOS MUESTRA EN PANTALLLA-----------------------------
    agrupar(n) {
      this.act1.numbers.push(n);
      for (let i = 0; i < this.act1.numbers.length; i++) {
        this.act1.sum = this.act1.numbers[i];
      }
      this.act1.result += this.act1.sum;
    },

//------------------CONVIERTE EL NUMERO DECIMAL EN UN NUMERO OCTAL----------------
//------------------SEPARA EL NUMERO OCTAL EN UNA ARRAY---------------------------
    convertidor() {
      this.act1.octal = this.act1.ndecimal.toString(8);
      this.act1.separador = this.act1.octal.split("", this.act1.octal);
    },

//------------------FUNCION PARA ASIGNAR UN NUMERO ALEATOREO-----------------------
    random() {
      this.act1.ndecimal = Math.floor(Math.random() * 100);
      this.act1.n2decimal = Math.floor(Math.random() * 10);
    },

//------------------FUNCION PARA RESETEAR LA ACTIVIDAD-----------------------------
    reset() {
      this.act1.cont = 0;
      this.act1.numbers = [];
      this.act1.result = "";
    },

//------------------FUNCION PARA COMPROBAR SI COMPLETO LA ACTIVIDAD----------------
//------------------PASA A SOGUIENTE NIVEL Y MUESTRA LA FUNCION ALERTA-------------
    next() {
      if (this.act1.octal == parseFloat(this.act1.result)) {
        this.reset();
        this.value += 20;
        this.Alerta_Excelente();
        this.random();
      }
      if (this.value == 100) {
        this.$swal({
          icon: "success",
          iconColor: "#009688",
          title:'<h3 class="alert_text">¡Felicidades has logrado terminar la Actividad!<h3>',
          position: "center",
          padding: "0.5rem",
          allowOutsideClick: false,

          reverseButtons: false,
          focusConfirm: false,
          focusDeny: false,

          showConfirmButton: true,
          confirmButtonText: '<h2 class="alert_title">Reintentar</h2>',
          confirmButtonColor: "#00BCD4",

          showDenyButton: true,
          denyButtonText: '<h2 class="alert_title">Continuar</h2>',
          denyButtonColor: "#673AB7",
        }).then((result) => {
          if (result.isConfirmed) {
            this.value = 0;
            this.act1.img = 0;
            this.random();
          }
        });
      }
    },

//VERIFICA SI EL NUMERO DIGITADO CORRESPONDA AL PRIMER NUMERO...  DEL ARREGLO NUMBERS CON EL ARREGLO SEPARADOR
    verificar() {
      if (
        this.act1.numbers[this.act1.cont] === parseFloat(this.act1.separador[this.act1.cont])
      ) {
        while (
          this.act1.numbers[this.act1.cont] === parseFloat(this.act1.separador[this.act1.cont])
        ) {
          this.Alerta_Info();
          this.act1.cont++;
          this.next();
          this.act1.btn = true;
          this.act1.btn2 = false;
        }
      } else {
        this.Alerta_Mal();
        this.reset();
        this.act1.cont = 0;
        this.act1.btn2 = false;
        this.act1.btn = true;

        if (this.act1.img < 5) {
          this.act1.img++;
        } else {
          this.$swal({
            icon: "error",
            iconColor: "#E91E63",
            title: '<h3 class="alert_text">¡LLORINDEL!<h3>',
            position: "center",
            padding: "0.5rem",
            allowOutsideClick: false,

            focusConfirm: false,
            focusDeny: false,

            showConfirmButton: true,
            confirmButtonText: '<h2 class="alert_title">Reintentar</h2>',
            confirmButtonColor: "#FF5252",
          }).then((result) => {
            if (result.isConfirmed) {
              this.value = 0;
              this.act1.img = 0;
              this.random();
            }
          });
        }
      }
    },
  },
};
</script>