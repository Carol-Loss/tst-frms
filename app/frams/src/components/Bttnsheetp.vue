<template>
  <div class="text-center">
    <v-bottom-sheet
      v-model="sheet"
      persistent
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="green"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Mensaje importante persistente
        </v-btn>
      </template>
      <v-sheet
        class="text-center"
        height="200px"
      >
        <v-btn
          class="mt-6"
          text
          color="error"
          @click="sheet = !sheet"
        >
          Cerrar
        </v-btn>
        <div class="py-3">
          Mensaje importante que persiste
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>
<script>
  export default {
    data: () => ({
      sheet: false,
    }),
  }
</script>