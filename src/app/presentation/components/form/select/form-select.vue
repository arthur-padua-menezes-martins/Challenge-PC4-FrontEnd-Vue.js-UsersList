<template>
  <div class="form--select">
    <label class="form--select-label">
      {{ label }}
    </label>

    <select
      v-model="value"
      class="form--select-content"
      type="select"
      @change="content = $event"
    >
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option"
        :selected="option === value"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component"

@Options({
  props: ["label", "options", "value"]
})
class FormSelect extends Vue {
  label: string | undefined

  options: string[] | undefined

  value: string | undefined

  _value: string | undefined

  set content($event: any) {
    this._value = $event.target.value
  }

  get content() {
    return this._value
  }
}

export default FormSelect
</script>

<style src="./style.sass" lang="sass" scoped></style>
