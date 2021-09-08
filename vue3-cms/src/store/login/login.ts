import type { Module } from 'vuex'
import type { ILoginState } from './types'
import type { IRootState } from '../types'
import { menuMapToRoutes } from '@/utils/map-menus'

import router from '@/router'

import {
  accountLoginRequest,
  getUserById,
  getUserMenus
} from '@/service/login/login'

const login: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: {},
      permissions: []
    }
  },
  mutations: {
    saveToken(state, token: string) {
      state.token = token
    },
    saveUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    saveUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
      menuMapToRoutes(userMenus)
    }
  },
  actions: {
    async accountLoginAction(
      { commit, dispatch },
      account: { name: string; password: string }
    ) {
      const loginResult = await accountLoginRequest(account)
      const { id, token } = loginResult
      localStorage.setItem('token', token)
      commit('saveToken', token)

      const userInfo = await getUserById(id)
      commit('saveUserInfo', userInfo)

      const userMenus = await getUserMenus(userInfo.role.id)
      commit('saveUserMenus', userMenus)

      router.push('/main')
    }
  }
}

export default login
