import request  from "./request";

// 登录接口
export const login = async(user:any) => {
  return request.post("/login",user)
};

// 用户管理 用户数据列表
export const getUserList = async(pagenum:number,pagesize:number,query='')=>{
  return request.get('/users',{
    params:{
      query:query,
      pagenum:pagenum,
      pagesize:pagesize
    }
  })
}

// 创建新用户
export const  addUserList = async(user:any)=>{
  return request.post('/users',
  {
    username:user.username,
    password:user.password,
    email:user.email,
    mobile:user.mobile
  }
  )
}

// 修改用户状态
export const upDataUserState = async(userId:number,state:boolean)=>{
  return request.put(`users/${userId}/state/${state}`)
}

// 删除用户
export const deleteUsers = async(userId:number)=>{
  return request.delete(`users/${userId}`)
}

// 权限管理
export const getPermissionlist = async(type='tree',pagenum?:number,pagesize?:number)=>{
  return request.get(`rights/${type}`,{
    params:{
      pagenum:pagenum,
      pagesize:pagesize
    }
  })
}

// 角色列表
export const getRoles =async () => {
  return request.get('/roles')
}