const options = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  legend: {
    top: 10,
    data: ['正常', '一级预警', '二级预警', '三级预警']
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: ['40%', '55%'],
      itemStyle: {
        normal: {
          label: {
            textStyle: {
              fontSize: 12,
              color: '#000'
            }
          }
        }
      },
      data: [
        { value: 335, name: '正常', itemStyle: { color: '#044aa2' } },
        { value: 310, name: '一级预警', itemStyle: { color: '#ffff00' } },
        { value: 234, name: '二级预警', itemStyle: { color: '#ff8800' } },
        { value: 135, name: '三级预警', itemStyle: { color: '#e74c3c' } }
      ],
      labelLine: {
        normal: {
          length: 8,
          length2: 8
        }
      }
    }
  ]
}
export default options
