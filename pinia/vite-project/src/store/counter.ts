import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      count: 0,
    }
  },
  actions: {
    increment() {
      this.count++
    },
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
})
