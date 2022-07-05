<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getRoles } from "../../../apis/api";

const route = useRoute()
const router = useRouter()
const currentRole = ref<string>('')
const roles = ref<any[]>([])
const res:any = await getRoles()

onMounted(()=>{
let arr = res.data.data
let id = Number(route.query.id)
currentRole.value = route.query.name as string
roles.value = arr.find((item:any)=>item.id===id).children
roles.value.forEach((item)=>{
    if(item.children){
        roles.value.push(...item.children)
    }
})
})
</script>
<template>
  <ViewWrapper>
    <div class="page-content-wrapper">
      <div class="page-content is-relative">
        <PageHeader title="订单列表" />
          <PageNav one="权限管理" two="角色列表" three="权限列表"/>
        <div class="datatable-toolbar">
          <div class="field has-addons is-disabled"></div>
          <div class="buttons">
            <nav
            role="navigation"
            class="breadcrumb has-bullet-separator"
            aria-label="breadcrumbs"
            itemtype="https://schema.org/BreadcrumbList"
          >
            <ul >
              <li
              @click="router.back()"
              style="cursor: pointer;"
              >
              <small class="tag is-primary is-rounded is-elevated">{{currentRole}}</small></li>
            </ul>
          </nav>
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
                  v-for="(item,index) in roles"
                  :key="index"
                    class="flex-table-item"
                  >
                    <div class="flex-table-cell is-relative">
                      <span class="light-text">{{index+1}}</span>
                    </div>
                    <div class="flex-table-cell is-relative">
                      <span class="light-text">{{ item.authName }}</span>
                    </div>
                    <div class="flex-table-cell is-relative">
                      <span class="light-text"> {{item.path}} </span>
                    </div>
                    <div class="flex-table-cell is-relative cell-end">
                      <div class="buttons">
                        <button
                          type="button"
                          class="button button v-button is-danger"
                        >
                          <span> 删除 </span>
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
