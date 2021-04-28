<template>
  <div class="container--main-size shadow-lg">
    <slot class="container--main-slot" />
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component"

export default class ContainerMain extends Vue {}
</script>

<style src="./style.sass" lang="sass" scoped></style>
