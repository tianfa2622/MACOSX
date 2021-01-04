<template>
  <!-- 查控统计 -->
  <div class="fill_height mwidth dflex direction-column back-c">
    <el-card class="over-f">
      <div slot="header" class="clearfix">
        <span class="header-title">查控统计</span>
      </div>
      <el-form
        size="medium"
        :model="formInline"
        label-width="90px"
        :inline="true"
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
        <el-form-item label="查控类型：">
          <el-select
            v-model="formInline.ControlType"
            placeholder="请选择查控类型"
          >
            <el-option label="车辆查控" value="shanghai"></el-option>
            <el-option label="人员查控" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="起始日期：">
          <el-date-picker
            v-model="formInline.timeLimit"
            class="w320"
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
          <el-button @click="onSubmit" type="primary" class="ml-25 w100 bgc"
            >导出</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>

    <el-card class="mt-10 pb-30 flex1 fill_height" body-style="height: 100%">
      <div class="w-100 h-100 dflex">
        <div class="w-50 h-100">
          <EchartsPackage :option="ControlStatistics"></EchartsPackage>
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
              prop="normal"
              :resizable="false"
              label="正常"
            ></el-table-column>
            <el-table-column
              prop="Warning"
              :resizable="false"
              label="预警"
            ></el-table-column>
            <el-table-column
              prop="LiftTheWarning"
              label="解除预警"
              :resizable="false"
            >
            </el-table-column>
            <el-table-column prop="total" label="总数" :resizable="false">
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
import ControlStatistics from './Echartstable/ControlStatistics'
export default {
  components: {
    EchartsPackage
  },
  data () {
    return {
      ControlStatistics,
      formInline: {
        ControlType: '',
        timeLimit: '',
        selected: []
      },
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
      tableData: [
        {
          data: '2020-12-01',
          normal: '10',
          Warning: '15',
          LiftTheWarning: '25',
          total: '50'
        }, {
          data: '2020-12-01',
          normal: '10',
          Warning: '15',
          LiftTheWarning: '25',
          total: '50'
        }, {
          data: '2020-12-01',
          normal: '10',
          Warning: '15',
          LiftTheWarning: '25',
          total: '50'
        }
      ],
      currentPage: 1
    }
  },
  mounted () {
  },
  methods: {
    onSubmit () { },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
<style lang="less" >
.header-title {
  font-size: 16px;
  font-weight: 500;
}
.content-h {
  height: calc(100% - 64px);
}
</style>
<style lang="less" scoped>
.over-f {
  overflow: visible !important;
}
/deep/.area-select {
  span {
    line-height: 32px;
    padding: 0px 15px !important;
  }
}
</style>
