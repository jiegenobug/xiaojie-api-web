// 创建组合式api仓库
import { defineStore } from "pinia"
import { GetToken, SetToken, RemoveToken, SetTimeStamp, RemoveTimeKey } from "@/utils/auth"
import { Login } from "@/api/user"
import { ref } from "vue"

// 创建 & 导出仓库
export const useUserStore = defineStore('userStore', () => {
  const token: any = ref(GetToken() || null)
  const setToken = (tk: any) => {
    token.value = tk // 将数据设置给pinia
    SetToken(tk) // 将数据同步给缓存
  }
  const removeToken = () => {
    token.value = null // 将pinia的token数据置空
    RemoveToken() // 缓存同步置空
  }
  const login = async (data: any) => {
    const result: any = await Login(data)
    setToken(result.token) // 把成功取到的token存入pinia和缓存';
    SetTimeStamp() // 把当前时间戳存入缓存,用于以后判断token过期（此处为前端判断）
  }
  const logout = () => {
    removeToken() //清空pinia和缓存中的token
    RemoveTimeKey()
  }
  return {
    token,
    setToken,
    removeToken,
    login,
    logout
  }
})