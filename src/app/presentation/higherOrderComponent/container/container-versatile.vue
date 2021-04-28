<template>
  <section class="container--versatile-size">
    ...
  </section>
</template>

<script lang="ts">
import { Vue } from "vue-class-component"
import { ContainerGrid } from "@/app/data/protocols/container-grid"

export default class ContainerVersatile extends Vue {
  grid: ContainerGrid = ContainerGrid.One

  get containerGrid() {
    return {
      "container--versatile-size": this.grid === ContainerGrid.One,
      "container--versatile-size-many": this.grid === ContainerGrid.Many,
    }
  }
}
</script>

<style src="./style.sass" lang="sass" scoped></style>
