import { FieldValidation } from "@/app/data/protocols/field-validation"

export class EmailValidator implements FieldValidation {
  validate (input: string): boolean {
    return Boolean(input.match(/^[a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/))
  }
}
