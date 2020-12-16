<template>
  <baidu-map
    class="bm-view"
    :center="center"
    :zoom="zoom"
    :scroll-wheel-zoom="true"
    @ready="handler"
  >
    <bm-navigation anchor="BMAP_ANCHOR_BOTTOM_RIGHT"></bm-navigation>
  </baidu-map>
</template>

<script>

export default {
  data () {
    return {
      center: {
        lng: 0,
        lat: 0
      },
      zoom: 3
    }
  },
  methods: {
    handler ({ Bmap, map }) {
      console.log(Bmap, map)
      this.center.lng = 113
      this.center.lat = 28.21
      this.zoom = 12
    }
  },
  mounted () {
  }
}
</script>

<style lang='less'>
.bm-view {
  overflow: hidden;
  width: 100%;
  height: 100%;
  margin: 0;
  font-family: "微软雅黑";
}
</style>
