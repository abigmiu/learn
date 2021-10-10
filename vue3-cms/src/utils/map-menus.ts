import { RouteRecordRaw } from 'vue-router'

let firstMenu: any = undefined
let firstRoute: RouteRecordRaw | undefined = undefined

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

  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = localRoutes.find((route) => {
          route.path === menu.url
        })
        if (route) routes.push(route)

        if (!firstMenu && !firstRoute) {
          firstMenu = menu
          firstRoute = route
        } else {
          _recurseGetRoute(menu.children ?? [])
        }
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}

export function menuMapToPermissions(userMenus: any[]) {
  const permissions: string[] = []

  const _recurseGetPermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermission(menu.children ?? [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }
  _recurseGetPermission(userMenus)

  return permissions
}
export function pathMapToMenu(userMenus: any[], currentPath: string): any {
  console.log(userMenus)
  console.log(currentPath)

  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}
export { firstMenu, firstRoute }
