<template>
  <div class="fill_height dflex justify-between">
    <!-- 内容区域开始 -->
    <!-- 左侧内容区域 -->
    <div class="fill_height flex1 dflex direction-column">
      <!-- 左侧顶部通行统计区域-->
      <el-card class="flex1 dflex direction-column box-card">
        <div slot="header" class="clearfix cardhead" style="font-size: 18px">
          <span class="cardtext">通行统计</span>
          <el-button class="cardbtn" type="text">更多>></el-button>
        </div>
        <div id="mainLeftTop" style="width: 100%; height: 100%"></div>
      </el-card>
      <!-- 左侧底部查控统计区域-->
      <el-card class="flex1 dflex direction-column mt-10 box-card">
        <div slot="header" class="clearfix cardhead" style="font-size: 18px">
          <span class="cardtext">查控统计</span>
          <el-button class="cardbtn" type="text">更多>></el-button>
        </div>
        <div id="mainLeftBottom" style="width: 100%; height: 100%"></div>
      </el-card>
    </div>
    <!-- 中间内容区域 -->
    <div class="fill_height flex1 mx-10">
      <el-card class="fill_height">
        <div slot="header" class="clearfix cardhead" style="font-size: 18px">
          <span class="cardtext">可视化</span>
          <el-button
            class="cardbtn"
            icon="el-icon-refresh"
            type="text"
            style="font-size: 18px"
          ></el-button>
        </div>
        <div id="mainLeftBottom" style="width: 100%; height: 100%"></div>
      </el-card>
    </div>
    <!-- 右侧内容区域 -->
    <div class="fill_height flex1 dflex direction-column">
      <!-- 右侧顶部战果统计区域-->
      <el-card class="flex1 dflex direction-column box-card">
        <div slot="header" class="clearfix cardhead" style="font-size: 18px">
          <span class="cardtext">战果统计</span>
          <el-button class="cardbtn" type="text">更多>></el-button>
        </div>
        <div id="mainRightTop" style="width: 100%; height: 100%"></div>
      </el-card>
      <!-- 右侧底部勤务统计区域-->
      <el-card class="flex1 dflex direction-column mt-10 box-card">
        <div slot="header" class="clearfix cardhead" style="font-size: 18px">
          <span class="cardtext">勤务统计</span>
          <el-button class="cardbtn" type="text">更多>></el-button>
        </div>
        <div id="mainRightBottom" style="width: 100%; height: 100%"></div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  mounted () {
    this.drawLine1()
    this.drawLine2()
    this.drawLine3()
    this.drawLine4()
  },
  methods: {
    drawLine1 () {
      const myChart1 = this.$echarts.init(document.getElementById('mainLeftTop'))
      myChart1.setOption({
        title: { text: '通行统计' },
        legend: {
          data: ['通行量', '未通行']
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        toolbox: {
          feature: {
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true }
          }
        },

        xAxis: {
          type: 'category',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          axisPointer: {
            type: 'shadow'
          }

        },
        yAxis: {
          type: 'value',
          min: 0,
          max: 60,
          interval: 10
        },

        series: [
          {
            name: '通行辆',
            type: 'bar',
            data: [50.2, 60, 45.3, 35.6, 46.1, 33.3, 56.6],
            itemStyle: {
              color: 'blue'
            }
          },
          {
            name: '未通行辆',
            type: 'bar',
            data: [10.2, 20, 35.3, 25.6, 16.1, 13.3, 36.6],
            itemStyle: {
              color: 'red'
            }
          }
        ]
      })
      window.addEventListener('resize', () => {
        myChart1.resize()
      })
    },

    drawLine2 () {
      const myChart2 = this.$echarts.init(document.getElementById('mainRightTop'))
      myChart2.setOption({
        title: {},
        legend: {
          data: ['通行数', '未通行数']
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        toolbox: {
          feature: {
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true }
          }
        },

        xAxis: {
          type: 'category',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          axisPointer: {
            type: 'shadow'
          }

        },
        yAxis: {
          type: 'value',
          min: 0,
          max: 60,
          interval: 10
        },

        series: [
          {
            name: '通行量',
            type: 'bar',
            data: [50.2, 60, 45.3, 35.6, 46.1, 33.3, 56.6],
            itemStyle: {
              color: 'LightGreen'
            }
          },
          {
            name: '未通行量',
            type: 'bar',
            data: [10.2, 20, 35.3, 25.6, 16.1, 13.3, 36.6],
            itemStyle: {
              color: 'red'
            }
          },
          {
            name: 'aa',
            type: 'bar',
            data: [35.2, 40, 45.3, 25.6, 36.1, 23.3, 16.6],
            itemStyle: {
              color: 'DeepSkyBlue'
            }
          },
          {
            name: 'bb',
            type: 'bar',
            data: [14.2, 10, 30.3, 45.6, 16.1, 43.3, 56.6],
            itemStyle: {
              color: 'DodgerBlue'
            }
          }
        ]
      })
      window.addEventListener('resize', () => {
        myChart2.resize()
      })
    },

    drawLine3 () {
      const myChart3 = this.$echarts.init(document.getElementById('mainRightBottom'))
      myChart3.setOption({
        title: {
          text: '人数'
        },
        legend: {
          data: ['已执勤', '未执勤']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        toolbox: {
          feature: {
            restore: { show: true }
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value',
          min: 60,
          max: 110,
          interval: 10
        },
        series: [
          {
            name: '已值勤',
            type: 'line',
            data: [90, 90, 90, 90, 90, 90, 90],
            itemStyle: {
              color: 'red'
            }
          },
          {
            name: '未值勤',
            type: 'line',
            data: [84, 86, 84, 81, 85, 83, 80],
            itemStyle: {
              color: 'SaddleBrown'
            }
          }
        ]
      })
      window.addEventListener('resize', () => {
        myChart3.resize()
      })
    },

    drawLine4 () {
      const myChart4 = this.$echarts.init(document.getElementById('mainLeftBottom'))
      myChart4.setOption({
        title: {
          text: '数量/起'
        },
        legend: {
          data: ['每月数量']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        toolbox: {
          feature: {
            restore: { show: true }
          }
        },
        xAxis: {
          type: 'category',
          data: ['易燃易爆', '管制刀具', '毒品', '重点车辆']
        },
        yAxis: {
          type: 'value',
          min: 60,
          max: 0,
          interval: 10
        },
        series: [
          {
            name: '犯罪量',
            type: 'line',
            data: [5, 1, 40, 10, 10, 20, 33, 56],
            itemStyle: {
              color: 'blue'
            }
          }
        ]
      })
      window.addEventListener('resize', () => {
        myChart4.resize()
      })
    }
  }
}
</script>

<style lang="less" scoped>
.grid-content {
  border-radius: 4px;
  min-height: 900px;
  height: 100%;
}
.bg-purple {
  background: red;
}
.box-card {
  /deep/.el-card__header {
    padding: 10px 20px;
  }
  /deep/.el-card__body {
    flex: 1;
  }
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.cardhead {
  height: 30px;
  line-height: 30px;
  .cardbtn {
    float: right;
    padding: 7px 0;
  }
}
</style>
