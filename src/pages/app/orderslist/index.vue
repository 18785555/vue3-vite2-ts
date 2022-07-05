<script setup lang="ts">
import { ref } from "vue";
import { getOrders } from "../../../apis/goods";
const list = ref<any[]>([])
const totalItem = ref<number>(0)
const currentPage=ref<number>(0)

const res:any = await getOrders(1,10)
console.log(res);
list.value = res.data.data.goods
totalItem.value = Number(res.data.data.total);
currentPage.value = Number(res.data.data.pagenum);

type DATA = {
  id: number;
  is_send: string;
  order_pay: string;
  order_price: number;
  order_number: string;
  pay_status: string;
};
const data = ref<DATA>({
  id: 0,
  is_send: "",
  order_pay: "",
  order_price: 0,
  order_number: "",
  pay_status: "",
});
// 更新页
const updataPage = async (val:number)=>{
  const res:any = await getOrders(val,10)
  list.value = res.data.data.goods
  currentPage.value = Number(res.data.data.pagenum);
  console.log(res);
  
}
// 将时间撮转换为时间格式
const format_date = function (timestamp: number) {
  let datetime = new Date(timestamp).toLocaleString();
  return datetime;
};

</script>
<template>
  <ViewWrapper>
    <div class="page-content-wrapper">
      <div class="page-content is-relative">
        <PageHeader title="订单列表" />
          <PageNav one="订单管理" two="订单列表"/>

        <div class="datatable-toolbar">
          <div class="field has-addons is-disabled"></div>
          <div class="buttons">
            <UserModal />
          </div>
        </div>
        <div class="page-content-inner">
          <div class="columns">
            <div class="is-12 column doc-column">
              <div class="mt-4 mb-4">
                <div class="flex-table">
                  <div class="flex-table-header">
                    <span class="is-grow">订单编号</span>
                    <span class="">订单价格</span>
                    <span class="">是否付款</span>
                    <span class="">是否发货</span>
                    <span class="">下单时间</span>
                    <span class="cell-end">操作</span>
                  </div>
                  <div
                  v-for="(item,index) in list"
                  :key="item.order_id"
                    class="flex-table-item"
                  >
                    <div class="flex-table-cell is-relative is-grow">
                      <span class="light-text">{{ (currentPage-1)*10+ index + 1 }}、</span>
                      <span class="light-text">{{ item.order_number }}</span>
                    </div>
                    <div class="flex-table-cell is-relative">
                      <span class="light-text">{{ item.order_price }}</span>
                    </div>
                    <div class="flex-table-cell is-relative">
                      <span v-if="item.pay_status==='0'" class="light-text">未付款</span>
                      <span v-else class="light-text">已付款</span>
                    </div>
                    <div class="flex-table-cell is-relative">
                      <span class="light-text">{{ item.is_send }}</span>
                    </div>
                    <div class="flex-table-cell is-relative">
                      <span class="light-text">{{ format_date(item.create_time) }}</span>
                    </div>
                    <div class="flex-table-cell is-relative cell-end">
                      <OrderModal 
                      :id="item.order_id" 
                      :is_send="item.is_send" 
                      :order_pay="item.order_pay" 
                      :order_price="item.order_price" 
                      :order_number="item.order_number" 
                      :pay_status="item.pay_status"
                      @handle="updataPage"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Paginations 
          :totalItem="totalItem" 
          :pageCount="10" 
          :currentPage="currentPage"
          @handle-change="updataPage"
          />
        </div>
      </div>
    </div>
  </ViewWrapper>
</template>
