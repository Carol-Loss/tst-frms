<template>
    <section>
        <div >
            
            <b-button
                class="buttons"
                label="Click"
                type="is-link"
                size="is-medium"
                @click="pause" />
            
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                indefinteToast: null
            }
        },
        methods: {
            pause() {
                this.$buefy.toast.open({
                    duration: 5000,
                    message: `Genera comprobante`,
                    type: 'is-link',
                    pauseOnHover: true
                })
            }
        }
    }
</script>

<style scoped>
.buttons{
    margin: auto;
}
</style>