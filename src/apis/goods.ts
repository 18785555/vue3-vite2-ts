import request  from "./request";

// 获取商品列表数据
export const getGoodsList =async (pagenum:number,pagesize:number,query='') => {
    return request.get('/goods',{
        params:{
            query:query,
            pagenum:pagenum,
            pagesize:pagesize,
        }
    })
}

// 获取商品分类
export const getCategories = async (type:number,pagenum:number, pagesize:number) => {
    return request.get('/categories',{
        params:{
            type:type,
            pagenum:pagenum,
            pagesize:pagesize,
        }
    })
}
// 通过id查询分类
export const getSingleCategories = async (cat_id:number) => {
    return request.get(`/categories/${cat_id}`)
}

// 订单模块
// 获取订单数据列表
export const getOrders = async (pagenum:number,pagesize:number,query='') => {
    return request.get('/orders',{
        params:{
            query:query,
            pagenum:pagenum,
            pagesize:pagesize,
        }
    })
}

// 修改订单状态
export const updataOrder =async (data:any) => {
    return request.put(`/orders/${data.id}`,{
        is_send:data.is_send,     
        order_pay:data.order_pay,   
        order_price:data.order_price,
        order_number:data.order_number,
        pay_status:data.pay_status
    })
}

// 数据列表
export const getReports = ()=>{
    return request.get('reports/type/1')
}