<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
        <z-aside></z-aside>
      </el-aside>
      <el-main>
         <router-view/>
      </el-main>
    </el-container>
    
   
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Aside from "@/components/Aside.vue";
@Component({
  components: {
    "z-aside": Aside
  }
})
export default class App extends Vue {}
</script>

<style>
</style>
