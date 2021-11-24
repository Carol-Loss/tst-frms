<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card
        class="mx-auto"
        max-width="300"
      >
        <v-img src="../assets/computacion.jpg"></v-img>

        <v-card-text>
          <h2 class="text-h6 primary--text">
            Ingeniería en Computación
          </h2>
          La carrera de Ingeniero en Computación tiene como objetivo formar profesionales capaces de planear, diseñar, organizar, ...
        </v-card-text>

        <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            color="#036358"
          >
        <a href="https://www.ingenieria.unam.mx/programas_academicos/licenciatura/computacion.php">
            <v-btn>Ver más</v-btn>
        </a>
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>
</template>