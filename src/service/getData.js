// 在这个文件中创建所有的获取数据的函数

import axios from '@/axios'
// 获取types
/* export const getTypes = () => {
  return axios.get('/types')              
}*/
export const getTypes = () => axios.get('/types')


// 请求文章列表
export const getList = (id, page=1) => axios.get(`/articles/${id}/page/${page}`)


// 请求top10列表
export const getListTop10 = (id) => axios.get(`/articles/${id}/top10`)


// 合并这个请求
export const getListData = (id) => axios.all([getList(id), getListTop10(id)])

// 请求文章详情
export const getArticle = (id) => axios.get(`/article/${id}`)

// 获取轮播数据
export const getBanner = () => axios.get('/articles/rand')

// 登录
export const login = (user) => axios.post('/user/login', user)

// 评论
export const userComment = (comment) => axios.post('/comment', comment)

// 获取评论列表
export const getComments = (id, page = 1) => axios.get(`/comments/${id}/page/${page}`) 

// 删除评论
export const delComment = (id) => axios.delete(`/comment/${id}`)

// 验证token
export const authToken = () => axios.post('/user/token')