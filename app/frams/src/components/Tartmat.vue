<template>
  <div class="card-expansion">
    <md-card>
      <md-card-media>
        <img src="../assets/aeroespacial.jpg" alt="People">
      </md-card-media>

      <md-card-header>
        <div class="md-title">Ingeniería aeroespacial</div>
      </md-card-header>

      <md-card-expand>
        <md-card-actions md-alignment="space-between">
          <div>
            <a href="http://www.oferta.unam.mx/ingenieria-aeroespacial.html">
            <md-button>Ver más</md-button></a>
          </div>

          <md-card-expand-trigger>
            <md-button>Descripción</md-button>
          </md-card-expand-trigger>
        </md-card-actions>

        <md-card-expand-content>
          <md-card-content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
          </md-card-content>
        </md-card-expand-content>
      </md-card-expand>
    </md-card>
  </div>
</template>

<script>
  export default {
    name: 'CardExpansion'
  }
</script>

<style lang="scss" scoped>
  .card-expansion {
    height: 480px;
  }

  .md-card {
    width: 320px;
    margin: auto;
    display: inline-block;
    vertical-align: top;
  }
</style>