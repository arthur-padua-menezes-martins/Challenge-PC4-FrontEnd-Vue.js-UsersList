<template>
  <div class="layout-size">
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component"

class Layout extends Vue {}

export default Layout
</script>

<style src="./style.sass" lang="sass"></style>
