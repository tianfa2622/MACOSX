<template>
  <div class="dflex direction-column fill_height mwidth back-c">
    <el-card body-style="padding-bottom: 0">
      <div slot="header" class="clearfix">
        <span style="font-size: 16px">人员物关联</span>
      </div>
      <el-form
        :inline="true"
        :model="formInline"
        label-width="140px"
        class="mx-20"
      >
        <el-form-item label="安检违禁物品类别：">
          <el-select
            v-model="formInline.category"
            placeholder="安检违禁物品类别"
          >
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="车牌号码：" style="margin-left: 20px">
          <el-input v-model="formInline.CarNumber"></el-input>
        </el-form-item>
        <el-form-item label="身份证号码：">
          <el-input v-model="formInline.IdNumber"></el-input>
        </el-form-item>
        <el-form-item label="所属检查站：" style="margin-left: 20px">
          <el-select v-model="formInline.region" placeholder="公安检查站">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div class="flr clearfix mb-10" style="width: 25%">
        <el-button @click="onSubmit" type="primary" class="w150 mr-20">
          查询
        </el-button>
      </div>
    </el-card>

    <el-card
      class="mt-10 pb-30 flex1 posi-rel"
      style="over-flow: hidden"
      body-style="height: 100%"
    >
      <el-table
        :data="tableData"
        fit
        border
        style="width: 100%"
        class="flex1"
        height="100%"
      >
        <el-table-column
          fixed
          type="index"
          label="NO."
          align="center"
        ></el-table-column>
        <el-table-column
          prop="CarNumb"
          align="center"
          label="机动车牌号码"
        ></el-table-column>
        <el-table-column
          prop="VehicleType"
          align="center"
          label="车辆类型"
        ></el-table-column>
        <el-table-column
          prop="CitizenNumber"
          label="公民身份号码"
          align="center"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="CarModel"
          align="center"
          label="车辆型号"
        ></el-table-column>
        <el-table-column
          prop="CarOwner"
          align="center"
          label="机动车所有人"
        ></el-table-column>
        <el-table-column
          prop="time1"
          align="center"
          label="时间"
          min-width="90px"
        >
        </el-table-column>
        <el-table-column prop="Checkpoint1" align="center" label="检查站">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope" class="tabbtn">
            <el-button
              @click="handleDetails(scope.$index, scope.row)"
              type="primary"
              size="mini"
              >人车信息</el-button
            >
            <el-button
              @click="handleDetails1(scope.$index, scope.row)"
              type="primary"
              size="mini"
              >查看违禁物</el-button
            >
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 15, 20, 25]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        class="posi-abs b-10 ta-c offset"
      >
      </el-pagination>
    </el-card>

    <el-dialog title="查看" :visible.sync="DialogFormVisible" width="30%">
      <el-form :model="form1" label-width="140px">
        <el-form-item label="安检违禁物品类别：">
          <!-- <el-select v-model="form1.name">
            <el-option label="区域一" value="爆咋物"></el-option>
            <el-option label="区域二" value="刀具"></el-option>
          </el-select> -->
          <el-input :disabled="true" v-model="form1.name"></el-input>
        </el-form-item>
        <el-form-item label="数量：">
          <!-- <el-input
            v-model="form1.num"
            maxlength="4"
            style="width: 222px"
            type="number"
            min="0"
            show-word-limit
          ></el-input> -->
          <el-input :disabled="true" v-model="form1.num"></el-input>
        </el-form-item>
        <el-form-item label="公安检查站：">
          <!-- <el-select v-model="form1.region" placeholder="请选择检查站">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select> -->
          <el-input :disabled="true" v-model="form1.region"></el-input>
        </el-form-item>
        <el-form-item label="物品特征描述：">
          <el-input
            :disabled="true"
            type="textarea"
            :rows="2"
            v-model="form1.desc"
            :autosize="{ minRows: 2, maxRows: 4 }"
            show-word-limit
            resize="none"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit1">提交</el-button>
          <el-button @click="onSubmit1">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <!-- 详情Dialog -->
    <el-dialog
      title="查看-大腰检查站(人证对比结果：正常，车证对比结果：正常)"
      :visible.sync="dialogVisible1"
      width="50%"
      class="dialogs"
    >
      <div class="dia-spanbox">
        <span class="dia-spanTitle">基本信息</span>
      </div>
      <el-form
        :model="form"
        :inline="true"
        class="form-content mwidth"
        label-width="173px"
        size="small"
      >
        <el-form-item label="通过事件：" class="w-45">
          <el-input :disabled="true" v-model="form.PassingTime"></el-input>
        </el-form-item>
        <el-form-item label="机动车所有人名称：" class="w-45">
          <el-input
            :disabled="true"
            v-model="form.NameOfMotorVehicleOwner"
          ></el-input>
        </el-form-item>
        <el-form-item label="机动车号牌号码：" class="w-45">
          <el-input
            :disabled="true"
            v-model="form.MotorVehicleLicensePlateNumber"
          ></el-input>
        </el-form-item>
        <el-form-item label="公民身份证号码：" class="w-45">
          <el-input :disabled="true" v-model="form.CitizenIDNumber"></el-input>
        </el-form-item>
        <el-form-item label="机动车车辆类型：" class="w-45">
          <el-input :disabled="true" v-model="form.MotorVehicleType"></el-input>
        </el-form-item>
        <el-form-item label="机动车号牌种类：" class="w-45">
          <el-input
            :disabled="true"
            v-model="form.TypeOfLicensePlate"
          ></el-input>
        </el-form-item>
        <el-form-item label="通过时间：" class="w-45">
          <el-input :disabled="true" v-model="form.PassTime"></el-input>
        </el-form-item>
        <el-form-item label="机动车档案编号：" class="w-45">
          <el-input :disabled="true" v-model="form.CarFileNumber"></el-input>
        </el-form-item>
        <el-form-item label="机动车车身颜色：" class="w-45">
          <el-input :disabled="true" v-model="form.theColorOfCar"></el-input>
        </el-form-item>
        <el-form-item label="机动车中文品牌名称：" class="w-45">
          <el-input :disabled="true" v-model="form.ChineseBrandName"></el-input>
        </el-form-item>
        <el-form-item label="联系电话：" class="w-45">
          <el-input :disabled="true" v-model="form.contactNumber"></el-input>
        </el-form-item>
        <el-form-item label="国籍：" class="w-45">
          <el-input
            :disabled="true"
            v-model="form.CountryOfCitizenship"
          ></el-input>
        </el-form-item>
        <el-form-item label="政治面貌：" class="w-45">
          <el-input :disabled="true" v-model="form.politicalStatus"></el-input>
        </el-form-item>
        <el-form-item label="婚姻状况：" class="w-45">
          <el-input :disabled="true" v-model="form.maritalStatus"></el-input>
        </el-form-item>
        <el-form-item label="配偶姓名：" class="w-45">
          <el-input :disabled="true" v-model="form.spouseName"></el-input>
        </el-form-item>
        <el-form-item label="配偶身份证号码：" class="w-45">
          <el-input :disabled="true" v-model="form.SpouseIDNumber"></el-input>
        </el-form-item>
        <el-form-item label="重点人员分类管控类别：" class="w-45">
          <el-input :disabled="true" v-model="form.ControlCategory"></el-input>
        </el-form-item>
        <el-form-item label="重点人员处置措施：" class="w-45">
          <el-input :disabled="true" v-model="form.DisposalMeasures"></el-input>
        </el-form-item>
      </el-form>
      <div class="dia-spanbox">
        <span class="dia-spanTitle">人员过检图像</span>
      </div>
      <el-form
        :model="form"
        :inline="true"
        class="form-content"
        label-width="153px"
        size="small"
      >
        <el-form-item label="三维人脸图：" class="w-45">
          <el-avatar
            :size="150"
            :src="form.circleUrl"
            fit="fill"
            shape="square"
          ></el-avatar>
        </el-form-item>
        <el-form-item label="人脸图：" class="w-45">
          <el-avatar
            :size="150"
            :src="form.circleUrl"
            fit="fill"
            shape="square"
          ></el-avatar>
        </el-form-item>
      </el-form>
      <div class="dia-spanbox">
        <span class="dia-spanTitle">车辆过检图像</span>
      </div>
      <el-form
        :model="form"
        :inline="true"
        class="form-content"
        label-width="153px"
        size="small"
      >
        <el-form-item label="车前盖图：" class="w-45">
          <el-avatar
            :size="150"
            :src="form.circleUrl"
            fit="fill"
            shape="square"
          ></el-avatar>
        </el-form-item>
        <el-form-item label="车后盖图：" class="w-45">
          <el-avatar
            :size="150"
            :src="form.circleUrl"
            fit="fill"
            shape="square"
          ></el-avatar>
        </el-form-item>
        <el-form-item label="车厢图：" class="w-45">
          <el-avatar
            :size="150"
            :src="form.circleUrl"
            fit="fill"
            shape="square"
          ></el-avatar>
        </el-form-item>
        <el-form-item label="车侧图：" class="w-45">
          <el-avatar
            :size="150"
            :src="form.circleUrl"
            fit="fill"
            shape="square"
          ></el-avatar>
        </el-form-item>
        <el-form-item label="车顶图：" class="w-45">
          <el-avatar
            :size="150"
            :src="form.circleUrl"
            fit="fill"
            shape="square"
          ></el-avatar>
        </el-form-item>
        <el-form-item label="底盘图：" class="w-45">
          <el-avatar
            :size="150"
            :src="form.circleUrl"
            fit="fill"
            shape="square"
          ></el-avatar>
        </el-form-item>
        <el-form-item label="车前标：" class="w-45">
          <el-avatar
            :size="150"
            :src="form.circleUrl"
            fit="fill"
            shape="square"
          ></el-avatar>
        </el-form-item>
        <el-form-item label="车后标：" class="w-45">
          <el-avatar
            :size="150"
            :src="form.circleUrl"
            fit="fill"
            shape="square"
          ></el-avatar>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible1 = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <!-- 详情Dialog -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      formInline: {
        category: '',
        CarNumber: '',
        IdNumber: '',
        region: ''
      },
      tableData: [
        {
          CarNumb: '湘A BGM91',
          VehicleType: '轿车',
          CitizenNumber: '430108199502320232',
          CarModel: 'XT-860L',
          CarOwner: '张三',
          time1: '2019/12/30 12:12:12',
          Checkpoint1: '大瑶检查站'
        },
        {
          CarNumb: '湘A BGM91',
          VehicleType: '轿车',
          CitizenNumber: '430108199502320232',
          CarModel: 'XT-860L',
          CarOwner: '张三',
          time1: '2019/12/30 12:12:12',
          Checkpoint1: '大瑶检查站'
        },
        {
          CarNumb: '湘A BGM91',
          VehicleType: '轿车',
          CitizenNumber: '430108199502320232',
          CarModel: 'XT-860L',
          CarOwner: '张三',
          time1: '2019/12/30 12:12:12',
          Checkpoint1: '大瑶检查站'
        },
        {
          CarNumb: '湘A BGM91',
          VehicleType: '轿车',
          CitizenNumber: '430108199502320232',
          CarModel: 'XT-860L',
          CarOwner: '张三',
          time1: '2019/12/30 12:12:12',
          Checkpoint1: '大瑶检查站'
        }

      ],
      currentPage: 1,
      DialogFormVisible: false,
      dialogVisible1: false,
      form1: {
        name: '',
        num: '',
        region: '',
        desc: ''
      },
      form: {
        PassingTime: '',
        NameOfMotorVehicleOwner: '',
        MotorVehicleLicensePlateNumber: '',
        CitizenIDNumber: '',
        MotorVehicleType: '',
        TypeOfLicensePlate: '',
        PassTime: '',
        CarFileNumber: '',
        theColorOfCar: '',
        ChineseBrandName: '',
        contactNumber: '',
        CountryOfCitizenship: '',
        politicalStatus: '',
        maritalStatus: '',
        spouseName: '',
        SpouseIDNumber: '',
        ControlCategory: '',
        DisposalMeasures: '',
        ThreeDimensionalFaceMap: '',
        // FaceMap:'',
        circleUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608282562624&di=ed0738170ab24767d983a2e6c88f0180&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201510%2F18%2F20151018172940_5etXi.jpeg'
        // FrontCoverPicture:'',
        // RearCoverPicture:'',
        // CarPicture:'',
        // CarSideView:'',
        // RoofPicture:'',
        // ChassisDrawing:'',
        // FrontLabel:'',
        // RearLabel:'',
      }
    }
  },
  mounted () {
  },
  methods: {
    onSubmit () {
      console.log('chaxun')
    },
    onSubmit1 () {
      this.DialogFormVisible = false
    },
    handleDetails () {
      this.dialogVisible1 = true
      console.log('人车信息')
    },
    handleDetails1 () {
      this.DialogFormVisible = true
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style lang="less" scoped>
.mwdith {
  width: 100%;
}

.dialogs /deep/ .el-dialog__body {
  padding: 1px 20px;
  .dialogtitle {
    margin-bottom: 8px;

    font-size: 16px;
    font-weight: 700;
  }
}
.dialogs-box span {
  display: block;
}
.el-button--mini {
  padding: 7px !important;
}
</style>
