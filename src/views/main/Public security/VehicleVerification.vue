<template>
  <!-- 车辆核查预警 -->
  <div class="fill_height dflex mwidth back-c">
    <div class="vehicleLeft dflex direction-column">
      <el-card body-style="padding-bottom: 0">
        <div slot="header" class="clearfix">
          <span style="font-size: 16px">车辆核查预警</span>
        </div>
        <el-form :inline="true" class="pl-10">
          <el-form-item label="机动车车辆类型：" label-width="125px">
            <el-select v-model="formInline.VehicleType">
              <el-option value="轿车" label="轿车"></el-option>
              <el-option value="货车" label="货车"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="车牌号码："
            style="margin-left: 20px"
            label-width="125px"
          >
            <el-input></el-input>
          </el-form-item>
          <el-form-item
            label="车证比对结果："
            style="margin-left: 20px"
            label-width="125px"
          >
            <el-select v-model="formInline.contrastres">
              <el-option value="验证成功" label="验证成功"></el-option>
              <el-option value="验证失败" label="验证失败"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="ml-30">
            <el-button
              type="primary"
              style="width: 150px"
              @click="handleDetails1"
              >实时监控</el-button
            >
          </el-form-item>
          <el-form-item label="所属检查站：" label-width="125px">
            <el-select v-model="formInline.station">
              <el-option value="区域一" label="区域一"></el-option>
              <el-option value="区域二" label="区域二"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="日期："
            style="margin-left: 20px"
            label-width="125px"
          >
            <el-col :span="11">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="formInline.date1"
                style="width: 100%"
              ></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="formInline.date2"
                style="width: 100%"
              ></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item style="margin-left: 20px">
            <el-button plain style="width: 100px">核查</el-button>
          </el-form-item>
        </el-form>
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
          :cell-class-name="setRowStyle"
          class="flex1"
          height="100%"
        >
          <el-table-column
            type="index"
            label="NO."
            align="center"
            width="50px"
            :resizable="false"
          ></el-table-column>
          <el-table-column
            prop="CarNumber"
            label="机动车牌号码"
            :resizable="false"
          >
          </el-table-column>
          <el-table-column
            prop="CarModels"
            :resizable="false"
            label="车辆类型"
          ></el-table-column>
          <el-table-column
            prop="IdCardNumber"
            label="公民身份号码"
            min-width="140px"
            :resizable="false"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="VehicleModel"
            :resizable="false"
            label="车辆型号"
          >
          </el-table-column>
          <el-table-column
            prop="Carname"
            label="机动车所有人"
            :resizable="false"
          >
          </el-table-column>
          <el-table-column
            prop="vehicleType"
            label="机动车号牌种类"
            width="120px"
            :resizable="false"
          ></el-table-column>
          <el-table-column
            prop="CarComparison"
            label="车证比对结果"
            :resizable="false"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="cartime"
            label="时间"
            :resizable="false"
            min-width="90px"
          ></el-table-column>
          <el-table-column
            prop="checkpoint"
            label="检查站"
            :resizable="false"
          ></el-table-column>
          <el-table-column
            label="操作"
            :resizable="false"
            min-width="150px"
            align="center"
          >
            <template slot-scope="scope">
              <el-button
                @click="handleDetails(scope.$index, scope.row)"
                type="primary"
                class="mini-btn mt-5"
                size="mini"
                :resizable="false"
              >
                查看
              </el-button>
              <el-button
                @click="handleDetails2(scope.$index, scope.row)"
                size="mini"
                type="primary"
                class="bgc1 mini-btn mt-5"
              >
                关联人员
              </el-button>
              <el-button
                @click="handleDetails3(scope.$index, scope.row)"
                size="mini"
                type="info"
                class="mini-btn mt-5"
              >
                处置
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="5"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          class="posi-abs b-10 ta-c offset"
        >
        </el-pagination>
      </el-card>
    </div>

    <!-- 详情Dialog -->
    <el-dialog :visible.sync="dialogVisible1" width="50%" class="dialogs">
      <div class="dia-spanbox">
        <span class="dia-spanTitle">基本信息</span>
      </div>
      <el-form
        :model="form"
        :inline="true"
        class="form-content mwidth"
        size="small"
        label-width="153px"
      >
        <el-form-item label="通过事件：" class="w-45">
          <el-input :disabled="true" v-model="form.PassingEvents"></el-input>
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
            v-model="form.TypesOfMotorVehicleLicensePlates"
          ></el-input>
        </el-form-item>
        <el-form-item label="通过时间：" class="w-45">
          <el-input :disabled="true" v-model="form.PassTime"></el-input>
        </el-form-item>
        <el-form-item label="机动车档案编号：" class="w-45">
          <el-input
            :disabled="true"
            v-model="form.MotorVehicleFileNumber"
          ></el-input>
        </el-form-item>
        <el-form-item label="机动车车身颜色：" class="w-45">
          <el-input
            :disabled="true"
            v-model="form.MotorVehicleBodyColor"
          ></el-input>
        </el-form-item>
        <el-form-item label="机动车中文品牌名称：" class="w-45">
          <el-input
            :disabled="true"
            v-model="form.ChineseNameOfTheCar"
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="dia-spanbox">
        <span class="dia-spanTitle">过检图像</span>
      </div>
      <el-form
        :model="form"
        :inline="true"
        class="form-content"
        size="small"
        label-width="153px"
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
      <div class="dia-spanbox">
        <span class="dia-spanTitle">机动车特征</span>
      </div>
      <el-form
        :model="form"
        :inline="true"
        class="form-content"
        label-width="153px"
        size="small"
      >
        <el-form-item label="车辆异常痕迹：" class="w-100">
          <el-input
            :disabled="true"
            v-model="form.AbnormalTracesOfTheVehicle"
          ></el-input>
        </el-form-item>
        <el-form-item label="车前部物品特征：" class="w-100">
          <el-input
            :disabled="true"
            v-model="form.FeaturesOfFrontItems"
          ></el-input>
        </el-form-item>
        <el-form-item label="车后部物品特征：" class="w-100">
          <el-input
            :disabled="true"
            v-model="form.FeaturesOfRearItems"
          ></el-input>
        </el-form-item>
        <el-form-item label="车辆张贴物特征：" class="w-100">
          <el-input
            :disabled="true"
            v-model="form.FeaturesOfVehiclePostings"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible1true">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 详情Dialog -->

    <!-- 实时监控Dialog -->
    <el-dialog :visible.sync="dialogVisible2" width="50%">
      <div class="monitor-dflex">
        <div class="monitor-img">
          <el-image lazy :src="src"></el-image>
        </div>
        <div class="monitor-img">
          <el-image lazy :src="src"></el-image>
        </div>
        <div class="monitor-img">
          <el-image lazy :src="src"></el-image>
        </div>
        <div class="monitor-img">
          <el-image lazy :src="src"></el-image>
        </div>
        <div class="monitor-img">
          <el-image lazy :src="src"></el-image>
        </div>
        <div class="monitor-img">
          <el-image lazy :src="src"></el-image>
        </div>
      </div>
    </el-dialog>
    <!-- 实时监控Dialog -->

    <!-- 关联人员Dialog -->
    <el-dialog :visible.sync="dialogVisible4" width="40%">
      <el-form :inline="true" class="pl-10">
        <el-form-item label="证件号码：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item style="margin-left: 20px">
          <el-button plain style="width: 100px">搜索</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="tableData1" fit border style="width: 100%" height="100%">
        <el-table-column prop="CertificateName" label="姓名" :resizable="false">
        </el-table-column>
        <el-table-column
          prop="CertificateNumber"
          label="证件号码"
          min-width="140px"
          :resizable="false"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="Certificatetime"
          label="时间"
          :resizable="false"
          min-width="90px"
        ></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              @click="handleDetails4(scope.$index, scope.row)"
              type="text"
              class="mini-btn"
              size="mini"
              :resizable="false"
            >
              关联
            </el-button>
            <!-- <el-button
              @click="handleDetails5(scope.$index, scope.row)"
              size="mini"
              type="info"
              class="mini-btn"
            >
              取消
            </el-button> -->
          </template>
        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible4 = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible1true">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 关联人员Dialog -->

    <!-- 处置Dialog -->
    <el-dialog :visible.sync="dialogVisible3" width="30%">
      <el-form label-position="left" label-width="80px" :model="form">
        <el-form-item label="处理结果:">
          <el-input
            v-model="form1.desc"
            type="textarea"
            :autosize="{ minRows: 4, maxRows: 6 }"
            placeholder="请输入内容"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible3 = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible1true">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 处置Dialog -->

    <div class="vehicleRight">
      <el-card class="dflex direction-column box-card fill_height">
        <div slot="header" class="clearfix cardhead" style="font-size: 18px">
          <span>车证比对结果统计表</span>
        </div>
        <EchartsPackage :option="vehicleVenificationJson"></EchartsPackage>
      </el-card>
    </div>
  </div>
