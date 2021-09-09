<template>
  <div class="nav-menu">
    <el-menus
      :default-active="currentItemId"
      class="el-menu-vertical"
      background-color="#0c2135"
      text-color="#b7bdc3"
    >
      <template v-for="item in menus" :key="item.id">
        <!-- 判断二级菜单 -->
        <template v-if="item.children && item.children.length">
          <el-submenu :index="item.id + ''">
            <template #title>
              <i :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                :index="subitem.id + ''"
                @click="handleItemClick(subitem)"
              >
                <i v-if="subitem.icon" :class="subitem.icon"></i>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.id + ''" @click="handleItemClick(item)">
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menus>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from '@/store'
import { pathMapToMenu } from '@/utils/map-menus'
import { useRoute, useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    const store = useStore()
    const menus = store.state.login.userMenus
    console.log(menus)

    const router = useRouter()
    const route = useRoute()

    const menu = pathMapToMenu(menus, route.path)
    const currentItemId = ref<string>(menu.id + '')
    const handleItemClick = (item: any) => {
      currentItemId.value = item.id + ''
      router.push({
        path: item.url ?? '/not-found'
      })
    }
    console.log(menus)

    return {
      menus,
      handleItemClick
    }
  }
})
</script>

<style scoped></style>
example
