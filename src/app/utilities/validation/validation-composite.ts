import { Validation } from "@/app/data/protocols/validation"
import { FieldValidation } from "@/app/data/protocols/field-validation"

export class ValidationComposite implements Validation {
  private validators: Array<FieldValidation> = []

  constructor(...validators: Array<FieldValidation>) {
    validators.forEach(validator => {
      this.validators.push(validator)
    })
  }

  validate(input: any): Error | void {
    let valid

    this.validators.forEach(validator => {
      valid = validator.validate(input)

      if (!valid)
        throw new Error()
    })
  }
}