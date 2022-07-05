<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { ref } from "vue";
import { addUserList,getUserList } from '../../apis/api'
const modalOpen = ref<boolean>(false);

type User = {
    username:string,
    password:string,
    email:string,
    mobile:string
}
const user = ref<User>({
    username:'',
    password:'',
    email:'',
    mobile:''
})

const emit = defineEmits(['getUserList'])
// 校验必填信息是否完整
const verify = computed(()=>user.value.username!==''&&user.value.password!=='')

const create = async()=>{
    if(verify.value){
        const res:any = await addUserList(user.value)
        if(res.status===200){
            console.log("创建成功");
            modalOpen.value = false
            emit('getUserList')
        }
    }else{
        alert("请输入完整信息")
    }
   
}
</script>
<template>
  <button
    @click="modalOpen = true"
    class="button h-button is-primary is-elevated"
  >
    <span class="icon">
      <i aria-hidden="true" class="fas fa-plus"></i>
    </span>
    <span>Add User</span>
  </button>
  <Modal
    title="添加用户"
    :open="modalOpen"
    size="small"
    @close="modalOpen = false"
  >
    <template #content>
      <form class="modal-form">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label" for="v-field-8">用户名称</label>
          </div>
          <div class="field-body">
            <div class="control is-expanded" >
              <input 
              v-model="user.username"
              type="text" 
              class="input" 
              placeholder="Username"/>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label" for="v-field-9">用户密码</label>
          </div>
          <div class="field-body">
            <div class="control is-expanded" data-v-1d995955="">
              <input 
              v-model="user.password"
              type="text" 
              class="input" 
              placeholder="password"/>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label" for="v-field-10">邮箱</label>
          </div>
          <div class="field-body">
            <div class="control is-expanded" data-v-1d995955="">
              <input 
              v-model="user.email"
              type="text" 
              class="input" 
              placeholder="email"/>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label" for="v-field-10">手机号</label>
          </div>
          <div class="field-body">
            <div class="control is-expanded" data-v-1d995955="">
              <input 
              v-model="user.mobile"
              type="text" 
              class="input" 
              placeholder="phone"/>
            </div>
          </div>
        </div>
      </form>
    </template>
    <template #action>
        <a @click="create" class="button h-button is-primary is-raised">Primary</a>
    </template>
  </Modal>
</template>

