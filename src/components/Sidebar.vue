<template>
  <div style="height: 100%">
    <el-menu
      mode="horizontal"
      default-active="/"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#06f"
      unique-opened:true
      class="fill_height"
      router
    >
      <el-menu-item index="/">
        <i class="iconfont icon-shouye"></i>
        <span slot="title">首页</span>
      </el-menu-item>

      <el-submenu index="/PublicSecurity">
        <template slot="title">
          <i class="iconfont icon-dunpaisuo-tianchong"></i>
          <span>治安防范</span>
        </template>
        <el-menu-item index="/VehicleVerification">
          <template slot="title">
            <i class="iconfont icon-tubiao13"></i>
            <span>车辆核查预警</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/personnel">
          <template slot="title">
            <i class="iconfont icon-tubiao13"></i>
            <span>人员核查预警</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/iteminspection">
          <template slot="title">
            <i class="iconfont icon-tubiao13"></i>
            <span>物品检查</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/personnelLostContact">
          <template slot="title">
            <i class="iconfont icon-tubiao13"></i>
            <span>人员物失联</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/message">
          <template slot="title">
            <i class="iconfont icon-tubiao13"></i>
            <span>处置联动及结果流转</span>
          </template>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="/MonitorManagement">
        <template slot="title">
          <i class="iconfont icon-RectangleCopy"></i>
          <span>布控管理</span>
        </template>
        <el-menu-item index="/blacklist">
          <template slot="title">
            <i class="iconfont icon-tubiao13"></i>
            <span>人车黑名单</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/Witelist">
          <template slot="title">
            <i class="iconfont icon-tubiao13"></i>
            <span>车白名单</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/deploymentcontrol">
          <template slot="title">
            <i class="iconfont icon-tubiao13"></i>
            <span>布控</span>
          </template>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="4">
        <template slot="title">
          <i class="iconfont icon-jiancezhan"></i>
          <span>通行监测</span>
        </template>
        <el-menu-item index="4-1">
          <template slot="title">
            <i class="iconfont icon-tubiao13"></i>
            <span>车辆通行信息监测</span>
          </template>
        </el-menu-item>
        <el-menu-item index="4-2">
          <template slot="title">
            <i class="iconfont icon-tubiao13"></i>
            <span>人员信息监测</span>
          </template>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="5">
        <template slot="title">
          <i class="iconfont icon-tongji"></i>
          <span>统计分析</span>
        </template>
        <el-menu-item index="5-1">
          <template slot="title">
            <i class="iconfont icon-tubiao13"></i>
            <span>过车统计</span>
          </template>
        </el-menu-item>
        <el-menu-item index="5-2">
          <template slot="title">
            <i class="iconfont icon-tubiao13"></i>
            <span>查控统计</span>
          </template>
        </el-menu-item>
        <el-menu-item index="5-3">
          <template slot="title">
            <i class="iconfont icon-tubiao13"></i>
            <span>战果统计</span>
          </template>
        </el-menu-item>
        <el-menu-item index="5-4">
          <template slot="title">
            <i class="iconfont icon-tubiao13"></i>
            <span>勤务统计</span>
          </template>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="6">
        <template slot="title">
          <i class="iconfont icon-jibenxinxi"></i>
          <span>基本信息</span>
        </template>
        <el-menu-item index="6-1">
          <template slot="title">
            <i class="iconfont icon-tubiao13"></i>
            <span>公安检查站基本信息管理</span>
          </template>
        </el-menu-item>
        <el-menu-item index="6-2">
          <template slot="title">
            <i class="iconfont icon-tubiao13"></i>
            <span>执勤人员信息管理</span>
          </template>
        </el-menu-item>
        <el-menu-item index="6-3">
          <template slot="title">
            <i class="iconfont icon-tubiao13"></i>
            <span>警备装备信息管理</span>
          </template>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="7">
        <template slot="title">
          <i class="iconfont icon-xitonganquanheguibaobiao"></i>
          <span>系统安全</span>
        </template>
        <el-menu-item index="7-1">
          <template slot="title">
            <i class="iconfont icon-tubiao13"></i>
            <span>用户角色及权限管理</span>
          </template>
        </el-menu-item>
        <el-menu-item index="7-2">
          <template slot="title">
            <i class="iconfont icon-tubiao13"></i>
            <span>日志管理</span>
          </template>
        </el-menu-item>
        <el-menu-item index="7-3">
          <template slot="title">
            <i class="iconfont icon-tubiao13"></i>
            <span>设备信息管理</span>
          </template>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
