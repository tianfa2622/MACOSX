const bgColor = '#fff'
const title = 'ss'
const color = ['#0E7CE2', '#FF8352', '#E271DE']
const echartData = [{
  name: '安检大厅流量',
  value: '1231'
},
{
  name: '列车人员',
  value: '143'
},
{
  name: '车道人员',
  value: '231'
}
]

const formatNumber = function (num) {
  const reg = /(?=(\B)(\d{3})+$)/g
  return num.toString().replace(reg, ',')
}
const total = echartData.reduce((a, b) => {
  return a + b.value * 1
}, 0)

const options = {
  backgroundColor: bgColor,
  color: color,
  // tooltip: {
  //     trigger: 'item'
  // },
  title: [{
    text: '{name|' + title + '}\n{val|' + formatNumber(total) + '}',
    top: 'center',
    left: 'center',
    textStyle: {
      rich: {
        name: {
          fontSize: 14,
          fontWeight: 'normal',
          color: '#666666',
          padding: [10, 0]
        },
        val: {
          fontSize: 32,
          fontWeight: 'bold',
          color: '#333333'
        }
      }
    }
  }, {
    text: '当日人车统计',
    top: 20,
    left: 20,
    textStyle: {
      fontSize: 14,
      color: '#666666',
      fontWeight: 400
    }
  }],
  series: [{
    type: 'pie',
    radius: ['45%', '60%'],
    center: ['50%', '50%'],
    data: echartData,
    hoverAnimation: false,
    itemStyle: {
      normal: {
        borderColor: bgColor,
        borderWidth: 2
      }
    },
    labelLine: {
      normal: {
        length: 20,
        length2: 120,
        lineStyle: {
          color: '#e6e6e6'
        }
      }
    },
    label: {
      normal: {
        formatter: params => {
          return (
            '{icon|●}{name|' + params.name + '}{value|' +
            formatNumber(params.value) + '}'
          )
        },
        padding: [0, -100, 25, -100],
        rich: {
          icon: {
            fontSize: 16
          },
          name: {
            fontSize: 14,
            padding: [0, 10, 0, 4],
            color: '#666666'
          },
          value: {
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333333'
          }
        }
      }
    }
  }]
}
export default options
