// 车辆验证
const data = [{
  name: '过站车辆',
  value: 62,
  itemStyle: { color: '#00ff33' }
},
{
  name: '重点人员',
  value: 7,
  itemStyle: { color: '#ff0000' }
},
{
  name: '未核查人员',
  value: 20,
  itemStyle: { color: '#bcbcbc' }
}
]
const option = {
  title: {
    text: '{header1| 今日核查}' + '{header2| 2020}',
    textAlign: 'left',
    left: '53%',
    top: '20%',
    textStyle: {
      color: '#ccc',
      rich: {
        header1: {
          width: 130,
          fontSize: 15
        },
        header2: {
          width: 85,
          fontSize: 15
        }
      }
    }
  },
  legend: {
    // selectedMode: false, // 取消图例上的点击事件
    type: 'plain',
    icon: 'circle',
    orient: 'vertical',
    left: '50%',
    top: '35%',
    align: 'left',
    itemGap: 15,
    itemWidth: 10, // 设置宽度
    itemHeight: 10, // 设置高度
    symbolKeepAspect: false,
    textStyle: {
      color: '#fff',
      rich: {
        name: {
          verticalAlign: 'right',
          align: 'left',
          width: 80,
          fontSize: 12
        },
        value: {
          align: 'left',
          width: 70,
          fontSize: 12
        },
        count: {
          align: 'left',
          width: 60,
          fontSize: 12
        }
      }
    },
    data: data.map(item => item.name),
    formatter: function (name) {
      if (data && data.length) {
        for (var i = 0; i < data.length; i++) {
          if (name === data[i].name) {
            return (
              '{name| ' +
              name +
              '}  ' +
              '{count| ' +
              Number(4544).toLocaleString() + ' 个' +
              '} ' + '{value| ' +
              data[i].value +
              ' %}'
            )
          }
        }
      }
    }
  },
  series: [{
    name: '数量',
    type: 'pie',
    radius: ['40%', '55%'],
    center: ['25%', '50%'],
    data: data,
    label: {
      normal: {
        show: false,
        position: 'center',
        formatter: '{text|{c}}\n{b}',
        //     textStyle: {
        // //   rich: {
        // //     name: {
        // //       fontSize: 16,
        // //       fontWeight: 'normal',
        // //       color: '#666666',
        // //       padding: [10, 0]
        // //     },
        // //     val: {
        // //       fontSize: 16,
        // //       fontWeight: 'bold',
        // //       color: '#333333'
        // //     }
        // //   }
        // // }
        rich: {
          text: {
            align: 'center',
            verticalAlign: 'middle',
            padding: 8,
            fontSize: 30
          },
          value: {
            align: 'center',
            verticalAlign: 'middle',
            fontSize: 20
          }
        }
      },
      emphasis: {
        show: true,
        textStyle: {
          fontSize: '12'
        }
      }
    },
    labelLine: {
      normal: {
        show: true
      }
    }
  }]
}
export default option

// var m2R2Data = [{
//   value: 335,
//   legendname: '种类01',
//   name: '种类01  335个  62%',
//   itemStyle: {
//     color: '#8d7fec'
//   }
// },
// {
//   value: 310,
//   legendname: '种类02',
//   name: '种类02  310个  7%',
//   itemStyle: {
//     color: '#5085f2'
//   }
// },
// {
//   value: 234,
//   legendname: '种类03',
//   name: '种类03  234个 3.2%',
//   itemStyle: {
//     color: '#e75fc3'
//   }
// }

// ]

// option = {
//   title: [{
//     text: '标题',
//     textStyle: {
//       fontSize: 16,
//       color: 'black'
//     },
//     left: '2%'
//   },
//   {
//     text: '同比',
//     subtext: 2.3 + '%',
//     textStyle: {
//       fontSize: 20,
//       color: 'black'
//     },
//     subtextStyle: {
//       fontSize: 20,
//       color: 'black'
//     },
//     textAlign: 'center',
//     x: '34.5%',
//     y: '44%'
//   }
//   ],
//   tooltip: {
//     trigger: 'item',
//     formatter: function (parms) {
//       var str = parms.seriesName + '</br>' +
//         parms.marker + '' + parms.data.legendname + '</br>' +
//         '数量：' + parms.data.value + '</br>' +
//         '占比：' + parms.percent + '%'
//       return str
//     }
//   },
//   legend: {
//     type: 'scroll',
//     orient: 'vertical',
//     left: '70%',
//     align: 'left',
//     top: 'middle',
//     textStyle: {
//       color: '#8C8C8C'
//     },
//     height: 250
//   },
//   series: [{
//     name: '标题',
//     type: 'pie',
//     center: ['35%', '50%'],
//     radius: ['40%', '65%'],
//     clockwise: false, // 饼图的扇区是否是顺时针排布
//     avoidLabelOverlap: false,
//     label: {
//       normal: {
//         show: true,
//         position: 'outter',
//         formatter: function (parms) {
//           return parms.data.legendname
//         }
//       }
//     },
//     labelLine: {
//       normal: {
//         length: 5,
//         length2: 3,
//         smooth: true
//       }
//     },
//     data: m2R2Data
//   }]
// }
