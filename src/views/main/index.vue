<template>
  <div id="Home2" class="fill_height mwidth dflex">
    <div class="w-1_3 fill_height dflex direction-column just-cont over-h">
      <div class="dflex1 h-33">
        <EchartsPackage :option="PeopleAndVehiclesStatistics"></EchartsPackage>
      </div>
      <div class="dflex1 h-33">
        <EchartsPackage :option="PedestrianTraffic"></EchartsPackage>
      </div>
      <div class="dflex1 h-33">
        <EchartsPackage :option="PersonnelVerification"></EchartsPackage>
      </div>
    </div>
    <div class="w-1_3 fill_height dflex direction-column just-cont">
      <div class="dflex1 h-65">
        <!-- <EchartsPackage :option="option"></EchartsPackage> -->
        <mapchart></mapchart>
      </div>
      <div class="dflex1 h-33">
        <EchartsPackage :option="VehicleVerification"></EchartsPackage>
      </div>
    </div>
    <div class="w-1_3 fill_height dflex direction-column just-cont">
      <div class="dflex1 h-50">
        <EchartsPackage :option="ResultsStatisticsChart"></EchartsPackage>
      </div>
      <div class="h-50 dflex1">
        <EchartsPackage :option="PoliceAndEquipmentChart"></EchartsPackage>
      </div>
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
.spanTitle {
  width: 100%;
  display: block;
  text-align: center;
  font-size: 14px;
  color: #0aabc2;
  padding-bottom: 6px;
}
</style>
