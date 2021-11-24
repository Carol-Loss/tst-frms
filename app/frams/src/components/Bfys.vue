<template>
    <section>
        <b-button
            label="Requerimiento de documento"
            @click="isActive = !isActive" />
        <b-message 
            title="Documento" 
            v-model="isActive" 
            aria-close-label="Close message">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
        </b-message>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                isActive: false
            }
        }
    }
</script>