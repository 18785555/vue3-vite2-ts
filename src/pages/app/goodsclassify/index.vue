<script setup lang="ts">
import { ref } from "vue";
import { getCategories } from "../../../apis/goods";
const input_value = ref<string>('')

const firstList = ref<any[]>([]);
const secondList = ref<any[]>([]);
const thridList = ref<any[]>([]);
const current = ref(1);
const FMenuName = ref('')
const SMenuName = ref('')
const res: any = await getCategories(3, 1, 30);
firstList.value = res.data.data.result;

const SF = (id: number,name:string) => {
  let CF = null;
  FMenuName.value = name
  current.value = 2;
  CF = firstList.value.find((item) => item.cat_id === id);
  if (CF.children) secondList.value = [...CF.children];
};
const SS = (id: number,name:string) => {
  let CS = null;
  current.value = 3;
  SMenuName.value = name
  CS = secondList.value.find((item) => item.cat_id === id);
  if (CS.children) thridList.value = [...CS.children];
};

const deleteF =(id:number)=>{firstList.value.splice(firstList.value.findIndex((item)=>item.cat_id===id),1)}
const deleteS =(id:number)=>{secondList.value.splice(secondList.value.findIndex((item)=>item.cat_id===id),1)}
const deleteT =(id:number)=>{thridList.value.splice(thridList.value.findIndex((item)=>item.cat_id===id),1)}
</script>
<template>
  <ViewWrapper>
    <div class="page-content-wrapper">
      <div class="page-content is-relative">
        <PageHeader title="商品分类" />
          <PageNav one="商品管理" two="商品分类"/>
        <div class="datatable-toolbar">
          <nav
            role="navigation"
            class="breadcrumb has-bullet-separator"
            aria-label="breadcrumbs"
            itemtype="https://schema.org/BreadcrumbList"
          >
            <ul v-if="current!==1">
              <li
              @click="current=1"
              style="cursor: pointer;"
              >
              <small class="tag is-primary is-rounded is-elevated">{{FMenuName}}</small></li>
              <li 
              @click="current=2"
              v-if="current===3"
              style="cursor: pointer;"
              >
              <small class="tag is-primary is-rounded is-elevated">{{SMenuName}}</small></li>
            </ul>
          </nav>
        </div>
        <div class="page-content-inner">
          <div class="columns">
            <div class="is-12 column doc-column" v-if="current === 1">
              <div class="mt-4 mb-4">
                <div class="flex-table">
                  <div class="flex-table-header">
                    <span class="">分类名称</span>
                    <span class="">排序</span>
                    <span class="cell-end center">操作</span>
                  </div>
                  <div
                    v-for="(item, index) in firstList"
                    :key="item.cat_id"
                    class="flex-table-item"
                    style="margin-bottom: -1px; border-radius: 0px"
                  >
                    <div class="flex-table-cell is-relative">
                      <span class="light-text">{{ index + 1 }}、</span>
                      <span class="light-text">{{ item.cat_name }}</span>
                    </div>
                    <div class="flex-table-cell is-relative">
                      <span class="light-text">一级</span>
                    </div>
                    <div class="flex-table-cell is-relative cell-end">
                      <div class="buttons">
                        <button
                        @click="deleteF(item.cat_id)"
                          type="button"
                          aria-hidden="false"
                          class="button button v-button is-danger"
                        >
                          <span> 删除 </span>
                        </button>
                        <button
                          @click="SF(item.cat_id,item.cat_name)"
                          type="button"
                          aria-hidden="false"
                          class="button button v-button is-info"
                        >
                          <span> 查看 </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="is-12 column doc-column" v-if="current === 2">
              <div class="mt-4 mb-4">
                <div class="flex-table">
                  <div class="flex-table-header">
                    <span class="">分类名称</span>
                    <span class="">排序</span>
                    <span class="cell-end">操作</span>
                  </div>
                  <div
                    v-for="item in secondList"
                    :key="item.cat_id"
                    class="flex-table-item"
                    style="margin-bottom: -1px; border-radius: 0px"
                  >
                    <div class="flex-table-cell is-relative">
                      <span class="light-text">{{ item.cat_name }}</span>
                    </div>
                    <div class="flex-table-cell is-relative">
                      <span class="light-text">二级</span>
                    </div>
                    <div class="flex-table-cell is-relative cell-end">
                      <div class="buttons">
                        <button
                        @click="deleteS(item.cat_id)"
                          type="button"
                          aria-hidden="false"
                          class="button button v-button is-danger"
                        >
                          <span> 删除 </span>
                        </button>
                        <button
                          @click="SS(item.cat_id,item.cat_name)"
                          type="button"
                          aria-hidden="false"
                          class="button button v-button is-info"
                        >
                          <span> 查看 </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="is-12 column doc-column" v-if="current === 3">
              <div class="mt-4 mb-4">
                <div class="flex-table">
                  <div class="flex-table-header">
                    <span class="">分类名称</span>
                    <span class="">排序</span>
                    <span class="cell-end">操作</span>
                  </div>
                  <div
                    v-for="item in thridList"
                    :key="item.cat_id"
                    class="flex-table-item"
                    style="margin-bottom: -1px; border-radius: 0px"
                  >
                    <div class="flex-table-cell is-relative">
                      <span class="light-text">{{ item.cat_name }}</span>
                    </div>
                    <div class="flex-table-cell is-relative">
                      <span class="light-text">三级</span>
                    </div>
                    <div class="flex-table-cell is-relative cell-end">
                      <div class="buttons">
                        <button
                          @click="deleteT(item.cat_id)"
                          type="button"
                          aria-hidden="false"
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
<style>

.na{
  cursor: pointer;
}
</style>