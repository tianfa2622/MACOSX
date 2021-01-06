// 战果物品统计

const options = {
  // backgroundColor: '#00265f',
  title: {
    text: '物品统计',
    x: 'center',
    y: '4%',
    textStyle: {
      color: '#000',
      fontSize: '22'
    },
    subtextStyle: {
      color: '#000',
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
    right: '4%',
    left: '4%',
    bottom: '12%'
  },
  xAxis: [{
    type: 'category',
    data: ['易燃易爆', '枪支弹药', '管制刀具', '反动宣传品', '毒品', '重点人员', '重点车辆', '超载'],
    axisLine: {
      show: true,
      lineStyle: {
        color: '#000'
      }
    },
    axisLabel: {
      // margin: 10,
      color: '#000',
      textStyle: {
        fontSize: 11
      }
    }
  }],
  yAxis: [{
    name: '数量/起',
    axisLabel: {
      formatter: '{value}',
      color: '#000'
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: '#000'
      }
    },
    splitLine: {
      lineStyle: {
        color: '#ccc'
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
        width: 65,
        height: 30,
        backgroundColor: '#ccc',
        borderRadius: 200,
        position: ['-6', '-60'],
        distance: 1,
        formatter: [
          '    {d|●}',
          ' {a|{c} 起}     \n',
          '    {b|}'
        ].join(''),
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
