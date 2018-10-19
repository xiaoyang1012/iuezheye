<template>
    <div class="z-aside" :style="{height:iHeight+'px'}">
        <div class="logo">IUE设计前端折页</div>
        <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :unique-opened="true"
        background-color="#30333C"
        text-color="#687386"
        active-text-color="#fff">
        <el-menu-item index="99">
            <i class="el-icon-menu"></i>
            <span>首页</span>
        </el-menu-item>
        <el-menu-item class="z-submenu" :index="index" v-for="(item,index) in cate" :key="index">
            <i class="el-icon-"></i><span>{{item.title}}</span>
        </el-menu-item>
        <el-menu-item index="98">
            <i class="el-icon-document"></i>
            <span slot="title">文章导读</span>
        </el-menu-item>
        <el-menu-item index="97">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">留言板</span>
        </el-menu-item>
        <el-menu-item index="96">
            <i class="el-icon-info"></i>
            <span slot="title">关于IUE</span>
        </el-menu-item>
        </el-menu>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import axios from "axios";
@Component
export default class Aside extends Vue {
  iHeight: number = 0;
  cate: Array<any> = [];
  async created() {
    let { data } = await axios.get("/api/zheye/cate");
    this.cate = data.data;
  }
  mounted() {
    if (document.documentElement) {
      this.iHeight = document.documentElement.clientHeight;
    }
  }
  handleOpen(key: String, keyPath: String) {}
  handleClose(key: String, keyPath: String) {}
}
</script>


<style lang="less">
.z-aside {
  width: 200px;
  background: #30333c;
  .logo {
    height: 60px;
    line-height: 60px;
    text-align: center;
    background: #30333c;
    font-size: 16px;
    color: #fff;
  }
  .el-menu {
    border-right: 1px solid #30333c;
  }
  .el-submenu__title,
  .el-menu-item {
    font-size: 12px;
    color: #6b7386;
  }
  .z-submenu.el-menu-item {
    height: 32px;
    line-height: 32px;
  }
}
</style>
