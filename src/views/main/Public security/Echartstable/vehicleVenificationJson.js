const options = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  legend: {
    top: 10,
    data: ['正常', '蓝色预警', '黄色预警', '橙色预警', '红色预警']
  },
  series: [
    {
      name: '车证比对结果',
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
        { value: 335, name: '正常', itemStyle: { color: '#ccc' } },
        { value: 335, name: '蓝色预警', itemStyle: { color: '#044aa2' } },
        { value: 310, name: '黄色预警', itemStyle: { color: '#ffff00' } },
        { value: 234, name: '橙色预警', itemStyle: { color: '#ff8800' } },
        { value: 135, name: '红色预警', itemStyle: { color: '#e74c3c' } }
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
