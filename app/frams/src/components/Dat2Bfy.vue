<template>
    <b-field label="Seleccionar Hora y Fecha">
        <b-datetimepicker v-model="datetime"
            placeholder="Click to select...">

            <template #left>
                <b-button
                    label="Now"
                    type="is-primary"
                    icon-left="clock"
                    @click="datetime = new Date()" />
            </template>

            <template #right>
                <b-button
                    label="Clear"
                    type="is-danger"
                    icon-left="close"
                    outlined
                    @click="datetime = null" />
            </template>
        </b-datetimepicker>
    </b-field>
</template>

<script>
    export default {
        data() {
            return {
                datetime: new Date()
            }
        }
    }
</script>