<script setup lang="ts">
import { ref } from 'vue';

const dropDownActive = ref<boolean>(false)
const emit = defineEmits(['handle','delete'])
const e = ()=>{
  emit('handle')
  dropDownActive.value = !dropDownActive.value
}
</script>
<template>
  <div class="row-action" @click="e">
    <div :class="[dropDownActive&&'is-active']" class="dropdown is-spaced is-dots is-right dropdown-trigger">
      <div class="is-trigger" aria-haspopup="true">
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
          class="feather feather-more-horizontal"
        >
          <circle cx="12" cy="12" r="1"></circle>
          <circle cx="19" cy="12" r="1"></circle>
          <circle cx="5" cy="12" r="1"></circle>
        </svg>
      </div>
      <div class="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <a href="#" class="dropdown-item is-media">
            <div class="icon">
              <i class="lnil lnil-travel"></i>
            </div>
            <div class="meta">
              <span>编辑</span>
            </div>
          </a>
          <hr class="dropdown-divider" />
          <a class="dropdown-item is-media" @click="emit('delete')">
            <div class="icon">
              <i class="lnil lnil-trash"></i>
            </div>
            <div class="meta">
              <span style="color:red">删除用户</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
