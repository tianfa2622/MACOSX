<template>
  <!-- 通行统计 -->
  <div class="fill_height mwidth dflex direction-column back-c">
    <el-card>
      <div slot="header" class="clearfix">
        <span class="header-title">通行统计</span>
      </div>
      <el-form
        :model="formInline"
        label-width="130px"
        :inline="true"
        class="text-al"
        size="medium"
      >
        <el-form-item>
          <el-select
            v-model="formInline.OwnedCheckpoint"
            placeholder="请选择检查站"
            class="w250"
          >
            <el-option label="部门一" value="shanghai"></el-option>
            <el-option label="部门二" value="beijing"></el-option>
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

    <el-card class="mt-10 pb-10 flex1 fill_height" body-style="height: 100%">
      <div slot="header" class="headerbtn">
        <el-button @click="onSubmit" type="primary" size="mini">天</el-button>
        <el-button @click="onSubmit" type="primary" size="mini">周</el-button>
        <el-button @click="onSubmit" type="primary" size="mini">月</el-button>
        <el-button @click="onSubmit" type="primary" size="mini">年</el-button>
      </div>
      <EchartsPackage :option="TrafficStatistics"></EchartsPackage>
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
        timeLimit: ''
      }
    }
  },
  mounted () {
  },
  methods: {
    onSubmit () {}
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
      border: #9cf !important;

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
