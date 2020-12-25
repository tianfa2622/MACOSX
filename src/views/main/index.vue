<template>
  <div id="Home2" class="fill_height mwidth dflex">
    <div class="w-1_3 fill_height dflex direction-column just-cont">
      <div class="h-50 bgc1 over-h">
        <EchartsPackage :option="ResultsStatisticsChart"></EchartsPackage>
      </div>
      <!-- <div class="dflex1 h-29 bgc1 over-h">
        <EchartsPackage :option="VehicleVerification"></EchartsPackage>
      </div> -->
      <div class="h-48 bgc1 over-h">
        <div class="h-50">
          <EchartsPackage :option="VehicleVerification"></EchartsPackage>
        </div>
        <div class="h-50">
          <EchartsPackage :option="PersonnelVerification"></EchartsPackage>
        </div>
      </div>
    </div>

    <div class="w-1_3 fill_height dflex direction-column just-cont">
      <div class="dflex1 h-65 over-h">
        <mapchart></mapchart>
      </div>
      <div class="dflex1 h-33 bgc2 over-h">
        <EchartsPackage :option="PeopleAndVehiclesStatistics"></EchartsPackage>
      </div>
    </div>

    <div class="w-1_3 fill_height dflex direction-column just-cont">
      <div class="dflex1 h-50 bgc2 over-h">
        <EchartsPackage :option="PoliceAndEquipmentChart"></EchartsPackage>
      </div>
      <div class="h-48 dflex1 bgc2 over-h">
        <EchartsPackage :option="PedestrianTraffic"></EchartsPackage>
      </div>
      <!-- <div class="h-29 dflex1 bgc2 over-h"></div> -->
    </div>
  </div>
</template>

<script>
import EchartsPackage from '../../components/echarts/index'
// 当日人车统计
import PeopleAndVehiclesStatistics from './indexEcarts/PeopleAndVehiclesStatistics/PeopleAndVehiclesStatistics'
// 人车通行折线图
import PedestrianTraffic from './indexEcarts/PedestrianTraffic/PedestrianTraffic.js'
// 人员核查
import PersonnelVerification from './indexEcarts/PersonnelVerification/PersonnelVerification.js'
// 车辆核查
import VehicleVerification from './indexEcarts/VehicleVerification/VehicleVerification.js'
// 战果统计
import ResultsStatisticsChart from './indexEcarts/ResultsStatisticsChart/ResultsStatisticsChart.js'
import PoliceAndEquipmentChart from './indexEcarts/PoliceAndEquipmentChart/PoliceAndEquipmentChart.js'
import mapchart from '@/components/echarts/sctterMap'
export default {
  name: 'Home2',
  components: {
    EchartsPackage, mapchart
  },
  data () {
    return {
      PeopleAndVehiclesStatistics,
      PedestrianTraffic,
      PersonnelVerification,
      VehicleVerification,
      ResultsStatisticsChart,
      PoliceAndEquipmentChart
    }
  }
}
</script>

<style lang='less'>
.just-cont {
  justify-content: space-between;
}
.bgc2 {
  background-image: url(../../assets/images/index/2.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.bgc1 {
  background-image: url(../../assets/images/index/1.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.h-48 {
  height: 49%;
}
.h-29 {
  height: 29%;
}
// .spanTitle {
//   width: 100%;
//   display: block;
//   text-align: center;
//   font-size: 14px;
//   color: #0aabc2;
//   padding-bottom: 6px;
// }
</style>
