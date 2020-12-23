<template>
  <!-- 勤务启动 -->
  <div class="fill_height mwidth dflex direction-column back-c">
    <el-card>
      <div slot="header" class="clearfix">
        <span style="font-size: 16px">勤务启动</span>
      </div>
      <el-form
        :model="formInline"
        label-width="100px"
        :inline="true"
        class="dflex"
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
          <el-button @click="onSubmit1" plain type="primary"
            >创建任务</el-button
          >
        </el-form-item>
      </el-form>

      <!-- 创建任务 -->
      <el-dialog :visible.sync="dialogVisible" center width="25%">
        <el-form :model="form" label-width="130px">
          <el-form-item label="值班队长：">
            <el-input v-model="form.CaptainOnDuty"></el-input>
          </el-form-item>
          <el-form-item label="值班队员：">
            <el-input v-model="form.DutyMember"></el-input>
          </el-form-item>
          <el-form-item label="勤务力量(人)：">
            <el-input v-model="form.PoliceForce"></el-input>
          </el-form-item>
          <el-form-item label="勤务上报：">
            <el-radio-group v-model="form.DutyReport">
              <el-radio :label="0">是</el-radio>
              <el-radio :label="1">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="车辆位置：">
            <el-input v-model="form.VehicleLocation"></el-input>
          </el-form-item>
          <el-form-item label="勤务时间：">
            <el-date-picker
              v-model="form.DutyTime"
              style="width: 100%"
              type="datetime"
              placeholder="选择日期时间"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="勤务任务：">
            <el-input
              type="textarea"
              v-model="form.DutyTasks"
              :autosize="{ minRows: 2, maxRows: 4 }"
            ></el-input>
          </el-form-item>
          <el-form-item label="执勤民警：">
            <el-input v-model="form.PolicemanOnDuty"></el-input>
          </el-form-item>
          <el-form-item label="所属检查站：">
            <el-select
              v-model="form.OwnedCheckpoint"
              style="width: 100%"
              placeholder="请选择检查站"
            >
              <el-option label="部门一" value="bumengyi"></el-option>
              <el-option label="部门二" value="bumenger"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >保 存</el-button
          >
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
          prop="CaptainOnDuty"
          label="执勤队长"
          align="center"
          min-width="90px"
          :resizable="false"
        >
        </el-table-column>
        <el-table-column
          prop="DutyMember"
          :formatter="dutyList"
          label="值班队员"
          align="center"
          min-width="90px"
          :resizable="false"
        >
        </el-table-column>
        <el-table-column
          prop="PoliceForce"
          :formatter="dutyUnit"
          label="警务力量"
          align="center"
          min-width="90px"
          :resizable="false"
        >
        </el-table-column>
        <el-table-column
          prop="VehicleLocation"
          label="车辆位置"
          align="center"
          min-width="90px"
          :resizable="false"
        >
        </el-table-column>
        <el-table-column
          prop="DutyReport"
          label="勤务上报"
          align="center"
          min-width="90px"
          :resizable="false"
        >
        </el-table-column>
        <el-table-column
          prop="DutyTime"
          label="勤务时间"
          align="center"
          min-width="90px"
          :resizable="false"
        >
        </el-table-column>
        <el-table-column
          prop="DutyTasks"
          label="勤务任务"
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
          prop="OwnedCheckpoint"
          label="所属检查站"
          align="center"
          min-width="90px"
          :resizable="false"
        >
        </el-table-column>
        <el-table-column label="操作" align="center" :resizable="false">
          <template slot-scope="scope">
            <el-button
              @click="handleDetails(scope.$index, scope.row)"
              type="primary"
              size="mini"
            >
              编辑
            </el-button>
            <el-button
              @click="handleDetails1(scope.$index, scope.row)"
              type="primary"
              size="mini"
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

      <!-- 创建任务 -->
      <el-dialog :visible.sync="dialogVisible1" title="编辑" width="25%">
        <el-form :model="form1" label-width="130px">
          <el-form-item label="值班队长：">
            <el-input v-model="form1.CaptainOnDuty"></el-input>
          </el-form-item>
          <el-form-item label="值班队员：">
            <el-input v-model="form1.DutyMember"></el-input>
          </el-form-item>
          <el-form-item label="勤务力量(人)：">
            <el-input v-model="form1.PoliceForce"></el-input>
          </el-form-item>
          <el-form-item label="勤务上报：">
            <el-radio-group v-model="form1.DutyReport">
              <el-radio :label="0">是</el-radio>
              <el-radio :label="1">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="车辆位置：">
            <el-input v-model="form1.VehicleLocation"></el-input>
          </el-form-item>
          <el-form-item label="勤务时间：">
            <el-date-picker
              v-model="form1.DutyTime"
              style="width: 100%"
              type="datetime"
              placeholder="选择日期时间"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="勤务任务：">
            <el-input
              type="textarea"
              v-model="form1.DutyTasks"
              :autosize="{ minRows: 2, maxRows: 4 }"
            ></el-input>
          </el-form-item>
          <el-form-item label="执勤民警：">
            <el-input v-model="form1.PolicemanOnDuty"></el-input>
          </el-form-item>
          <el-form-item label="所属检查站：">
            <el-select
              v-model="form1.OwnedCheckpoint"
              style="width: 100%"
              placeholder="请选择检查站"
            >
              <el-option label="部门一" value="bumengyi"></el-option>
              <el-option label="部门二" value="bumenger"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible1 = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible1 = false"
            >保 存</el-button
          >
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
          CaptainOnDuty: '张小刚',
          DutyMember: ['张三', '李四'],
          PoliceForce: 10,
          VehicleLocation: '5号车道',
          DutyReport: '否',
          DutyTime: '',
          DutyTasks: '',
          PolicemanOnDuty: '',
          OwnedCheckpoint: ''
        },
        {
          CaptainOnDuty: '李小红',
          DutyMember: ['张三', '李四'],
          PoliceForce: 10,
          VehicleLocation: '5号车道',
          DutyReport: '否',
          DutyTime: '',
          DutyTasks: '',
          PolicemanOnDuty: '',
          OwnedCheckpoint: ''
        },
        {
          CaptainOnDuty: '王小明',
          DutyMember: ['张三', '李四'],
          PoliceForce: 10,
          VehicleLocation: '5号车道',
          DutyReport: '是',
          DutyTime: '',
          DutyTasks: '',
          PolicemanOnDuty: '',
          OwnedCheckpoint: ''
        },
        {
          CaptainOnDuty: '周小伟',
          DutyMember: ['张三', '李四', '王五'],
          PoliceForce: 10,
          VehicleLocation: '5号车道',
          DutyReport: '是',
          DutyTime: '',
          DutyTasks: '',
          PolicemanOnDuty: '',
          OwnedCheckpoint: ''
        }
      ],
      currentPage: 1,
      dialogVisible: false,
      dialogVisible1: false,
      form: {
        CaptainOnDuty: '',
        DutyMember: '',
        PoliceForce: 0,
        VehicleLocation: '',
        DutyReport: 1,
        DutyTime: '',
        DutyTasks: '',
        PolicemanOnDuty: '',
        OwnedCheckpoint: ''
      },
      form1: {
        CaptainOnDuty: '',
        DutyMember: '',
        PoliceForce: 0,
        VehicleLocation: '',
        DutyReport: 0,
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
    handleDetails1 () {
      this.$confirm('是否确认删除 X射线安检机 此设备?', '提示', {
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
    },
    dutyList (row, column) {
      const DutyMember = row.DutyMember.map((item, index) => {
        return item
      })
      return DutyMember.join('、')
    },
    dutyUnit (row, column) {
      const Unit = (row.PoliceForce + ' 人')
      return Unit
    }
  }
}
</script>

<style lang="less" >
</style>
