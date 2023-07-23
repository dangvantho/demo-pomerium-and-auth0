export type Constant = { [key: string]: { label: string; value: unknown } }

export type Optional<T> = {
  [K in keyof T as T[K] extends Required<T>[K] ? never : K]: T[K]
}

type User = {
  name: string
  age?: number | null
}

type userA = Optional<User>

let user: userA = {
  age: 23,
}
