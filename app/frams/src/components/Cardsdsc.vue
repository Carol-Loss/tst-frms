<template>
  <v-hover
        v-slot="{ hover }"
        open-delay="200"
      >
  <v-card
    class="mx-auto"
    max-width="344"
    :elevation="hover ? 16 : 2"
    :class="{ 'on-hover': hover }"
  >
    <a href="https://www.ingenieria.unam.mx/programas_academicos/licenciatura/computacion.php">
    <v-img
      gradient="to top right, rgba(13,54,112,.2), rgba(128,208,199,.8)"
      src="../assets/computacion.jpg"
      height="200px"
    ></v-img></a>

    <v-card-title>Ingeniería en Computación</v-card-title>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Descripción
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          La carrera de Ingeniero en Computación tiene como objetivo formar profesionales capaces de planear, diseñar, organizar, producir,operar y dar soporte técnico a los sistemas electrónicos para el procesamiento de datos, a los sistemas de programación -de base y de aplicación del equipo de cómputo-, así como efectuar el control digital de procesos automáticos.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  </v-hover>
</template>
<script>
  export default {
    data: () => ({
      show: false,
    }),
  }
</script>