<template>
  <div>
    <b-form-rating v-model="value" variant="warning" class="mb-2"></b-form-rating>
    <p class="mt-2">Value: {{ value }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: null
      }
    }
  }
</script>