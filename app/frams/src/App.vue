<template>
<v-app>
  <nav class="nav">
    <v-bottom-navigation
      v-model="value"
      :background-color="color"
    >
    <a href="#Vuetify">
      <v-btn>
        Vuetify
      </v-btn>
    </a>  
    <a href="#Bootstrap-vue">
      <v-btn>
        Bootstrap-vue
      </v-btn>
    </a>
    <a href="#Buefy">
      <v-btn>
        Buefy
      </v-btn>
    </a>
   <!-- -->
   <a href="#Matvue">
      <v-btn>
        MaterialVue
      </v-btn>
    </a>
      <v-btn>
        Otro
      </v-btn>
  </v-bottom-navigation>
  </nav>
  
  <!--Vuetify-->
  <div id="Vuetify">
    <v-container>
      <logovuetifyv/>
      <div class="spa-ele"></div>
        <bttnsheetp/>
        <bttnsheet/>
      <div class="spa-ele"></div>
      <hr class="solid">
      <div class="spa-ele"></div>
        <bttnload/>
        <dialogload/>
      <div class="spa-ele"></div>
       <hr class="solid">
       <div class="spa-ele"></div>
       <v-row>
         <v-col>
          <cardsdsc/>
         </v-col>
         <v-col>
          <cardsdsc2/>
         </v-col>
         <v-col>
           <cardsdsc3/>
         </v-col>
       </v-row>
      <div class="spa-ele"></div>
      <hr class="solid">
      <div class="spa-ele"></div>
        <selectvbx/>
      <div class="spa-ele"></div>
      <hr class="solid">
      <div class="spa-ele"></div>
      <v-row>
        <h1 class="faq">Preguntas Frecuentes</h1>
      </v-row>
      <v-row>
        <v-col>
          <expreacuadout/>
        </v-col>
        <v-col>
          <expandd/>
        </v-col>
      </v-row>
      <div class="spa-ele"></div>
      <hr class="solid">
      <div class="spa-ele"></div>
        <calendarvutfy/>
      <div class="spa-ele"></div>
      <hr class="solid">
      <div class="spa-ele"></div>
        <stprh/>
      <div class="spa-ele"></div>
      <hr class="solid">
      <div class="spa-ele"></div>
        <stprhv/>
      <div class="spa-ele"></div>
    </v-container>
  </div>

  <!--Bootstrap-vue-->
  <div id="Bootstrap-vue">
    <v-container>
      <hr class="dashed">
      <div class="spa-ele"></div>
      <logobootsv/>
      <div class="spa-ele"></div>
      <alrtsB/>
      <hr class="solid">
      <div class="spa-ele"></div>
      <dateB/>
      <div class="spa-ele"></div>
      <hr class="solid">
      <div class="spa-ele"></div>
      <v-row>
        <v-col>
          <rteB/>
        </v-col>
        <v-col>
          <rte2B/>
        </v-col>
      </v-row>
      <div class="spa-ele"></div>
      <hr class="solid">
      <tgleB/>
      <div class="spa-ele"></div>
    </v-container>
  </div>
 

  <!--Buefy-->
  <div id="Buefy">
    <v-container>
      <hr class="dashed">
      <div class="spa-ele"></div>
      <logobfy/>
      <div class="spa-ele"></div>
      <compbtnbfy/>
      <hr class="solid">
      <div class="spa-ele"></div>
      <v-row>
        <v-col>
          <bfys/>
        </v-col>
        <v-col>
          <bfys2/>
        </v-col>
      </v-row>
      <div class="spa-ele"></div>
      <hr class="solid">
      <div class="spa-ele"></div>
      <mjsbfy/>
      <div class="spa-ele"></div>
      <hr class="solid">
      <div class="spa-ele"></div>
      <v-row>
        <v-col>
          <datBfy/>
        </v-col>
        <v-col>
          <dat2Bfy/>
        </v-col>
      </v-row>
      <div class="spa-ele"></div>
      <hr class="solid">
      <div class="spa-ele"></div>
      <stpbfy/>
      <div class="spa-ele"></div>
      <hr class="solid">
      <div class="spa-ele"></div>
      <toglbfy/>
      <div class="spa-ele"></div>
      <hr class="solid">
      <div class="spa-ele"></div>
      <tlebfy/>
      <hr class="solid">
      <div class="spa-ele"></div>
    </v-container>
    </div>

    <!--Matvue-->
  <div id="Matvue">
    <v-container>
      <hr class="dashed">
      <div class="spa-ele"></div>
      <logovmat/>
      <trjmat/>
      <div class="spa-ele"></div>
      <hr class="solid">
      <div class="spa-ele"></div>
      <shwdialmat/>
      <div class="spa-ele"></div>
      <hr class="solid">
      <tartmat/>
      <div class="spa-ele"></div>
      <hr class="solid">
      <br class="solid">
    </v-container>
  </div>


  <div class="scroll-to-top">
        <button @click="scrollToTop"> Scroll to top </button>
    </div>
