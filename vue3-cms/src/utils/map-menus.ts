import { RouteRecordRaw } from 'vue-router'

// let firstMenu: any = undefined
// let firstRoute: RouteRecordRaw | undefined = undefined

export function menuMapToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  const localRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router/main', true, /\.ts/)
  console.log(routeFiles)

  routeFiles.keys().forEach((key) => {
    if (key.indexOf('./main.ts') !== -1) return
    const route = require('../router/main' + key.split('.'))
    localRoutes.push(route.default)
  })

  console.log('----localRoutes---')
  console.table(localRoutes)

  return routes
}
