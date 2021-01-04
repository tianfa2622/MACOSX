const options = {
  color: ['#3398DB'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '1%',
    right: '8%',
    bottom: '4%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['违禁物品1', '违禁物品2', '违禁物品3', '违禁物品4', '违禁物品5', '违禁物品6', '违禁物品7'],
      axisTick: {
        alignWithLabel: true
      },
      axisLabel: {
        interval: 0,
        rotate: '-45'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      min: 0,
      max: 1000,
      interval: 250
    }
  ],
  series: [
    {
      name: '抓获数目',
      type: 'bar',
      barWidth: '60%',
      data: [480, 980, 765, 800, 960, 175, 625],
      label: {
        show: true,
        rotate: 0,
        position: 'top'
      }
    }
  ]
}
export default options
