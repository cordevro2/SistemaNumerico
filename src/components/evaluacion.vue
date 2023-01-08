<template>
  <v-container fluid class="background-contenido">
    <v-row>
      <v-col>
        <v-row no-gutters justify="center" class="b-row">
          <v-col align="center">
            <div class="e_title">
              <h1>Evaluación</h1>
              <p>Responder las siguientes preguntas:</p>
            </div>
          </v-col>
        </v-row>
        <v-row justify="center" class="my-1">
          <v-col align="center" cols="8" class="b2-row">

<!-- ----------------------------------------PRIMERA PREGUNTA----------------------------------- -->
            <transition name="fade">
            <div v-show="this.cont==1" class="Parrafo">
              <v-row no-gutters>
                <h2 class="mb-3">1. ¿Cuál de los siguientes no es un Sistema Numérico?</h2>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="verificar('a')" color="cyan" x-small fab outlined class="ml-5 my-2"></v-btn>
                <p class="my-1 mx-2">A. Binario.</p>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="verificar('b')" color="cyan" x-small fab outlined class="ml-5 my-2"></v-btn>
                <p class="my-1 mx-2">B. Octal.</p>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="verificar('c')" color="cyan" x-small fab :outlined="estado==true" class="ml-5 my-2"></v-btn>
                <p class="my-1 mx-2">C. Senario.</p>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="verificar('d')" color="cyan" x-small fab outlined class="ml-5 my-2" ></v-btn>
                <p class="my-1 mx-2">D. Hexadecimal.</p>
              </v-row>
            </div>
            </transition>
<!-- ----------------------------------------SEGUNDA PREGUNTA----------------------------------- -->
            <transition name="fade">
             <div v-show="this.cont==2" class="Parrafo">
              <v-row no-gutters>
                <h2 class="mb-3">2. ¿Qué Base simbolizan al Sistema Decimal?</h2>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="verificar('a')" color="cyan" x-small fab outlined class="ml-5 my-2"></v-btn>
                <p class="my-1 mx-2">A. De 0 a 8. </p>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="verificar('b')" color="cyan" x-small fab outlined class="ml-5 my-2"></v-btn>
                <p class="my-1 mx-2">B. De 1 a 10.</p>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="verificar('c')" color="cyan" x-small fab outlined class="ml-5 my-2"></v-btn>
                <p class="my-1 mx-2">C. De 1 a 9.</p>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="verificar('d')" color="cyan" x-small fab outlined class="ml-5 my-2" ></v-btn>
                <p class="my-1 mx-2">D. De 0 a 9. </p>
              </v-row>
            </div>
          </transition>
<!-- ----------------------------------------TERCERA PREGUNTA----------------------------------- -->
             <transition name="fade">
             <div v-show="this.cont==3" class="Parrafo">
              <v-row no-gutters>
                <h2 class="mb-3">3. ¿Que Sistema Numerico es Posicional?</h2>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="verificar('a')" color="cyan" x-small fab outlined class="ml-5 my-2"></v-btn>
                <p class="my-1 mx-2">A. Binario y Hexadecimal.</p>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="verificar('b')" color="cyan" x-small fab outlined class="ml-5 my-2"></v-btn>
                <p class="my-1 mx-2">B. Octal y Binario.</p>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="verificar('c')" color="cyan" x-small fab outlined class="ml-5 my-2"></v-btn>
                <p class="my-1 mx-2">C. Hexadecimal y Decimal.</p>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="verificar('d')" color="cyan" x-small fab outlined class="ml-5 my-2" ></v-btn>
                <p class="my-1 mx-2">D. Todos los Sistemas Numericos.</p>
              </v-row>
            </div>
            </transition>
<!-- ----------------------------------------CUARTA PREGUNTA----------------------------------- -->
            <transition name="fade">
             <div v-show="this.cont==4" class="Parrafo">
              <v-row no-gutters>
                <h2 class="mb-3">4. A los Dígitos Binarios también se les conoce como: </h2>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="verificar('a')" color="cyan" x-small fab outlined class="ml-5 my-2"></v-btn>
                <p class="my-1 mx-2">A. Watt. </p>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="verificar('b')" color="cyan" x-small fab outlined class="ml-5 my-2"></v-btn>
                <p class="my-1 mx-2">B. Byte.</p>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="verificar('c')" color="cyan" x-small fab outlined class="ml-5 my-2"></v-btn>
                <p class="my-1 mx-2">C. Bit.</p>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="verificar('d')" color="cyan" x-small fab outlined class="ml-5 my-2" ></v-btn>
                <p class="my-1 mx-2">D. Kilobyte. </p>
              </v-row>
            </div>
            </transition>
