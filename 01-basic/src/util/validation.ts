namespace App {
  export interface Validatable {
    value: string | number
    require?: boolean
    minLength?: number
    maxLength?: number
    min?: number
    max?: number
  }

  export function validate(validatableInput: Validatable) {
    let isValid = true
    if (validatableInput.require) {
      isValid = isValid && validatableInput.value.toString().trim().length !== 0
    }
    if (validatableInput.minLength != null && // != null is equivalent to !== null && !== undefined
      typeof validatableInput.value === 'string') {
      isValid = isValid && validatableInput.value.length >= validatableInput.minLength
    }
    if (validatableInput.maxLength != null &&
      typeof validatableInput.value === 'string') {
      isValid = isValid && validatableInput.value.length <= validatableInput.maxLength
    }
    if (validatableInput.min != null && typeof validatableInput.value === 'number') {
      isValid = isValid && validatableInput.value >= validatableInput.min
    }
    if (validatableInput.max != null && typeof validatableInput.value === 'number') {
      isValid = isValid && validatableInput.value <= validatableInput.max
    }
    return isValid
  }
}
