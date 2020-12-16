<template>
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
      <div
        id="vehiclECharts"
        style="width: 100%; height: 100%"
        class="echart-bgc"
      ></div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
    this.drawLine()
  },
  methods: {
    onSubmit () {},
    drawLine () {
      const myChart1 = this.$echarts.init(document.getElementById('vehiclECharts'))
      myChart1.setOption({
        title: {
          text: '通行统计'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['车', '人']
        },

        calculable: true,
        xAxis: [
          {
            type: 'category',
            data: ['2020-12-1', '2020-12-2', '2020-12-3', '2020-12-4', '2020-12-5', '2020-12-6', '2020-12-7']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '车',
            type: 'bar',
            data: [10, 9, 13, 17, 15, 12, 16],
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            },
            markLine: {
              data: [
                { type: 'average', name: '平均值' }
              ]
            }
          },
          {
            name: '人',
            type: 'bar',
            data: [50, 45, 33, 43, 53, 47, 40],
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            },
            markLine: {
              data: [
                { type: 'average', name: '平均值' }
              ]
            }
          }
        ]
      })
      window.addEventListener('resize', () => {
        myChart1.resize()
      })
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
