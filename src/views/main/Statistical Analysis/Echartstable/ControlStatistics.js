var xData = (function () {
  var data = ['2020-12-01', '2020-12-02', '2020-12-03', '2020-12-04', '2020-12-05', '2020-12-06', '2020-12-07']
  return data
}())

const options = {
  // backgroundColor: '#dfe4ea',
  title: {
    text: '车辆查控',
    x: '4%',
    y: '4%',

    textStyle: {
      color: '#000',
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
    top: '2%',
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
}
export default options
