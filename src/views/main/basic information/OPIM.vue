<template>
  <div class="fill_height mwidth dflex direction-column back-c">
    <el-card>
      <div slot="header" class="clearfix">
        <span style="font-size: 16px">执勤人员信息管理</span>
      </div>
      <el-form :model="formInline" size="medium" label-width="100px">
        <el-row type="flex" justify="space-around">
          <el-col :span="6">
            <el-form-item label="姓名：">
              <el-input v-model="formInline.OnDutyName" class="w250"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="证件号码：">
              <el-input
                v-model="formInline.CertificateNum"
                class="w250"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="公安检查站：">
              <el-select
                v-model="formInline.CheckpointCategory"
                placeholder="请选择检查站"
                class="w250"
              >
                <el-option label="部门一" value="shanghai"></el-option>
                <el-option label="部门二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="text-align: end">
          <el-col>
            <el-button @click="onSubmit" plain class="w200">搜索</el-button>
            <el-button @click="onSubmit1" type="primary" class="w200 ml-20"
              >添加</el-button
            >
          </el-col>
        </el-row>
      </el-form>

      <!-- 添加 -->
      <el-dialog :visible.sync="dialogVisible1" title="添加" width="25%">
        <el-form :model="form" label-width="130px">
          <el-form-item label="姓名：">
            <el-input v-model="form.OnDutyName"></el-input>
          </el-form-item>
          <el-form-item label="常用证件：">
            <el-select
              v-model="form.CommonDocuments"
              style="width: 100%"
              placeholder="请选择证件类型"
            >
              <el-option label="身份证" value="bumengyi"></el-option>
              <el-option label="港澳通行证" value="bumenger"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="证件号码：">
            <el-input v-model="form.CertificateNum"></el-input>
          </el-form-item>
          <el-form-item label="性别：">
            <el-radio-group v-model="form.gender">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="民族：">
            <el-select
              v-model="form.nation"
              style="width: 100%"
              placeholder="请选择民族"
            >
              <el-option label="部门一" value="bumengyi"></el-option>
              <el-option label="部门二" value="bumenger"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="联系电话：">
            <el-input v-model="form.contactNumber"></el-input>
          </el-form-item>
          <el-form-item label="公安检查站：">
            <el-select
              v-model="form.CheckpointCategory"
              style="width: 100%"
              placeholder="请选择检查站"
            >
              <el-option label="部门一" value="bumengyi"></el-option>
              <el-option label="部门二" value="bumenger"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="Addto"> 提 交 </el-button>
          <el-button @click="dialogVisible1 = false">取 消</el-button>
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
        :key="itemkey"
      >
        <el-table-column
          type="index"
          label="NO."
          align="center"
          width="50px"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="OnDutyName"
          label="姓名"
          align="center"
          min-width="90px"
          :resizable="false"
        >
        </el-table-column>
        <el-table-column
          prop="CommonDocuments"
          label="常用证件"
          align="center"
          min-width="90px"
          :resizable="false"
        >
        </el-table-column>
        <el-table-column
          prop="CertificateNum"
          label="证件号码"
          align="center"
          min-width="90px"
          :resizable="false"
        >
        </el-table-column>
        <el-table-column
          prop="gender"
          label="性别"
          align="center"
          min-width="90px"
          :resizable="false"
        >
        </el-table-column>
        <el-table-column
          prop="nation"
          label="民族"
          align="center"
          min-width="90px"
          :resizable="false"
        >
        </el-table-column>
        <el-table-column
          prop="contactNumber"
          label="联系电话"
          align="center"
          min-width="90px"
          :resizable="false"
        >
        </el-table-column>
        <el-table-column
          prop="CheckpointCategory"
          label="公安检查站"
          align="center"
          min-width="90px"
          :resizable="false"
        >
        </el-table-column>
        <el-table-column
          prop="UpdateTime"
          label="更新时间"
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
          </template>
        </el-table-column>
      </el-table>
      <!-- 编辑 -->
      <el-dialog :visible.sync="dialogVisible" title="编辑" width="25%">
        <el-form :model="form" label-width="130px">
          <el-form-item label="姓名：">
            <el-input v-model="form.OnDutyName"></el-input>
          </el-form-item>
          <el-form-item label="常用证件：">
            <el-select
              v-model="form.CommonDocuments"
              style="width: 100%"
              placeholder="请选择证件类型"
            >
              <el-option label="身份证" value="bumengyi"></el-option>
              <el-option label="港澳通行证" value="bumenger"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="证件号码：">
            <el-input v-model="form.CertificateNum"></el-input>
          </el-form-item>
          <el-form-item label="性别：">
            <el-radio-group v-model="form.gender">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="民族：">
            <el-select
              v-model="form.nation"
              style="width: 100%"
              placeholder="请选择民族"
            >
              <el-option label="部门一" value="bumengyi"></el-option>
              <el-option label="部门二" value="bumenger"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="联系电话：">
            <el-input v-model="form.contactNumber"></el-input>
          </el-form-item>
          <el-form-item label="公安检查站：">
            <el-select
              v-model="form.CheckpointCategory"
              style="width: 100%"
              placeholder="请选择检查站"
            >
              <el-option label="部门一" value="bumengyi"></el-option>
              <el-option label="部门二" value="bumenger"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="addbtn"> 提 交 </el-button>
          <el-button @click="dialogVisible = false">取 消</el-button>
        </span>
      </el-dialog>

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
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formInline: {
        OnDutyName: '',
        CertificateNum: '',
        CheckpointCategory: ''
      },
      tableDate: [
        {
          OnDutyName: '张三',
          CommonDocuments: '身份证',
          CertificateNum: '11111111111111111',
          gender: '男',
          nation: '汉族',
          contactNumber: '12345689777',
          CheckpointCategory: '哒哒哒',
          UpdateTime: '2020/12/12 12:12:12'
        }
      ],
      form: {
        OnDutyName: '',
        CommonDocuments: '',
        CertificateNum: '',
        gender: '',
        nation: '',
        contactNumber: '',
        CheckpointCategory: '',
        UpdateTime: ''
      },
      currentPage: 1,
      dialogVisible: false,
      dialogVisible1: false,
      Rowindex: null,
      itemkey: ''
    }
  },
  methods: {
    onSubmit () {},
    onSubmit1 () {
      this.form = {}
      this.dialogVisible1 = true
    },
    Addto () {
      const UpdateTime = this.$moment(new Date()).format('YYYY/MM/DD HH:mm:ss')
      this.form.UpdateTime = UpdateTime
      this.tableDate.push(this.form)
      this.dialogVisible1 = false
      this.form = {}
    },
    handleDetails (index, row) {
      this.dialogVisible = true
      const editrow = JSON.parse(JSON.stringify(row))
      this.form = editrow
      this.Rowindex = index
    },
    addbtn () {
      const UpdateTime = this.$moment(new Date()).format('YYYY/MM/DD HH:mm:ss')
      this.form.UpdateTime = UpdateTime
      this.dialogVisible = false
      this.tableDate[this.Rowindex] = this.form
      this.itemkey = Math.random()
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
.mwidth {
  width: 100%;
}
</style>
