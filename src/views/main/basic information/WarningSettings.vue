<template>
  <!-- 预警设置 -->
  <div
    class="dflex fill_height mwidth direction-column back-c"
    style="min-height: 650px"
  >
    <el-card class="over-h" style="height: 45%">
      <div slot="header">
        <span class="header-title">人员预警</span>
      </div>
      <el-form :model="formInline" size="medium" class="centerColor">
        <div class="mwidth centerColor">
          <el-row :gutter="20" class="py-5">
            <el-col :span="3" style="text-align: center">
              <span>一级预警设置：</span>
            </el-col>
            <el-col :span="21">
              <div>
                与后台数据作对比,&nbsp;
                <el-input
                  class="w50"
                  size="mini"
                  v-model="formInline.yujing1"
                />&nbsp;%不同则报预警
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20" class="py-5">
            <el-col :span="3" style="text-align: center">
              <span>二级预警设置：</span>
            </el-col>
            <el-col :span="21">
              <div>
                与后台数据作对比,&nbsp;
                <el-input
                  class="w50"
                  size="mini"
                  v-model="formInline.yujing2"
                />&nbsp;%不同则报预警
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20" class="py-5">
            <el-col :span="3" style="text-align: center">
              <span>三级预警设置：</span>
            </el-col>
            <el-col :span="21">
              <div>
                与后台数据作对比,&nbsp;
                <el-input
                  class="w50"
                  size="mini"
                  v-model="formInline.yujing3"
                />&nbsp;%不同则报预警
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20" class="py-5">
            <el-col :span="3" style="text-align: center">
              <span>重点人员预警：</span>
            </el-col>
            <el-col :span="21">
              <div>
                重点人员报&nbsp;
                <el-input
                  class="w50"
                  size="mini"
                  v-model="formInline.yujing4"
                />&nbsp;级预警
              </div>
            </el-col>
          </el-row>
        </div>
      </el-form>
    </el-card>
    <el-card
      class="over-h mt-10"
      style="height: 45%"
      body-style=" height: calc(100% - 61px)"
    >
      <div slot="header">
        <span class="header-title">车辆预警</span>
      </div>
      <el-form :model="formInline" class="centerColor">
        <div class="mwidth centerColor">
          <el-row :gutter="20" class="py-5">
            <el-col :span="3" style="text-align: center">
              <span>一级预警设置：</span>
            </el-col>
            <el-col :span="21">
              <div>
                与后台数据作对比,&nbsp;
                <el-input
                  class="w50"
                  size="mini"
                  v-model="formInline.yujing1"
                />&nbsp;%不同则报预警
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20" class="py-5">
            <el-col :span="3" style="text-align: center">
              <span>二级预警设置：</span>
            </el-col>
            <el-col :span="21">
              <div>
                与后台数据作对比,&nbsp;
                <el-input
                  class="w50"
                  size="mini"
                  v-model="formInline.yujing2"
                />&nbsp;%不同则报预警
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20" class="py-5">
            <el-col :span="3" style="text-align: center">
              <span>三级预警设置：</span>
            </el-col>
            <el-col :span="21">
              <div>
                与后台数据作对比,&nbsp;
                <el-input
                  class="w50"
                  size="mini"
                  v-model="formInline.yujing3"
                />&nbsp;%不同则报预警
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20" class="py-5">
            <el-col :span="3" style="text-align: center">
              <span>黑名单车辆预警：</span>
            </el-col>
            <el-col :span="21">
              <div>
                重点人员报&nbsp;
                <el-input
                  class="w50"
                  size="mini"
                  v-model="formInline.yujing4"
                />&nbsp;级预警
              </div>
            </el-col>
          </el-row>
        </div>
      </el-form>
    </el-card>
    <div class="warningbottom">
      <div class="warnbtn mt-15 mr-30">
        <el-button @click="onSubmit" type="primary" class="w200"
          >保存</el-button
        >
        <el-button @click="onSubmit1" plain class="w200">重置</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formInline: {
        yujing1: 0,
        yujing2: 0,
        yujing3: 0,
        yujing4: 0
      }
    }
  },
  methods: {
    onSubmit () {},
    onSubmit1 () {}
  }
}
</script>

<style lang="less">
.mwidth {
  width: 100%;
  .el-card {
    /deep/ .el_card__header {
      padding: 10px 20px;
    }
  }

  .header-title {
    font-size: 18px;
    font-weight: 650;
  }
  .centerColor {
    background-color: #f2f2f2;
  }
  .el-row {
    font-size: 16px;
    font-weight: 500;
    line-height: 28px;
  }
  .warningbottom {
    height: 10%;

    text-align: end;
  }
}
</style>
