<script setup lang="ts">
import { ref, watch } from "vue";
import { updataOrder } from "../../apis/goods";

const modalOpen = ref<boolean>(false);

type DATA = {
  id: number;
  is_send: string;
  order_pay: string;
  order_price: number;
  order_number: string;
  pay_status: string;
};
const e = defineEmits(['handle'])
const props = withDefaults(defineProps<DATA>(),{})
const data = ref<DATA>({
  id: 0,
  is_send: "",
  order_pay: "",
  order_price: 0,
  order_number: "",
  pay_status: "",
});

// 更新订单状态
const updata = async () => {
 const res:any = await updataOrder(data.value);
 if(res.status===200){
     e('handle')
 }
 
};

watch(
    ()=>modalOpen.value,
    (current,prevent)=>{
        if(current){
            data.value.id = props.id,
            data.value.is_send = props.is_send,
            data.value.order_pay = props.order_pay,
            data.value.order_price = props.order_price,
            data.value.order_number = props.order_number,
            data.value.pay_status = props.pay_status
        }
    }
)
</script>
<template>
  <button @click="modalOpen = true" type="button" class="button v-button">
    <span class="icon"
      ><svg
        aria-hidden="true"
        role="img"
        class="iconify iconify--feather"
        width="1em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
        data-icon="feather:edit-2"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5L2 22l1.5-5.5L17 3z"
        ></path></svg></span
    ><span> 修改 </span>
  </button>
  <Modal
    title="修改订单状态"
    :open="modalOpen"
    size="small"
    @close="modalOpen = false"
  >
    <template #content>
        <!-- 订单是否发货 -->
      <div class="demo-title">
        <div class="content">
          <p>订单是否发货</p>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <div class="select is-rounded">
            <select 
            class="is-rounded" 
            v-model="data.is_send" 
            style="padding-right: 20.5em">
              <option value="">是否发货</option>
              <option value="是">已发货</option>
              <option value="否">未发货</option>
            </select>
          </div>
        </div>
      </div>
      <!-- 订单支付 -->
      <div class="demo-title" data-v-2ec51d24="">
        <div class="content" data-v-2ec51d24="">
          <p>订单支付</p>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <div class="select is-rounded">
            <select 
            v-model="data.order_pay"
            class="is-rounded" 
            style="padding-right: 20.5em">
              <option value="">支付方式</option>
              <option value="0">未支付</option>
              <option value="1">支付宝</option>
              <option value="2">微信</option>
              <option value="3">银行卡</option>
            </select>
          </div>
        </div>
      </div>
      <!-- 支付状态 -->
      <div class="demo-title">
        <div class="content">
          <p>支付状态</p>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <div class="select is-rounded">
            <select
            v-model="data.pay_status"
            class="is-rounded" 
            style="padding-right: 20.5em">
              <option value="">订单状态</option>
              <option value="0">未付款</option>
              <option value="1">已付款</option>
            </select>
          </div>
        </div>
      </div>
      <!-- 订单价格 -->
      <div class="demo-title" data-v-2ec51d24="">
        <div class="content" data-v-2ec51d24="">
          <p>订单价格</p>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input 
          v-model="data.order_price"
          class="input is-rounded" 
          type="number" 
          placeholder="订单价格" />
        </div>
      </div>
      <!-- 订单编号 -->
       <div class="demo-title">
        <div class="content">
          <p>订单编号</p>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input 
          v-model="data.order_number"
          class="input is-rounded" 
          type="text"
           placeholder="订单编号" />
        </div>
      </div>
      
    </template>
    <template #action>
      <a @click="updata" class="button h-button is-primary is-raised">Primary</a>
    </template>
  </Modal>
</template>
