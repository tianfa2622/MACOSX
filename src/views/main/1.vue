<template>
  <div id="Home2" class="fill_height mwidth dflex">
    <div class="flex1 fill_height dflex direction-column">
      <div class="dflex1">
        <EchartsPackage :option="VehicleVerification"></EchartsPackage>
      </div>
      <div class="dflex1">
        <span>通行人车辆折线图</span>
        <EchartsPackage :option="PeopleAndVehiclesStatistics"></EchartsPackage>
      </div>
      <div class="dflex1">
        <EchartsPackage :option="option"></EchartsPackage>
      </div>
    </div>
    <div class="flex1 fill_height dflex direction-column">
      <div class="dflex1">
        <EchartsPackage :option="option"></EchartsPackage>
      </div>
      <div class="dflex1">
        <EchartsPackage :option="option"></EchartsPackage>
      </div>
    </div>
    <div class="flex1 fill_height dflex direction-column">
      <div class="dflex1">
        <EchartsPackage :option="option"></EchartsPackage>
      </div>
      <div class="dflex1">
        <EchartsPackage :option="option"></EchartsPackage>
      </div>
    </div>
  </div>
</template>

<script>
import EchartsPackage from '../../components/echarts/index'
// 当日人车统计
import VehicleVerification from './index/VehicleVerification/VehicleVerification'
// 人车通行折线图
import PeopleAndVehiclesStatistics from './index/PeopleAndVehiclesStatistics/PeopleAndVehiclesStatistics.js'
export default {
  name: 'Home2',
  components: {
    EchartsPackage
  },
  data () {
    return {
      VehicleVerification,
      PeopleAndVehiclesStatistics
    }
  }
}
</script>

<style lang='less'>
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
