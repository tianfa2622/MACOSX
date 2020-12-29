// 人员验证
const data = [{
  name: '核查人员',
  value: 62,
  itemStyle: { color: '#7bed9f' }
},
{
  name: '重点人员',
  value: 7,
  itemStyle: { color: '#e74c3c' }
},
{
  name: '未核查人员',
  value: 20,
  itemStyle: { color: '#ecf0f1' }
}
]
const option = {
  title: [
    {
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
    {
      text: '人员核查',
      top: '6%',
      left: '40%',
      textStyle: {
        color: '#0092f6'
      }
    }
  ],
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
    itemHeight: 8, // 设置高度
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
  tooltip: {
    trigger: 'item',
    position: [180, 20],
    borderColor: 'rgba(255,255,255,.3)',
    backgroundColor: 'rgba(13,5,30,.6)',
    borderWidth: 1,
    formatter: function (parms) {
      var str = parms.marker + '' + parms.data.name + '</br>' +
        '数量：' + parms.data.value + '</br>' +
        '占比：' + parms.percent + '%'
      return str
    }
  },
  series: [{
    name: '数量',
    type: 'pie',
    clockwise: 'true',
    avoidLabelOverlap: true, // 避免标签重叠
    radius: ['30%', '50%'],
    center: ['30%', '65%'],
    data: data,
    label: {
      normal: {
        show: true,
        position: 'outside'
        // formatter: '{text|{c}}\n{b}',
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
        // rich: {
        //   text: {
        //     align: 'center',
        //     verticalAlign: 'middle',
        //     padding: 8,
        //     fontSize: 30
        //   },
        //   value: {
        //     align: 'center',
        //     verticalAlign: 'middle',
        //     fontSize: 20
        //   }
        // }
      }
      // emphasis: {
      //   show: true,
      //   textStyle: {
      //     fontSize: '12'
      //   }
      // }
    },
    labelLine: {
      normal: {
        length: 15,
        length2: 10,
        lineStyle: {
          width: 2
        }
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
