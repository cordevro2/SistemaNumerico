<template>
  <v-container  class="background">
    <!-- ACTIVIDAD 1: -->
    <!-- ------------------------------------------------------------------------------------------------>
    <transition name="slide-fade">
    <v-row v-if="mostrar == true" no-gutters>
       <v-row>
         <v-col align="center">
          <div class="title"><h1>ACTIVIDAD 1 - Drag and Drop</h1></div>
            <div class="div_parrafo">
                En esta actividad tienes que Arrastrar 
                el Circulo Morado hacia los Circulos 
                Decimales correspondientes, 
                cada sección corresponde a la
                agrupacion de la cifra Numerica.
            </div>     
        </v-col>
      </v-row >

      <v-col align="center">
        <div id="drop_1" @drop="drop1($event, 1)" @dragover.prevent class="box-zone"></div>
        <h2 class="div_title">CENTENA</h2>
        <div class="div_number">{{ actividad1.contador1 }}</div>
      </v-col>

      <v-col align="center">
        <div id="drop_2" @drop="drop2($event, 1)" @dragover.prevent class="box-zone"></div>
        <h2 class="div_title">DECENA</h2>
        <div class="div_number">{{ actividad1.contador2 }}</div>
      </v-col>

      <v-col align="center">
        <div id="drop_3" @drop="drop3($event, 1)" @dragover.prevent class="box-zone"></div>
        <h2 class="div_title">UNIDAD</h2>
        <div class="div_number">{{ actividad1.contador3 }}</div>
      </v-col>
      
      <v-col class="col_tab" align="center">
        <div class="div_col">
        <div id="dragObj" class="drag-Obj" @dragover.stop @dragstart="dragstart($event)" @drag="drag($event)" @dragend="dragend($event)" :draggable="true"/>
          <div class="div_number">{{ actividad1.cont }}</div>

          <div class="div_btn">
            <v-btn class="my-2 mx-5" color="#009688" @click="verificar()" block dark  x-large rounded> 
              <v-icon dark x-large>mdi-check-circle</v-icon><h2>Verificar</h2></v-btn>
            <v-btn class="my-2 mx-5" color="#E91E63" @click="reiniciar()" block dark  x-large rounded> 
              <v-icon dark x-large>mdi-delete </v-icon><h2>Borrar</h2> </v-btn>
            </div>
          </div>
          
        </v-col>
    </v-row>
    </transition>
    
    <!-- ACTIVIDAD 2 -->
    <!-- ------------------------------------------------------------------------------------------------>
  <transition name="slide-fade">
    <v-row v-if="mostrar == false" no-gutters>
      <v-row>
      <v-col align="center">
          <div class="title"><h1>ACTIVIDAD 2 - Drag and Drop</h1></div>
      </v-col>
      </v-row>
      <v-col align="center">
        <div class="div_container">
          <h1 id="drop1" @dragover.prevent @drop.prevent="drop_1($event, 1)" class="number">
            {{ actividad2.numbers.number_1+1}}</h1>
          <h1 id="drop2" @dragover.prevent @drop.prevent="drop_2($event, 2)" class="number">
            {{ actividad2.numbers.number_2 }}</h1>
          <h1 id="drop3" @dragover.prevent @drop.prevent="drop_3($event, 3)" class="number">
            {{ actividad2.numbers.number_3 }}</h1>
          <h1 id="drop4" @dragover.prevent @drop.prevent="drop_4($event, 4)" class="number">
            {{ actividad2.numbers.number_4 }}</h1>
          <h1 id="drop5" @dragover.prevent @drop.prevent="drop_5($event, 5)" class="number">
            {{ actividad2.numbers.number_5 }}</h1>
          <h1 id="drop6" @dragover.prevent @drop.prevent="drop_6($event, 6)" class="number">
            {{ actividad2.numbers.number_6 }}</h1>
          <h1 id="drop7" @dragover.prevent @drop.prevent="drop_7($event, 7)" class="number">
            {{ actividad2.numbers.number_7 }}</h1>
        </div>
      </v-col>
      <v-row>
      <v-col align="center">
        <div class="div_parrafo2">
          En esta Actividad de Practica, tienes que Arrastrar el Circulo hasta la
          <strong>{{ actividad2.decimal[actividad2.index] }}</strong> 
        </div>
        <div class="box_circulo">
          <div id="dragObj" class="dragObj_circulo" :draggable="true"
            @dragstart="dragStart"
            @dragover.stop
            @dragend="dragEnd"/>
        </div> 
      </v-col>
    </v-row>
  </v-row>
  </transition>

    <v-progress-linear dark color="indigo" :value="value" height="20">
      <template v-slot:default="{ value }">
        <strong>{{ Math.ceil(value) }}%</strong>
      </template>
    </v-progress-linear>
  </v-container>
  
