<template>
  <div id="container"></div>
</template>

<script>
import AMap from 'AMap'
// var map
export default {
  data () {
    return {
      map: undefined
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.map = new AMap.Map('container', {
        center: [112.932841, 28.206193],
        resizeEnable: true,
        zoom: 10,
        buildingAnimation: true
      })
      AMap.plugin(['AMap.ToolBar', 'AMap.Scale', 'AMap.ControlBar'], function () {
        this.map.addControl(new AMap.ToolBar())
        this.map.addControl(new AMap.Scale())
        this.map.addControl(new AMap.ControlBar({
          showZoomBar: true,
          showControlButton: true
        }))
      })
    }
  }
}
</script>

<style lang='less'>
#container {
  width: 100%;
  height: 100%;
}
</style>
