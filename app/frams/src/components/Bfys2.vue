<template>
    <section>
        <b-button
            label="Requerimiento de documento"
            class="block"
            @click="isActive = !isActive" />
        <b-notification 
            v-model="isActive" 
            type="is-info is-light"
            has-icon
            icon="file"
            aria-close-label="Close notification"
            role="alert">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
        </b-notification>
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