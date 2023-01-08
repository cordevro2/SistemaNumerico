<template>
  <v-container fluid class="background-contenido">
    <v-row >
    <v-col>
    <v-card class="mx-auto py-2" dark rounded max-width="480" elevation="5">
      <v-row justify="center">
        <div class="title_proyect">
          <h2>INTEGRANTES DEL PROYECTO</h2>
        </div>
      </v-row>

      <v-row class="box-card" justify="center">
        <div class="avatar2" />
        <div class="descripcion">
          <div class="title_name">
            <h3>ÁNGEL MANUEL CORDERO FALCO</h3>
          </div>
          <div class="parrafo_name">
            <p>Tecnicas Avanzadas de Programación<br>
              Lic. Informatica</p>
          </div>
        </div>
      </v-row>


    </v-card>
    </v-col>

    <v-col>
    <v-card class="py-1 mx-auto" dark rounded max-width="480" elevation="5">
      <v-row justify="center">
        <div class="title_proyect">
          <h2>UNIVERSIDAD DE CORDOBA</h2>
        </div>
      </v-row>
      <v-row class="box-card" justify="center">
        <div class="logo" />
      </v-row>
    </v-card>

    <v-card class="py-1 mt-5 mx-auto" dark rounded max-width="480" elevation="5">
      <v-row justify="center">
        <div class="title_proyect">
          <h2>PROFESOR ENCARGADO</h2>
        </div>
      </v-row>
        <v-row class="box-card" justify="center">
        <div class="avatar6" />
        <div class="descripcion">
          <div class="title_name">
            <h3>ALY BENHUR CULCHAC DE LA VEGA</h3>
          </div>
          <div class="parrafo_name">
            <p>Docente en Tecnicas Avanzadas de Programación</p>
          </div>
        </div>
      </v-row>
    </v-card>

    </v-col>
    </v-row>
  </v-container>
</template>


<style>

.title_proyect{
  color: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  border-bottom:2px solid white ;
}


.box-card {
  margin: 20px 0px 10px 0px;
}

.descripcion {
  padding-left: 60px;
  margin-left: -50px;
  width: 400px;
  height: 50px;
}

.title_name {
  border-radius: 10px 10px 0px 0px;
  padding-left: 60px;
  margin-left: -50px;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
}

.parrafo_name {
  border-radius: 10px 0px 0px 0px;
  padding-left: 60px;
  margin-left: -50px;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  color: rgb(0, 0, 0);
}

.avatar1 {
  border-radius: 100%;
  background-image: url(../assets/Ilustraciones/Elian.jpg);
  background-size: cover;
  width: 80px;
  height: 80px;
  position: relative;
  z-index: 2;
  transition: all 0.3s;
}
.avatar1:hover{
   width: 115px;
  height:115px;
}

.avatar2 {
  border-radius: 100%;
  background-image: url(../assets/Ilustraciones/Angel.jpeg);
  background-size: cover;
  width: 80px;
  height: 80px;
  position: relative;
  transition: all 0.3s;
  z-index: 2;
}

.avatar2:hover{
    width: 115px;
  height:115px;
}

.avatar3 {
  border-radius: 100%;
  background-image: url(../assets/Ilustraciones/Daniel.jpeg);
  background-size: cover;
  width: 80px;
  height: 80px;
  position: relative;
  transition: all 0.3s;
  z-index: 2;
}

.avatar3:hover{
    width: 115px;
  height:115px;
}

.avatar4 {
  border-radius: 100%;
  background-image: url(../assets/Ilustraciones/Jose.jpeg);
  background-size: cover;
  width: 80px;
  height: 80px;
  position: relative;
  transition: all 0.3s;
  z-index: 2;
}

.avatar4:hover{
    width: 115px;
  height:115px;
}

.avatar5 {
  border-radius: 100%;
  background-image: url(../assets/Ilustraciones/Andres.jpeg);
  background-size: cover;
  width: 80px;
  height: 80px;
  position: relative;
  transition: all 0.3s;
  z-index: 2;
}

.avatar5:hover{
   width: 115px;
  height:115px;
}

.avatar6 {
  border-radius: 100%;
  background-image: url(../assets/Ilustraciones/Aly.jpeg);
  background-size: cover;
  width: 80px;
  height: 80px;
  position: relative;
  transition: all 0.3s;
  z-index: 2;
}

.avatar6:hover{
  width: 115px;
  height:115px;
}

.logo {
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  background-image: url(../assets/Logo/logo.png);
  background-size: contain;
  width: 400px;
  height: 249px;
  transition: all 0.5s;
}

.logo:hover{
     background-color: rgb(255, 255, 255);
      width: 410px;
      height: 260px;
}
</style>

<script>
export default {
  name: "Creditos",
  data: () => ({
    //
  }),
};
</script>