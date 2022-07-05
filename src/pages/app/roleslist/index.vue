<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getRoles } from "../../../apis/api";

const router =useRouter()
const list =ref<any[]>([])
const res:any = await getRoles()
list.value = res.data.data

// 查看角色权限详情
const check = (roles:any)=>{
  router.push({name:'app-roleslist-roles',query:{id:roles.id,name:roles.roleName}})
}
</script>
<template>
  <ViewWrapper>
    <div class="page-content-wrapper">
      <div class="page-content is-relative">
        <PageHeader title="订单列表" />
          <PageNav one="权限管理" two="角色列表"/>
        <div class="datatable-toolbar">
          <div class="field has-addons is-disabled"></div>
          <div class="buttons">
            <RoleMdal />
          </div>
        </div>
        <div class="page-content-inner">
          <div class="columns">
            <div class="is-12 column doc-column">
              <div class="mt-4 mb-4">
                <div class="flex-table">
                  <div class="flex-table-header">
                    <span class="">序列号</span>
                    <span class="">角色名</span>
                    <span class="">描述</span>
                    <span class="cell-end">操作</span>
                  </div>
                  <div
                  v-for="(item,index) in list"
                  :key="index"
                    class="flex-table-item"
                  >
                    <div class="flex-table-cell is-relative">
                      <span class="light-text">{{index+1}}</span>
                    </div>
                    <div class="flex-table-cell is-relative">
                      <span class="light-text">{{ item.roleName }}</span>
                    </div>
                    <div class="flex-table-cell is-relative">
                      <span class="light-text"> {{item.roleDesc}} </span>
                    </div>
                    <div class="flex-table-cell is-relative cell-end">
                      <div class="buttons">
                        <button
                          type="button"
                          class="button button v-button is-danger"
                        >
                          <span> 删除 </span>
                        </button>
                        <button
                        @click="check(item)"
                          type="button"
                          class="button button v-button is-info"
                        >
                          <span> 查看权限 </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ViewWrapper>
</template>
