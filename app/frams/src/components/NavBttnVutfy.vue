<template>
  <v-bottom-navigation
    v-model="value"
    :background-color="color"
  >
    <v-btn>
      Vuetify
     <!-- <v-icon>mdi-music-note</v-icon>-->
    </v-btn>
    
    <v-btn>
      Buefy
    </v-btn>

    <v-btn>
      Bootstrap-vue
    </v-btn>

    <v-btn>
      Otro
    </v-btn>
  </v-bottom-navigation>
  
</template>
<script>
  export default {
    data: () => ({ value: 0 }),

    computed: {
      color () {
        switch (this.value) {
          case 0: return '#ffc107'
          case 1: return '#dc3545'
          case 2: return '#fd7e14'
          case 3: return '#20c997'
          default: return '#007bff'
        }
      },
    },
  }
</script>
