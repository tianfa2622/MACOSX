// 战果区域统计

const options = {
  // backgroundColor: '#12193a',
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
}
export default options