</template>

<script>
export default {
  name: "Decimal",
  data: () => ({
    mostrar: true,
    value: 0,
    actividad1: {
      cont: "12",
      centena: 0,
      decena: 1,
      unidad: 2,
      contador1: 0,
      contador2: 0,
      contador3: 0,
    },

    actividad2: {
      index: 0,
      comprobar: 0,
      numbers: {
        number_1:1,
        number_2:2,
        number_3:3,
        number_4:4,
        number_5:5,
        number_6:6,
        number_7:7,
        },
      decimal: [
        "Unidad",
        "Decena",
        "Centena",
        "Unidad de Mil",
        "Decena de Mil",
        "Centena de Mil",
        "Unidad de millon",
      ],
    },
  }),

destroyed() {
  },

methods: {
    Alerta_Excelente(){
      this.$swal({
        icon: 'success',
        iconColor:"#009688",
        title: '<h1 class="alert_text">¡Bien!<h2>',
        toast: true,
        position: 'center-right',
        showConfirmButton: false,
        timer: 3000,
      })
    },
    Alerta_Mal(){
      this.$swal({
        icon: 'error',
        iconColor:"#E91E63",
        title: '<h1 class="alert_text">!Nop!<h2>',
        toast: true,
        position: 'center-right',
        showConfirmButton: false,
        timer: 3000,
      })
    },
     
// ACTIVIDAD 1
// ---------------------------------------------------------------------
//El evento incial al momento de arrastar(Drag)
    dragstart(event) {
      event.dataTransfer.setData("text/plain", event.target.id);
    },
    //El evento de arrastre(Draging)
    drag(event) {
      event.target.classList.add("active");
    },
    //El evento al momento de finalizar el arrastre(Drag)
    dragend(event) {
      event.target.classList.remove("active");
    },

//Funcion donde se suelta el objeto.
//Primer circulo del (drop)
// CENTENA
  drop1(event, n) {
      event.preventDefault();
      if (this.actividad1.contador1 < 9) {
        const data = event.dataTransfer.getData("text");
        let element = document.getElementById(data).cloneNode(true);
        element.id = "new";
        element.classList.remove("active");
        element.classList.add("drag-Obj_small");
        element.draggable = true;
        event.target.appendChild(element);
        if (n == 1) {
          this.actividad1.contador1++;
        }
      }
    },   

// DECENA 
  drop2(event, n) {
      event.preventDefault();
      if (this.actividad1.contador2 < 9) {
        const data = event.dataTransfer.getData("text");
        let element = document.getElementById(data).cloneNode(true);
        element.id = "new";
        element.classList.remove("active");
        element.classList.add("drag-Obj_small");
        element.draggable = true;
        event.target.appendChild(element);
        if (n == 1) {
          this.actividad1.contador2++;
        }
      }
    },

// UNIDAD
  drop3(event, n) {
      event.preventDefault();
      if (this.actividad1.contador3 < 9) {
        const data = event.dataTransfer.getData("text");
        let element = document.getElementById(data).cloneNode(true);
        element.id = "new";
        element.classList.remove("active");
        element.classList.add("drag-Obj_small");
        element.draggable = false;
        event.target.appendChild(element);
        if (n == 1) {
          this.actividad1.contador3++;
        }
      }
    },

  next() {
      this.value += 20;
      if (this.value == 100) {
        this.$swal({
            icon: 'success',
            iconColor:"#009688",
            title: '<h3 class="alert_text">¡Felicidades has logrado terminar la Actividad!<h3>',
            position: 'center',
            padding:"0.5rem",
            allowOutsideClick:false,

            reverseButtons:true,
            focusConfirm:false,
            focusDeny:false,

            showDenyButton: true,
            denyButtonText:'<h2 class="alert_title">Reintentar</h2>',
            denyButtonColor:"#673AB7",
             
            showConfirmButton: true,
            confirmButtonText:'<h2 class="alert_title">Siguiente</h2>',
            confirmButtonColor:"#00BCD4",
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  this.mostrar=false;
                  this.value = 0;
                } else if (result.isDenied) {
                  this.actividad1.cont="12";
                  this.actividad1.centena=0;
                  this.actividad1.decena= 1;
                  this.actividad1.unidad= 2;
                  this.value = 0;
                }
              })
      }else {
        this.actividad1.centena=Math.floor(Math.random() * 10);
        this.actividad1.decena=Math.floor(Math.random() * 10);
        this.actividad1.unidad=Math.floor(Math.random() * 10);
        let suma;
        suma =
          this.actividad1.centena.toString()+this.actividad1.decena.toString() + this.actividad1.unidad.toString();
          this.actividad1.cont = suma;
      }
    },

  verificar() {
      if (
        this.actividad1.centena == this.actividad1.contador1 &&
        this.actividad1.decena == this.actividad1.contador2 &&
        this.actividad1.unidad == this.actividad1.contador3 
      ) {
        // alert("GANASTE");
        this.Alerta_Excelente();
        this.reiniciar();
        this.next();
        
      }else{
        // alert("PERDISTES");
        this.Alerta_Mal();
        this.reiniciar();
        this.actividad1.cont="12";
        this.actividad1.centena=0;
        this.actividad1.decena= 1;
        this.actividad1.unidad= 2;
        this.value = 0;
       
      }
    },

  reiniciar(){
        let element1 = document.getElementById("drop_1");
        let element2 = document.getElementById("drop_2");
        let element3 = document.getElementById("drop_3");

        while (element1.firstChild) {
          element1.removeChild(element1.firstChild);}
        while (element2.firstChild) {
          element2.removeChild(element2.firstChild);}
        while (element3.firstChild) {
          element3.removeChild(element3.firstChild);}

        this.actividad1.contador1 = 0;
        this.actividad1.contador2 = 0;
        this.actividad1.contador3 = 0;
    },

// ACTIVIDAD 2
// ---------------------------------------------------------------------
 /* touchMove: (event)=>{
        const elemet= document.getElementById("dragObj2")
        let location=event.targetTouches[0];
          elemet.style.left=location.pageX+"px";
          elemet.style.top=location.pageY+"px";
        console.log("hello")
    }, */
     
    drop_1(event, n) {
      const element = event.dataTransfer.getData("element");
      const data = document.getElementById(element);
      data.style.display = "block";
      data.classList.add("dragObj_circuloSelect");
      event.target.appendChild(data);
      this.actividad2.comprobar = n;
      this.comprobar();
    },

    drop_2(event, n) {
      const element = event.dataTransfer.getData("element");
      const data = document.getElementById(element);
      data.style.display = "block";
      data.classList.add("dragObj_circuloSelect");
      event.target.appendChild(data);
      this.actividad2.comprobar = n;
      this.comprobar();
    },

    drop_3(event, n) {
      const element = event.dataTransfer.getData("element");
      const data = document.getElementById(element);
      data.style.display = "block";
      data.classList.add("dragObj_circuloSelect");
      event.target.appendChild(data);
      this.actividad2.comprobar = n;
      this.comprobar();
    },

    drop_4(event, n) {
      const element = event.dataTransfer.getData("element");
      const data = document.getElementById(element);
      data.style.display = "block";
      data.classList.add("dragObj_circuloSelect");
      event.target.appendChild(data);
      this.actividad2.comprobar = n;
      this.comprobar();
    },

    drop_5(event, n) {
      const element = event.dataTransfer.getData("element");
      const data = document.getElementById(element);
      data.style.display = "block";
      data.classList.add("dragObj_circuloSelect");
      event.target.appendChild(data);
      this.actividad2.comprobar = n;
      this.comprobar();
    },

    drop_6(event, n) {
      const element = event.dataTransfer.getData("element");
      const data = document.getElementById(element);
      data.style.display = "block";
      data.classList.add("dragObj_circuloSelect");
      event.target.appendChild(data);
      this.actividad2.comprobar = n;
      this.comprobar();
    },

    drop_7(event, n) {
      const element = event.dataTransfer.getData("element");
      const data = document.getElementById(element);
      data.style.display = "block";
      data.classList.add("dragObj_circuloSelect");
      event.target.appendChild(data);
      this.actividad2.comprobar = n;
      this.comprobar();
    },

    dragStart: (event) => {
      const target = event.target;
      event.dataTransfer.setData("element", target.id);
      setTimeout(() => {
        target.style.display = "none";
      }, 0);
    },

    dragEnd: (event) => {
      const target = event.target;
      event.dataTransfer.setData("element", target.id);
      target.style.display = "block";
    },

    nextLevel() {
      this.value += 10;
      if (this.value == 100) {
           this.$swal({
            icon: 'success',
            iconColor:"#009688",
            title: '<h3 class="alert_text">¡Felicidades has logrado terminar la Actividad!<h3>',
            position: 'center',
            padding:"0.5rem",
            allowOutsideClick:false,

            reverseButtons:false,
            focusConfirm:false,
            focusDeny:false,

            showConfirmButton: true,
            confirmButtonText:'<h2 class="alert_title">Regresar</h2>',
            confirmButtonColor:"#00BCD4",

            showDenyButton: true,
            denyButtonText:'<h2 class="alert_title">Reintentar</h2>',
            denyButtonColor:"#673AB7",
            })
            .then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                  this.mostrar=true;
                  this.value = 0;
              } else if (result.isDenied) {
                  this.value = 0;
                  this.reset();
              }
            })
      } else {
          this.reset();
      }
    },

    reset(){
      this.actividad2.comprobar = 0;
      this.actividad2.numbers.number_1=Math.floor(Math.random() * 9);
      this.actividad2.numbers.number_2=Math.floor(Math.random() * 10);
      this.actividad2.numbers.number_3=Math.floor(Math.random() * 10);
      this.actividad2.numbers.number_4=Math.floor(Math.random() * 10);
      this.actividad2.numbers.number_5=Math.floor(Math.random() * 10);
      this.actividad2.numbers.number_6=Math.floor(Math.random() * 10);
      this.actividad2.numbers.number_7=Math.floor(Math.random() * 10);
        if (this.actividad2.index < 7) {
          this.actividad2.index=Math.floor(Math.random()*7);}
    },

    comprobar() {
      switch (this.actividad2.comprobar) {
        case 1:
          if (this.actividad2.decimal[this.actividad2.index] == "Unidad de millon") {
            this.Alerta_Excelente();
            this.nextLevel();
          } else {
            this.Alerta_Mal();
          }
          break;

        case 2:
          if (this.actividad2.decimal[this.actividad2.index] == "Centena de Mil") {
            this.Alerta_Excelente();
            this.nextLevel();
          } else {
            this.Alerta_Mal();

          }
          break;

        case 3:
          if (this.actividad2.decimal[this.actividad2.index] == "Decena de Mil") {
            this.Alerta_Excelente();
            this.nextLevel();
          } else {
            this.Alerta_Mal();
          }
          break;

        case 4:
          if (this.actividad2.decimal[this.actividad2.index] == "Unidad de Mil") {
            this.Alerta_Excelente();
            this.nextLevel();
          } else {
            this.Alerta_Mal();
          }
          break;

        case 5:
          if (this.actividad2.decimal[this.actividad2.index] == "Centena") {
            this.Alerta_Excelente();
            this.nextLevel();
          } else {
            this.Alerta_Mal();
          }
          break;

        case 6:
          if (this.actividad2.decimal[this.actividad2.index] == "Decena") {
            this.Alerta_Excelente();
            this.nextLevel();
          } else {
            this.Alerta_Mal();
          }
          break;

        case 7:
          if (this.actividad2.decimal[this.actividad2.index] == "Unidad") {
            this.Alerta_Excelente();
            this.nextLevel();
          } else {
            this.Alerta_Mal();
          }
          break;

        default:
          break;
      }
    },
  },
};
</script> 
