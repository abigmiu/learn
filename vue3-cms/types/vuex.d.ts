import { Store } from 'vuex'

declare const $sotre: any
declare const $filters: any

declare module '@vue/runtime-core' {
  interface State {
    name: string
  }

  interface ComponentCustomProperties {
    $store: Store<State>
    $filters: any
  }
}
