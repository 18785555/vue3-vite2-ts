<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { ref, watch } from "vue";
import { getGoodsList } from "../../../apis/goods";
import PageNav from "../../../components/base/PageNav.vue";

const input_value = ref<string>('')
const goodsList = ref<any[]>([]);
const totalItem = ref<number>(0)
const currentPage=ref<number>(0)
// 初始化请求数据
const res: any = await getGoodsList(1, 20);

goodsList.value = res.data.data.goods;
totalItem.value = Number(res.data.data.total);
currentPage.value = Number(res.data.data.pagenum);

// 更新数据
const updataPage = async (val:number)=>{
  const res:any = await getGoodsList(val,20)
  goodsList.value = res.data.data.goods
  totalItem.value = Number(res.data.data.total);
  currentPage.value = Number(res.data.data.pagenum);
}

// 将时间撮转换为时间格式
const format_date = function (timestamp: number) {
  let datetime = new Date(timestamp).toLocaleString();
  return datetime;
};

watch(
  ()=>input_value.value,
  async (current)=>{
    if(current!==''){
     const res:any = await getGoodsList(1,20,current)
     goodsList.value = res.data.data.goods
    }
  }
)
</script>
<template>
  <ViewWrapper>
    <div class="page-content-wrapper">
      <div class="page-content is-relative">
        <PageHeader title="商品列表" />
          <PageNav one="商品管理" two="商品列表"/>
        <div class="datatable-toolbar">
          <div class="field">
            <div class="control has-icon">
              <input
              v-model="input_value"
                class="input is-rounded"
                type="text"
                placeholder="商品搜索..."
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
                    <span style="width:10%" class="is-grow">商品名称</span>
                    <span style="width:10%" class="cell-end">商品价格</span>
                    <span style="width:10%" class="cell-end">商品重量</span>
                    <span style="width:10%" class=" cell-end">更新时间</span>
                  </div>
                  <div
                    v-for="(item, index) in goodsList" 
                    :key="item.id"
                    class="flex-table-item"
                     style="margin-bottom:-1px;border-radius:0px;"
                  >
                    <div class="flex-table-cell is-relative is-grow">
                      <span class="light-text">{{ (currentPage-1)*20+ index + 1  }}.</span>
                      <span 
                      class="light-text"
                      style="height:3rem;overflow: hidden;"
                      >{{ item.goods_name}}</span>
                    </div>
                    <div class="flex-table-cell is-relative cell-end">
                      <span class="light-text">{{ item.goods_price }}</span>
                    </div>
                    <div class="flex-table-cell is-relative cell-end">
                      <span class="light-text">{{  item.goods_weight }}</span>
                    </div>
                    <div class="flex-table-cell is-relative cell-end">
                      <span class="light-text">{{ format_date(item.upd_time) }}</span>
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
                    <span style="width:10%" class="is-grow">商品名称</span>
                    <span style="width:10%" class="cell-end">商品价格</span>
                    <span style="width:10%" class="cell-end">商品重量</span>
                    <span style="width:10%" class=" cell-end">更新时间</span>
                  </div>
                  <div
                    v-for="(item, index) in goodsList" 
                    :key="item.id"
                    class="flex-table-item"
                     style="margin-bottom:-1px;border-radius:0px;"
                  >
                    <div class="flex-table-cell is-relative is-grow">
                      <span class="light-text">{{ (currentPage-1)*20+ index + 1  }}.</span>
                      <span 
                      class="light-text"
                      style="height:3rem;overflow: hidden;"
                      >{{ item.goods_name}}</span>
                    </div>
                    <div class="flex-table-cell is-relative cell-end">
                      <span class="light-text">{{ item.goods_price }}</span>
                    </div>
                    <div class="flex-table-cell is-relative cell-end">
                      <span class="light-text">{{  item.goods_weight }}</span>
                    </div>
                    <div class="flex-table-cell is-relative cell-end">
                      <span class="light-text">{{ format_date(item.upd_time) }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Paginations 
          :totalItem="totalItem" 
          :pageCount="20" 
          :currentPage="currentPage"
          @handle-change="updataPage"
          />
        </div>
      </div>
    </div>
  </ViewWrapper>
</template>
