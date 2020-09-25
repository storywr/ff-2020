import { StyledComponent } from "styled-components"

// TODO: figure out how to make this work better
type WithDefaultProps<C, P> = C & { defaultProps: P }
export const withDefaultProps = <C, P>(component: C, defaultProps: P) => {
  (component as WithDefaultProps<C, P>).defaultProps = defaultProps
  return component as WithDefaultProps<C, P>
}

type VariantFn<P> = (props: P) => string | number
type Variant<P, R> = R | VariantFn<P>
type VariantResolver<P, R> = (props: P) => R

const isVariantFn = <P, R = any>(variant: Variant<P, R>): variant is VariantFn<P> => (
  typeof variant === 'function'
)

export const variant = <
  P extends Record<K, V> & Partial<Record<O, R>>,
  K extends keyof P,
  O extends keyof P,
  V extends string = P[K],
  R extends any = P[O]
>(propKey: K, overrideKey: O, options: Record<V, Variant<P, R>>): VariantResolver<P, R> => (
  (props: P) => {
    if (props[overrideKey]) return props[overrideKey]

    const value = options[props[propKey]]
    if (isVariantFn(value)) return value(props) as R

    return value as R
  }
)

export const variantGroup = <
  P extends Record<K, V> & Partial<Record<U, R>>,
  K extends keyof P,
  U extends keyof P,
  R extends any = P[U],
  L extends Variant<P, R> = Variant<P, R>,
  C extends Record<U, L> = Record<U, L>,
  V extends string = P[K]
>(propKey: K, config: Record<V, C>) => {
  const value = {} as Record<U, VariantResolver<P, R>>

  const names = Object.keys(config) as V[]
  const firstConfig = config[names[0]]
  const configKeys = Object.keys(firstConfig) as U[]

  configKeys.forEach((key) => {
    const options = {} as Record<V, C[U]>

    names.forEach((name) => {
      options[name] = config[name][key]
    })

    value[key] = variant<P, typeof propKey, typeof key>(propKey, key, options)
  })

  return value
}

export const doNotForward = <
  P extends {}
>(transientProps: (keyof P)[]) => (
  (prop: keyof P) => !transientProps.includes(prop)
)

export type TypeOfStyled<T extends StyledComponent<any, any, any, any>>
  = T extends StyledComponent<infer U, any, any, any> ? U : never

export type PropsOfStyled<T extends StyledComponent<any, any, any, any>>
  = T extends StyledComponent<any, any, infer U, any> ? U : never

export type FullPropsOfStyled<T extends StyledComponent<any, any, any, any>>
  = Parameters<T>[0]
