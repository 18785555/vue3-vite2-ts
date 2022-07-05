<script setup lang="ts">
import { ref } from "vue";
import { getCategories } from "../../../apis/goods";
import { useCommonStore } from "../../../pinia/store";
const store = useCommonStore()
</script>
<template>
  <ViewWrapper>
    <div class="page-content-wrapper">
      <div class="page-content is-relative">
        <PageHeader />
        <div class="page-content-inner">
          <PageNav one="商品管理" two="分类参数" />
          <div class="columns">
            <div class="column is-12">
              <div class="flex-table-wrapper mt-4">
                  oops.................
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ViewWrapper>
</template>
<style></style>
