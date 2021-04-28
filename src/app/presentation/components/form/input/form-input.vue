<template>
  <div class="form--input">
    <label class="form--input-label">
      {{ label }}
    </label>

    <input
      v-model="value"
      class="form--input-content"
      :type="type"
    >
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component"
import { Watch } from "vue-property-decorator"
import { ValidationComposite } from "@/app/utilities/validation/validation-composite"
import { RequiredFieldValidator } from "@/app/utilities/validation/required-field-validator"
import { EmailValidator } from "@/app/utilities/validation/email-validator"

const simpleValidationComposite = new ValidationComposite(new RequiredFieldValidator())
const completeValidationComposite = new ValidationComposite(new RequiredFieldValidator(), new EmailValidator())

@Options({
  props: ["label", "type", "value"]
})
class FormInput extends Vue {
  label: string | undefined

  type: "text" | "email" = "text"

  value: string | undefined

  _value: string | undefined

  @Watch("value")
  validate(newValue: string, oldValue: string | undefined) {
    try {
      if (this.type === "text")
        simpleValidationComposite.validate(newValue)
      else
        completeValidationComposite.validate(newValue)

      this._value = newValue
    } catch(error) {
      this._value = oldValue
    }
  }
}

export default FormInput
</script>

<style src="./style.sass" lang="sass" scoped></style>
