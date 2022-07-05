<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getPermissionlist } from "../../apis/api";
import { useCommonStore } from "../../pinia/store";
import Profile from "../../components/base/Profile.vue";
const store = useCommonStore()
const router = useRouter();
const currentItem = ref<string>("");
const open = ref();
const list = ref();
const res: any = await getPermissionlist();
list.value = res.data.data;

const switchMenu = (val: string) => {
  switch (val) {
    case "商品列表":
      router.push({ name: "app-goodslist" });
      break;
    case "分类参数":
      router.push({ name: "app-classification" });
      break;
    case "商品分类":
      router.push({ name: "app-goodsclassify" });
      break;
    case "订单列表":
      router.push({ name: "app-orderslist" });
      break;
    case "角色列表":
      router.push({ name: "app-roleslist" });
      break;
    case "权限列表":
      router.push({ name: "app-permissionlist" });
      break;
    case "用户列表":
      router.push({ name: "app-userlist" });
      break;
    case "数据报表":
      router.push({ name: "app-data" });
      break;
  }
};
</script>
<template>
  <div 
  class="sidebar-block is-bordered" 
  :class="[store.siderbarOpen&&'is-active']">
    <div class="sidebar-block-header">
      <a class="sidebar-block-logo" href="/">
        <img class="light-image" src="" alt="" />
        <img class="dark-image" src="" alt="" />
      </a>
      <h3>后台管理系统</h3>
    </div>
    <div class="sidebar-block-inner" data-simplebar="init">
      <div class="simplebar-wrapper" style="margin: 0px">
        <div class="simplebar-height-auto-observer-wrapper">
          <div class="simplebar-height-auto-observer"></div>
        </div>
        <div class="simplebar-mask">
          <div class="simplebar-offset" style="right: 0px; bottom: 0px">
            <div
              class="simplebar-content-wrapper"
              style="height: 100%; overflow: hidden"
            >
              <div class="simplebar-content" style="padding: 0px">
                <ul>
                  <li
                    v-for="item in list"
                    :key="item.id"
                    @click="currentItem = item.authName"
                    :class="[item.authName === currentItem && 'active']"
                    class="has-children"
                  >
                    <div class="collapse-wrap">
                      <a href="javascript:void(0);" class="parent-link">
                        <div v-if="item.authName === '权限管理'" class="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-briefcase"
                          >
                            <rect
                              x="2"
                              y="7"
                              width="20"
                              height="14"
                              rx="2"
                              ry="2"
                            ></rect>
                            <path
                              d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
                            ></path>
                          </svg>
                        </div>
                        <span v-if="item.authName === '商品管理'" class="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-grid"
                          >
                            <rect x="3" y="3" width="7" height="7"></rect>
                            <rect x="14" y="3" width="7" height="7"></rect>
                            <rect x="14" y="14" width="7" height="7"></rect>
                            <rect x="3" y="14" width="7" height="7"></rect>
                          </svg>
                        </span>
                        <span v-if="item.authName === '用户管理'" class="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-users"
                          >
                            <path
                              d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                            ></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                          </svg>
                        </span>
                        <span v-if="item.authName === '订单管理'" class="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-grid"
                          >
                            <rect x="3" y="3" width="7" height="7"></rect>
                            <rect x="14" y="3" width="7" height="7"></rect>
                            <rect x="14" y="14" width="7" height="7"></rect>
                            <rect x="3" y="14" width="7" height="7"></rect>
                          </svg>
                        </span>
                        <span v-if="item.authName === '数据统计'" class="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-book"
                          >
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                            <path
                              d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
                            ></path>
                          </svg>
                        </span>
                        {{ item.authName }}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-chevron-right"
                        >
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </a>
                    </div>
                    <ul
                      v-show="item.authName === currentItem"
                      style="display: block"
                    >
                      <li
                        v-for="it in item.children"
                        :key="it.id"
                        @click="switchMenu(it.authName)"
                        class=""
                      >
                        <a class="is-submenu">
                          <i class="lnil lnil-analytics-alt-1"></i>
                          <span >{{ it.authName }}</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          class="simplebar-placeholder"
          style="width: auto; height: 432px"
        ></div>
      </div>
      <div
        class="simplebar-track simplebar-horizontal"
        style="visibility: hidden"
      >
        <div
          class="simplebar-scrollbar"
          style="width: 0px; display: none"
        ></div>
      </div>
      <div
        class="simplebar-track simplebar-vertical"
        style="visibility: hidden"
      >
        <div
          class="simplebar-scrollbar"
          style="height: 0px; display: none"
        ></div>
      </div>
    </div>
    <div class="sidebar-block-footer">
      <Profile/>
    </div>
  </div>
</template>
