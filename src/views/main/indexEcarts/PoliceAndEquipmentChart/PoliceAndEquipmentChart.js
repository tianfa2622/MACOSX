import echarts from 'echarts'
// 民警数量和装备情况
var classData = [{
  name: '芙蓉区',
  value: 100
},
{
  name: '雨花区',
  value: 340
},
{
  name: '天心区',
  value: 230
},
{
  name: '重点车辆',
  value: 54
}
]
var equipment = [
  { name: '防弹衣', value: 50 },
  { name: '防爆盾', value: 100 },
  { name: '安检机器', value: 34 },
  { name: '扫描仪', value: 230 }
]
var colors = ['#ec710f', '#1f8fff', '#34d5fc', '#7bed9f', '#ff5252']
// var total = 0 // 总计
// var legendData =
// classData.map(function (item, i) {
//   // 增加随机颜色, 防止固定给的颜色不够造成重复
//   if (colors.length <= i) colors.push(getRandomColor())
//   // total += item.value
//   return item.name
// })
var i = 0
var xAxisData = []
// var seriesData = []
while (i < 4) {
  xAxisData.push(classData[i].name)
  // seriesData.push(classData[i])
  i++
}

const option = {
  // backgroundColor: '#0e4b86',
  color: colors,
  title: [
    {
      text: '民警数量',
      top: '1%',
      left: '50%',
      textStyle: {
        fontSize: 14,
        color: '#52FFFF'
      }
    },
    {
      text: '装备情况',
      bottom: '35%',
      left: '20%',
      textStyle: {
        fontSize: 14,
        color: '#52FFFF'
      }
    }
  ],
  tooltip: {
    trigger: 'item',
    formatter: function (e) {
      return e.marker + e.name + '：' + e.value + ' 个'
    }
  },
  // legend: [{
  //   // type: 'scroll',
  //   // orient: 'vertical',
  //   // bottom: '10%',
  //   // left: '20%',
  //   // itemWidth: 10,
  //   // itemHeight: 10,
  //   // height: '25%',
  //   // itemGap: 7,
  //   // textStyle: {
  //   //   fontSize: 14,
  //   //   color: '#fff'
  //   // }
  //   // pageButtonItemGap: 10, // 按钮和页信息之间的间隔
  //   // pageButtonGap: 10, // 控制块和图例项之间的间隔
  //   // pageIconInactiveColor: 'orange', // 按钮未激活颜色
  //   // pageIconColor: 'red', // 按钮颜色
  //   // pageIconSize: [15, 30], // 翻页按钮的大小 [宽, 高]
  //   // pageTextStyle: {
  //   // color: '#fff',
  //   // fontSize: 16
  //   // },
  //   // data: legendData
  // }],
  grid: {
    left: '10%',
    right: '2%',
    top: '10%',
    height: '48%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    axisLine: {
      show: true, // X轴线不显示
      color: '#fff',
      lineStyle: {
        color: '#fff'
      }
    },
    axisTick: {
      show: true // 是否显示坐标轴刻度
    },
    data: xAxisData,
    axisLabel: {
      show: true,
      interval: 0,
      textStyle: {
        color: '#fff',
        fontSize: 12
      }
    }
  },
  yAxis: {
    // splitNumber: 100, // 控制Y轴数值显示数量
    axisLine: {
      show: true, // Y轴线不显示
      lineStyle: {
        color: '#fff'
      }
    },
    axisTick: {
      show: true // 是否显示坐标轴刻度
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: 'orange', // 分割线背景色
        width: 1 // 分割线宽度
      }
    },
    axisLabel: {
      show: true,
      textStyle: {
        color: '#fff',
        fontSize: 12
      }
    }
  },
  series: [{
    name: '饼图',
    type: 'pie',
    radius: ['15%', '30%'], // 大小缩放
    center: ['60%', '80%'], // 位置调整
    label: {
      normal: {
        show: true // 线
      },
      emphasis: {
        show: false
      }
    },
    data: equipment,
    zlevel: 5
  },
  // {
  //   name: '设置总计的方式',
  //   type: 'pie',
  //   radius: ['21%', '35%'], // 大小缩放
  //   center: ['60%', '75%'], // 位置调整
  //   data: [{
  //     // name: '总计',
  //     // value: total,
  //     label: {
  //       normal: {
  //         show: true,
  //         formatter: '{title|总计}\n{total|' + total + '}',
  //         lineHeight: 20,
  //         rich: {
  //           title: {
  //             color: '#fff',
  //             fontSize: 14
  //             // fontWeight: 'bold'
  //           },
  //           total: {
  //             color: '#fff',
  //             fontSize: 14
  //             // fontWeight: 'bold'
  //           }
  //         },
  //         position: 'center'
  //       },
  //       emphasis: {
  //         show: true
  //       }
  //     },
  //     itemStyle: {
  //       opacity: 0
  //     },
  //     tooltip: {
  //       show: false
  //     }
  //   }]
  // },
  {
    name: '柱形',
    type: 'bar', // 柱子的形状
    barWidth: 30, // 柱子的宽度
    itemStyle: { // 柱子圆角
      barBorderRadius: [30, 30, 30, 30],
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: 'rgba(0,244,255,1)' // 0% 处的颜色
      }, {
        offset: 1,
        color: 'rgba(0,77,167,1)' // 100% 处的颜色
      }], false),
      shadowColor: 'rgba(0,160,221,1)',
      shadowBlur: 4
    },
    // tooltip: {
    //   trigger: 'item',
    //   formatter: function (e) {
    //     return e.marker + e.name + '：' + e.value + '小时'
    //   }
    // },
    data: classData,
    label: { // 柱子顶部数据
      show: true,
      position: 'top',
      color: '#fff'
      // formatter:
    }
  }]
}

// 随机生成颜色
// eslint-disable-next-line space-before-function-paren
// function getRandomColor() {
//   return '#' + (function (color) {
//     return (color += '0123456789abcdef'[Math.floor(Math.random() * 16)]) &&
//       // eslint-disable-next-line no-caller
//       (color.length === 6) ? color : arguments.callee(color)
//   })('')
// }
export default option
