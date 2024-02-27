import request from "../utils/request";

// 登录
export function Login(data: any) {
  return request({
    url: 'agent-service/salesman/salesManLogin',
    method: 'post',
    data
  })
}

// test1 
export function Test1(data: object) {
  return request({
    url: 'manage-service/versioncontroller/findAllController',
    method: 'post',
    data
  })
}