<script setup lang="ts">
import { ref } from "vue";
const profileOpen = ref<boolean>(false);
</script>
<template>
  <div
    :class="[profileOpen && 'is-active']"
    class="dropdown profile-dropdown dropdown-trigger is-spaced is-up"
  >
    <img
      @click="profileOpen = !profileOpen"
      src="https://via.placeholder.com/150x150"
      alt=""
    />
    <div class="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <div class="dropdown-head">
          <div class="meta">
            <span>admin</span>
            <span></span>
          </div>
        </div>
        <hr class="dropdown-divider" />
        <div class="dropdown-item is-button">
          <a href="/">
            <button
              class="button h-button is-primary is-raised is-fullwidth logout-button"
            >
              <span>退出登录</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
