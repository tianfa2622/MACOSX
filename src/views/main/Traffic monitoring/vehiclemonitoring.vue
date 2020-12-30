<template>
  <div id="container"></div>
</template>

<script>
import AMap from 'AMap'
// var map
export default {
  data () {
    return {
      // map: undefined
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      var map = new AMap.Map('container', {
        // mapStyle: 'amap://styles/grey',
        // center: [112.932841, 28.206193],
        center: [113.060296, 28.175386],
        resizeEnable: true,
        zoom: 14,
        buildingAnimation: true
      })
      const langlats = [[113.041681, 28.175402], [113.053554, 28.176214]]
      var markers = []
      for (let i = 0; i < langlats.length; i++) {
        const lnglat = langlats[i]
        // 创建点实例
        var marker = new AMap.Marker({
          position: new AMap.LngLat(lnglat[0], lnglat[1]),
          icon: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b' + (i + 1) + '.png',
          extData: {
            id: i + 1
          }
        })
        markers.push(marker)
      }
      var overlayGroups = new AMap.OverlayGroup(markers)
      map.add(overlayGroups)
      AMap.plugin(['AMap.ToolBar', 'AMap.Scale', 'AMap.ControlBar'], function () {
        map.addControl(new AMap.ToolBar())
        map.addControl(new AMap.Scale())
        map.addControl(new AMap.ControlBar({
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
