<template>
    <section>

        <b-steps
            :position="position"
            :label-position="labelPosition"
            :size="size"
            vertical>
            <b-step-item label="Consulta programación" step="1">
                <v-row>
          <v-col>
            <v-img
              class="img--p2"
              src="../assets/p1bf.png"
              width="200px"
            ></v-img>
          </v-col>
          <v-col>
            <a href="https://www.ssa.ingenieria.unam.mx/"><h1>Consulta la programación</h1></a>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum magnam asperiores dicta accusamus inventore dolore officia sapiente, corporis perspiciatis numquam assumenda provident voluptatum, natus dolor. Ducimus saepe quod debitis repellat.
            Corrupti minus, earum sapiente quo quod similique fuga asperiores sit molestias autem velit deleniti rem culpa commodi maxime tempora, quae debitis. Est iste eaque, accusamus harum laborum eligendi ab dolore!
          </v-col>
        </v-row>
            </b-step-item>

            <b-step-item label="Realiza el pago" step="2">
               <v-row>
          <v-col>
            <v-img
              class="img--p2"
              src="../assets/p2bf.png"
              width="200px"
            ></v-img>
          </v-col>
          <v-col>
            <a href="https://www.ssa.ingenieria.unam.mx/"><h1>Realiza el pago</h1></a>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum magnam asperiores dicta accusamus inventore dolore officia sapiente, corporis perspiciatis numquam assumenda provident voluptatum, natus dolor. Ducimus saepe quod debitis repellat.
            Corrupti minus, earum sapiente quo quod similique fuga asperiores sit molestias autem velit deleniti rem culpa commodi maxime tempora, quae debitis. Est iste eaque, accusamus harum laborum eligendi ab dolore!
          </v-col>
        </v-row>
            </b-step-item>

            <b-step-item label="Social" step="3" disabled>
               <v-row>
          <v-col>
            <v-img
              class="img--p2"
              src="../assets/p3bf.png"
              width="200px"
            ></v-img>
          </v-col>
          <v-col>
            <a href="https://www.ssa.ingenieria.unam.mx/"><h1>Presenta examen</h1></a>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum magnam asperiores dicta accusamus inventore dolore officia sapiente, corporis perspiciatis numquam assumenda provident voluptatum, natus dolor. Ducimus saepe quod debitis repellat.
            Corrupti minus, earum sapiente quo quod similique fuga asperiores sit molestias autem velit deleniti rem culpa commodi maxime tempora, quae debitis. Est iste eaque, accusamus harum laborum eligendi ab dolore!
          </v-col>
        </v-row>
            </b-step-item>
        </b-steps>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                labelPosition: 'bottom',
                position: null,
                size: null,
            }
        }
    }
</script>
<style scoped>
.img--p2{
  padding: 3em;
  margin: auto;
}
</style>