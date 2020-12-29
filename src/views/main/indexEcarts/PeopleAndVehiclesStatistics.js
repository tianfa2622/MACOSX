// 当日人车统计
const bgColor = '#fff'
// const title = 'ss'
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
// const total = echartData.reduce((a, b) => {
//   return a + b.value * 1
// }, 0)

const options = {
  color: color,
  // tooltip: {
  //     trigger: 'item'
  // },
  title: [{
    text: '当日人车统计',
    top: '5%',
    x: 'center',
    textStyle: {
      fontSize: 16,
      color: '#0092f6',
      fontWeight: 700
    }
  }],
  series: [{
    type: 'pie',
    radius: ['25%', '50%'],
    center: ['50%', '50%'],
    data: echartData,
    hoverAnimation: true,
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
          color: '#cfb31d'
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
            color: '#cfb31d'
          },
          value: {
            fontSize: 18,
            fontWeight: 'bold',
            color: '#cfb31d'
          }
        }
      }
    }
  }]
}
export default options
