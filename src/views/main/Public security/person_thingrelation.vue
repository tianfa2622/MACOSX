<template>
  <!-- 人车物关联 -->
  <div class="dflex direction-column fill_height mwidth back-c">
    <el-card body-style="padding-bottom: 0">
      <div slot="header" class="clearfix">
        <span class="person_title">人车物关联</span>
      </div>
      <el-form
        :inline="true"
        size="medium"
        :model="formInline"
        label-width="140px"
        class="mx-20"
      >
        <el-form-item label="机动车车辆类型：">
          <el-select
            v-model="formInline.category"
            placeholder="请选择机动车车辆类型"
          >
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="车牌号码：" class="ml-20">
          <el-input
            placeholder="请输入车牌号码"
            v-model="formInline.CarNumber"
          ></el-input>
        </el-form-item>
        <el-form-item label="身份证号码：">
          <el-input
            placeholder="请输入身份证号码"
            v-model="formInline.IdNumber"
          ></el-input>
        </el-form-item>
        <el-form-item label="所属检查站：" class="ml-20">
          <el-select v-model="formInline.region" placeholder="公安检查站">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div class="flr clearfix mb-10 w-25">
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
        class="flex1 w-100"
        size="small"
        height="100%"
      >
        <el-table-column
          type="index"
          label="NO."
          width="50px"
          align="center"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="CarNumb"
          align="center"
          label="机动车牌号码"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="VehicleType"
          align="center"
          label="车辆类型"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="CitizenNumber"
          label="公民身份号码"
          align="center"
          :resizable="false"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="CarModel"
          align="center"
          :resizable="false"
          label="车辆型号"
        ></el-table-column>
        <el-table-column
          prop="CarOwner"
          align="center"
          :resizable="false"
          label="机动车所有人"
        ></el-table-column>
        <el-table-column
          prop="time1"
          align="center"
          label="时间"
          :resizable="false"
        >
        </el-table-column>
        <el-table-column
          prop="Checkpoint1"
          align="center"
          label="检查站"
          :resizable="false"
        >
        </el-table-column>
        <el-table-column label="操作" align="center" :resizable="false">
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
              v-if="scope.row.ComparedResult === '预警'"
              >查看违禁物</el-button
            >
            <el-button
              @click="handleDetails2(scope.$index, scope.row)"
              type="primary"
              size="mini"
              v-else
              >关联违禁物</el-button
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
    <!-- 查看违禁物 -->
    <el-dialog title="查看" :visible.sync="DialogFormVisible" width="30%">
      <el-form :model="form1" label-width="140px">
        <el-form-item label="安检违禁物品类别：">
          <el-input :disabled="true" v-model="form1.name"></el-input>
        </el-form-item>
        <el-form-item label="数量：">
          <el-input :disabled="true" v-model="form1.num"></el-input>
        </el-form-item>
        <el-form-item label="公安检查站：">
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
      </el-form>
    </el-dialog>

    <!-- 关联人员Dialog -->
    <el-dialog :visible.sync="DialogTableVisible1" width="40%">
      <el-form :inline="true" class="pl-10">
        <el-form-item label="违禁物品：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item style="margin-left: 20px">
          <el-button plain style="width: 100px">搜索</el-button>
        </el-form-item>
      </el-form>
      <el-table
        :data="tableData1"
        fit
        border
        size="small"
        style="width: 100%"
        height="100%"
      >
        <el-table-column
          prop="Prohibitedtype"
          label="违禁物品类别"
          :resizable="false"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="ProhibitedNumber"
          label="数量"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="describe"
          label="描述"
          :resizable="false"
        ></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              @click="handleDetails4(scope.$index, scope.row)"
              type="text"
              class="mini-btn"
              size="mini"
              v-if="scope.row.cancelbtn === true"
              :resizable="false"
            >
              关联
            </el-button>
            <el-button
              @click="handleDetails5(scope.$index, scope.row)"
              type="text"
              class="mini-btn cancelColor"
              size="mini"
              :resizable="false"
              v-else
            >
              取消
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="DialogTableVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="DialogTableVisible1">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 关联人员Dialog -->

    <!-- 人车详情Dialog -->
    <el-dialog :visible.sync="dialogVisible1" width="70%" class="dialogs">
      <template slot="title">
        <div class="titleZise">
          查看-大腰检查站(人证对比结果：
          <span class="result-color">正常</span>，车证对比结果：
          <span class="result-color">正常</span>)
        </div>
      </template>
      <div class="dia-spanbox">
        <span class="dia-spanTitle">基本信息</span>
      </div>
      <el-form
        :model="form"
        :inline="true"
        class="form-content mwidth"
        label-width="173px"
        size="mini"
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
        size="mini"
      >
        <el-form-item label="三维人脸图：" class="w-45">
          <el-avatar
            :size="120"
            :src="form.circleUrl"
            fit="fill"
            shape="square"
          ></el-avatar>
        </el-form-item>
        <el-form-item label="人脸图：" class="w-45">
          <el-avatar
            :size="120"
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
        size="mini"
      >
        <el-form-item label="车前盖图：" class="w-45">
          <el-avatar
            :size="120"
            :src="form.circleUrl"
            fit="fill"
            shape="square"
          ></el-avatar>
        </el-form-item>
        <el-form-item label="车后盖图：" class="w-45">
          <el-avatar
            :size="120"
            :src="form.circleUrl"
            fit="fill"
            shape="square"
          ></el-avatar>
        </el-form-item>
        <el-form-item label="车厢图：" class="w-45">
          <el-avatar
            :size="120"
            :src="form.circleUrl"
            fit="fill"
            shape="square"
          ></el-avatar>
        </el-form-item>
        <el-form-item label="车侧图：" class="w-45">
          <el-avatar
            :size="120"
            :src="form.circleUrl"
            fit="fill"
            shape="square"
          ></el-avatar>
        </el-form-item>
        <el-form-item label="车顶图：" class="w-45">
          <el-avatar
            :size="120"
            :src="form.circleUrl"
            fit="fill"
            shape="square"
          ></el-avatar>
        </el-form-item>
        <el-form-item label="底盘图：" class="w-45">
          <el-avatar
            :size="120"
            :src="form.circleUrl"
            fit="fill"
            shape="square"
          ></el-avatar>
        </el-form-item>
        <el-form-item label="车前标：" class="w-45">
          <el-avatar
            :size="120"
            :src="form.circleUrl"
            fit="fill"
            shape="square"
          ></el-avatar>
        </el-form-item>
        <el-form-item label="车后标：" class="w-45">
          <el-avatar
            :size="120"
            :src="form.circleUrl"
            fit="fill"
            shape="square"
          ></el-avatar>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 人车详情Dialog -->
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
          Checkpoint1: '大瑶检查站',
          ComparedResult: '正常'
        },
        {
          CarNumb: '湘A BGM91',
          VehicleType: '轿车',
          CitizenNumber: '430108199502320232',
          CarModel: 'XT-860L',
          CarOwner: '张三',
          time1: '2019/12/30 12:12:12',
          Checkpoint1: '大瑶检查站',
          ComparedResult: '预警'
        }
      ],
      tableData1: [
        { cancelbtn: true }, { cancelbtn: true }, { cancelbtn: true }
      ],
      currentPage: 1,
      DialogFormVisible: false,
      dialogVisible1: false,
      DialogTableVisible1: false,
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
    handleDetails () {
      this.dialogVisible1 = true
      console.log('人车信息')
    },
    handleDetails1 () {
      this.DialogFormVisible = true
    },
    handleDetails2 () {
      this.DialogTableVisible1 = true
    },
    handleDetails4 (index, row) {
      row.cancelbtn = false
    },
    handleDetails5 (index, row) {
      row.cancelbtn = true
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
.titleZise {
  font-size: 16px;
}
.result-color {
  color: #009900;
}
.person_title {
  font-size: 16px;
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
.cancelColor {
  color: red;
}
.mini-btn {
  padding: 7px 10px !important;
}
</style>
