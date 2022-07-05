import PageHeader from './components/base/PageHeader.vue'
import Paginations from './components/base/Paginations.vue'
import ApplicationLayout from './layouts/ApplicationLayout.vue'
import Modal from './components/modal/Modal.vue'
import UserModal from './components/modal/UserModal.vue'
import OrderModal from './components/modal/OrderModal.vue'
import RoleMdal from './components/modal/RoleMdal.vue'
import PageNav from './components/base/PageNav.vue'
import ViewWrapper from './components/base/ViewWrapper.vue'

// 可批量导入.vue组件,但是没找到vite批量导入接口
export interface definedGlobalComponents {
    component_name:string,
    componentInstance:any
}
export const componentsArray:definedGlobalComponents[] = [
    {
        component_name:'PageHeader',
        componentInstance:PageHeader,
    },
    {
        component_name:'Paginations',
        componentInstance:Paginations,
    },
    {
        component_name:'ApplicationLayout',
        componentInstance:ApplicationLayout,
    },
    {
        component_name:'Modal',
        componentInstance:Modal,
    },
    {
        component_name:'UserModal',
        componentInstance:UserModal,
    },
    {
        component_name:'OrderModal',
        componentInstance:OrderModal,
    },
    {
        component_name:'RoleMdal',
        componentInstance:RoleMdal,
    },
    {
        component_name:'PageNav',
        componentInstance:PageNav,
    },
    {
        component_name:'ViewWrapper',
        componentInstance:ViewWrapper,
    },
]
export const install = (Vue:any) =>{
    componentsArray.forEach((item:definedGlobalComponents)=>{
        Vue.component(item.component_name,item.componentInstance)
    })
  }
