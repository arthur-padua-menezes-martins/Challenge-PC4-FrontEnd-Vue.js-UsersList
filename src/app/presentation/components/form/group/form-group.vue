<template>
  <section class="form--group-size">
    <div class="form--group-slot-left">
      <form-input
        label="nome"
        type="text"
      />

      <form-input
        label="e-mail"
        type="email"
      />

      <form-select
        label="setor"
        :options="['Infraestrutura', 'Marketing']"
      />
    </div>

    <div class="form--group-slot-right">
      ...
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component"
import FormInput from "@/app/presentation/components/form/input/form-input.vue"
import FormSelect from "@/app/presentation/components/form/select/form-select.vue"

@Options({
  components: {
    FormInput,
    FormSelect
  }
})
class FormGroup extends Vue {}

export default FormGroup
</script>

<style src="./style.sass" lang="sass" scoped></style>
