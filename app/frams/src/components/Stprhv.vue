<template>
  <v-stepper
    v-model="e6"
    vertical
  >
    <v-stepper-step
      :complete="e6 > 1"
      step="1"
    >
      Consulta la programación
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-row>
          <v-col>
            <a href="https://www.ssa.ingenieria.unam.mx/"><h1>Consulta la programación</h1></a>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum magnam asperiores dicta accusamus inventore dolore officia sapiente, corporis perspiciatis numquam assumenda provident voluptatum, natus dolor. Ducimus saepe quod debitis repellat.
            Corrupti minus, earum sapiente quo quod similique fuga asperiores sit molestias autem velit deleniti rem culpa commodi maxime tempora, quae debitis. Est iste eaque, accusamus harum laborum eligendi ab dolore!
          </v-col>
          <v-col>
            <v-img
              class="img--p2"
              src="../assets/p11.png"
              width="200px"
            ></v-img>
          </v-col>
        </v-row>

      <v-btn
        color="primary"
        @click="e6 = 2"
      >
        Siguiente
      </v-btn>
    </v-stepper-content>

    <v-stepper-step
      :complete="e6 > 2"
      step="2"
    >
      Realiza el pago
    </v-stepper-step>

    <v-stepper-content step="2">
      <v-row>
          <v-col>
            <a href="https://www.ssa.ingenieria.unam.mx/"><h1>Realiza el pago</h1></a>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum magnam asperiores dicta accusamus inventore dolore officia sapiente, corporis perspiciatis numquam assumenda provident voluptatum, natus dolor. Ducimus saepe quod debitis repellat.
            Corrupti minus, earum sapiente quo quod similique fuga asperiores sit molestias autem velit deleniti rem culpa commodi maxime tempora, quae debitis. Est iste eaque, accusamus harum laborum eligendi ab dolore!
          </v-col>
          <v-col>
            <v-img
              class="img--p2"
              src="../assets/p22.png"
              width="200px"
            ></v-img>
          </v-col>
        </v-row>
      <v-btn
        color="primary"
        @click="e6 = 3"
      >
        Siguiente
      </v-btn>
    </v-stepper-content>

    <v-stepper-step
      :complete="e6 > 3"
      step="3"
    >
      Presenta examen
    </v-stepper-step>

    <v-stepper-content step="3">
      <v-row>
          <v-col>
            <a href="https://www.ssa.ingenieria.unam.mx/"><h1>Presenta examen</h1></a>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum magnam asperiores dicta accusamus inventore dolore officia sapiente, corporis perspiciatis numquam assumenda provident voluptatum, natus dolor. Ducimus saepe quod debitis repellat.
            Corrupti minus, earum sapiente quo quod similique fuga asperiores sit molestias autem velit deleniti rem culpa commodi maxime tempora, quae debitis. Est iste eaque, accusamus harum laborum eligendi ab dolore!
          </v-col>
          <v-col>
            <v-img
              class="img--p2"
              src="../assets/p33.png"
              width="200px"
            ></v-img>
          </v-col>
        </v-row>
      <v-btn
        color="primary"
        @click="e6 = 1"
      >
        Siguiente
      </v-btn>
    </v-stepper-content>
  </v-stepper>
</template>
<script>
  export default {
    data () {
      return {
        e6: 1,
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