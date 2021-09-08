import { createStore, useStore as useVuexStore } from 'vuex'

import login from './login/login'

const store = createStore({
  state: () => {
    return {
      name: 'coderwhy',
      entireRoles: [],
      entireDepartments: [],
      entireMenus: []
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
})
export function useStore() {
  return useVuexStore()
}
export default store
