<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step
        :complete="e1 > 1"
        step="1"
      >
        Consulta la programación
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 2"
        step="2"
      >
        Realiza el pago 
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">
        Presenta examen
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-row>
          <v-col>
            <v-img
              class="img--p2"
              src="../assets/p1.png"
              width="200px"
            ></v-img>
          </v-col>
          <v-col>
            <a href="https://www.ssa.ingenieria.unam.mx/"><h1>Consulta la programación</h1></a>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum magnam asperiores dicta accusamus inventore dolore officia sapiente, corporis perspiciatis numquam assumenda provident voluptatum, natus dolor. Ducimus saepe quod debitis repellat.
            Corrupti minus, earum sapiente quo quod similique fuga asperiores sit molestias autem velit deleniti rem culpa commodi maxime tempora, quae debitis. Est iste eaque, accusamus harum laborum eligendi ab dolore!
          </v-col>
        </v-row>

        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Siguiente
        </v-btn>

        
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-row>
          <v-col>
            <v-img
              class="img--p2"
              src="../assets/p2.png"
              width="200px"
            ></v-img>
          </v-col>
          <v-col>
            <a href="https://www.ssa.ingenieria.unam.mx/"><h1>Realiza el pago</h1></a>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum magnam asperiores dicta accusamus inventore dolore officia sapiente, corporis perspiciatis numquam assumenda provident voluptatum, natus dolor. Ducimus saepe quod debitis repellat.
            Corrupti minus, earum sapiente quo quod similique fuga asperiores sit molestias autem velit deleniti rem culpa commodi maxime tempora, quae debitis. Est iste eaque, accusamus harum laborum eligendi ab dolore!
          </v-col>
        </v-row>

        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          Siguiente
        </v-btn>

        
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-row>
          <v-col>
            <v-img
              class="img--p2"
              src="../assets/p3.png"
              width="200px"
            ></v-img>
          </v-col>
          <v-col>
            <a href="https://www.ssa.ingenieria.unam.mx/"><h1>Presenta examen</h1></a>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum magnam asperiores dicta accusamus inventore dolore officia sapiente, corporis perspiciatis numquam assumenda provident voluptatum, natus dolor. Ducimus saepe quod debitis repellat.
            Corrupti minus, earum sapiente quo quod similique fuga asperiores sit molestias autem velit deleniti rem culpa commodi maxime tempora, quae debitis. Est iste eaque, accusamus harum laborum eligendi ab dolore!
          </v-col>
        </v-row>

        <v-btn
          color="primary"
          @click="e1 = 1"
        >
          Siguiente
        </v-btn>

      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
<script>
  export default {
    data () {
      return {
        e1: 1,
      }
    },
  }
</script>
<style scoped>
.img--p2{
  padding: 3em;
  margin: auto;
}
</style>