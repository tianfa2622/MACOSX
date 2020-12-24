<template>
  <!-- 战果上报 -->
  <div class="fill_height mwidth dflex direction-column back-c">
    <el-card>
      <div slot="header" class="clearfix">
        <span style="font-size: 16px">战果上报</span>
      </div>
      <el-form
        :model="formInline"
        label-width="100px"
        :inline="true"
        class="dflex"
        size="medium"
      >
        <el-form-item label="值班对长：" class="flex1">
          <el-input v-model="formInline.CertificateNum" class="w250"></el-input>
        </el-form-item>
        <el-form-item label="勤务时间：" class="flex1">
          <el-date-picker
            v-model="formInline.DutyTime"
            type="datetime"
            placeholder="选择日期时间"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="所属检查站：" class="flex1">
          <el-select
            v-model="formInline.OwnedCheckpoint"
            placeholder="请选择检查站"
            class="w250"
          >
            <el-option label="部门一" value="shanghai"></el-option>
            <el-option label="部门二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="flex1">
          <el-button @click="onSubmit" type="primary">搜索</el-button>
          <el-button @click="onSubmit1" plain type="primary">上报</el-button>
        </el-form-item>
      </el-form>

      <!-- 上报 -->
      <el-dialog :visible.sync="dialogVisible" title="上报" width="30%">
        <el-form :model="form" :inline="true" label-width="150px">
          <el-form-item label="所属站点：">
            <el-input class="w200" v-model="form.OwnedSite"></el-input>
          </el-form-item>
          <el-form-item label="查获时间：">
            <el-date-picker
              class="w200"
              v-model="form.SeizedTime"
              type="datetime"
              placeholder="选择日期时间"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="查获民警：">
            <el-input class="w200" v-model="form.PoliceSeized"></el-input>
          </el-form-item>
          <el-form-item label="执勤民警：">
            <el-input class="w200" v-model="form.PolicemanOnDuty"></el-input>
          </el-form-item>
          <el-form-item label="被查获人员姓名：">
            <el-input class="w200" v-model="form.SeizedPersonnel"></el-input>
          </el-form-item>
          <el-form-item label="户籍：">
            <el-input class="w200" v-model="form.Domicile"></el-input>
          </el-form-item>
          <el-form-item label="证件号码：">
            <el-input class="w200" v-model="form.IDNumber"></el-input>
          </el-form-item>
          <el-form-item label="被查获危险物品：">
            <el-input class="w200" v-model="form.dangerousItem"></el-input>
          </el-form-item>
          <el-form-item label="数量：">
            <el-input
              v-model.number="form.NumberSeized"
              class="w200"
              type="number"
              :maxlength="3"
              onkeyup="value=value.replace(/[^\d]/g,'')"
              onblur="value=value.replace(/[^\d]/g,'')"
              :min="1"
            ></el-input>
          </el-form-item>
          <el-form-item label="查获描述：">
            <el-input
              class="w200"
              type="textarea"
              v-model="form.SeizedDescription"
              :autosize="{ minRows: 2, maxRows: 4 }"
            ></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false"
            >保 存</el-button
          >
          <el-button @click="dialogVisible = false">取 消</el-button>
        </span>
      </el-dialog>
    </el-card>

    <el-card
      class="mt-10 pb-30 flex1 posi-rel over-h"
      body-style="height: 100%"
    >
      <el-table
        :data="tableDate"
        fit
        border
        style="width: 100%"
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
          prop="SiteName"
          label="站点名称"
          align="center"
          min-width="90px"
          :resizable="false"
        >
        </el-table-column>
        <el-table-column
          prop="SeizedTime"
          label="查获时间"
          align="center"
          min-width="90px"
          :resizable="false"
        >
        </el-table-column>
        <el-table-column
          prop="PoliceSeized"
          label="查获民警"
          align="center"
          min-width="90px"
          :resizable="false"
        >
        </el-table-column>
        <el-table-column
          prop="BeSeized"
          label="被查获人员姓名/物品名称"
          align="center"
          :resizable="false"
          min-width="90px"
        >
        </el-table-column>
        <el-table-column
          prop="BeSeizedID"
          label="被查获人证件号码"
          align="center"
          min-width="90px"
          :resizable="false"
        >
        </el-table-column>
        <el-table-column
          prop="SeizedDescription"
          label="查获描述"
          align="center"
          min-width="90px"
          :resizable="false"
        >
        </el-table-column>
        <el-table-column
          prop="PolicemanOnDuty"
          label="执勤民警"
          align="center"
          min-width="90px"
          :resizable="false"
        >
        </el-table-column>
        <el-table-column
          label="操作"
          align="center"
          min-width="90"
          :resizable="false"
        >
          <template slot-scope="scope">
            <el-button
              @click="handleDetails2(scope.$index, scope.row)"
              type="primary"
              size="mini"
            >
              详情
            </el-button>
            <el-button
              @click="handleDetails(scope.$index, scope.row)"
              type="primary"
              size="mini"
            >
              编辑
            </el-button>
            <el-button
              @click="handleDetails1(scope.$index, scope.row)"
              type="danger"
              size="mini"
              class="mt-5"
            >
              删除
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

      <!-- 详情 -->
      <el-dialog :visible.sync="dialogVisible2" title="详情" width="30%">
        <el-form :model="form" :inline="true" label-width="150px">
          <el-form-item label="所属站点：">
            <el-input
              class="w200"
              v-model="form.OwnedSite"
              :disabled="true"
            ></el-input>
          </el-form-item>
          <el-form-item label="查获时间：">
            <el-date-picker
              class="w200"
              :disabled="true"
              v-model="form.SeizedTime"
              type="datetime"
              placeholder="选择日期时间"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="查获民警：">
            <el-input
              class="w200"
              :disabled="true"
              v-model="form.PoliceSeized"
            ></el-input>
          </el-form-item>
          <el-form-item label="执勤民警：">
            <el-input
              class="w200"
              :disabled="true"
              v-model="form.PolicemanOnDuty"
            ></el-input>
          </el-form-item>
          <el-form-item label="被查获人员姓名：">
            <el-input
              class="w200"
              :disabled="true"
              v-model="form.SeizedPersonnel"
            ></el-input>
          </el-form-item>
          <el-form-item label="户籍：">
            <el-input
              class="w200"
              :disabled="true"
              v-model="form.Domicile"
            ></el-input>
          </el-form-item>
          <el-form-item label="证件号码：">
            <el-input
              class="w200"
              :disabled="true"
              v-model="form.IDNumber"
            ></el-input>
          </el-form-item>
          <el-form-item label="被查获危险物品：">
            <el-input
              class="w200"
              :disabled="true"
              v-model="form.dangerousItem"
            ></el-input>
          </el-form-item>
          <el-form-item label="数量：">
            <el-input
              v-model.number="form.NumberSeized"
              :disabled="true"
              class="w200"
              type="number"
              :maxlength="3"
              onkeyup="value=value.replace(/[^\d]/g,'')"
              onblur="value=value.replace(/[^\d]/g,'')"
              :min="1"
            ></el-input>
          </el-form-item>
          <el-form-item label="查获描述：">
            <el-input
              class="w200"
              :disabled="true"
              type="textarea"
              v-model="form.SeizedDescription"
              :autosize="{ minRows: 2, maxRows: 4 }"
            ></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible2 = false"
            >保 存</el-button
          >
          <el-button @click="dialogVisible2 = false">取 消</el-button>
        </span>
      </el-dialog>

      <!-- 编辑 -->
      <el-dialog :visible.sync="dialogVisible1" title="编辑" width="45%">
        <el-form :model="form" :inline="true" label-width="150px">
          <el-form-item label="所属站点：">
            <el-input class="w200" v-model="form.OwnedSite"></el-input>
          </el-form-item>
          <el-form-item label="查获时间：">
            <el-date-picker
              class="w200"
              v-model="form.SeizedTime"
              type="datetime"
              placeholder="选择日期时间"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="查获民警：">
            <el-input class="w200" v-model="form.PoliceSeized"></el-input>
          </el-form-item>
          <el-form-item label="执勤民警：">
            <el-input class="w200" v-model="form.PolicemanOnDuty"></el-input>
          </el-form-item>
          <el-form-item label="被查获人员姓名：">
            <el-input class="w200" v-model="form.SeizedPersonnel"></el-input>
          </el-form-item>
          <el-form-item label="户籍：">
            <el-input class="w200" v-model="form.Domicile"></el-input>
          </el-form-item>
          <el-form-item label="证件号码：">
            <el-input class="w200" v-model="form.IDNumber"></el-input>
          </el-form-item>
          <el-form-item label="被查获危险物品：">
            <el-input class="w200" v-model="form.dangerousItem"></el-input>
          </el-form-item>
          <el-form-item label="数量：">
            <el-input
              v-model.number="form.NumberSeized"
              class="w200"
              type="number"
              :maxlength="3"
              onkeyup="value=value.replace(/[^\d]/g,'')"
              onblur="value=value.replace(/[^\d]/g,'')"
              :min="1"
            ></el-input>
          </el-form-item>
          <el-form-item label="查获描述：">
            <el-input
              class="w200"
              type="textarea"
              v-model="form.SeizedDescription"
              :autosize="{ minRows: 2, maxRows: 4 }"
            ></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible1 = false"
            >保 存</el-button
          >
          <el-button @click="dialogVisible1 = false">取 消</el-button>
        </span>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formInline: {
        CaptainOnDuty: '',
        DutyTime: '',
        OwnedCheckpoint: ''
      },
      tableDate: [
        {
          SiteName: '',
          SeizedTime: '',
          PoliceSeized: [],
          BeSeized: '',
          BeSeizedID: '',
          SeizedDescription: '',
          PolicemanOnDuty: ''
        }, {}, {}, {}, {}, {}
      ],
      currentPage: 1,
      dialogVisible: false,
      dialogVisible1: false,
      dialogVisible2: false,
      form: {
        OwnedSite: '',
        SeizedTime: '',
        PoliceSeized: '',
        PolicemanOnDuty: '',
        SeizedPersonnel: '',
        Domicile: '',
        IDNumber: '',
        dangerousItem: '',
        NumberSeized: '',
        SeizedDescription: ''
      },
      form1: {
        CaptainOnDuty: '',
        DutyMember: '',
        PoliceForce: 0,
        VehicleLocation: '',
        DutyReport: '',
        DutyTime: '',
        DutyTasks: '',
        PolicemanOnDuty: '',
        OwnedCheckpoint: ''
      }
    }
  },
  methods: {
    onSubmit () {},
    onSubmit1 () {
      this.dialogVisible = true
    },
    handleDetails () {
      this.dialogVisible1 = true
    },
    handleDetails2 () {
      this.dialogVisible2 = true
    },
    handleDetails1 () {
      this.$confirm('是否确认删除该条信息?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        this.$message({
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
    // dutyList (row, column) {
    //   const DutyMember = row.DutyMember.map((item, index) => {
    //     return item
    //   })
    //   return DutyMember.join('、')
    // },
    // dutyUnit (row, column) {
    //   const Unit = (row.PoliceForce + ' 人')
    //   return Unit
    // }
  }
}
</script>

<style lang="less" scoped>
.el-button--mini {
  padding: 7px 10px;
}
</style>
