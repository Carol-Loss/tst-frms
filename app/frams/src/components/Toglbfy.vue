<template>
    <section>
        <b-steps
            v-model="activeStep"
            :animated="isAnimated"
            :rounded="isRounded"
            :has-navigation="hasNavigation"
            :icon-prev="prevIcon"
            :icon-next="nextIcon"
            :label-position="labelPosition"
            :mobile-mode="mobileMode">
            <b-step-item step="1" label="Consulta programación" :clickable="isStepsClickable">
                <v-row>
          
          <v-col>
            <a href="https://www.ssa.ingenieria.unam.mx/"><h1>Consulta la programación</h1></a>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum magnam asperiores dicta accusamus inventore dolore officia sapiente, corporis perspiciatis numquam assumenda provident voluptatum, natus dolor. Ducimus saepe quod debitis repellat.
            Corrupti minus, earum sapiente quo quod similique fuga asperiores sit molestias autem velit deleniti rem culpa commodi maxime tempora, quae debitis. Est iste eaque, accusamus harum laborum eligendi ab dolore!
          </v-col>
          <v-col>
            <v-img
              class="img--p2"
              src="../assets/p22bf.png"
              width="200px"
            ></v-img>
          </v-col>
        </v-row>
            </b-step-item>

            <b-step-item step="2" label="Realiza el pago" :clickable="isStepsClickable" :type="{'is-success': isProfileSuccess}">
                <v-row>
          
          <v-col>
            <a href="https://www.ssa.ingenieria.unam.mx/"><h1>Realiza el pago</h1></a>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum magnam asperiores dicta accusamus inventore dolore officia sapiente, corporis perspiciatis numquam assumenda provident voluptatum, natus dolor. Ducimus saepe quod debitis repellat.
            Corrupti minus, earum sapiente quo quod similique fuga asperiores sit molestias autem velit deleniti rem culpa commodi maxime tempora, quae debitis. Est iste eaque, accusamus harum laborum eligendi ab dolore!
          </v-col>
          <v-col>
            <v-img
              class="img--p2"
              src="../assets/p12bf.png"
              width="200px"
            ></v-img>
          </v-col>
        </v-row>
            </b-step-item>

            <b-step-item :step="showSocial ? '3' : '2'" label="Presenta examen" :clickable="isStepsClickable" disabled>
                <v-row>
          
          <v-col>
            <a href="https://www.ssa.ingenieria.unam.mx/"><h1>Presenta examen</h1></a>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum magnam asperiores dicta accusamus inventore dolore officia sapiente, corporis perspiciatis numquam assumenda provident voluptatum, natus dolor. Ducimus saepe quod debitis repellat.
            Corrupti minus, earum sapiente quo quod similique fuga asperiores sit molestias autem velit deleniti rem culpa commodi maxime tempora, quae debitis. Est iste eaque, accusamus harum laborum eligendi ab dolore!
          </v-col>
          <v-col>
            <v-img
              class="img--p2"
              src="../assets/p11bf.png"
              width="200px"
            ></v-img>
          </v-col>
        </v-row>
            </b-step-item>

            <template
                v-if="customNavigation"
                #navigation="{previous, next}">
                <b-button
                    outlined
                    type="is-danger"
                    icon-pack="fas"
                    icon-left="backward"
                    :disabled="previous.disabled"
                    @click.prevent="previous.action">
                    Previous
                </b-button>
                <b-button
                    outlined
                    type="is-success"
                    icon-pack="fas"
                    icon-right="forward"
                    :disabled="next.disabled"
                    @click.prevent="next.action">
                    Next
                </b-button>
            </template>
        </b-steps>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                activeStep: 0,

                showSocial: false,
                isAnimated: true,
                isRounded: true,
                isStepsClickable: false,

                hasNavigation: true,
                customNavigation: false,
                isProfileSuccess: false,

                prevIcon: 'chevron-left',
                nextIcon: 'chevron-right',
                labelPosition: 'bottom',
                mobileMode: 'minimalist'
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