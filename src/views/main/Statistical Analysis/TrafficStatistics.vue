<template>
  <!-- 通行统计 -->
  <div class="fill_height mwidth dflex direction-column back-c">
    <el-card class="over-f">
      <div slot="header" class="clearfix">
        <span class="header-title">通行统计</span>
      </div>
      <el-form
        :model="formInline"
        label-width="90px"
        :inline="true"
        size="medium"
      >
        <el-form-item label="区域：">
          <area-select
            type="text"
            v-model="formInline.selected"
            :data="$pcaa"
            :level="2"
            size="small"
          ></area-select>
        </el-form-item>
        <el-form-item label="检查站：">
          <el-select
            v-model="formInline.OwnedCheckpoint"
            placeholder="请选择检查站"
          >
            <el-option label="部门一" value="shanghai"></el-option>
            <el-option label="部门二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="起始日期：">
          <el-date-picker
            class="w320"
            v-model="formInline.timeLimit"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="-"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item class="ml-15">
          <el-button @click="onSubmit" type="primary">查询</el-button>
          <el-button @click="onSubmit" type="primary" class="bgc w100"
            >导出</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>

    <el-card
      class="mt-10 pb-10 flex1 fill_height dflex direction-column"
      body-style="flex: 1;"
    >
      <div slot="header" class="headerbtn">
        <el-button @click="onSubmit" type="primary" size="mini">天</el-button>
        <el-button @click="onSubmit" type="primary" size="mini">周</el-button>
        <el-button @click="onSubmit" type="primary" size="mini">月</el-button>
        <el-button @click="onSubmit" type="primary" size="mini">年</el-button>
      </div>
      <div class="w-100 fill_height dflex">
        <div class="w-50 h-100">
          <EchartsPackage :option="TrafficStatistics"></EchartsPackage>
        </div>
        <div class="w-50 h-100 posi-rel">
          <el-table
            :data="tableData"
            fit
            border
            size="small"
            style="width: 100%"
            class="flex1"
            height="100%"
          >
            <el-table-column prop="data" label="日期" :resizable="false">
            </el-table-column>
            <el-table-column
              prop="NumberOfPersonnel"
              :resizable="false"
              label="人员通行数"
            ></el-table-column>
            <el-table-column
              prop="NumberOfVehicles"
              label="车辆通行数"
              :resizable="false"
            >
            </el-table-column>
          </el-table>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="5"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
            class="posi-abs b-10 ta-c offset"
          >
          </el-pagination>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import EchartsPackage from '../../../components/echarts/index'
import TrafficStatistics from './Echartstable/TrafficStatistics'
export default {
  components: {
    EchartsPackage
  },
  data () {
    return {
      TrafficStatistics,
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      formInline: {
        OwnedCheckpoint: '',
        timeLimit: '',
        selected: []
      },
      tableData: [
        {
          data: '2020-12-01',
          NumberOfPersonnel: '50',
          NumberOfVehicles: '10'
        },
        {
          data: '2020-12-01',
          NumberOfPersonnel: '50',
          NumberOfVehicles: '10'
        },
        {
          data: '2020-12-01',
          NumberOfPersonnel: '50',
          NumberOfVehicles: '10'
        }
      ],
      currentPage: 1
    }
  },
  mounted () {
  },
  methods: {
    onSubmit () {},
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style lang="less">
.mwidth {
  .header-title {
    font-size: 16px;
    font-weight: 500;
  }
  .text-al {
    text-align: center;
    /deep/.el-range-separator {
      padding: 0 2px;
    }
    .bgc {
      border: 1px #9cf !important;

      background-color: #9cf !important;
    }
  }
  .mt-10 {
    .headerbtn {
      text-align: end;
    }
  }
}
</style>
<style lang="less" scoped>
.over-f {
  overflow: visible !important;
}
/deep/.area-select {
  span {
    line-height: 34px;
    padding: 0px 15px !important;
  }
}
</style>
