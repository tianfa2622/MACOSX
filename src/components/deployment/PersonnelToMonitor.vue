<template>
  <!-- 人员布控 -->
  <div class="dflex direction-column mwidth fill_height">
    <el-form
      :model="form"
      :inline="true"
      class="form-content"
      label-width="130px"
    >
      <el-form-item label="被布控人姓名：" class="w-30">
        <el-input
          v-model="form.NameCharged"
          placeholder="请输入被布控人姓名"
          class="w200"
        ></el-input>
      </el-form-item>
      <el-form-item label="证件类型：" class="w-30">
        <el-select
          v-model="form.CertificateCategory"
          placeholder="请输入证件类型"
          class="w200"
        >
          <el-option label="身份证" value="身份证"></el-option>
          <el-option label="护照" value="护照"></el-option>
          <el-option label="户口本" value="户口本"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="证件号码：" class="w-30">
        <el-input
          v-model="form.IDNumber"
          placeholder="请输入证件号码"
          class="w200"
        ></el-input>
      </el-form-item>
      <el-form-item label="民族：" class="w-30">
        <el-select
          v-model="form.national"
          placeholder="请输入民族"
          class="w200"
        >
          <el-option label="汉族" value="汉族"></el-option>
          <el-option label="维吾尔族" value="维吾尔族"></el-option>
          <el-option label="苗族" value="苗族"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="籍贯：" class="w-30">
        <el-input
          v-model="form.Hometown"
          placeholder="请输入籍贯"
          class="w200"
        ></el-input>
      </el-form-item>
      <el-form-item label="性别：" class="w-30">
        <el-select v-model="form.gender" class="w200" placeholder="请选择性别">
          <el-option label="男" value="male"></el-option>
          <el-option label="女" value="Female"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="出生时间：" class="w-30">
        <el-date-picker
          v-model="form.TimeOfBirth"
          type="date"
          class="w200"
          placeholder="选择日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="住址：" class="w-30">
        <el-input
          v-model="form.address"
          class="w200"
          placeholder="请输入住址"
        ></el-input>
      </el-form-item>
      <el-form-item label="联系电话：" class="w-30">
        <el-input
          v-model="form.ContactPhoneNumber"
          placeholder="请输入联系电话"
          class="w200"
        ></el-input>
      </el-form-item>
      <el-form-item label="身高：" class="w-30">
        <el-input
          v-model="form.height"
          placeholder="请输入身高"
          :min="150"
          :max="250"
          class="w150"
        >
        </el-input>
        <span class="ml-10"> 厘米</span>
      </el-form-item>
      <el-form-item label="口音：" class="w-30">
        <el-input v-model="form.Accent" class="w200"></el-input>
      </el-form-item>
      <el-form-item label="绰号/化名：" class="w-30">
        <el-input
          v-model="form.nickname"
          placeholder="请输入绰号/化名"
          class="w200"
        ></el-input>
      </el-form-item>
      <el-form-item label="体型特征：" class="w-30">
        <el-input
          v-model="form.feature"
          class="w200"
          placeholder="请输入特征"
        ></el-input>
      </el-form-item>
      <el-form-item label="布控开始时间：" class="w-30">
        <el-time-select
          v-model="form.startTime"
          :picker-options="{
            start: '08:30',
            step: '00:05',
            end: '24:00',
          }"
          class="w200"
          placeholder="选择时间"
        >
        </el-time-select>
      </el-form-item>
      <el-form-item label="布控结束时间：" class="w-30">
        <el-time-select
          v-model="form.endTime"
          :picker-options="{
            start: '08:30',
            step: '00:05',
            end: '23:30',
          }"
          class="w200"
          placeholder="选择时间"
        >
        </el-time-select>
      </el-form-item>
      <el-form-item label="布控人：" class="w-30">
        <el-input
          v-model="form.MonitorPeople"
          placeholder="请输入布控人"
          class="w200"
        ></el-input>
      </el-form-item>
      <el-form-item label="布控人联系电话：" class="w-30">
        <el-input
          v-model="form.TheContact"
          placeholder="请输入布控人联系电话"
          class="w200"
        ></el-input>
      </el-form-item>
      <el-form-item label="布控范围：" class="w-30">
        <el-input
          v-model="form.ControlRange"
          :readonly="true"
          @focus="DeploymentControl"
          class="w200"
          placeholder="请选择布控范围"
        ></el-input>
      </el-form-item>
      <el-form-item label="布控事由：" class="w-30">
        <el-input
          type="textarea"
          v-model="form.desc"
          :autosize="{ minRows: 2, maxRows: 4 }"
          placeholder="请输入布控事由"
          class="w200"
        ></el-input>
      </el-form-item>
      <el-form-item label="被布控人照片：" class="w-30">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <div slot="tip" class="el-upload__tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
          <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
    </el-form>
    <div class="btn-bot">
      <el-button class="w150" type="primary">保存</el-button>
      <el-button class="w150">取消</el-button>
    </div>
    <!-- 布控范围 -->
    <el-dialog title="布控范围" :visible.sync="dialogVisible" width="40%">
      <div class="mb-20">
        <area-select
          type="text"
          v-model="selected"
          :data="$pcaa"
          :level="1"
        ></area-select>
      </div>
      <div class="ml-30">
        <el-transfer
          filterable
          :filter-method="filterMethod"
          filter-placeholder="请输入城市拼音"
          v-model="value"
          :data="data"
        >
        </el-transfer>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          确 定
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    const generateData = _ => {
      const data = []
      const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都']
      const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu']
      cities.forEach((city, index) => {
        data.push({
          label: city,
          key: index,
          pinyin: pinyin[index]
        })
      })
      return data
    }
    return {
      data: generateData(),
      value: [],
      filterMethod (query, item) {
        return item.pinyin.indexOf(query) > -1
      },
      selected: [],
      activeName: 'first',
      dialogVisible: false,
      form: {
        NameCharged: '',
        national: '',
        TimeOfBirth: '',
        height: '180',
        nickname: '',
        startTime: '',
        MonitorPeople: '',
        ControlRange: '',
        IDNumber: '',
        Hometown: '',
        address: '',
        feature: '',
        CertificateCategory: '',
        gender: '',
        ContactPhoneNumber: '',
        Accent: '',
        endTime: '',
        desc: '',
        TheContact: '',
        imageUrl: ''
      }
    }
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    DeploymentControl () {
      this.dialogVisible = true
    }
  }
}

</script>

<style lang="less">
.form-content {
  height: 90%;
  padding: 20px 10% 0;
  overflow: auto;
}
.btn-bot {
  height: 10%;
  text-align: end;
  padding: 0 20%;
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
.el-form-item__label {
  position: relative;
}
.el-upload__tip {
  width: 110px;
  position: absolute;
  top: 30px;
  left: -113px;
  line-height: 18px;
}
</style>
<style lang="less">
.el-dialog__body {
  .el-transfer {
    .el-transfer-panel {
      .el-transfer-panel__body {
        height: 256px;
        .el-transfer-panel__filter {
          width: auto !important;
        }
      }
    }
  }
}
</style>
