<template>
  <v-container fluid class="background-contenido height">
      <v-row  justify="center" no-gutters>
        <v-col>

        <v-row>
          <v-col align="center">
            <h1 class="title_home_class">
              Welcome
            </h1>
          </v-col>
        </v-row>
        
        <v-row class="my-12">
          <v-col>
            <div class="Box_number">
              <h1 class="number0">0</h1>
              <h1 class="number1">1</h1>
              <h1 class="number2" >2</h1>
              <h1 class="number3" >3</h1>
              <h1 class="number4" >4</h1>
              <h1 class="number5" >5</h1>
              <h1 class="number6" >6</h1>
              <h1 class="number7" >7</h1>
              <h1 class="number8" >8</h1>
              <h1 class="number9" >9</h1>
              <h1 class="numberA" >A</h1>
              <h1 class="numberB" >B</h1>
              <h1 class="numberC" >C</h1>
              <h1 class="numberD" >D</h1>
              <h1 class="numberE" >E</h1>
              <h1 class="numberF" >F</h1>
            </div>
          </v-col>
        </v-row>
        </v-col>
      </v-row>


  </v-container>
</template>

<style>


.height{
  height:100%;;
}

.Box_number{
  display: flex;
  position: relative;
  text-align: center;
  justify-content: center;
  
}

.Box_number h1 {
  position: relative;
  margin: 5px;
  font-size: 70px;
  color: rgba(255, 255, 255, 0.1);
  cursor: pointer;
}

.number0{
    top:150px;
    left:320px;
    animation: number0  1s infinite alternate;
    transition: all 0.5s;
}

@keyframes number0{
            from{
                transform: rotate(-10deg);
                color: rgba(255, 255, 255);
                }
            to{
                transform: translateY(-20px);
                } 
        }

.number0:hover{
  color: rgba(255, 255, 255);
   font-size: 80px;
}

.number1{
    bottom:50px;
    right:100px;
    animation: number1  2s infinite alternate;
    transition: all 0.5s;
}
.number1:hover{
  color: rgba(255, 255, 255);
   font-size: 80px;
}
@keyframes number1{
            from{
                transform: rotate(-10deg);
                }
            to{
                transform: translateX(20px);
                color: rgba(255, 255, 255);
                } 
        }


.number2{
    top:100px;
    right:100px;
    animation: number2  3s infinite alternate;
    transition: all 0.5s;
}
.number2:hover{
  color: rgba(255, 255, 255);
   font-size: 80px;
}
@keyframes number2{
            from{
                transform: rotate(10deg);
                color: rgba(255, 255, 255);
                }
            to{
                transform: translateY(20px);
                } 
        }

.number3{
    bottom:100px;
    right:50px;
    animation: number3 4s infinite alternate;
    transition: all 0.5s;
}
.number3:hover{
  color: rgba(255, 255, 255);
   font-size: 80px;
}
@keyframes number3{
            from{
                transform: rotate(-10deg);
                }
            to{
                transform: translateX(-20px);
                color: rgba(255, 255, 255);
                } 
        }

.number4{
    top:70px;
    left:20px;
      animation: number4 5s infinite alternate;
      transition: all 0.5s;
}
.number4:hover{
  color: rgba(255, 255, 255);
   font-size: 80px;
}
@keyframes number4{
            from{
                transform: rotate(10deg);
                color: rgba(255, 255, 255);
                }
            to{
                transform: translateX(-20px);
                } 
        }

.number5{
    bottom:70px;
    left:10px;
    animation: number5 6s infinite alternate;
    transition: all 0.5s;
}
.number5:hover{
  color: rgba(255, 255, 255);
   font-size: 80px;
}
@keyframes number5{
            from{
                transform: rotate(-10deg);
                }
            to{
                transform: translateY(20px);
                color: rgba(255, 255, 255);
                } 
        }

