import Vue from 'vue'
import Router from 'vue-router'
const container = () => import('@/components/container')

Vue.use(Router)
// 固定的路由表
export const fixedRouter = [{
  path: '/login',
  component: () => import('@/views/login/login'),
  hidden: true
},
{
  path: '',
  component: container, //整体页面的布局(包含左侧菜单跟主内容区域)
  children: [{
    path: '',
    component: () => import('@/views/Home'),
    meta: {
      title: '首页', //菜单名称
      roles: ['user', 'admin'], //当前菜单哪些角色可以看到
      icon: 'el-icon-info' //菜单左侧的icon图标
    }
  }]
},
]
// 需要权限判断展示的路由
export const permissionRouter = [
  {
    path: "/educational",
    component: container,
    name: "Educational",
    meta: {
      title: "教务管理",
      icon: "el-icon-success",
      roles: ['admin', 'user']
    },
    children: [{
      path: "teacher",
      name: "Teacher",
      component: () => import('@/views/educational/teacher/list'),
      meta: {
        title: "教师管理",
        icon: "el-icon-goods",
        roles: ['admin']
      },
      // 三级菜单写法，对应demotable案例下边的两个菜单
      children: []
    },
    {
      path: "class",
      name: "Class",
      component: () => import('@/views/educational/class/list'),
      meta: {
        title: "班级管理",
        icon: "el-icon-goods",
        roles: ['admin']
      }
    },
    {
      path: "student",
      name: "Student",
      component: () => import('@/views/educational/student/list'),
      meta: {
        title: "学生管理",
        icon: "el-icon-goods",
        roles: ['admin']
      }
    }
    ]
  },
  {
    path: "/setting",
    component: container,
    name: "Setting",
    meta: {
      title: "系统设置",
      icon: "el-icon-success",
      roles: ['admin', 'user']
    },
    children: [{
      path: "user",
      name: "User",
      component: () => import('@/views/setting/user/list'),
      meta: {
        title: "用户管理",
        icon: "el-icon-goods",
        roles: ['admin']
      },
      // 三级菜单写法，对应demotable案例下边的两个菜单
      children: []
    },
    {
      path: "organization",
      name: "Organization",
      component: () => import('@/views/setting/organization/list'),
      meta: {
        title: "机构管理",
        icon: "el-icon-goods",
        roles: ['admin']
      }
    },
    {
      path: "course",
      name: "Course",
      component: () => import('@/views/setting/course/list'),
      meta: {
        title: "课程配置",
        icon: "el-icon-goods",
        roles: ['admin']
      }
    }
    ]
  }
]


export default new Router({
  routes: fixedRouter
})
