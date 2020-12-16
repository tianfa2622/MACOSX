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
      <div id="vehiclECharts" style="width: 100%; height: 100%"></div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
    this.drawLine()
  },
  methods: {
    onSubmit () { },
    drawLine () {
      const myChart1 = this.$echarts.init(document.getElementById('vehiclECharts'))
      var xData = (function () {
        var data = ['2020-12-01', '2020-12-02', '2020-12-03', '2020-12-04', '2020-12-05', '2020-12-06', '2020-12-07']
        return data
      }())
      myChart1.setOption({
        backgroundColor: '#344b58',
        title: {
          text: '车辆查控',
          x: '4%',
          y: '4%',

          textStyle: {
            color: '#fff',
            fontSize: '22'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            textStyle: {
              color: '#ffffff'
            }

          }
        },
        legend: {
          x: '50%',
          top: '8%',
          textStyle: {
            color: '#90979c'
          },
          data: ['总数', '正常', '预警', '解除预警']
        },
        calculable: true,
        xAxis: [{
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#90979c'
            }
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitArea: {
            show: false
          },
          axisLabel: {
            interval: 0

          },
          data: xData
        }],
        yAxis: [{
          type: 'value',
          splitLine: {
            show: true
          },
          axisLine: {
            lineStyle: {
              color: '#90979c'
            }
          },
          axisTick: {
            show: true
          },
          axisLabel: {
            interval: 0

          },
          splitArea: {
            show: false
          }

        }],
        series: [{
          name: '解除预警',
          type: 'bar',
          barMaxWidth: 35,
          barGap: '10%',
          itemStyle: {
            normal: {
              color: '#e4323e',
              label: {
                show: true,
                textStyle: {
                  color: '#fff'
                },
                position: 'insideRight'
              }
            }
          },
          data: [25, 15, 10, 18, 19, 14, 18]
        },
        {
          name: '正常',
          type: 'bar',
          barMaxWidth: 35,
          itemStyle: {
            normal: {
              color: '#006699',
              label: {
                show: true
              }
            }
          },
          data: [10, 9, 12, 16, 14, 12, 15]
        }, {
          name: '总数',
          type: 'bar',
          barMaxWidth: 35,
          itemStyle: {
            normal: {
              color: '#009987',
              barBorderRadius: 0,
              label: {
                show: true
              }
            }
          },
          data: [50, 45, 32, 42, 52, 46, 40]
        }, {
          name: '预警',
          type: 'bar',
          barMaxWidth: 35,
          itemStyle: {
            normal: {
              color: '#4caace',
              barBorderRadius: 0,
              label: {
                show: true
              }
            }
          },
          data: [15, 16, 10, 18, 16, 13, 16]
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
<style lang="less" >
.header-title {
  font-size: 16px;
  font-weight: 500;
}
</style>
