<template lang="pug">
    div
        label Name:
        input(type="text" v-model="name")
        v-btn Add
</template>

<script>
import { namesRef } from './firebase';

export default {
    data () {
        return {
            name: 'Paul'
        }
    },
    methods: {
        submitName () {
            namesRef.push({ name: this.name, edit: false })
        }
    }
}
</script>
