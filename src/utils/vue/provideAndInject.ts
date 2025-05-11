import type { injectKeys, injectKeyTypes } from '@/constants/injectKeys'
import { inject, provide, ref, type Ref } from 'vue'

export const injectWithInit = <
  keyType extends keyof injectKeyTypes,
  defaultValueType extends injectKeyTypes[keyType],
>(
  key: (typeof injectKeys)[keyType]['key'],
  defaultValue: defaultValueType extends Ref ? never : defaultValueType,
): Ref<injectKeyTypes[keyType]> => {
  const injectedValue = inject<Ref<defaultValueType> | undefined>(key, undefined)
  if (injectedValue === undefined) {
    const providedValue = ref(defaultValue) as Ref<defaultValueType>
    provide<Ref<injectKeyTypes[keyType]>>(key, providedValue)
    return providedValue
  }
  return injectedValue
}
