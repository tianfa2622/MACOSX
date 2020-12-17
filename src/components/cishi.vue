<template>
  <div class="clearfix main-menu">
    <el-menu
      mode="horizontal"
      :default-active="$route.path"
      background-color="rgba(23,30,68,0)"
      text-color="#fff"
      active-text-color="#06f"
      unique-opened:true
      class="fill_height fll"
      router
    >
      <el-menu-item index="/" class="nav-size">
        <span class="index-title">首 页</span>
      </el-menu-item>

      <el-submenu index="/PublicSecurity" popper-class="main-submenu-item">
        <template slot="title">
          <span class="nav-size">治安防范</span>
        </template>
        <el-menu-item index="/vehicleVerification">
          <template slot="title">
            <span>车辆核查预警</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/personnel">
          <template slot="title">
            <span class="home-title">人员核查预警</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/iteminspection">
          <template slot="title">
            <span>物品检查</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/personnelLostContact">
          <template slot="title">
            <span>人员物失联</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/message">
          <template slot="title">
            <span>处置联动及结果流转</span>
          </template>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="/MonitorManagement" popper-class="main-submenu-item">
        <template slot="title">
          <span class="nav-size">布控管理</span>
        </template>
        <el-menu-item index="/blacklist">
          <template slot="title">
            <span>人车黑名单</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/Witelist">
          <template slot="title">
            <span>车白名单</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/deploymentcontrol">
          <template slot="title">
            <span>布控</span>
          </template>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="4" popper-class="main-submenu-item">
        <template slot="title">
          <span class="nav-size">通行监测</span>
        </template>
        <el-menu-item index="/vehiclemonitoring">
          <template slot="title">
            <span>车辆通行信息监测</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/presonnelmonitoring">
          <template slot="title">
            <span>人员信息监测</span>
          </template>
        </el-menu-item>
      </el-submenu>
    </el-menu>

    <div class="fll" style="width: 800px; height: 100%"></div>

    <el-menu
      mode="horizontal"
      :default-active="$route.path"
      background-color="rgba(23,30,68,0)"
      text-color="#fff"
      active-text-color="#06f"
      unique-opened:true
      class="fill_height fll"
      router
    >
      <el-submenu index="5" popper-class="main-submenu-item">
        <template slot="title">
          <span class="nav-size">统计分析</span>
        </template>
        <el-menu-item index="/trafficStatistics">
          <template slot="title">
            <span>通行统计</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/controlStatistics">
          <template slot="title">
            <span>查控统计</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/resultsStatistical">
          <template slot="title">
            <span>战果统计</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/DutyStatistics">
          <template slot="title">
            <span>勤务统计</span>
          </template>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="6" popper-class="main-submenu-item">
        <template slot="title">
          <span class="nav-size">基本信息</span>
        </template>
        <el-menu-item index="/pscim">
          <template slot="title">
            <span>公安检查站基本信息管理</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/opim">
          <template slot="title">
            <span>执勤人员信息管理</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/scim">
          <template slot="title">
            <span>警备装备信息管理</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/warningSettings">
          <template slot="title">
            <span>预警设置</span>
          </template>
        </el-menu-item>
      </el-submenu>

      <el-submenu popper-class="main-submenu-item" index="7">
        <template slot="title">
          <span class="nav-size">系统安全</span>
        </template>
        <el-menu-item index="/usersManagement">
          <template slot="title">
            <span>用户角色及权限管理</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/logmanagement">
          <template slot="title">
            <span>日志管理</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/equipmentinfomanagement">
          <template slot="title">
            <span>设备信息管理</span>
          </template>
        </el-menu-item>
      </el-submenu>

      <el-submenu popper-class="main-submenu-item" index="8">
        <template slot="title">
          <span class="nav-size">勤务管理</span>
        </template>
        <el-menu-item index="/serviceStart">
          <template slot="title">
            <span>勤务启动</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/reportTheResults">
          <template slot="title">
            <span>战果上报</span>
          </template>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.el-menu--horizontal > .el-menu-item.is-active {
  border: none;
}
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover {
  background-color: rgba(255, 255, 255, 0.2) !important;
}
.el-menu-item {
  padding: 0 20px;
  transition: border-color 0.3s, background-color 0.3s, color 0.3s !important;
}
.main-menu {
  overflow: hidden;

  margin: 0 auto;
  width: fit-content;
  height: 48px;
  line-height: 48px;

  white-space: nowrap;
  li {
    height: 48px !important;
    line-height: 48px !important;
  }
}
</style>
<style lang="less">
.index-title {
  font-size: 18px !important;
  letter-spacing: 7px !important;
}
.nav-size {
  font-size: 16px !important;
}
.main-submenu-item {
  .el-menu {
    background-color: #fff !important;
    .el-menu-item {
      color: #333 !important;
      &.is-active {
        color: rgb(0, 102, 255) !important;
      }
      // background-color: #fff !important;
    }
  }
}
.el-submenu {
  .el-submenu__title {
    padding: 0 10px;
    height: 48px !important;

    line-height: 48px !important;

    background-color: rgba(255, 255, 255, 0) !important;
  }
  &.is-opened .el-submenu__title {
    background-color: rgba(255, 255, 255, 0.2) !important;
  }
}
</style>
