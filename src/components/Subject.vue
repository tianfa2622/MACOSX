<template>
  <div id="Homes">
    <el-main class="fill_height pb">
      <!-- <el-card class="fill_height" body-style="height:100%;"> -->
      <router-view></router-view>
      <!-- </el-card> -->
    </el-main>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
#Homes {
  margin-top: 10px;
  height: calc(100% - 76px);

  background-color: rgba(0, 0, 0, 0);

  .Homes-left {
    float: left;

    width: 300px;
    height: 100%;
  }
  .Homes-right {
    float: right;

    width: calc(100% - 300px);
    height: 100%;
  }
}
</style>
