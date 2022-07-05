/**
 * This is a store that hold the dark mode state
 * It could be auto (fit system preference), dark or light
 *
 * Using useStorage from @vueuse/core allow persistance storage accross tabs/sessions
 *
 * We can import and set isDark anywhere in our project
 * @see /src/components/navigation/LandingNavigation.vue
 * @see /src/components/partials/toolbars/Toolbar.vue
 */
import { ref } from 'vue'
import {  defineStore } from 'pinia'

export const useUserStore = defineStore("useUserStore", ()=>{
   
  return {
  }
})

 