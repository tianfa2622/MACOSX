<template>
  <div class="fill_height mwidth dflex direction-column back-c">
    <el-card>
      <div slot="header" class="clearfix">
        <span class="header-title">查控统计</span>
      </div>
      <el-form
        :model="formInline"
        label-width="130px"
        :inline="true"
        class="text-al"
      >
        <el-form-item>
          <el-select
            v-model="formInline.ControlType"
            placeholder="请选择查控类型"
            class="w250"
          >
            <el-option label="车辆查控" value="shanghai"></el-option>
            <el-option label="人员查控" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="起始日期：">
          <el-date-picker
            v-model="formInline.timeLimit"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item class="ml-15">
          <el-button @click="onSubmit" type="primary">搜索</el-button>
          <el-button
            @click="onSubmit"
            type="primary"
            class="ml-25 p-15 w100 bgc"
            >导出</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>

    <el-card class="mt-10 pb-30 flex1 fill_height" body-style="height: 100%">
      <EchartsPackage :option="ControlStatistics"></EchartsPackage>
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
        timeLimit: ''
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
      }
    }
  },
  mounted () {
  },
  methods: {
    onSubmit () { }
  }
}
</script>
<style lang="less" >
.header-title {
  font-size: 16px;
  font-weight: 500;
}
</style>
