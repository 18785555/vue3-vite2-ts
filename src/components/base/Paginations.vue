<script setup lang="ts">
import { ref, watchEffect } from "vue";

export interface Props {
  totalItem: number;
  pageCount: number;
  currentPage: number;
}

const total = ref<number>(1);
const currentPage = ref<number>(1);
const props = withDefaults(defineProps<Props>(), {
  totalItem: undefined,
  pageCount: undefined,
  currentPage: 1,
});

// 初始化
watchEffect(() => {
  currentPage.value = props.currentPage;
  if (props.totalItem % props.pageCount === 0) {
    total.value = props.totalItem / props.pageCount;
    return;
  }
  if (props.totalItem % props.pageCount > 0) {
    total.value = Math.floor(props.totalItem / props.pageCount) + 1;
    return;
  }
});

// 更新当前页 并更新页面
const emit = defineEmits(["handleChange"]);
const next = () => {
  if (currentPage.value<total.value) {
    currentPage.value++;
    emit("handleChange", currentPage.value);
  }
};

const prev = () => {
  if (currentPage.value>1) {
    currentPage.value--;
    emit("handleChange", currentPage.value);
  }
};

const tolast = ()=>{
    if (currentPage.value>1) {
    currentPage.value=total.value
    emit("handleChange", currentPage.value);
  }
}
</script>
<template>
  <div
    id="paging-first-datatable"
    class="pagination datatable-pagination pagination-datatables text-center"
  >
    <div class="datatable-info">
      <!-- <span>Showing 1 to 10 of 16 items.</span> -->
    </div>
    <ul class="pagination">
      <li  @click="prev" class="">
        <a><i class="fas fa-angle-left"></i></a>
      </li>
      <li v-if="total !== currentPage" class="active">
        <a>{{ currentPage }}</a>
      </li>
      <li @click="tolast" :class="[total === currentPage && 'active']">
        <a>{{ total }}</a>
      </li>
      <li @click="next">
        <a ><i class="fas fa-angle-right"></i></a>
      </li>
    </ul>
  </div>
</template>
