<style>
    .red {
        color: #f00;
    }
</style>

<template>
    <div class="red">{{ msg }}</div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'Hello world! Flask and Vue!'
            }
        }
    }
</script>