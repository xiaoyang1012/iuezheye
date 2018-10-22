<template>
    <div class="top-search">
        <el-input placeholder="请输入内容" v-model="search" class="input-with-select">
            <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="餐厅名" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Search extends Vue {
  public search: string = "";
  public select: string = "";
}
</script>

<style lang="less">
.top-search {
  background: #fff;
  padding: 20px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  overflow: hidden;
  .el-select .el-input {
    width: 130px;
  }
}
</style>
