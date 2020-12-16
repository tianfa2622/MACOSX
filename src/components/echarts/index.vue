<template>
  <div :id="elId"></div>
</template>

<script>
import echarts from 'echarts'
import UUID from 'uuid/v1'
export default {
  props: {
    option: {
      type: Object,
      default: function () {
        return {}
      },
      required: true
    }
  },
  data () {
    return {
      elId: '',
      myChart: null
    }
  },
  created () {
    this.elId = UUID()
  },
  watch: {
    option: {
      handler: function (v) {
        this.myChart.setOption(v)
      },
      deep: true
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    handlerResize () {
      this.myChart.resize()
    },
    drawLine () {
      this.myChart = echarts.init(document.getElementById(this.elId))
      window.addEventListener('resize', this.handlerResize)
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handlerResize)
  }
}
</script>

<style>
</style>
