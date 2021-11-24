<template>
    <div class="date--center">
    <b-field label="Seleccionar rango de fecha">
        <b-datepicker
            placeholder="Click to select..."
            v-model="dates"
            range>
        </b-datepicker>
    </b-field>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dates: []
        }
    }
}
</script>