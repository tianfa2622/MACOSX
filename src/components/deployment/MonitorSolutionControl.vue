<template>
  <div class="fill_height mwidth dflex direction-column">
    <el-card class="card-top">
      <el-form :inline="true" :model="form" class="dflex">
        <el-form-item label="车辆类型：" class="flex1 ta-c">
          <el-select v-model="form.VehicleType" placeholder="请选择车辆类型">
            <el-option value="区域一" label="区域一"></el-option>
            <el-option value="区域二" label="区域二"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="证件号码/车辆号码：" class="ta-c flex1">
          <el-input
            placeholder="请输入号码"
            v-model="form.VehicledocumentNumber"
          ></el-input>
        </el-form-item>
        <el-form-item label="布控时间段：" class="flex1 ta-c">
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
      >
        <el-table-column
          fixed
          type="index"
          label="NO."
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

      <el-dialog title="详情" :visible.sync="DialogFormVisible" width="25%">
        <el-form label-width="110px" :model="DiaForm" style="padding: 0 10%">
          <el-form-item label="布控类型：">
            <el-input v-model="DiaForm.ControlType" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item
            label="车辆类型："
            v-if="tableData[dialogRowIndex].ControlType == '车辆布控'"
          >
            <el-input v-model="DiaForm.VehicleType" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="人员类型：" v-else>
            <el-input v-model="DiaForm.PersonType" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item
            label="被布控人姓名："
            v-if="tableData[dialogRowIndex].ControlType == '人员布控'"
          >
            <el-input
              v-model="DiaForm.NameAndBrand"
              :disabled="true"
            ></el-input>
          </el-form-item>
          <el-form-item label="车辆品牌：" v-else>
            <el-input
              v-model="DiaForm.NameAndBrand"
              :disabled="true"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="证件号码："
            v-if="tableData[dialogRowIndex].ControlType == '人员布控'"
          >
            <el-input
              v-model="DiaForm.VehicledocumentNumber"
              :disabled="true"
            ></el-input>
          </el-form-item>
          <el-form-item label="车牌号码：" v-else>
            <el-input
              v-model="DiaForm.VehicledocumentNumber"
              :disabled="true"
            ></el-input>
          </el-form-item>
          <el-form-item label="布控时间：">
            <el-input v-model="DiaForm.ControlTime" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="布控事由：">
            <el-input
              v-model="DiaForm.ControlReason"
              :disabled="true"
            ></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="DialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="DialogFormVisible = false">
            确 定
          </el-button>
        </span>
      </el-dialog>
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
          ControlReason: '此人为重点人员',
          VehicledocumentNumber: '421012198209236721',
          VehicleType: '货车',
          PersonType: '',
          NameOfTheAccused: '',
          VehicleBrands: '',
          DocumentNumber: '',
          LicensePlateNumber: ''
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
          VehicledocumentNumber: '421012198209236721'
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
      this.dialogRowIndex = index
      this.DialogFormVisible = true
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
    handleDetails5 () {
      this.dialogVisible1 = true
      console.log('添加页面')
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
<style lang="less">
.card-top {
  border-top: none !important;
}
</style>