</v-app>
</template>

<script>
  import NavBttnVutfy from './components/NavBttnVutfy'
  import Bttnsheetp from './components/Bttnsheetp'
  import Bttnsheet from './components/Bttnsheet'
  import Bttnload from './components/Bttnload'
  import Calendarvutfy from './components/Calendarvutfy'
  import Dialogload from './components/Dialogload'
  import Cardsdsc from './components/Cardsdsc.vue'
  import Expandd from './components/Expandd.vue'
  import Selectvbx from './components/Selectvbx.vue'
  import Expreacuadout from './components/Expreacuadout.vue'
  import Cardsdsc2 from './components/Cardsdsc2'
  import Cardsdsc3 from './components/Cardsdsc3'
  import Stprh from './components/Stprh.vue'
  import Stprhv from './components/Stprhv.vue'
  import Logobootsv from './components/Logobootsv.vue'
  import Logovuetfyv from './components/Logovuetfyv.vue'
  import AlrtsB from './components/AlrtsB.vue'
  import DateB from './components/DateB.vue'
  import RteB from './components/RteB.vue'
  import Rte2B from './components/Rte2B.vue'
  import TgleB from './components/TgleB.vue'
  import Bfys from './components/Bfys.vue'
  import Bfys2 from './components/Bfys2.vue'
  import Logobfy from './components/Logobfy.vue'
  import DatBfy from './components/DatBfy.vue'
  import Dat2Bfy from './components/Dat2Bfy.vue'
  import Stpbfy from './components/Stpbfy.vue'
  import Toglbfy from './components/Toglbfy.vue'
  import Tlebfy from './components/Tlebfy.vue'
  import Compbtnbfy from './components/Compbtnbfy.vue'
  import Mjsbfy from './components/Mjsbfy.vue'
  import Logovmat from './components/Logovmat.vue'
  import Trjmat from './components/Trjmat.vue'
  import Tartmat from './components/Tartmat.vue'
  import Shwdialmat from './components/Shwdialmat.vue'
  

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
    methods: {
      scrollToTop(){
        let currentScroll = document.documentElement.scrollTop,
          int = setInterval(frame, 6)
          
          function frame(){
              if( 0 > currentScroll)
                  clearInterval(int)
                  
              else {
                  currentScroll = currentScroll - 12
                  document.documentElement.scrollTop = currentScroll
              }
          }
      }
    },
    
    components: {
      "navBttnVutfy":NavBttnVutfy,
      "bttnsheetp": Bttnsheetp,
      "bttnsheet": Bttnsheet,
      "bttnload": Bttnload,
      "calendarvutfy": Calendarvutfy,
      "dialogload": Dialogload,
      "cardsdsc": Cardsdsc,
      "Expandd": Expandd,
      "selectvbx": Selectvbx,
      "expreacuadout": Expreacuadout,
      "cardsdsc2": Cardsdsc2,
      "cardsdsc3": Cardsdsc3,
      "stprh":Stprh,
      "stprhv": Stprhv,
      "logobootsv": Logobootsv,
      "logovuetifyv":Logovuetfyv,
      "alrtsB": AlrtsB,
      "dateB": DateB,
      "rteB":RteB,
      "rte2B":Rte2B,
      "tgleB":TgleB,
      "bfys":Bfys,
      "bfys2":Bfys2,
      "logobfy": Logobfy,
      "datBfy":DatBfy,
      "dat2Bfy":Dat2Bfy,
      "stpbfy":Stpbfy,
      "toglbfy":Toglbfy,
      "tlebfy":Tlebfy,
      "compbtnbfy":Compbtnbfy,
      "mjsbfy":Mjsbfy,
      "logovmat":Logovmat,
      "trjmat":Trjmat,
      "tartmat":Tartmat,
      "shwdialmat":Shwdialmat,
    }
  };
</script>

<style>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
hr.solid {
  border-top: 3px solid #bbb;
}
.nav{
  margin-bottom: 2em;
}
hr.dashed {
  border-top: 3px dashed #bbb;
}
.faq{
  padding-bottom: 1em;
}
.scroll-to-top{
  position: fixed;
  padding: 30px 0;
   cursor: pointer;
}
.spa-ele{
  margin-bottom: 6em;
}

</style>