</template>

<script>
import EchartsPackage from '../../../components/echarts/index'
import vehicleVenificationJson from './Echartstable/vehicleVenificationJson'
export default {
  components: {
    EchartsPackage
  },
  data () {
    return {
      vehicleVenificationJson,
      formInline: {
        VehicleType: '',
        contrastres: '',
        station: '',
        data1: '',
        data2: ''
      },
      tableData: [
        {
          CarNumber: '湘A BGF91',
          CarModels: '轿车',
          IdCardNumber: '430108199502320232',
          VehicleModel: 'XT-860L',
          Carname: '张三',
          vehicleType: '蓝牌白字',
          CarComparison: '正常',
          cartime: '2019/12/30',
          checkpoint: '大瑶检查站'
        },
        {
          CarNumber: '湘A BGF92',
          CarModels: '货车',
          IdCardNumber: '430108199502320111',
          VehicleModel: 'XT-86L',
          Carname: '李四',
          vehicleType: '黄牌黑字',
          CarComparison: '一级预警',
          cartime: '2019/12/31',
          checkpoint: '大瑶检查站'
        },
        {
          CarNumber: '湘A BGF92',
          CarModels: '货车',
          IdCardNumber: '430108199502320111',
          VehicleModel: 'XT-86L',
          Carname: '李四',
          vehicleType: '黄牌黑字',
          CarComparison: '一级预警',
          cartime: '2019/12/31',
          checkpoint: '大瑶检查站'
        },
        {
          CarNumber: '湘A BGF92',
          CarModels: '货车',
          IdCardNumber: '430108199502320111',
          VehicleModel: 'XT-86L',
          Carname: '李四',
          vehicleType: '黄牌黑字',
          CarComparison: '一级预警',
          cartime: '2019/12/31',
          checkpoint: '大瑶检查站'
        },
        {
          CarNumber: '湘A BGF92',
          CarModels: '货车',
          IdCardNumber: '430108199502320111',
          VehicleModel: 'XT-86L',
          Carname: '李四',
          vehicleType: '黄牌黑字',
          CarComparison: '一级预警',
          cartime: '2019/12/31',
          checkpoint: '大瑶检查站'
        },
        {
          CarNumber: '湘A BGF92',
          CarModels: '货车',
          IdCardNumber: '430108199502320111',
          VehicleModel: 'XT-86L',
          Carname: '李四',
          vehicleType: '黄牌黑字',
          CarComparison: '一级预警',
          cartime: '2019/12/31',
          checkpoint: '大瑶检查站'
        },
        {
          CarNumber: '湘A BGF92',
          CarModels: '货车',
          IdCardNumber: '430108199502320111',
          VehicleModel: 'XT-86L',
          Carname: '李四',
          vehicleType: '黄牌黑字',
          CarComparison: '一级预警',
          cartime: '2019/12/31',
          checkpoint: '大瑶检查站'
        },
        {
          CarNumber: '湘A BGF92',
          CarModels: '货车',
          IdCardNumber: '430108199502320111',
          VehicleModel: 'XT-86L',
          Carname: '李四',
          vehicleType: '黄牌黑字',
          CarComparison: '一级预警',
          cartime: '2019/12/31',
          checkpoint: '大瑶检查站'
        },
        {
          CarNumber: '湘A BGF92',
          CarModels: '货车',
          IdCardNumber: '430108199502320111',
          VehicleModel: 'XT-86L',
          Carname: '李四',
          vehicleType: '黄牌黑字',
          CarComparison: '一级预警',
          cartime: '2019/12/31',
          checkpoint: '大瑶检查站'
        },
        {
          CarNumber: '湘A BGF92',
          CarModels: '货车',
          IdCardNumber: '430108199502320111',
          VehicleModel: 'XT-86L',
          Carname: '李四',
          vehicleType: '黄牌黑字',
          CarComparison: '一级预警',
          cartime: '2019/12/31',
          checkpoint: '大瑶检查站'
        },
        {
          CarNumber: '湘A BGF92',
          CarModels: '货车',
          IdCardNumber: '430108199502320111',
          VehicleModel: 'XT-86L',
          Carname: '李四',
          vehicleType: '黄牌黑字',
          CarComparison: '一级预警',
          cartime: '2019/12/31',
          checkpoint: '大瑶检查站'
        },
        {
          CarNumber: '湘A BGF92',
          CarModels: '货车',
          IdCardNumber: '430108199502320111',
          VehicleModel: 'XT-86L',
          Carname: '李四',
          vehicleType: '黄牌黑字',
          CarComparison: '一级预警',
          cartime: '2019/12/31',
          checkpoint: '大瑶检查站'
        }
      ],
      tableData1: [
        {}, {}, {}, {}
      ],
      form: {
        PassingEvents: '',
        NameOfMotorVehicleOwner: '',
        MotorVehicleLicensePlateNumber: '',
        CitizenIDNumber: '',
        MotorVehicleType: '',
        TypesOfMotorVehicleLicensePlates: '',
        PassTime: '',
        MotorVehicleFileNumber: '',
        MotorVehicleBodyColor: '',
        ChineseNameOfTheCar: '',
        // FrontCoverPicture:'',
        // RearCoverPicture:'',
        // CarPicture:'',
        // CarSideView:'',
        // RoofPicture:'',
        // ChassisDrawing:'',
        // FrontLabel:'',
        // RearLabel:'',
        circleUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608282562624&di=ed0738170ab24767d983a2e6c88f0180&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201510%2F18%2F20151018172940_5etXi.jpeg',
        AbnormalTracesOfTheVehicle: '',
        FeaturesOfFrontItems: '',
        FeaturesOfRearItems: '',
        FeaturesOfVehiclePostings: ''
      },
      form1: {
        desc: ''
      },
      currentPage: 1,
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      dialogVisible1: false,
      dialogVisible2: false,
      dialogVisible3: false,
      dialogVisible4: false
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    setRowStyle ({ row, column }) {
      if (column.property === 'CarComparison') {
        if (row.CarComparison === '正常') {
          console.log('status-success')
          return 'status-success'
        } else {
          console.log('status-error')
          return 'status-error'
        }
      }
    },
    handleDetails () {
      console.log('详情')
      this.dialogVisible1 = true
    },
    handleDetails1 () {
      this.dialogVisible2 = true
    },
    handleDetails3 () {
      this.dialogVisible3 = true
    },
    handleDetails2 () {
      this.dialogVisible4 = true
    },
    dialogVisible1true () {
      this.dialogVisible1 = false
    },
    handleDetails4 () {},
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
.mwidth {
  width: 100%;
  .line {
    text-align: center;
  }
  .vehicleLeft {
    padding: 2px 10px 0 0;
    width: 75%;
  }
  .dialogs /deep/ .el-dialog__body {
    padding: 1px 20px;
  }
  .vehicleRight {
    width: 25%;
    height: 100%;
    .clearfix:before,
    .clearfix:after {
      display: table;

      content: "";
    }
    .clearfix:after {
      clear: both;
    }
    .cardhead {
      height: 30px;

      line-height: 30px;
      text-align: center;
    }
    .box-card {
      /deep/ .el-card__header {
        padding: 10px 20px;
      }
      /deep/ .el-card__body {
        flex: 1;
      }
    }
  }
}
.form-content {
  justify-content: space-between;
  padding: 20px 8% 0;
}
.dia-spanbox {
  width: 15%;
  text-align: end;
  padding: 20px 0;
  .dia-spanTitle {
    font-size: 18px;
    font-weight: 650;
  }
}

/deep/ .status-success {
  background-color: #85c963 !important;
}
/deep/ .status-error {
  background-color: rgb(231, 110, 110) !important;
}
</style>

<style lang="less">
.card-box {
  width: 100%;
  height: 100%;
  .el-card__body {
    height: 100%;
  }
}
.monitor-dflex {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
}
.monitor-img {
  width: 48%;
  padding-bottom: 5px;
}
.bgc1 {
  border: 1px solid #ccccff;
  background-color: #ccccff;
}
.bgc1:hover {
  background: #bebee5 !important;
  border-color: #bebee5 !important;
}
.bgc1:active {
  background: #bebee5 !important;
  border-color: #bebee5 !important;
}
.mini-btn {
  padding: 7px 7px !important;
}
</style>