<!-- ----------------------------------------QUINTA PREGUNTA----------------------------------- -->
             <transition name="fade">
             <div v-show="this.cont==5" class="Parrafo">
              <v-row no-gutters>
                <h2 class="mb-3">5. El sistema Undecimal se refiere:</h2>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="verificar('a')" color="cyan" x-small fab outlined class="ml-5 my-2"></v-btn>
                <p class="my-1 mx-2">A. Diez cifras. </p>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="verificar('b')" color="cyan" x-small fab outlined class="ml-5 my-2"></v-btn>
                <p class="my-1 mx-2">B. Una cifra. </p>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="verificar('c')" color="cyan" x-small fab outlined class="ml-5 my-2"></v-btn>
                <p class="my-1 mx-2">C. Once cifras. </p>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="verificar('d')" color="cyan" x-small fab outlined class="ml-5 my-2" ></v-btn>
                <p class="my-1 mx-2">D. Cinco cifras.</p>
              </v-row>
            </div>
            </transition>
<!-- ----------------------------------------SEXTA PREGUNTA----------------------------------- -->
             <transition name="fade">
             <div v-show="this.cont==6" class="Parrafo">
              <v-row no-gutters>
                <h2 class="mb-3">6. ¿Cuál de las siguientes afirmaciones es falsa?</h2>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="verificar('a')" color="cyan" x-small fab outlined class="ml-5 my-2"></v-btn>
                <p class="my-1 mx-2">A. El sistema Binario tiene una base de dos dígitos.</p>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="verificar('b')" color="cyan" x-small fab outlined class="ml-5 my-2"></v-btn>
                <p class="my-1 mx-2">B. El sistema Hexadecimal tiene una base de dieciséis dígitos.</p>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="verificar('c')" color="cyan" x-small fab outlined class="ml-5 my-2"></v-btn>
                <p class="my-1 mx-2">C. El sistema Decimal tiene una base de diez dígitos.</p>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="verificar('d')" color="cyan" x-small fab outlined class="ml-5 my-2" ></v-btn>
                <p class="my-1 mx-2">D. El sistema Octal tiene una base de dieciocho dígitos.</p>
              </v-row>
            </div>
            </transition>
<!-- ----------------------------------------SEPTIMA PREGUNTA----------------------------------- -->
             <transition name="fade">
             <div v-show="this.cont==7" class="Parrafo">
              <v-row no-gutters>
                <h2 class="mb-3">7. los Sistemas de Numeración se les llama:</h2>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="verificar('a')" color="cyan" x-small fab outlined class="ml-5 my-2"></v-btn>
                <p class="my-1 mx-2">A. Base.</p>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="verificar('b')" color="cyan" x-small fab outlined class="ml-5 my-2"></v-btn>
                <p class="my-1 mx-2">B. Numeración.</p>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="verificar('c')" color="cyan" x-small fab outlined class="ml-5 my-2"></v-btn>
                <p class="my-1 mx-2">C. Unidad.</p>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="verificar('d')" color="cyan" x-small fab outlined class="ml-5 my-2" ></v-btn>
                <p class="my-1 mx-2">D. Ninguna de las anteriores.</p>
              </v-row>
            </div>
            </transition>
<!-- ----------------------------------------OCTAVA PREGUNTA----------------------------------- -->
             <transition name="fade">
             <div v-show="this.cont==8" class="Parrafo">
              <v-row no-gutters>
                <h2 class="mb-3">8. ¿Cuántos tipos de Sistemas Numéricos existen en la actualidad?</h2>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="verificar('a')" color="cyan" x-small fab outlined class="ml-5 my-2"></v-btn>
                <p class="my-1 mx-2">A. 5.</p>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="verificar('b')" color="cyan" x-small fab outlined class="ml-5 my-2"></v-btn>
                <p class="my-1 mx-2">B. 4.</p>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="verificar('c')" color="cyan" x-small fab outlined class="ml-5 my-2"></v-btn>
                <p class="my-1 mx-2">C. 2.</p>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="verificar('d')" color="cyan" x-small fab outlined class="ml-5 my-2" ></v-btn>
                <p class="my-1 mx-2">D. 3.</p>
              </v-row>
            </div>
            </transition>
