// 交通流程图
option = {
  backgroundColor: '#00265f',
  title: [{
    text: '民警数量',
    x: 'center',
    y: '4%',
    textStyle: {
      color: '#fff',
      fontSize: '14'
    }
  }, {
    text: '装备情况',
    x: '6%',
    y: 'center',
    textStyle: {
      color: '#fff',
      fontSize: '14'
    }
  }],
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
    bottom: '50%'
  },
  xAxis: [{
    type: 'category',
    data: ['芙蓉区', '雨花区', '天心区', '开福区'],
    axisLine: {
      lineStyle: {
        color: '#fff'
      }
    },
    axisLabel: {
      margin: 5,
      color: '#e2e9ff',
      textStyle: {
        fontSize: 14
      }
    }
  }],
  yAxis: [{
    name: '单位：个',
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
    data: [100, 340, 230, 54],
    barWidth: '20px',
    itemStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(0,244,255,1)' // 0% 处的颜色
        }, {
          offset: 1,
          color: 'rgba(0,77,167,1)' // 100% 处的颜色
        }], false),
        barBorderRadius: [30, 30, 30, 30],
        shadowColor: 'rgba(0,160,221,1)',
        shadowBlur: 4
      }
    },
    label: {
      normal: {
        show: true,
        lineHeight: 30,
        width: 60,
        height: 30,
        backgroundColor: 'rgba(0,160,221,0.1)',
        borderRadius: 200,
        position: 'top',
        distance: 1,
        formatter: [
          '    {d|●}',
          ' {a|{c}}     \n'
        ].join(''),
        rich: {
          d: {
            color: '#3CDDCF'
          },
          a: {
            color: '#fff',
            align: 'center'
          }
        }
      }
    }
  },
  {
    name: '装备情况',
    type: 'pie',
    center: ['50%', '50%'],
    radius: ['20%', '45%'],
    roseType: 'radius',
    data: [{
      value: 50,
      name: '防弹衣'
    },
    {
      value: 100,
      name: '防爆盾'
    },
    {
      value: 34,
      name: '安检机器'
    },
    {
      value: 230,
      name: '扫描仪'
    }
    ],
    label: {
      fontSize: 10,
      formatter(params) {
        return params.percent + '%'
      }
    },
    labelLine: {
      length: 10,
      length2: 10
    }
  }
  ]
}
