<template>
  <div class="fill_height dflex direction-column mwidth back-c">
    <el-card body-style="padding-bottom: 0">
      <div slot="header" class="clearfix">
        <span style="font-size: 16px">车辆白名单</span>
      </div>
      <el-form :inline="true" size="medium" :model="formInline">
        <el-form-item label="机动车牌号码：" style="width: 25%" class="ta-c">
          <el-input v-model="formInline.CarNumber"></el-input>
        </el-form-item>
        <el-form-item label="机动车车辆类型：" style="width: 25%" class="ta-c">
          <el-select v-model="formInline.category" placeholder="机动车车辆类型">
            <el-option label="轿车" value="shanghai"></el-option>
            <el-option label="货车" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="机动车车牌种类：" style="width: 25%" class="ta-c">
          <el-select v-model="formInline.species" placeholder="机动车车牌种类">
            <el-option label="蓝牌白字" value="shanghai"></el-option>
            <el-option label="黄牌黑字" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-button
          @click="onSubmit"
          type="primary"
          style="margin-right: 10px; width: 150px"
          >查询</el-button
        >
        <el-button
          @click="onSubmit1"
          type="primary"
          style="margin-right: 20px; width: 150px"
          >新增</el-button
        >
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
        size="small"
        style="width: 100%"
        class="flex1"
        height="100%"
      >
        <el-table-column
          fixed
          type="index"
          label="NO."
          align="center"
          :resizable="false"
          width="50px"
        ></el-table-column>
        <el-table-column
          prop="LicensePlateNumber"
          align="center"
          :resizable="false"
          label="机动车牌号码"
        ></el-table-column>
        <el-table-column
          prop="VehicleCategory"
          align="center"
          :resizable="false"
          label="机动车车辆类型"
        ></el-table-column>
        <el-table-column
          prop="VehicleType"
          label="车辆型号"
          :resizable="false"
          align="center"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="LicensePlateType"
          label="机动车牌种类"
          :resizable="false"
          align="center"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="TheBodyColor"
          align="center"
          :resizable="false"
          label="机动车身颜色"
        ></el-table-column>
        <el-table-column
          prop="Provinces"
          align="center"
          :resizable="false"
          label="省份简称"
        ></el-table-column>
        <el-table-column
          prop="CarTime"
          align="center"
          :resizable="false"
          label="时间"
        ></el-table-column>
        <el-table-column label="操作" align="center" :resizable="false">
          <template slot-scope="scope">
            <el-button
              @click="handleDetails(scope.$index, scope.row)"
              type="primary"
              size="mini"
            >
              详情
            </el-button>
            <el-button
              @click="handleDetails1(scope.$index, scope.row)"
              type="warning"
              size="mini"
              >移除</el-button
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

    <!-- 增加弹出框 -->
    <el-dialog title="新增" :visible.sync="dialogFormVisible1" width="30%">
      <el-form :model="form" label-width="166px">
        <el-form-item label="机动车牌号码：">
          <el-input v-model="form.LicensePlateNumber" class="w-100"></el-input>
        </el-form-item>
        <el-form-item label="机动车车辆类型：">
          <el-select
            v-model="form.VehicleCategory"
            class="w-100"
            placeholder="请选择机动车车辆类型"
          >
            <el-option label="轿车" value="shanghai"></el-option>
            <el-option label="货车" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="车辆型号：">
          <el-input v-model="form.VehicleType" class="w-100"></el-input>
        </el-form-item>
        <el-form-item label="机动车牌种类：">
          <el-select
            v-model="form.LicensePlateType"
            placeholder="请选择机动车车牌种类"
            class="w-100"
          >
            <el-option label="蓝牌白字" value="shanghai"></el-option>
            <el-option label="黄牌黑字" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="机动车身颜色：">
          <el-input v-model="form.TheBodyColor" class="w-100"></el-input>
        </el-form-item>
        <el-form-item label="省份简称：">
          <el-input v-model="form.Provinces" class="w-100"></el-input>
        </el-form-item>
        <el-form-item label="机动车所有人名称：">
          <el-input v-model="form.TheOwnerName" class="w-100"></el-input>
        </el-form-item>
        <el-form-item label="公民身份证号码：">
          <el-input v-model="form.IdentityNumber" class="w-100"></el-input>
        </el-form-item>
        <el-form-item label="时间：">
          <el-date-picker
            v-model="form.CarTime"
            value-format="yyyy-MM-dd HH:mm:ss"
            type="datetime"
            placeholder="选择日期时间"
            class="w-100"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="重点人员分类管控类别：">
          <el-select
            v-model="form.ControlCategory"
            placeholder="请选择重点人员分类管控类别"
            class="w-100"
          >
            <el-option label="一级管控" value="shanghai"></el-option>
            <el-option label="二级管控" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="addData">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 增加弹出框 -->

    <!-- 详情弹出框 -->
    <el-dialog title="详情" :visible.sync="dialogFormVisible" width="30%">
      <el-form :model="form" label-width="150px">
        <el-form-item label="机动车牌号码：">
          <el-input
            :disabled="true"
            v-model="form.LicensePlateNumber"
          ></el-input>
        </el-form-item>
        <el-form-item label="机动车车辆类型：">
          <el-input :disabled="true" v-model="form.VehicleCategory"></el-input>
        </el-form-item>
        <el-form-item label="车辆型号：">
          <el-input :disabled="true" v-model="form.VehicleType"></el-input>
        </el-form-item>
        <el-form-item label="机动车牌种类：">
          <el-input :disabled="true" v-model="form.LicensePlateType"></el-input>
        </el-form-item>
        <el-form-item label="机动车身颜色：">
          <el-input :disabled="true" v-model="form.TheBodyColor"></el-input>
        </el-form-item>
        <el-form-item label="省份简称：">
          <el-input :disabled="true" v-model="form.Provinces"></el-input>
        </el-form-item>
        <el-form-item label="机动车所有人名称：">
          <el-input :disabled="true" v-model="form.TheOwnerName"></el-input>
        </el-form-item>
        <el-form-item label="公民身份证号码：">
          <el-input :disabled="true" v-model="form.IdentityNumber"></el-input>
        </el-form-item>
        <el-form-item label="时间：">
          <el-input :disabled="true" v-model="form.CarTime"></el-input>
        </el-form-item>
        <el-form-item label="重点人员管控类别：">
          <el-input :disabled="true" v-model="form.ControlCategory"></el-input>
        </el-form-item>
      </el-form>
      <!-- <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div> -->
    </el-dialog>
    <!-- 详情弹出框 -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      formInline: {
        CarNumber: '',
        category: '',
        species: '',
        CarMaster: '',
        Carmasterid: '',
        controls: ''
      },
      tableData: [
        {
          LicensePlateNumber: '湘A BGHF2',
          VehicleCategory: '轿车',
          VehicleType: 'XT-860L',
          LicensePlateType: '蓝牌白字',
          TheBodyColor: '黑',
          Provinces: '湘',
          CarTime: '2020/12/12 12:12:12'
        },
        {
          LicensePlateNumber: '湘A BGHF2',
          VehicleCategory: '轿车',
          VehicleType: 'XT-860L',
          LicensePlateType: '蓝牌白字',
          TheBodyColor: '黑',
          Provinces: '湘',
          CarTime: '2020/12/12 12:12:12'
        },
        {
          LicensePlateNumber: '湘A BGHF2',
          VehicleCategory: '轿车',
          VehicleType: 'XT-860L',
          LicensePlateType: '蓝牌白字',
          TheBodyColor: '黑',
          Provinces: '湘',
          CarTime: '2020/12/12 12:12:12'
        }
      ],
      currentPage: 1,
      dialogFormVisible: false,
      dialogFormVisible1: false,
      form: {
        LicensePlateNumber: '',
        VehicleCategory: '',
        VehicleType: '',
        LicensePlateType: '',
        TheBodyColor: '',
        Provinces: '',
        TheOwnerName: '',
        IdentityNumber: '',
        CarTime: null,
        ControlCategory: ''
      }
    }
  },
  methods: {
    onSubmit () { },
    onSubmit1 () {
      this.form = {}
      this.dialogFormVisible1 = true
    },
    addData () {
      this.tableData.push(this.form)
      this.dialogFormVisible1 = false
    },
    handleDetails (index, row) {
      this.form = {}
      this.form = this.tableData[index]
      this.dialogFormVisible = true
    },
    handleDetails1 (index, row) {
      this.$confirm('此操作将永久移除该条记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        this.tableData.splice(index, 1)
          .this.$message({
            type: 'success',
            message: '删除成功!'
          })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
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
.mwidth {
  width: 100%;
}
.card-box {
  width: 100%;
  height: 100%;
  .el-card__body {
    height: 100%;
  }
}
</style>