<!-- ----------------------------------------NOVENA PREGUNTA----------------------------------- -->
             <transition name="fade">
             <div v-show="this.cont==9" class="Parrafo">
              <v-row no-gutters>
                <h2 class="mb-3">9. ¿Que Sistema Numerico utiliza letras y Numeros?</h2>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="verificar('a')" color="cyan" x-small fab outlined class="ml-5 my-2"></v-btn>
                <p class="my-1 mx-2">A. Binario</p>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="verificar('b')" color="cyan" x-small fab outlined class="ml-5 my-2"></v-btn>
                <p class="my-1 mx-2">B. Octal</p>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="verificar('c')" color="cyan" x-small fab outlined class="ml-5 my-2"></v-btn>
                <p class="my-1 mx-2">C. Decimal</p>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="verificar('d')" color="cyan" x-small fab outlined class="ml-5 my-2" ></v-btn>
                <p class="my-1 mx-2">D. Hexadecimal</p>
              </v-row>
            </div>
            </transition>
<!-- ----------------------------------------DECIMA PREGUNTA----------------------------------- -->
             <transition name="fade">
             <div v-show="this.cont==10" class="Parrafo">
              <v-row no-gutters>
                <h2 class="mb-3">10. ¿Que Sistema Numerico aplica en la Informática y en la Electrónica?</h2>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="verificar('a')" color="cyan" x-small fab outlined  class="ml-5 my-2"></v-btn>
                <p class="my-1 mx-2">A. Decimal</p>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="verificar('b')" color="cyan" x-small fab outlined  class="ml-5 my-2"></v-btn>
                <p class="my-1 mx-2">B. Binario</p>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="verificar('c')" color="cyan" x-small fab outlined  class="ml-5 my-2"></v-btn>
                <p class="my-1 mx-2">C. Octal</p>
              </v-row>
              <v-row no-gutters>
                <v-btn @click="verificar('d')" color="cyan" x-small fab :outlined="true"  class="ml-5 my-2" ></v-btn>
                <p class="my-1 mx-2">D. Hexagonal</p>
              </v-row>
            </div>
            </transition>
<!-- ----------------------------------------RESULTADO----------------------------------- -->
            <transition name="bounce">
             <div v-show="this.cont==11" class="Parrafo">
              <v-row>
                <v-col>
                  <v-card>
                    <v-row>
                      <v-col>
                    <h1>RESULTADOS</h1>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                     <div class="emoji">
                      <img v-show="this.puntos==0" src="../assets/Ilustraciones/emojin/very low.png">
                      <img v-show="this.puntos>=1 && this.puntos<=3" src="../assets/Ilustraciones/emojin/low.png">
                      <img v-show="this.puntos>=4 && this.puntos<=6" src="../assets/Ilustraciones/emojin/medium.png">
                      <img v-show="this.puntos>=7 && this.puntos<=9 " src="../assets/Ilustraciones/emojin/high.png">
                      <img v-show="this.puntos==10" src="../assets/Ilustraciones/emojin/very high.png">
                    </div>
                    <div class="score">
                      <p>{{puntos+"/10"}}</p>
                    </div>
                    <v-btn @click="reiniciar()" x-large color="#0D47A1" outlined rounded dark>
                      <v-icon x-large>
                        mdi-refresh
                      </v-icon>
                      Reintentar
                    </v-btn>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>
              </v-row>
            </div>
            </transition>
          </v-col>

          <transition name="fade">
          <v-col align-self="center" v-show="cont!=11" cols="2">
            <v-row no-gutters>
              <div class="div_time">
                <!-- <h3>Tiempo</h3> -->
                <v-progress-circular
                  :rotate="1"
                  :size="200"
                  :width="10"
                  :value="valueC"
                  :color="colores"
                >
                  <h1> {{ segundo }}</h1>
                </v-progress-circular>
              </div>
            </v-row>
          </v-col>
          </transition>
        </v-row>

        <v-row justify="center" class="my-3">
          <v-col cols="10">
            <v-progress-linear dark color="#69F0AE" :value="valueP" height="20">
              <!-- <template v-slot:default="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template> -->
            </v-progress-linear>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.div_time {
  background-color: rgba(255, 255, 255);
  border-radius: 100px;
  font-size: 25px;
}

