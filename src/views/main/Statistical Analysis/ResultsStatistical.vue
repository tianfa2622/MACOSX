<template>
  <div class="fill_height mwidth">
    <div class="tit">战果统计</div>
    <el-tabs type="border-card" class="tabs-height">
      <el-tab-pane label="按物品" class="fill_height dflex direction-column">
        <el-form
          :model="formInline"
          label-width="130px"
          :inline="true"
          class="text-al"
        >
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
        <div class="mt-10 fill_height mwidth">
          <div id="vehiclECharts" style="width: 100%; height: 100%"></div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="按区域" class="fill_height dflex direction-column">
        <el-card>
          <el-form
            :model="formInline"
            label-width="130px"
            :inline="true"
            class="text-al"
          >
            <el-form-item label="">
              <el-select
                v-model="formInline.province"
                placeholder="省"
                class="ml-10 w100"
              >
                <el-option label="湖南省" value="shanghai"></el-option>
                <el-option label="广东省" value="beijing"></el-option>
              </el-select>
              <el-select
                v-model="formInline.city"
                placeholder="市"
                class="ml-10 w100"
              >
                <el-option label="长沙市" value="shanghai"></el-option>
                <el-option label="衡阳市" value="beijing"></el-option>
              </el-select>
              <el-select
                v-model="formInline.Area"
                placeholder="区"
                class="ml-10 w100"
              >
                <el-option label="雨花区" value="shanghai"></el-option>
                <el-option label="宝安区" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="起始日期：">
              <el-date-picker
                v-model="formInline.timeLimit1"
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
        <el-card class="mt-10 flex1 fill_height" body-style="height: 100%">
          <div id="vehiclECharts1" style="width: 100%; height: 100%"></div>
        </el-card>
      </el-tab-pane>
    </el-tabs>
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
        timeLimit: '',
        timeLimit1: '',
        province: '',
        city: '',
        Area: ''
      }
    }
  },
  mounted () {
    this.drawLine()
    this.drawLine1()
  },
  methods: {
    onSubmit () {},
    drawLine () {
      document.getElementById('vehiclECharts').style.width = window.innerWidth / 2 + 840 + 'px'
      document.getElementById('vehiclECharts').style.height = window.innerHeight / 2 + 82 + 'px'
      // console.log(document.getElementById('vehiclECharts').style.width)
      // console.log(document.getElementById('vehiclECharts').style.height)
      const vehiclECharts = document.getElementById('vehiclECharts')
      const myChart1 = this.$echarts.init(vehiclECharts)

      myChart1.setOption({
        backgroundColor: '#00265f',
        title: {
          text: '物品统计',
          x: 'center',
          y: '4%',
          textStyle: {
            color: '#fff',
            fontSize: '22'
          },
          subtextStyle: {
            color: '#90979c',
            fontSize: '16'

          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          top: '15%',
          right: '3%',
          left: '5%',
          bottom: '12%'
        },
        xAxis: [{
          type: 'category',
          data: ['易燃易爆', '枪支弹药', '管制刀具', '反动宣传品', '毒品', '重点人员', '重点车辆', '超载'],
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,0.12)'
            }
          },
          axisLabel: {
            margin: 10,
            color: '#e2e9ff',
            textStyle: {
              fontSize: 14
            }
          }
        }],
        yAxis: [{
          name: '数量/起',
          axisLabel: {
            formatter: '{value}',
            color: '#e2e9ff'
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,1)'
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255,255,255,0.12)'
            }
          }
        }],
        series: [{
          type: 'bar',
          data: [5, 1, 10, 10, 10, 20, 33, 56],
          barWidth: '20px',
          itemStyle: {
            normal: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0,
                  color: 'rgba(0,244,255,1)' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: 'rgba(0,77,167,1)' // 100% 处的颜色
                }],
                global: false
              },

              barBorderRadius: [30, 30, 30, 30],
              shadowColor: 'rgba(0,160,221,1)',
              shadowBlur: 4
            }
          },
          label: {
            normal: {
              show: true,
              lineHeight: 30,
              width: 80,
              height: 30,
              backgroundColor: 'rgba(0,160,221,0.1)',
              borderRadius: 200,
              position: ['-8', '-60'],
              distance: 1,
              formatter: [
                '    {d|●}',
                ' {a|{c} 起}     \n',
                '    {b|}'
              ].join(','),
              rich: {
                d: {
                  color: '#3CDDCF'
                },
                a: {
                  color: '#fff',
                  align: 'center'
                },
                b: {
                  width: 1,
                  height: 30,
                  borderWidth: 1,
                  borderColor: '#234e6c',
                  align: 'left'
                }
              }
            }
          }
        }]
      })
      window.addEventListener('resize', () => {
        console.log(window.innerHeight)
        console.log(window.innerWidth)
        myChart1.resize()
      })
    },
    drawLine1 () {
      document.getElementById('vehiclECharts1').style.width = window.innerWidth / 2 + 840 + 'px'
      document.getElementById('vehiclECharts1').style.height = window.innerHeight / 2 + 'px'
      const myChart2 = this.$echarts.init(document.getElementById('vehiclECharts1'))
      myChart2.setOption({
        backgroundColor: '#12193a',
        color: ['#f0c725', '#16f892'],
        title: {
          left: 'center',
          text: '区域统计',
          textStyle: {
            color: '#FFFFFF',
            fontSize: '14'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['易燃易爆', '枪支弹药', '管制刀具', '反动宣传品', '毒品', '重点人员', '重点车辆', '超载'],
          x: 'center',
          top: '25',
          textStyle: {
            color: '#c1cadf',
            fontSize: 10
          }
        },
        grid: {
          left: '6%',
          right: '4%',
          top: '25%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['xx检查站', 'xx检查站', 'xx检查站', 'xx检查站', 'xx检查站', 'xx检查站', 'xx检查站', 'xx检查站'],
            axisLine: {
              lineStyle: {
                color: '#8f8082'
              }
            },
            axisLabel: {
              interval: 0,
              color: '#c1cadf'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '(数量/起)',
            nameTextStyle: {
              color: '#c1cadf',
              align: 'right',
              lineHeight: 10
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(240,199,37,0.5)'
              }
            },
            axisLabel: {
              interval: 0,
              color: '#c1cadf'
            }
          }
        ],
        series: [
          {
            name: '易燃易爆',
            type: 'line',
            smooth: true,
            symbolSize: 8,
            data: [430, 400, 428, 440, 360, 300, 350, 330],
            barWidth: '30%',
            itemStyle: { normal: { color: '#9e3030' } }
          }, {
            name: '枪支弹药',
            type: 'line',
            smooth: true,
            symbolSize: 8,
            data: [510, 502, 600, 640, 500, 430, 580, 570],
            barWidth: '30%',
            itemStyle: { normal: { color: '#16f892' } }
          }, {
            name: '管制刀具',
            type: 'line',
            smooth: true,
            symbolSize: 8,
            data: [900, 780, 850, 1110, 960, 630, 890, 990],
            barWidth: '30%',
            itemStyle: { normal: { color: '#6699a8' } }
          }, {
            name: '反动宣传品',
            type: 'line',
            smooth: true,
            symbolSize: 8,
            data: [1200, 1250, 1180, 1400, 1360, 1060, 1320, 1460],
            barWidth: '30%',
            itemStyle: { normal: { color: '#cf8266' } }
          }, {
            name: '毒品',
            type: 'line',
            smooth: true,
            symbolSize: 8,
            data: [1520, 1540, 1480, 1750, 1670, 1300, 1600, 1700],
            barWidth: '30%',
            itemStyle: { normal: { color: '#8fc5b5' } }
          }, {
            name: '重点人员',
            type: 'line',
            smooth: true,
            symbolSize: 8,
            data: [1800, 1750, 1780, 2080, 1930, 1680, 1830, 1940],
            barWidth: '30%',
            itemStyle: { normal: { color: '#6e947d' } }
          }, {
            name: '重点车辆',
            type: 'line',
            smooth: true,
            symbolSize: 8,
            data: [2200, 2150, 2340, 2400, 2280, 1830, 2280, 2300],
            barWidth: '30%',
            itemStyle: { normal: { color: '#c68333' } }
          }, {
            name: '超载',
            type: 'line',
            smooth: true,
            symbolSize: 8,
            data: [2420, 2490, 2496, 2780, 2650, 2330, 2590, 2500],
            barWidth: '30%',
            itemStyle: { normal: { color: '#be9d9c' } }
          }

        ]
      })
      window.addEventListener('resize', () => {
        myChart2.resize()
      })
    }
  }
}
</script>

<style lang='less'>
.mwidth {
  .tit {
    font-size: 16px;
    margin-bottom: 7px;
  }
  .tabs-height {
    height: calc(100% - 28px);
  }
}
</style>
<style lang="less">
.mwidth {
  .tabs-height {
    /deep/.el-tabs__content {
      height: calc(100% - 39px);
    }
  }
}
</style>
