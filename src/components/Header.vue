<template>
  <div class="my_bg">
    <el-header class="home-header" height="80">
      <!-- 头部左侧标题 -->
      <div
        class="home-title"
        title="返回首页"
        @click="$route.path !== '/' && $router.push('/')"
      >
        <img class="logo" src="../assets/images/logo/u1.png" alt="logo" />
        <span class="title">智慧公安检查站管控系统</span>
      </div>
      <!-- 头部右侧区域 -->
      <!-- <div class="flr clearfix">
        <el-button
          type="text"
          icon="el-icon-s-home"
          class="btntext"
          style="margin-right: 30px"
          @click="$route.path !== '/' && $router.push('/')"
        >
          返回首页
        </el-button>
        <el-button type="text" icon="el-icon-s-comment" class="btntext">
          消息
        </el-button>
        <el-button type="text" icon="el-icon-s-tools" class="btntext">
          个人设置
        </el-button>
        <el-button type="text" class="btntext">退出</el-button>
      </div> -->
    </el-header>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.home-header {
  padding: 0;
  width: 100%;
  height: 28px;

  background-color: rgba(0, 0, 0, 0);
  .home-title {
    position: absolute;
    left: 50%;

    width: fit-content;

    text-align: center;

    transform: translate(-50%);

    cursor: pointer;
    .logo {
      z-index: 1000;

      margin: 10px 30px 10px 0;
      width: 55px;
      height: 55px;

      vertical-align: middle;
    }
    .title {
      font-size: 40px;
      font-weight: 600;
      line-height: 75px;
      text-align: center;
      vertical-align: middle;
      letter-spacing: 7px;

      color: #fff;
    }
  }
  .flr {
    margin-right: 30px;

    line-height: 42px;
    .btntext {
      margin-right: 20px;

      font-size: 14px;

      color: #fff;
    }
  }
}
</style>
