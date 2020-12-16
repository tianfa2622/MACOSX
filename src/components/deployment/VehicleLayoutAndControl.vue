<template>
  <div class="fill_height dflex direction-column mwidth">
    <div class="dflex flex3">
      <div class="main-left">
        <el-form
          :inline="true"
          :model="formInline"
          label-width="130px"
          class="form-content"
        >
          <el-form-item label="车辆号码：" class="w-40">
            <el-input
              v-model="formInline.vehicleNumber"
              placeholder="请输入车辆号码"
              class="w200"
            ></el-input>
          </el-form-item>
          <el-form-item label="机动车品牌：" class="w-40">
            <el-input
              v-model="formInline.Carbrand"
              placeholder="请输入机动车品牌"
              class="w200"
            ></el-input>
          </el-form-item>
          <el-form-item label="车辆颜色：" class="w-40">
            <el-input
              v-model="formInline.CarColor"
              placeholder="请输入车辆颜色"
              class="w200"
            ></el-input>
          </el-form-item>
          <el-form-item label="车辆类型：" class="w-40">
            <el-select
              v-model="formInline.CarType"
              placeholder="请选择车辆类型"
              class="w200"
            >
              <el-option label="轿车" value="轿车"></el-option>
              <el-option label="货车" value="货车"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="布控开始时间：" class="w-40">
            <el-date-picker
              v-model="formInline.value1"
              type="datetime"
              placeholder="选择日期时间"
              class="w200"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="布控结束时间：" class="w-40">
            <el-date-picker
              v-model="formInline.value2"
              type="datetime"
              placeholder="选择日期时间"
              class="w200"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="布控人：" class="w-40">
            <el-input
              v-model="formInline.MonitorPeople"
              placeholder="请输入布控人姓名"
              class="w200"
            ></el-input>
          </el-form-item>
          <el-form-item label="布控人联系电话：" class="w-40">
            <el-input
              v-model="formInline.MonitorPeoplePhone"
              placeholder="请输入布控人联系电话"
              class="w200"
            ></el-input>
          </el-form-item>
          <el-form-item label="布控事由：" class="w-40">
            <el-input
              v-model="formInline.desc"
              :autosize="{ minRows: 2, maxRows: 4 }"
              placeholder="请输入布控事由"
              class="w200"
            ></el-input>
          </el-form-item>
          <el-form-item label="布控范围：" class="w-40">
            <el-select
              v-model="formInline.ControlRange"
              class="w200"
              placeholder="请选择布控范围"
            >
              <el-option label="万家丽" value="万家丽"></el-option>
              <el-option label="雨花区" value="雨花区"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>

      <!-- </div> -->
      <div class="main-right dflex">
        <div class="Ptitle-position">
          <span class="Ptitle2">被布控人照片：</span>
          <div slot="tip" class="el-upload__tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </div>
        <el-upload
          class="avatar-uploader flex1"
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :multiple="true"
          :limit="4"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
      </div>
    </div>
    <div class="flex1 vehicle-btn-bot">
      <el-button class="w150" type="primary">保存</el-button>
      <el-button class="w150">取消</el-button>
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
        CarColor: '',
        CarType: '',
        value1: '',
        value2: '',
        desc: '',
        MonitorPeople: '',
        MonitorPeoplePhone: '',
        ControlRange: ''
      },
      fileList: [],
      imageUrl: '',
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      console.log(file.type)
      const isJPG = file.type === 'image/jpeg'
      const isPNG = file.type === 'image/png'
      const isLt500K = file.size / 1024 / 1024 / 1024 < 500

      if (!isJPG && !isPNG) {
        this.$message.error('上传头像图片只能是 JPG/PNG 格式!')
      }
      if (!isLt500K) {
        this.$message.error('上传头像图片大小不能超过 500kb!')
      }
      return isJPG && isLt500K
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }

  }
}
</script>

<style lang="less">
.vehicle-btn-bot {
  padding: 0 20%;
  text-align: end;
}

.main-left {
  width: 70%;
  .form-content {
    padding: 20px 5% 0;
    height: 100%;
    overflow: auto;
  }
}

.main-right {
  width: 30%;
  .Ptitle-position {
    position: relative;
    .Ptitle2 {
      padding-right: 20px;
      font-size: 18px;

      color: #1697d2;
    }
    .el-upload__tip {
      width: 110px;
      position: absolute;
      left: 0px;
    }
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 150px;
    height: 150px;
    line-height: 150px;
    text-align: center;
  }
  .avatar {
    width: 150px;
    height: 150px;
    display: block;
  }
}
</style>
