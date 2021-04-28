<template>
  <layout>
    <container-main>
      <container-border :direction="1">
        ...
      </container-border>

      <container-middle />

      <container-border :direction="2">
        ...
      </container-border>
    </container-main>
  </layout>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component"
import Layout from "@/app/presentation/higherOrderComponent/layout/layout.vue"
import ContainerMain from "@/app/presentation/higherOrderComponent/container/container-main.vue"
import ContainerMiddle from "@/app/presentation/higherOrderComponent/container/container-middle.vue"
import ContainerBorder from "@/app/presentation/higherOrderComponent/container/container-border.vue"

@Options({
  components: {
    Layout,
    ContainerMain,
    ContainerMiddle,
    ContainerBorder
  }
})
class ListingPage extends Vue {}

export default ListingPage
</script>
