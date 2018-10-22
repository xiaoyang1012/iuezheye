import Vue from "vue";
import axios from "axios";

export async function getCate() {
  return axios.get("/api/zheye/cate");
}
export async function getList() {
  return axios.get("/api/zheye/list");
}
