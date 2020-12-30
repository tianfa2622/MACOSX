// 战果物品统计

const options = {
  // backgroundColor: '#00265f',
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
}
export default options
