<template>
  <div class="fill_height dflex">
    <div class="dflex direction-column dflex2 main-left fill_height">
      <div class="dflex1">
        <p class="Ptitle">被控车辆基本信息</p>
        <el-form :inline="true" :model="formInline" label-width="110px">
          <el-form-item label="车辆号码：">
            <el-input
              v-model="formInline.vehicleNumber"
              placeholder="请输入车辆号码"
              class="w200"
            ></el-input>
          </el-form-item>
          <el-form-item label="机动车品牌：" class="ml-15">
            <el-input
              v-model="formInline.Carbrand"
              placeholder="请输入机动车品牌"
              class="w200"
            ></el-input>
          </el-form-item>
          <br />
          <el-form-item label="发动机型号：">
            <el-input
              v-model="formInline.EngineType"
              placeholder="请输入发动机型号"
              class="w200"
            ></el-input>
          </el-form-item>
          <el-form-item label="车架号码：" class="ml-15">
            <el-input
              v-model="formInline.FrameNumber"
              placeholder="请输入车架号码"
              class="w200"
            ></el-input>
          </el-form-item>
          <br />
          <el-form-item label="车辆颜色：">
            <el-select
              v-model="formInline.CarColor"
              placeholder="请选择车辆颜色"
              class="w200"
            >
              <el-option label="黑色" value="black"></el-option>
              <el-option label="白色" value="white"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="车辆类型：" class="ml-15">
            <el-select
              v-model="formInline.CarType"
              placeholder="请输入车辆类型"
              class="w200"
            >
              <el-option label="轿车" value="轿车"></el-option>
              <el-option label="货车" value="货车"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <div class="dflex1" style="padding-top: 50px">
        <p class="Ptitle">布控信息</p>
        <el-form :inline="true" :model="formInline" label-width="110px">
          <el-form-item label="布控开始时间：">
            <el-date-picker
              v-model="formInline.value1"
              type="datetime"
              placeholder="选择日期时间"
              class="w200"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="布控结束时间：" class="ml-15">
            <el-date-picker
              v-model="formInline.value2"
              type="datetime"
              placeholder="选择日期时间"
              class="w200"
            >
            </el-date-picker>
          </el-form-item>
          <br />
          <el-form-item label="布控事由：">
            <el-input
              v-model="formInline.desc"
              :autosize="{ minRows: 4, maxRows: 6 }"
              placeholder="请输入布控事由"
              class="w200"
            ></el-input>
          </el-form-item>
          <el-form-item label="布控人：" class="ml-15">
            <el-input
              v-model="formInline.MonitorPeople"
              placeholder="请输入布控人姓名"
              class="w200"
            ></el-input>
          </el-form-item>
          <br />
          <el-form-item label="布控人电话：">
            <el-input
              v-model="formInline.MonitorPeoplePhone"
              placeholder="请输入布控人电话"
              class="w200"
            ></el-input>
          </el-form-item>
          <el-form-item label="联系人1：" class="ml-15">
            <el-input
              v-model="formInline.TheContact1"
              placeholder="请输入联系人1"
              class="w200"
            ></el-input>
          </el-form-item>
          <br />
          <el-form-item label="联系人电话">
            <el-input
              v-model="formInline.TheContactPhone"
              placeholder="请输入联系人电话"
              class="w200"
            ></el-input>
          </el-form-item>
          <el-form-item label="联系人2：" class="ml-15">
            <el-input
              v-model="formInline.TheContact2"
              placeholder="请输入联系人2"
              class="w200"
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="dflex1 main-right">
      <p class="Ptitle2">机动车照片</p>
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList"
        list-type="picture"
      >
        <img v-if="imageUrl" :src="imageUrl" alt="" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        <div slot="tip" class="el-upload__tip">
          只能上传jpg/png文件，且不超过500kb
        </div>
      </el-upload>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formInline: {
        vehicleNumber: '',
        Carbrand: '',
        EngineType: '',
        FrameNumber: '',
        CarColor: '',
        CarType: '',
        value1: '',
        value2: '',
        desc: '',
        MonitorPeople: '',
        MonitorPeoplePhone: '',
        TheContact1: '',
        TheContactPhone: '',
        TheContact2: ''
      },
      fileList: [],
      imageUrl: ''
    }
  },
  methods: {
    // handleAvatarSuccess (res, file) {
    //   this.imageUrl = URL.createObjectURL(file.raw)
    // },
    // beforeAvatarUpload (file) {
    //   console.log(file.type)
    //   const isJPG = file.type === 'image/jpeg'
    //   const isPNG = file.type === 'image/png'
    //   const isLt500K = file.size / 1024 / 1024 / 1024 < 500

    //   if (!isJPG && !isPNG) {
    //     this.$message.error('上传头像图片只能是 JPG/PNG 格式!')
    //   }
    //   if (!isLt500K) {
    //     this.$message.error('上传头像图片大小不能超过 500kb!')
    //   }
    //   return isJPG && isLt500K
    // },
    handlePreview () { },
    handleRemove () { },
    beforeRemove () { },
    handleExceed () { }

  }
}
</script>

<style lang="less">
.main-left {
  width: 70%;

  text-align: center;
  .Ptitle {
    margin: 30px auto;

    font-size: 18px;

    color: #1697d2;
  }
  .el-form-item__label {
    color: #71cc73 !important;
  }
  .el-input__inner {
    border: none;

    color: #ccc;
    background-color: #0e265c;
  }
}
.main-right {
  width: 30%;
  .Ptitle2 {
    margin: 30px auto;

    font-size: 18px;

    color: #1697d2;
  }
  .el-upload {
    overflow: hidden;

    position: relative;

    border: 1px dashed #d9d9d9;
    border-radius: 6px;

    cursor: pointer;
    &:hover {
      border-color: "#409EFF";
    }
    .avatar-uploader-icon {
      width: 170px;
      height: 170px;

      line-height: 170px;
      text-align: center;
    }
  }
}
</style>
