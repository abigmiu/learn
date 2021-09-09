<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isCollapse ? '60px' : '210px'">
        <nav-menu></nav-menu>
      </el-aside>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import NavMenu from '@/components/nav-menu/index'

export default defineComponent({
  components: {
    NavMenu
  },
  setup() {
    const isCollapse = ref(false)
    return {
      isCollapse
    }
  }
})
</script>

<style scoped></style>
