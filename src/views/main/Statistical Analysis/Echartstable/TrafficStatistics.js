
const options = {
  title: {
    text: '通行统计'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['车', '人']
  },

  calculable: true,
  xAxis: [
    {
      type: 'category',
      data: ['2020-12-1', '2020-12-2', '2020-12-3', '2020-12-4', '2020-12-5', '2020-12-6', '2020-12-7']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: '车',
      type: 'bar',
      data: [10, 9, 13, 17, 15, 12, 16],
      markPoint: {
        data: [
          { type: 'max', name: '最大值' },
          { type: 'min', name: '最小值' }
        ]
      },
      markLine: {
        data: [
          { type: 'average', name: '平均值' }
        ]
      }
    },
    {
      name: '人',
      type: 'bar',
      data: [50, 45, 33, 43, 53, 47, 40],
      markPoint: {
        data: [
          { type: 'max', name: '最大值' },
          { type: 'min', name: '最小值' }
        ]
      },
      markLine: {
        data: [
          { type: 'average', name: '平均值' }
        ]
      }
    }
  ]
}
export default options