.b-row {
  border-radius: 10px;
  border-top: 1px solid white;
}

.b2-row {
  border-radius: 20px;
  background-color: rgba(255, 255, 255);
  padding: 21px;
}

.e_title h1 {
  border-radius: 10px 10px 0px 0px;
  color: white;
  font-size: 35px;
  background-color: rgba(0, 255, 170, 0.5);
}

.e_title p {
  font-size: 20px;
  border-radius: 0px 0px 0px 0px;
  color: white;
  padding-bottom: 10px;
  background-color: rgba(0, 0, 0, 0.5);
}

.Parrafo p {
  color: rgba(0, 0, 0, 0.8);
  font-size: 25px;
}

.Parrafo h2 {
  color: rgba(0, 0, 0, 0.9);
  font-size: 30px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
  width: 100%;
}

.Parrafo h1 {
  color: rgba(0, 0, 0, 0.8);
  font-size: 30px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
}

.f_radio {
  font-size: 50px;
}

.emoji img{
  width: 20%;
  animation: emojin  1s infinite alternate;
}

 @keyframes emojin{
            from{
                transform: rotate(-5deg);
                }
            to{
                transform: translateY(-10px);
                } 
        }

.score p{
  display: flex;
  text-align: center;
  justify-content: center;
  width: 130px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  color: rgba(0, 0, 0, 0.8);
  transition: all 1s;
}

.score p:hover{
  font-size: px;
}
</style>

<script>
export default {
  name: "Evaluacion",
  data: () => ({

    interval: {},
    colores: "cyan",
    segundo:20,
    valueC: 0,
    valueP: 0,
    cont:0,
    puntos:0,
    estado:true,
    ask:["c","d","d","c","c","d","a","b","d","b"]
  }),

  beforeDestroy() {
    clearInterval(this.interval);
  },

  mounted() {
    
     this.$swal({
            icon: "info",
            title: '<h5 class="alert_text">En este test cuentas con 10 preguntas: Tienes 20 segundos para responder.<h5>',
            position: "center",
            width:"38rem",
            padding: "0",
            allowOutsideClick: false,
            showConfirmButton: true,
            confirmButtonText: '<h2 class="alert_title">Iniciar</h2>',
            confirmButtonColor: "#00BCD4",
          }).then((result) => {
            if (result.isConfirmed) {
              this.cont=1;
              this.interval = setInterval(() => {
                
            if(this.cont==11){
                clearInterval(this.interval);
              }else if(this.segundo==0){
                  clearInterval(this.interval);
              }else{
                this.segundo--;
                this.valueC +=5 ;
                if(this.segundo==0){
                    this.colores="cyan"
                    this.next();
                  
                }else if(this.segundo==19){
                    this.colores="cyan";
                }else if(this.segundo==15){
                    this.colores="#FFEB3B";
                }else if(this.segundo==10){
                    this.colores="#FFC107";
                }else if(this.segundo==5){
                    this.colores="#FF9800";
                }else if(this.segundo==3){
                    this.colores="#FF5722";
                }
              }
              }, 1000);
            }
          });

  },
  methods:{
    
// --------------FUNCION DE ALERTA POSITIVA---------------
    Alerta_Excelente() {
      this.$swal({
        icon: "success",
        iconColor: "#009688",
        title: '<h1 class="alert_text">¡Bien!<h2>',
        toast: true,
        position: "center-left",
        showConfirmButton: false,
        timer: 2000,
      });
    },  
// --------------FUNCION DE ALERTA NEGATIVA---------------
    Alerta_Mal() {
      this.$swal({
        icon: "error",
        iconColor: "#E91E63",
        title: '<h1 class="alert_text">¡Nop!<h2>',
        toast: true,
        position: "center-left",
        showConfirmButton: false,
        timer: 2000,
      });
    },

    verificar(resp){
        if(resp==this.ask[this.cont-1]){
          this.Alerta_Excelente(); 
          this.puntos++;
          this.next();
        }else{
          this.Alerta_Mal();
          this.next();
        }
    },
    next(){
      this.cont++
      this.valueP+=10;
      this.valueC=0;
      this.segundo=20;
      this.interval=null;
    },

    reiniciar(){
      this.puntos=0;
      this.cont=1;
      this.valueP=0;
      this.valueC=0;
      this.segundo=20;
      this.interval=null;
    }

  }
};
</script>