<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { ref } from "vue";
import { getPermissionlist } from "../../../apis/api";

const input_value = ref<string>('')
const list = ref<any[]>([]);
const res: any = await getPermissionlist("list", 1, 10);
list.value = res.data.data;
list.value = list.value;

// 过滤搜索数组
const filterList = computed(()=>
  (list.value.filter((item:any)=>
  (item.authName.indexOf(input_value.value)>=0))))
</script>
<template>
  <ViewWrapper>
    <div class="page-content-wrapper">
      <div class="page-content is-relative">
        <PageHeader title="权限列表" />
        <div class="datatable-toolbar">
          <div class="field">
            <div class="control has-icon">
              <input
              v-model="input_value"
                class="input is-rounded"
                type="text"
                placeholder="权限搜索..."
              /><label class="label form-icon"
                ><svg
                  role="img"
                  class="iconify iconify--feather"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                  data-icon="feather:search"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21l-4.35-4.35"></path>
                  </g></svg></label>
            </div>
          </div>
        </div>
        <div v-if="input_value!==''" class="page-content-inner">
          <div class="columns">
            <div class="is-12 column doc-column">
              <div class="mt-4 mb-4">
                <div class="flex-table">
                  <div class="flex-table-header">
                    <span class="">序列号</span>
                    <span class="">角色名</span>
                    <span class="">路径</span>
                    <span class="">权限等级</span>
                  </div>
                  <div
                    v-for="(item, index) in filterList"
                    :key="index"
                    class="flex-table-item"
                    style="margin-bottom: -1px; border-radius: 0px"
                  >
                    <div class="flex-table-cell is-relative">
                      <span class="light-text">{{ index + 1 }}</span>
                    </div>
                    <div class="flex-table-cell is-relative">
                      <span class="light-text">{{ item.authName }}</span>
                    </div>
                    <div class="flex-table-cell is-relative">
                      <span class="light-text"> {{ item.path }} </span>
                    </div>
                    <div class="flex-table-cell is-relative">
                      <span v-if="item.level === '0'" class="light-text"
                        >一级</span
                      >
                      <span v-if="item.level === '1'" class="light-text"
                        >二级</span
                      >
                      <span v-if="item.level === '2'" class="light-text"
                        >三级</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="page-content-inner">
          <div class="columns">
            <div class="is-12 column doc-column">
              <div class="mt-4 mb-4">
                <div class="flex-table">
                  <div class="flex-table-header">
                    <span class="">序列号</span>
                    <span class="">角色名</span>
                    <span class="">路径</span>
                    <span class="">权限等级</span>
                  </div>
                  <div
                    v-for="(item, index) in list"
                    :key="index"
                    class="flex-table-item"
                    style="margin-bottom: -1px; border-radius: 0px"
                  >
                    <div class="flex-table-cell is-relative">
                      <span class="light-text">{{ index + 1 }}</span>
                    </div>
                    <div class="flex-table-cell is-relative">
                      <span class="light-text">{{ item.authName }}</span>
                    </div>
                    <div class="flex-table-cell is-relative">
                      <span class="light-text"> {{ item.path }} </span>
                    </div>
                    <div class="flex-table-cell is-relative">
                      <span v-if="item.level === '0'" class="light-text"
                        >一级</span
                      >
                      <span v-if="item.level === '1'" class="light-text"
                        >二级</span
                      >
                      <span v-if="item.level === '2'" class="light-text"
                        >三级</span
                      >
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
