<template>
  <div class="table">
    <!-- // 表头 -->
    <div class="header">
      <slot name="title">{{ title }}</slot>
      <div class="handler">
        <slot name="headerHandler"></slot>
      </div>
    </div>
    <el-table
      :data="listData"
      border
      @selection-change="selectionChange"
      v-bind="childrenProps"
    >
      <el-table-cloumn
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="60"
      >
      </el-table-cloumn>
      <template v-for="item in propList" :key="item.prop">
        <el-table-column v-bind="item" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
      <slot></slot>
    </el-table>

    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurretChange"
          :current-page="page.currentPage"
          :page-size="page.pageSize"
        >

        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script></script>

<style></style>
