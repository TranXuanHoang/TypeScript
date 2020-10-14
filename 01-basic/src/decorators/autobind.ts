/**
 * An autobinding decorator that will bind the `this` keyword refering to
 * the object instance of the decorated method. This is to avoid the need
 * of calling `method.bind(this)`.
 *
 * More information about [method decorators](https://www.typescriptlang.org/docs/handbook/decorators.html#method-decorators).
 */
export function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this)
      return boundFn
    }
  }
  return adjDescriptor
}
