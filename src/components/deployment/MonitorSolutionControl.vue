<template>
  <!-- 布控解控 -->
  <div class="fill_height mwidth dflex direction-column">
    <el-card class="card-top">
      <el-form :inline="true" :model="form" class="dflex">
        <el-form-item label="车辆类型：" class="w-25 ta-c">
          <el-select v-model="form.VehicleType" placeholder="请选择车辆类型">
            <el-option value="区域一" label="区域一"></el-option>
            <el-option value="区域二" label="区域二"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="证件号码/车辆号码：" class="ta-c w-25">
          <el-input
            placeholder="请输入号码"
            v-model="form.VehicledocumentNumber"
          ></el-input>
        </el-form-item>
        <el-form-item label="布控时间段：" class="flex2 ta-c">
          <el-date-picker
            v-model="form.value1"
            type="daterange"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item style="width: 10%">
          <el-button type="primary" class="w150" round @click="handleDetails3">
            搜索
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card
      class="mt-10 pb-30 flex1 posi-rel over-h"
      body-style="height: 100%"
    >
      <el-table
        :data="tableData"
        fit
        border
        style="width: 100%"
        class="flex1"
        height="100%"
        size="small"
      >
        <el-table-column
          type="index"
          label="NO."
          width="50"
          :resizable="false"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="ControlType"
          align="center"
          label="布控类型"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="NameAndBrand"
          align="center"
          label="被布控人姓名/车辆品牌"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="VehicledocumentNumber"
          label="证件号码/车牌号码"
          align="center"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="ControlTime"
          label="布控时间"
          align="center"
          :resizable="false"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="ControlReason"
          align="center"
          label="布控事由"
          :resizable="false"
        ></el-table-column>
        <el-table-column label="操作" align="center" :resizable="false">
          <template slot-scope="scope">
            <el-button
              @click="handleDetails(scope.$index, scope.row)"
              type="text"
              >详情</el-button
            >
            <el-button
              @click="handleDetails1(scope.$index, scope.row)"
              type="text"
            >
              解控
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
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
      <!-- 车辆详情 -->
      <el-dialog title="详情" :visible.sync="DialogFormVisible" width="50%">
        <el-form
          :inline="true"
          :model="DiaForm"
          label-width="124px"
          size="small"
        >
          <el-form-item label="车辆号码：" class="w-45">
            <el-input
              v-model="DiaForm.VehicledocumentNumber"
              :disabled="true"
            ></el-input>
          </el-form-item>
          <el-form-item label="机动车品牌：" class="w-45">
            <el-input
              :disabled="true"
              v-model="DiaForm.NameAndBrand"
            ></el-input>
          </el-form-item>
          <el-form-item label="车辆颜色：" class="w-45">
            <el-input :disabled="true" v-model="DiaForm.CarColor"></el-input>
          </el-form-item>
          <el-form-item label="车辆类型：" class="w-45">
            <el-input v-model="DiaForm.VehicleType" :disabled="true">
            </el-input>
          </el-form-item>
          <el-form-item label="布控开始时间：" class="w-45">
            <el-input v-model="DiaForm.ControlTime" :disabled="true">
            </el-input>
          </el-form-item>
          <el-form-item label="布控结束时间：" class="w-45">
            <el-input v-model="DiaForm.ControlendTime" :disabled="true">
            </el-input>
          </el-form-item>
          <el-form-item label="布控人：" class="w-45">
            <el-input
              v-model="DiaForm.MonitorPeople"
              :disabled="true"
            ></el-input>
          </el-form-item>
          <el-form-item label="布控人联系电话：" class="w-45">
            <el-input
              v-model="DiaForm.MonitorPeoplePhone"
              :disabled="true"
            ></el-input>
          </el-form-item>
          <el-form-item label="布控事由：" class="w-45">
            <el-input
              type="textarea"
              :disabled="true"
              class="w200"
              v-model="DiaForm.ControlReason"
              :autosize="{ minRows: 2, maxRows: 4 }"
            ></el-input>
          </el-form-item>
          <el-form-item label="布控范围：" class="w-405">
            <el-input
              :disabled="true"
              v-model="DiaForm.MonitorTheScope"
            ></el-input>
          </el-form-item>
          <el-form-item label="被布控人照片：" class="w-45">
            <el-avatar
              :size="150"
              :src="DiaForm.circleUrl"
              fit="fill"
              shape="square"
            ></el-avatar>
          </el-form-item>
        </el-form>
      </el-dialog>
      <!-- 车辆详情 -->

      <!-- 人员详情 -->
      <el-dialog title="详情" :visible.sync="dialogVisible1" width="50%">
        <el-form
          :model="DiaForm"
          :inline="true"
          label-width="130px"
          size="small"
        >
          <el-form-item label="被布控人姓名：" class="w-45">
            <el-input
              :disabled="true"
              v-model="DiaForm.NameAndBrand"
            ></el-input>
          </el-form-item>
          <el-form-item label="证件类型：" class="w-45">
            <el-input :disabled="true" v-model="DiaForm.CertificateCategory">
            </el-input>
          </el-form-item>
          <el-form-item label="证件号码：" class="w-45">
            <el-input
              :disabled="true"
              v-model="DiaForm.VehicledocumentNumber"
            ></el-input>
          </el-form-item>
          <el-form-item label="民族：" class="w-45">
            <el-input v-model="DiaForm.national" :disabled="true"> </el-input>
          </el-form-item>
          <el-form-item label="籍贯：" class="w-45">
            <el-input v-model="DiaForm.Hometown" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="性别：" class="w-45">
            <el-input v-model="DiaForm.gender" :disabled="true"> </el-input>
          </el-form-item>
          <el-form-item label="出生时间：" class="w-45">
            <el-input v-model="DiaForm.TimeOfBirth" :disabled="true">
            </el-input>
          </el-form-item>
          <el-form-item label="住址：" class="w-45">
            <el-input v-model="DiaForm.address" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="联系电话：" class="w-45">
            <el-input
              :disabled="true"
              v-model="DiaForm.ContactPhoneNumber"
            ></el-input>
          </el-form-item>
          <el-form-item label="身高：" class="w-45">
            <el-input :disabled="true" class="w100" v-model="DiaForm.height">
            </el-input>
            <span class="ml-10"> 厘米</span>
          </el-form-item>
          <el-form-item label="口音：" class="w-45">
            <el-input
              v-model="DiaForm.Accent"
              :disabled="true"
              class="w200"
            ></el-input>
          </el-form-item>
          <el-form-item label="绰号/化名：" class="w-45">
            <el-input v-model="DiaForm.nickname" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="体型特征：" class="w-45">
            <el-input v-model="DiaForm.feature" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="布控开始时间：" class="w-45">
            <el-input v-model="DiaForm.ControlTime" :disabled="true">
            </el-input>
          </el-form-item>
          <el-form-item label="布控结束时间：" class="w-45">
            <el-input v-model="DiaForm.endTime" :disabled="true"> </el-input>
          </el-form-item>
          <el-form-item label="布控人：" class="w-45">
            <el-input
              v-model="DiaForm.MonitorPeople"
              :disabled="true"
            ></el-input>
          </el-form-item>
          <el-form-item label="布控人联系电话：" class="w-45">
            <el-input v-model="DiaForm.TheContact" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="布控范围：" class="w-45">
            <el-input v-model="DiaForm.ControlRange" :disabled="true">
            </el-input>
          </el-form-item>
          <el-form-item label="布控事由：" class="w-45">
            <el-input
              type="textarea"
              v-model="DiaForm.ControlReason"
              :disabled="true"
            ></el-input>
          </el-form-item>
          <el-form-item label="被布控人照片：" class="w-45">
            <el-avatar
              :size="150"
              :src="DiaForm.circleUrl"
              fit="fill"
              shape="square"
            ></el-avatar>
          </el-form-item>
        </el-form>
      </el-dialog>
      <!-- 人员详情 -->
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        VehicleType: '',
        VehicledocumentNumber: '',
        value1: ''
      },
      tableData: [
        {
          ControlType: '车辆布控',
          NameAndBrand: '张三',
          ControlTime: '2019/12/21 12:12:12',
          ControlendTime: '2019/12/21 12:12:12',
          CarColor: '黑色',
          ControlReason: '此人为重点人员',
          VehicledocumentNumber: '421012198209236721',
          VehicleType: '货车',
          MonitorPeople: 'hh',
          MonitorPeoplePhone: '1111111111111',
          MonitorTheScope: '',
          PersonType: '',
          NameOfTheAccused: '',
          VehicleBrands: '',
          DocumentNumber: '',
          LicensePlateNumber: '',
          circleUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608282562624&di=ed0738170ab24767d983a2e6c88f0180&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201510%2F18%2F20151018172940_5etXi.jpeg'
        },
        {
          ControlType: '车辆布控',
          NameAndBrand: '张三',
          ControlTime: '2019/12/21 12:12:12',
          ControlReason: '此人为重点人员',
          VehicledocumentNumber: '421012198209236721'
        },
        {
          ControlType: '人员布控',
          NameAndBrand: '张三',
          ControlTime: '2019/12/21 12:12:12',
          ControlReason: '此人为逃犯',
          VehicledocumentNumber: '421012198209236721',
          CertificateCategory: '',
          national: '',
          Hometown: '',
          gender: '',
          TimeOfBirth: '',
          address: '',
          ContactPhoneNumber: '',
          height: '',
          Accent: '',
          nickname: '',
          feature: '',
          endTime: '',
          MonitorPeople: '',
          TheContact: '',
          ControlRange: '',
          circleUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608282562624&di=ed0738170ab24767d983a2e6c88f0180&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201510%2F18%2F20151018172940_5etXi.jpeg'
        },
        {
          ControlType: '人员布控',
          NameAndBrand: '张三',
          ControlTime: '2019/12/21 12:12:12',
          ControlReason: '此人为逃犯',
          VehicledocumentNumber: '421012198209236721'
        }
      ],
      currentPage: 1,
      DialogFormVisible: false,
      dialogVisible1: false,
      DiaForm: {
        // ControlType: '',
        // VehicleType: '',
        // PersonType: '',
        // NameOfTheAccused: '',
        // VehicleBrands: '',
        // DocumentNumber: '',
        // LicensePlateNumber: '',
        // ControlTime: '',
        // ControlReason: ''
      },
      dialogRowIndex: 0

    }
  },
  methods: {
    handleDetails (index, row) {
      console.log(row)
      this.DiaForm = row
      if (row.ControlType === '车辆布控') {
        this.DialogFormVisible = true
      } else {
        this.dialogVisible1 = true
      }
      this.DiaForm = row
    },
    handleDetails1 (index, row) {
      this.$confirm('确定解控该条记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        this.tableData.splice(index, 1)
        this.$message({
          type: 'success',
          message: '解控成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消解控'
        })
      })
    },
    handleDetails3 () {
      console.log('查询按钮')
    },
    handleDetails4 () {
      console.log('重置按钮')
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
.card-top {
  border-top: none !important;
}
.w-25 {
  width: 25% !important;
}
.form-content-car {
  width: 100%;
}
</style>
