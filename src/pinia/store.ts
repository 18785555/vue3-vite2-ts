/**
 * We can import and set isDark anywhere in our project
 */
import { ref, watchEffect } from "vue";
import { acceptHMRUpdate, defineStore } from "pinia";

export const useCommonStore = defineStore("useCommonStore", () => {
  const isdark = ref<string>("light");
  const siderbarOpen = ref<boolean>(true);
  const body = ref();
  watchEffect(() => {
    body.value = document.body;
  });

  const sidebarHandle = () => (siderbarOpen.value = !siderbarOpen.value);
  const CHANGE_MODE = () => {
    if (isdark.value === "light") {
      body.value.classList.add("is-dark");
      isdark.value = "dark";
      return;
    }
    if (isdark.value === "dark") {
      body.value.classList.remove("is-dark");
      isdark.value = "light";
      return;
    }
  };

  return {
    siderbarOpen,
    CHANGE_MODE,
    sidebarHandle,
  };
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCommonStore, import.meta.hot))
}
