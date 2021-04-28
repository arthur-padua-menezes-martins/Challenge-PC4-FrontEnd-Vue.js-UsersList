<template>
  <section
    class="container--border-size"
    :class="containerDirection"
  >
    <slot
      class="container--border-slot"
      name="slot-left"
    />
    <slot
      class="container--border-slot"
      name="slot-right"
    />
  </section>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component"

@Options({
  props: ["direction"]
})
class ContainerBorder extends Vue {
  direction: 1 | 2 | undefined

  get containerDirection() {
    console.log({direction: this.direction })
    return {
      "container--border-top": this.direction == 1,
      "container--border-bottom": this.direction == 2,
    }
  }
}

export default ContainerBorder
</script>

<style src="./style.sass" lang="sass" scoped></style>
