<template>
  <div class="login-accout">
    <el-form>
      <el-form-item label="账户" required>
        <el-input v-model="accout.accout" />
      </el-form-item>
      <el-form-item label="密码" required>
        <el-input v-model="accout.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { ElForm, ElFormItem, ElInput } from 'element-plus'

export default defineComponent({
  components: {
    ElForm,
    ElFormItem,
    ElInput
  },
  setup() {
    const accout = reactive({
      accout: '',
      password: ''
    })
    return {
      accout
    }
  }
})
</script>
