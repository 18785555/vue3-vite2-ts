<script setup lang="ts">
import { useCommonStore } from '../../pinia/store';
const store = useCommonStore()
interface Props {
  title: string;
}
withDefaults(defineProps<Props>(), {});
</script>
<template>
  <div class="page-title has-text-centered">
    <!-- Sidebar Trigger -->
    <div class="huro-hamburger nav-trigger">
      <span class="menu-toggle has-chevron">
        <span 
        :class="[store.siderbarOpen&&'active']"
        class="icon-box-toggle" @click="store.sidebarHandle" >
          <span class="rotate">
            <i class="icon-line-top"></i>
            <i class="icon-line-center"></i>
            <i class="icon-line-bottom"></i>
          </span>
        </span>
      </span>
    </div>
    <div class="title-wrap">
      <h1 class="title is-4">{{ title }}</h1>
    </div>
    <div class="toolbar ml-auto">
      <div class="toolbar-link">
        <label class="dark-mode ml-auto">
          <input type="checkbox" @click="store.CHANGE_MODE" />
          <span></span>
        </label>
      </div>
    </div>
  </div>
</template>
