<script setup lang="ts">
import { ref,computed } from "vue";
import { useRouter } from "vue-router";
import { login } from "../apis/api";
import { useCommonStore } from "../pinia/store";

const router = useRouter()
const commonStore = useCommonStore();

type User ={
    username:string,
    password:string
}
const userForm = ref<User>({
    username:'admin',
    password:'123456'
})

// 验证用户是否输入完整信息
const verify = computed(()=>userForm.value.username!==''&&userForm.value.password!=='')

// 登录
const signin = async ()=>{
    if(!verify.value){
        console.log("请输入完整信息！")
        return
    }else{
        const res:any = await login(userForm.value)
        if(res.status===200){
            window.localStorage.setItem("token",res.data.data.token)
            router.replace({name:'app-goodslist'})
        }else{
            console.log("连接失败");
        }
    }
}

</script>
<template>
  <div id="huro-app" class="app-wrapper">
    <!--Full pageloader-->
    <!-- Pageloader -->
    <div class="pageloader is-full"></div>
    <div class="infraloader is-full"></div>
    <div class="auth-wrapper">
      <!--Page body-->
      <div class="auth-wrapper-inner is-single">
        <!--Fake navigation-->
        <div class="auth-nav">
          <div class="left"></div>
          <div class="center">
            <a href="/" class="header-item">
              <img
                class="light-image"
                src=""
                alt=""
              />
              <img
                class="dark-image"
                src=""
                alt=""
              />
            </a>
          </div>
          <div class="right">
            <label class="dark-mode ml-auto">
              <input @click="commonStore.CHANGE_MODE" type="checkbox" />
              <span></span>
            </label>
          </div>
        </div>
        <!--Single Centered Form-->
        <div class="single-form-wrap">
          <div class="inner-wrap">
            <!--Form Title-->
            <div class="auth-head">
              <h2>Welcome Back.</h2>
              <p>Please sign in to your account</p>
              <a href="/auth-signup-3.html">I do not have an account yet </a>
            </div>
            <!--Form-->
            <div class="form-card">
              <div id="signin-form" class="login-form">
                <!-- Input -->
                <div class="field">
                  <div class="control has-icon">
                    <input 
                    v-model="userForm.username"
                    class="input" 
                    type="text" placeholder="Username" />
                    <span class="form-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-user"
                      >
                        <path
                          d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                        ></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </span>
                  </div>
                </div>
                <!-- Input -->
                <div class="field">
                  <div class="control has-icon">
                    <input
                      v-model="userForm.password"
                      class="input"
                      type="password"
                      placeholder="Password"
                    />
                    <span class="form-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-lock"
                      >
                        <rect
                          x="3"
                          y="11"
                          width="18"
                          height="11"
                          rx="2"
                          ry="2"
                        ></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div class="setting-item">
                  <label class="form-switch is-primary">
                    <input
                      type="checkbox"
                      class="is-switch"
                      id="busy-mode-toggle"
                    />
                    <i></i>
                  </label>
                  <div class="setting-meta">
                    <span>Remember Me</span>
                  </div>
                </div>
                <!-- Submit -->
                <div class="control login">
                  <button
                  @click="signin"
                    class="button h-button is-primary is-bold is-fullwidth is-raised"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
            <div class="forgot-link has-text-centered">
              <a>Forgot Password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>