.number6{
    top:100px;
    left:150px;
    animation: number6 2s infinite alternate;
    transition: all 0.5s;
}
.number6:hover{
  color: rgba(255, 255, 255);
   font-size: 80px;
}
@keyframes number6{
            from{
                transform: rotate(-10deg);
                color: rgba(255, 255, 255);
                }
            to{
                transform: translateX(-20px);
                
                } 
        }

.number7{
    bottom:100px;
    left:100px;
    animation: number7 3s infinite alternate;
    transition: all 0.5s;
}

.number7:hover{
  color: rgba(255, 255, 255);
   font-size: 80px;
}

@keyframes number7{
            from{
                transform: rotate(10deg);
                }
            to{
                transform: translateY(20px);
                color: rgba(255, 255, 255);
                } 
        }

.number8{
    top:20px;
    left:200px;
    animation: number8 4s infinite alternate;
    transition: all 0.5s;
}

.number8:hover{
  color: rgba(255, 255, 255);
   font-size: 80px;
}
@keyframes number8{
            from{
                color: rgba(255, 255, 255);
                transform: rotate(-10deg);
                }
            to{
                transform: translateX(20px);
                } 
        }


.number9{
    bottom:100px;
    left:150px;
    animation: number9 5s infinite alternate;
    transition: all 0.5s;
}

.number9:hover{
  color: rgba(255, 255, 255);
   font-size: 80px;
}
@keyframes number9{
            from{
                transform: rotate(10deg);
                }
            to{
                transform: translateY(-20px);
                color: rgba(255, 255, 255);
                } 
        }

.numberA{
     top:150px;
    left:80px;
    animation: numberA 6s infinite alternate;
    transition: all 0.5s;
}
.numberA:hover{
  color: rgba(255, 255, 255);
   font-size: 80px;
}
@keyframes numberA{
            from{
                color: rgba(255, 255, 255);
                transform: rotate(-10deg);
                }
            to{
                transform: translateY(20px);
                } 
        }

.numberB{
    top:100px;
    left:150px;
    animation: numberB 3s infinite alternate;
    transition: all 0.5s;
}
.numberB:hover{
  color: rgba(255, 255, 255);
   font-size: 80px;
}
@keyframes numberB{
            from{
                transform: rotate(10deg);
                }
            to{
                transform: translateX(-20px);
                color: rgba(255, 255, 255);
                } 
        }

.numberC{
    top:150px;
    right:500px;
    animation: numberC 4s infinite alternate;
    transition: all 0.5s;
}
.numberC:hover{
  color: rgba(255, 255, 255);
   font-size: 80px;
}
@keyframes numberC{
            from{
                color: rgba(255, 255, 255);
                transform: rotate(10deg);
                }
            to{
                transform: translateY(-20px);
                } 
        }

.numberD{
    bottom:0px;
    right:580px;
    animation: numberD 5s infinite alternate;
    transition: all 0.5s;
}
.numberD:hover{
  color: rgba(255, 255, 255);
   font-size: 80px;
}
@keyframes numberD{
            from{
                transform: rotate(-10deg);
                }
            to{
                transform: translateX(20px);
                color: rgba(255, 255, 255);
                } 
        }

.numberE{
    bottom:50px;
    right:0px;
    animation: numberE 6s infinite alternate;
    transition: all 0.5s;
     font-size: 75px;
}
.numberE:hover{
  color: rgba(255, 255, 255);
  font-size: 80px;
}
@keyframes numberE{
            from{
                color: rgba(255, 255, 255);
                transform: rotate(10deg);
                }
            to{
                transform: translateY(20px);
                } 
        }

.numberF{
    top:20px;
    right:400px;
    animation: numberF 4s infinite alternate;
    transition: all 0.5s;
}
.numberF:hover{
  color: rgba(255, 255, 255);
  font-size: 80px;
}
@keyframes numberF{
            from{
                transform: rotate(-10deg);
                }
            to{
                transform: translateX(-20px);
                color: rgba(255, 255, 255);
                
                } 
        }



</style>

<script>
export default {
  name: "Home",
  data: () => ({
    //
  }),

  beforeDestroy() {
    },
};
</script>