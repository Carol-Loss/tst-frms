<template>
<div class="btnsheet">
  <div class="text-center">
    <v-btn
      color="blue"
      dark
      @click="sheet = !sheet"
    >
      Mensaje importante
    </v-btn>
    <v-bottom-sheet v-model="sheet">
      <v-sheet
        class="text-center"
        height="200px"
      >
        <v-btn
          class="mt-6"
          text
          color="red"
          @click="sheet = !sheet"
        >
          Cerrar
        </v-btn>
        <div class="py-3">
          Este es un mensaje importante
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</div>
</template>
<script>
  export default {
    data: () => ({
      sheet: false,
      tiles: [
        { img: 'keep.png', title: 'Keep' },
        { img: 'inbox.png', title: 'Inbox' },
        { img: 'hangouts.png', title: 'Hangouts' },
        { img: 'messenger.png', title: 'Messenger' },
        { img: 'google.png', title: 'Google+' },
      ],
    }),
  }
</script>
<style scoped>
.btnsheet{
  margin-top: 1em;
}
</style>