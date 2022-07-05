<script setup lang="ts">
import { ref } from "vue";
import { getUserList, upDataUserState, deleteUsers } from "../../../apis/api";
import DropDown from "../../../components/dropdown/Dropdown.vue";
const users = ref();

// 请求用户列表
const getUsers = async () => {
  const res: any = await getUserList(1, 10);
  users.value = res.data.data.users;
  console.log(users.value);
  
};

// 修改用户状态
const updata = async (e: any, item: any) => {
  await upDataUserState(Number(item.id), e.target.checked);
};

// 删除用户
const deleteUser = async (id: number) => {
  const res: any = await deleteUsers(id);
  if (res.status === 200) getUsers();
};

// 初始化请求用户列表
getUsers();
</script>
<template>
  <ViewWrapper>
    <div class="page-content-wrapper">
      <div class="page-content is-relative">
        <PageHeader title="用户管理" />
          <PageNav one="用户管理" two="用户列表"/>
        <div class="datatable-toolbar">
          <div class="field has-addons is-disabled"></div>
          <div class="buttons">
            <UserModal @get-user-list="getUsers" />
          </div>
        </div>
        <div class="page-content-inner">
          <div class="columns">
            <div class="is-12 column doc-column">
              <div class="mt-4 mb-4">
                <div class="flex-table">
                  <div class="flex-table-header">
                    <span class="">姓名</span>
                    <span class="">角色</span>
                    <span class="">手机</span>
                    <span class="">邮箱</span>
                    <span class="">状态</span>
                    <span class="">操作</span>
                  </div>
                  <div
                    v-for="item in users"
                    :key="item.id"
                    class="flex-table-item"
                  >
                    <div class="flex-table-cell is-relative">
                      <span class="light-text">{{ item.username }}</span>
                    </div>
                    <div class="flex-table-cell is-relative">
                      <span class="light-text">{{ item.role_name }}</span>
                    </div>
                    <div class="flex-table-cell is-relative">
                      <span class="light-text">{{ item.mobile }}</span>
                    </div>
                    <div class="flex-table-cell is-relative">
                      <span class="light-text">{{ item.email }}</span>
                    </div>
                    <div class="flex-table-cell is-relative">
                      <div class="control subcontrol">
                        <div class="" checked="">
                          <label class="form-switch is-info"
                            ><input
                              class="is-switch"
                              type="checkbox"
                              @change="updata($event, item)"
                              v-model="item.mg_state" /><i
                              aria-hidden="true"
                            ></i
                          ></label>
                        </div>
                      </div>
                    </div>
                    <div class="flex-table-cell is-relative">
                      <DropDown @delete="deleteUser(item.id)" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="paging-first-datatable"
            class="pagination datatable-pagination pagination-datatables text-center"
          >
            <div class="datatable-info">
              <span>Showing 1 to 10 of 16 items.</span>
            </div>
            <ul class="pagination">
              <li class="active">
                <a data-page="prev"><i class="fas fa-angle-left"></i></a>
              </li>
              <li class="active"><a data-page="1">1</a></li>
              <li><a data-page="2">2</a></li>
              <li>
                <a data-page="next"><i class="fas fa-angle-right"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </ViewWrapper>
</template>
