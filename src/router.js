import Vue from 'vue';
import VueRouter from 'vue-router';

import pantallaE from "./components/pantallaE";
import pantallaP from "./components/pantallaP";

import contenido from "./components/contenido";

//Actividades
import actividades from "./components/actividades";
import binario from "./components/actividades/bin";
import decimal from "./components/actividades/dec";
import hexadecimal from "./components/actividades/hex";
import octal from "./components/actividades/oct";
//----------------------------------------------------

import evaluacion from "./components/evaluacion";
import creditos from "./components/creditos";
import home from "./components/home";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'pantallaE',
    component: pantallaE,
  },

  {
    path: '/pantallaP',
    name: 'pantallaP',
    // redirect: { name: 'home' },
    component: pantallaP,
    children: [

      {
        path: '/home',
        name: 'home',
        component: home,
      },

      {
        path: '/contenido',
        name: 'contenido',
        component: contenido,
      },

      {
        path: '/actividades',
        name: 'actividades',
        component: actividades,
        children: [
          {
            path: 'dec',
            name: 'decimal',
            component: decimal,
          },
          {
            path: 'oct',
            name: 'octal',
            component: octal,
          },
          {
            path: 'bin',
            name: 'binario',
            component: binario,
          },
          {
            path: 'hex',
            name: 'hexadecimal',
            component: hexadecimal,
          },
        ]
      },

      {
        path: '/evaluacion',
        name: 'evaluacion',
        component: evaluacion,
      },

      {
        path: '/creditos',
        name: 'creditos',
        component: creditos,
      },
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;