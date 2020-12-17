<template>
  <div id="Home2" class="fill_height mwidth dflex">
    <div class="flex1 fill_height dflex direction-column just-cont">
      <div class="dflex1 h-33">
        <EchartsPackage :option="PeopleAndVehiclesStatistics"></EchartsPackage>
      </div>
      <div class="dflex1 h-33">
        <EchartsPackage :option="PedestrianTraffic"></EchartsPackage>
      </div>
      <div class="dflex1 h-33">
        <span class="CheckTitle">人员核查</span>
        <EchartsPackage
          :option="PersonnelVerification"
          style="height: calc(100% - 19px) !important"
        ></EchartsPackage>
      </div>
    </div>
    <div class="flex1 fill_height dflex direction-column just-cont">
      <div class="dflex1 h-65">
        <!-- <EchartsPackage :option="option"></EchartsPackage> -->
      </div>
      <div class="dflex1 h-33">
        <span class="CheckTitle">车辆核查</span>
        <EchartsPackage :option="VehicleVerification"></EchartsPackage>
      </div>
    </div>
    <div class="flex1 fill_height dflex direction-column">
      <div class="dflex1">
        <!-- <EchartsPackage :option="option"></EchartsPackage> -->
      </div>
      <div class="dflex1">
        <!-- <EchartsPackage :option="option"></EchartsPackage> -->
      </div>
    </div>
  </div>
</template>

<script>
import EchartsPackage from '../../components/echarts/index'
// 当日人车统计
import PeopleAndVehiclesStatistics from './index/PeopleAndVehiclesStatistics/PeopleAndVehiclesStatistics'
// 人车通行折线图
import PedestrianTraffic from './index/PedestrianTraffic/PedestrianTraffic.js'
// 人员核查
import PersonnelVerification from './index/PersonnelVerification/PersonnelVerification.js'
// 车辆核查
import VehicleVerification from './index/VehicleVerification/VehicleVerification.js'

export default {
  name: 'Home2',
  components: {
    EchartsPackage
  },
  data () {
    return {
      PeopleAndVehiclesStatistics,
      PedestrianTraffic,
      PersonnelVerification,
      VehicleVerification
    }
  }
}
</script>

<style lang='less'>
.just-cont {
  justify-content: space-between;
}
.spanTitle {
  width: 100%;
  display: block;
  text-align: center;
  font-size: 14px;
  color: #0aabc2;
  padding-bottom: 6px;
}
.CheckTitle {
  font-size: 14px;
  color: #0092f6;
  padding: 5px 0 0 10px;
}
.bgc1 {
  background-color: #ffb6c1;
  height: 33.3%;
}
.bgc2 {
  background-color: #ff69b4;
  height: 33.3%;
}
.bgc3 {
  background-color: #da70d6;
  height: 33.3%;
}
.bgc4 {
  background-color: #800080;
  height: 70%;
}
.bgc5 {
  background-color: #6a5acd;
  height: 30%;
}
.bgc6 {
  background-color: #4169e1;
  height: 50%;
}
.bgc7 {
  background-color: #1e90ff;
  height: 50%;
}
</style>
