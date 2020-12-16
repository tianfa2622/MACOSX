<template>
  <div class="main_tab" id="Home">
    <el-tabs
      v-model="activeName"
      @tab-click="handleClick"
      class="main-header fill_height"
    >
      <el-tab-pane label="布控解控" name="third" class="fill_height">
        <MonitorSolution></MonitorSolution>
      </el-tab-pane>
      <el-tab-pane label="人员布控" name="first" class="fill_height">
        <peopleMonitor></peopleMonitor>
      </el-tab-pane>
      <el-tab-pane label="车辆布控" name="second" class="fill_height">
        <CarMonitor></CarMonitor>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import CarMonitor from '@/components/deployment/VehicleLayoutAndControl.vue'
import peopleMonitor from '@/components/deployment/PersonnelToMonitor.vue'
import MonitorSolution from '@/components/deployment/MonitorSolutionControl.vue'

export default {
  name: 'Home',
  components: {
    CarMonitor, peopleMonitor, MonitorSolution
  },
  data () {
    return {
      activeName: 'third'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="less">
.main_tab {
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  .main-header {
    .el-tabs__content {
      height: calc(100% - 55px);
      // .el-tab-pane {
      //   height: 100%;
      // }
    }
    .el-tabs__active-bar {
      left: 0px;
    }
    .el-tabs__item {
      font-size: 18px;
      font-weight: 600;
      padding: 0 20px !important;
    }
    .el-tabs__item.is-active {
      color: #03d8cb;
    }
    .el-tabs__item:hover {
      color: #03d8cb;
    }
  }
}
</style>
