import Vue from 'vue'
import VueRouter from 'vue-router'
// 首页
// import Indexs from '@/views/main/index copy.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // component: Indexs
    component: () => import(/* webpackChunkName: "Indexs" */'@/views/main/index copy.vue')
  },
  // 车辆核验预警
  {
    path: '/VehicleVerification',
    component: () => import(/* webpackChunkName: "VehicleVerification" */'@/views/main/Public security/VehicleVerification.vue')
  },
  // 人员核查预警
  {
    path: '/personnel',
    component: () => import(/* webpackChunkName: "Personnel" */'@/views/main/Public security/personnel.vue')
  },
  // 物品检查
  {
    path: '/iteminspection',
    component: () => import(/* webpackChunkName: "Iteminspection" */'@/views/main/Public security/iteminspection.vue')
  },
  // 处理联动及结果流转
  {
    path: '/message',
    component: () => import(/* webpackChunkName: "Message" */'@/views/main/Public security/message.vue')
  },
  // 人员物关联
  {
    path: '/personnelLostContact',
    component: () => import(/* webpackChunkName: "PersonnelLostContact" */'@/views/main/Public security/person_thingrelation.vue')
  },
  // 人车黑名单
  {
    path: '/blacklist',
    component: () => import(/* webpackChunkName: "Blacklist" */'@/views/main/Deployment management/blacklist.vue')
  },
  // 车白名单
  {
    path: '/Witelist',
    component: () => import(/* webpackChunkName: "Witelist" */'@/views/main/Deployment management/WhiteList.vue')
  },
  // 布控
  {
    path: '/deploymentcontrol',
    component: () => import(/* webpackChunkName: "DeploymentControl" */'@/views/main/Deployment management/DeploymentControl.vue')
  },
  // 车辆通行信息监测
  {
    path: '/vehiclemonitoring',
    component: () => import(/* webpackChunkName: "Vehiclemonitoring" */'@/views/main/Traffic monitoring/vehiclemonitoring.vue')
  },
  // 公安检查站信息管理
  {
    path: '/pscim',
    component: () => import(/* webpackChunkName: "Pscim" */'@/views/main/basic information/pscim.vue')
  },
  // 执勤人员信息管理
  {
    path: '/opim',
    component: () => import(/* webpackChunkName: "Opim" */'../views/main/basic information/OPIM.vue')
  },
  // 警备装备信息管理
  {
    path: '/scim',
    component: () => import(/* webpackChunkName: "Scim" */'../views/main/basic information/SCIM.vue')
  },
  // 用户管理
  {
    path: '/usersManagement',
    component: () => import(/* webpackChunkName: "UsersManagement" */'@/views/main/system security/UsersManagement.vue')
  },
  // 角色管理
  {
    path: '/roleManagement',
    component: () => import(/* webpackChunkName: "RoleManagement" */'@/views/main/system security/RoleManagement.vue')
  },
  // 日志管理
  {
    path: '/logmanagement',
    component: () => import(/* webpackChunkName: "Logmanagement" */'@/views/main/system security/logmanagement.vue')
  },
  // 设备信息管理
  {
    path: '/equipmentinfomanagement',
    component: () => import(/* webpackChunkName: "Equipmentinfomanagement" */'@/views/main/system security/Equipmentinfomanagement.vue')
  },
  // 预警设置
  {
    path: '/warningSettings',
    component: () => import(/* webpackChunkName: "WarningSettings" */'@/views/main/basic information/WarningSettings.vue')
  },
  // 勤务启动
  {
    path: '/serviceStart',
    component: () => import(/* webpackChunkName: "ServiceStart" */'@/views/main/Duty management/ServiceStart.vue')
  },
  // 战果上报
  {
    path: '/reportTheResults',
    component: () => import(/* webpackChunkName: "ReportTheResults" */'@/views/main/Duty management/ReportTheResults.vue')
  },
  // 通行统计
  {
    path: '/trafficStatistics',
    component: () => import(/* webpackChunkName: "TrafficStatistics" */'@/views/main/Statistical Analysis/TrafficStatistics.vue')
  },
  // 查控统计
  {
    path: '/controlStatistics',
    component: () => import(/* webpackChunkName: "ControlStatistics" */'@/views/main/Statistical Analysis/ControlStatistics.vue')
  },
  // 战果统计
  {
    path: '/resultsStatistical',
    component: () => import(/* webpackChunkName: "ResultsStatistical" */'@/views/main/Statistical Analysis/ResultsStatistical.vue')
  },
  // 勤务统计
  {
    path: '/DutyStatistics',
    component: () => import(/* webpackChunkName: "DutyStatistics" */'@/views/main/Statistical Analysis/DutyStatistics.vue')
  },
  // 车辆通行信息监测
  {
    path: '/vehiclemonitoring',
    component: () => import(/* webpackChunkName: "Vehiclemonitoring" */'../views/main/Traffic monitoring/vehiclemonitoring.vue')
  },
  // 人员信息监测
  {
    path: '/presonnelmonitoring',
    component: () => import(/* webpackChunkName: "Presonnelmonitoring" */'../views/main/Traffic monitoring/Personnel_information_monitoring.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
