<template>
  <layout>
    <container-main>
      <container-border :direction="1">
        ...
      </container-border>

      <container-middle>
        <form-group>
          <template #slot-left>
            <form-group />
          </template>

          <template #slot-right>
            <div>
              ...
            </div>
          </template>
        </form-group>
      </container-middle>

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
import FormGroup from "@/app/presentation/components/form/group/form-group.vue"

@Options({
  components: {
    Layout,
    ContainerMain,
    ContainerMiddle,
    ContainerBorder,
    FormGroup
  }
})
class OperationPage extends Vue {}

export default OperationPage
</script>
