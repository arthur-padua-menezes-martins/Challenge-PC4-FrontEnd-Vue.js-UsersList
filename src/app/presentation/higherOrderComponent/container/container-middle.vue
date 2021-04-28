<template>
  <section class="container--middle-size">
    <slot />
  </section>
</template>

<script lang="ts">
import { Vue } from "vue-class-component"

export default class ContainerMiddle extends Vue {}
</script>

<style src="./style.sass" lang="sass" scoped></style>
