<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@/store/index'
export default defineComponent({
  setup() {
    const store = useStore()
    const accountLoginAction = () => {
      store.dispatch('login/accountLoginAction', {
        name: 'coderwhy',
        password: '123456'
      })
    }

    return {
      accountLoginAction
    }
  }
})
</script>

<style scoped></style>
