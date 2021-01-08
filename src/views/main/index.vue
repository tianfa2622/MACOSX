<template>
  <div id="Home2" class="fill_height mwidth dflex">
    <div class="w-1_3 dflex direction-column just-cont">
      <div class="h-50 bg-img over-h">
        <EchartsPackage :option="ResultsStatisticsChart"></EchartsPackage>
      </div>
      <div class="h-49 bg-img dflex direction-column">
        <div class="h-50 over-h">
          <EchartsPackage :option="VehicleVerification"></EchartsPackage>
        </div>
        <div class="h-50 over-h">
          <EchartsPackage :option="PersonnelVerification"></EchartsPackage>
        </div>
      </div>
    </div>
    <div class="w-1_3 dflex direction-column just-cont">
      <div class="h-65 over-h">
        <mapchart></mapchart>
      </div>
      <div class="h-33 bg-img ml-10 over-h">
        <EchartsPackage :option="PeopleAndVehiclesStatistics"></EchartsPackage>
      </div>
    </div>
    <div class="w-1_3 dflex direction-column just-cont">
      <div class="h-50 bg-img1 over-h">
        <EchartsPackage :option="PoliceAndEquipmentChart"></EchartsPackage>
      </div>
      <div class="h-49 bg-img1 over-h">
        <EchartsPackage :option="PedestrianTraffic"></EchartsPackage>
      </div>
    </div>
  </div>
</template>

<script>
import mapchart from '@/components/echarts/sctterMap'
import EchartsPackage from '../../components/echarts/index'
// 战果统计
import ResultsStatisticsChart from './indexEcarts/ResultsStatisticsChart.js'
// 人员核查
import PersonnelVerification from './indexEcarts/PersonnelVerification.js'
// 车辆核查
import VehicleVerification from './indexEcarts/VehicleVerification.js'
// 当日人车统计
import PeopleAndVehiclesStatistics from './indexEcarts/PeopleAndVehiclesStatistics'
import PoliceAndEquipmentChart from './indexEcarts/PoliceAndEquipmentChart.js'
// 人车通行折线图
import PedestrianTraffic from './indexEcarts/PedestrianTraffic.js'
export default {
  // name:'Home2'
  components: {
    EchartsPackage, mapchart
  },
  data () {
    return {
      ResultsStatisticsChart,
      PersonnelVerification,
      VehicleVerification,
      PeopleAndVehiclesStatistics,
      PoliceAndEquipmentChart,
      PedestrianTraffic
    }
  }
}
</script>

<style lang="less">
.bg-img {
  background-image: url(../../assets/images/index/1.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.bg-img1 {
  background-image: url(../../assets/images/index/2.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.just-cont {
  justify-content: space-between;
}
.h-49 {
  height: 49%;
}
.h-33 {
  height: 33%;
}
</style>
