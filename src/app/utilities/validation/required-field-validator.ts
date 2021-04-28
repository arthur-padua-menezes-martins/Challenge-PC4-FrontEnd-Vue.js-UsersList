import { FieldValidation } from "@/app/data/protocols/field-validation"

export class RequiredFieldValidator implements FieldValidation {
  validate (input: string): boolean {
    return (input !== "" && input !== null && input !== undefined)
  }
}
