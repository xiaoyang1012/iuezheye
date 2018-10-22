<template>
  <div class="home">
    <el-row :gutter="20">
      <!-- 搜索、公告 -->
      <el-col :push="2" :pull="2" :span="20">
            <z-search></z-search>
            <el-alert
              title="牛大拿 4.3 更新，【设计导读】回归。并且新增 UI8，UpLabs 内容导读，目前功能测试中，欢迎提出你的反馈与建议，谢谢支持。"
              type="error"
              :closable='false'
              show-icon>
            </el-alert>
            <div style="height:20px;"></div>
      </el-col>
      <!-- 焦点图 -->
      <!-- <el-col :push="2" :pull="2" :span="20">
         <el-carousel :interval="5000"  type="card" height="300px" arrow="always">
            <el-carousel-item v-for="item in 4" :key="item">
              <img style="width:100%;height:100%;display:block" src="https://img.mukewang.com/5bcd30db0001057d18720632.jpg" alt="" srcset="">
            </el-carousel-item>
          </el-carousel>
      </el-col> -->
      <!-- 网址 -->
      <el-col class="web-card" :push="2" :pull="2" :span="20"  v-for="(cate,cindex) in cateList" :key="cindex">
        
         <el-card  shadow="hover">
          <div slot="header" class="clearfix">
            <span class="web-card-title">{{cate.title}}</span>
          </div>
          <el-row :gutter="20" v-if="cateList">
            <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="6" v-for="(list,index) in cate.list" :key="index">
              
              <a :href="list.link" target="_blank" class="web-card-item">
                <img class="web-card-item-thumb" :src="list.thumb" alt="" srcset="">      
                <div class="web-card-item-info">
                  <h5 class="web-card-item-info-title">{{list.title}}</h5>
                  <p class="web-card-item-info-desc">{{list.desc}}</p>
                </div>
                <i class="web-card-item-arrow el-icon-arrow-right"></i>
              </a>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
   
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Search from "@/components/Search.vue";
import { getList, getCate } from "@/api/zheye.ts";
@Component({
  components: {
    ZSearch: Search
  }
})
export default class Home extends Vue {
  cate: Array<any> = [];
  list: Array<any> = [];
  cateList: Array<any> = [];
  arr: Array<any> = [];
  async created() {
    let cate = await getCate();
    let list = await getList();
    this.cate = cate.data.data;
    this.list = list.data.data;
    if (this.cate.length && this.list.length) {
      this.getCateList();
    }
  }
  getCateList() {
    let arr: Array<any> = [];
    this.cateList = this.cate.map((cate, index) => {
      arr[index] = [];
      this.list.forEach(list => {
        if (list.cate_id == cate._id) {
          arr[index].push(list);
        }
      });
      this.$set(cate, "list", arr[index]);
      return cate;
    });
  }
}
</script>
<style lang="less">
.home {
}
.web-card {
  margin-bottom: 20px;
  .el-card__body {
    padding: 20px 20px 0px;
  }
  &-title {
    position: relative;
    display: inline-block;
    font-size: 14px;
    &:after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      height: 2px;
      bottom: -19px;
      background: #017efe;
    }
  }
  &-item {
    position: relative;
    padding: 15px 40px 15px 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    text-decoration: none;
    background: #f6f9ff;
    margin-bottom: 20px;
    transition: all 0.3s;
    &:hover {
      background: #d6e1f4;
    }
    &-thumb {
      width: 32px;
      height: 32px;
      border-radius: 4px;
      margin-right: 10px;
    }
    &-info {
      flex: 1;
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      &-title {
        padding: 0;
        margin: 0;
        font-size: 14px;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      &-desc {
        padding: 0;
        margin: 0;
        padding-top: 5px;
        font-size: 12px;
        color: #999;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    &-arrow {
      position: absolute;
      right: 15px;
      top: 50%;
      margin-top: -10px;
      color: #333;
    }
  }
}
</style>
