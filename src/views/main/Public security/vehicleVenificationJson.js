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
      name: '车证比对结果',
      type: 'pie',
      radius: ['40%', '55%'],
      data: [
        { value: 335, name: '正常' },
        { value: 310, name: '一级预警' },
        { value: 234, name: '二级预警' },
        { value: 135, name: '三级预警' }
      ]
    }
  ]
}
export default options
