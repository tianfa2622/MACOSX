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
        center: [113.050425, 28.169996],
        resizeEnable: true,
        rotateEnable: true,
        // pitch: 80,
        zoom: 17,
        zooms: [3, 20],
        viewMode: '3D', // 开启3D视图,默认为关闭
        buildingAnimation: true
      })
      const icon = new AMap.Icon({
        size: new AMap.Size(40, 40),
        image: require('../../../assets/images/mapicon/jcz.png'),
        imageSize: new AMap.Size(40, 40),
        anchor: 'center'
      })
      const langlats = [[113.041681, 28.175402], [113.050425, 28.169996]]
      var markers = []
      var infoWindow = new AMap.InfoWindow({ offset: new AMap.Pixel(5, -40) })
      for (let i = 0; i < langlats.length; i++) {
        const lnglat = langlats[i]
        // 创建点实例
        var marker = new AMap.Marker({
          position: new AMap.LngLat(lnglat[0], lnglat[1]),
          icon: icon,
          extData: {
            id: i + 1
          },
          offset: new AMap.Pixel(-15, -40)
        })
        markers.push(marker)
        marker.content = '<table align="center" cellspacing="0" cellpadding="6"><tr><td>车牌号码</td><td>车辆位置</td><td>车辆颜色</td><td></td></tr><tr><td>湘A 56G3H</td><td>大姚检查站</td><td>红色</td><td><a href="javascript:;">查看图片</a></td></tr></table><a href="#">侦查区</a><a href="#">检查区</a>'
        marker.on('click', markerClick)
        // marker.emit('click', { target: marker })
      }
      function markerClick (e) {
        infoWindow.setContent(e.target.content)
        infoWindow.open(map, e.target.getPosition())
      }
      map.setFitView()
      var overlayGroups = new AMap.OverlayGroup(markers)
      map.add(overlayGroups)
      AMap.plugin(['AMap.ToolBar', 'AMap.Scale', 'AMap.ControlBar', 'AMap.Weather'], function () {
        map.addControl(new AMap.ToolBar({
          position: 'RB',
          offset: new AMap.Pixel(40, 115),
          ruler: false,
          locate: true,
          liteStyle: true
        }))
        map.addControl(new AMap.Scale())
        map.addControl(new AMap.ControlBar({
          showZoomBar: false,
          showControlButton: true,
          position: {
            right: '20px',
            bottom: '80px'
          }
        }))
        var weather = new AMap.Weather()
        // 执行实时天气信息查询
        weather.getLive('长沙市', function (err, data) {
          console.log(err, data)
        })
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
