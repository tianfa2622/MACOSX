<template>
  <!-- 用户管理页面 -->
  <div class="fill_height mwidth dflex direction-column back-c">
    <el-card>
      <div slot="header" class="clearfix">
        <span style="font-size: 16px">用户管理</span>
      </div>
      <el-form :model="formInline" size="medium" label-width="100px">
        <el-row type="flex" justify="space-around">
          <el-col :span="4">
            <el-form-item label="姓名：">
              <el-input v-model="formInline.username" class="w250"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="身份证号码：">
              <el-input
                v-model="formInline.identificationNumber"
                class="w250"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="检查站：">
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
          <el-col :span="4">
            <el-form-item label="电话号码：">
              <el-input
                v-model="formInline.phoneNumber"
                class="w250"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24" style="text-align: end">
            <el-button @click="onSubmit" type="primary" class="w200"
              >搜索</el-button
            >
            <el-button @click="onSubmit1" type="primary" class="w200"
              >新增人员</el-button
            >
          </el-col>
        </el-row>
      </el-form>
      <!-- 新增人员 -->
      <el-dialog :visible.sync="dialogVisible3" title="新增人员" width="25%">
        <el-form :model="form" label-width="130px">
          <el-form-item label="角色设置：">
            <el-select
              v-model="form.Roles"
              style="width: 100%"
              placeholder="请选择角色"
            >
              <el-option label="角色1" value="角色1"></el-option>
              <el-option label="角色2" value="角色2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="姓名：">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="性别：">
            <el-radio-group v-model="form.gender">
              <el-radio :label="1">男</el-radio>
              <el-radio :label="0">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="民族：">
            <el-select
              v-model="form.national"
              style="width: 100%"
              placeholder="请选择"
            >
              <el-option
                v-for="item in nation"
                :key="item.length"
                :label="item.name"
                :value="item.name"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="常用证件类型：">
            <el-select
              v-model="form.CommonDocuments"
              style="width: 100%"
              placeholder="请选择"
            >
              <el-option label="身份证" value="身份证"></el-option>
              <el-option label="居住证" value="居住证"></el-option>
              <el-option label="签证" value="签证"></el-option>
              <el-option label="护照" value="护照"></el-option>
              <el-option label="户口本" value="户口本"></el-option>
              <el-option label="军人证" value="军人证"></el-option>
              <el-option label="团员证" value="团员证"></el-option>
              <el-option label="党员证" value="党员证"></el-option>
              <el-option label="港澳通行证" value="港澳通行证"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="证件号码：">
            <el-input v-model="form.IDNumber"></el-input>
          </el-form-item>
          <el-form-item label="联系电话：">
            <el-input v-model="form.contactNumber"></el-input>
          </el-form-item>
          <el-form-item label="公安检查站：">
            <el-select
              v-model="form.CheckpointCategory"
              style="width: 100%"
              placeholder="请选择"
            >
              <el-option
                label="万家丽公安检查站"
                value="万家丽公安检查站"
              ></el-option>
              <el-option
                label="锦泰广场公安检查站"
                value="锦泰广场公安检查站"
              ></el-option>
              <el-option
                label="火车南站公安检查站"
                value="火车南站公安检查站"
              ></el-option>
              <el-option
                label="五一广场公安检查站"
                value="五一广场公安检查站"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="Addto"> 提 交 </el-button>
          <el-button @click="dialogVisible3 = false">取 消</el-button>
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
        :row-style="{ height: '32px' }"
        :header-row-style="{ height: '32px' }"
        :cell-style="{ padding: '5px' }"
        style="width: 100%"
        class="flex1"
        height="100%"
      >
        <el-table-column
          type="index"
          label="NO."
          align="center"
          width="50px"
          :key="itemkey"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="username"
          :resizable="false"
          label="姓名"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="CommonDocuments"
          :resizable="false"
          label="常用证件"
        >
        </el-table-column>
        <el-table-column
          prop="IDNumber"
          :resizable="false"
          label="证件号码"
          min-width="90px"
        >
        </el-table-column>
        <el-table-column
          prop="gender"
          :resizable="false"
          label="性别"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="Roles"
          :resizable="false"
          label="角色"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="contactNumber"
          :resizable="false"
          label="联系电话"
        >
        </el-table-column>
        <el-table-column
          prop="CheckpointCategory"
          :resizable="false"
          label="公安检查站"
        >
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          :resizable="false"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="UpdateTime"
          label="更新时间"
          align="center"
          min-width="85px"
        >
        </el-table-column>
        <el-table-column
          label="操作"
          width="220px"
          :resizable="false"
          align="center"
        >
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
              type="danger"
              size="mini"
            >
              删除
            </el-button>
            <el-button
              @click="handleDetails4(scope.$index, scope.row)"
              type="primary"
              size="mini"
              v-if="scope.row.status !== '启动'"
            >
              解禁
            </el-button>
            <el-button
              v-else
              type="warning"
              @click="handleDetails4(scope.$index, scope.row)"
              size="mini"
            >
              禁用
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 编辑 -->
      <el-dialog :visible.sync="dialogVisible" title="编辑" width="25%">
        <el-form :model="form" label-width="130px">
          <el-form-item label="角色设置：">
            <el-select
              v-model="form.Roles"
              style="width: 100%"
              placeholder="请选择角色"
            >
              <el-option label="角色1" value="角色1"></el-option>
              <el-option label="角色2" value="角色2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="姓名：">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="性别：">
            <el-radio-group v-model="form.gender">
              <el-radio :label="1">男</el-radio>
              <el-radio :label="0">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="民族：">
            <el-select
              v-model="form.national"
              style="width: 100%"
              placeholder="请选择"
            >
              <el-option
                v-for="item in nation"
                :key="item.length"
                :label="item.name"
                :value="item.name"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="常用证件类型：">
            <el-select
              v-model="form.CommonCertificateTypes"
              style="width: 100%"
              placeholder="请选择"
            >
              <el-option label="身份证" value="身份证"></el-option>
              <el-option label="居住证" value="居住证"></el-option>
              <el-option label="签证" value="签证"></el-option>
              <el-option label="护照" value="护照"></el-option>
              <el-option label="户口本" value="户口本"></el-option>
              <el-option label="军人证" value="军人证"></el-option>
              <el-option label="团员证" value="团员证"></el-option>
              <el-option label="党员证" value="党员证"></el-option>
              <el-option label="港澳通行证" value="港澳通行证"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="证件号码：">
            <el-input v-model="form.DocumentNumber"></el-input>
          </el-form-item>
          <el-form-item label="联系电话：">
            <el-input v-model="form.ContactNumber"></el-input>
          </el-form-item>
          <el-form-item label="公安检查站：">
            <el-select
              v-model="form.PublicSecurityCheckpoint"
              style="width: 100%"
              placeholder="请选择"
            >
              <el-option
                label="万家丽公安检查站"
                value="万家丽公安检查站"
              ></el-option>
              <el-option
                label="锦泰广场公安检查站"
                value="锦泰广场公安检查站"
              ></el-option>
              <el-option
                label="火车南站公安检查站"
                value="火车南站公安检查站"
              ></el-option>
              <el-option
                label="五一广场公安检查站"
                value="五一广场公安检查站"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="addbtn">提 交</el-button>
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
import nation from '../../../components/Nation/Nation'
export default {
  data () {
    return {
      nation,
      formInline: {
        username: '',
        identificationNumber: '',
        CheckpointCategory: '',
        phoneNumber: ''
      },
      tableDate: [
        {
          username: '张三',
          CommonDocuments: '身份证',
          IDNumber: '430100000000000000',
          gender: 1,
          Roles: 'admin',
          national: '汉族',
          contactNumber: '1234567891',
          CheckpointCategory: '哒哒哒',
          status: '禁用',
          UpdateTime: '2020/12/12 12:12:12'
        },
        {
          username: 'lisa',
          CommonDocuments: '身份证',
          IDNumber: '430100000000000000',
          gender: 0,
          Roles: 'admin3',
          national: '汉',
          contactNumber: '1234567890',
          CheckpointCategory: '哒哒哒',
          status: '启动',
          UpdateTime: '2020/12/12 12:12:12'
        }
      ],
      form: {
        Roles: '',
        username: '',
        gender: null,
        national: '',
        CommonDocuments: '',
        IDNumber: '',
        contactNumber: '',
        CheckpointCategory: '',
        status: '',
        UpdateTime: ''
      },
      currentPage: 1,
      dialogVisible: false,
      dialogVisible3: false,
      activeNames: ['1'],
      itemkey: '',
      Rowindex: null
    }
  },
  methods: {
    onSubmit () {},
    onSubmit1 () {
      this.form = {}
      this.dialogVisible3 = true
    },
    Addto () {
      const UpdateTime = this.$moment(new Date()).format('YYYY/MM/DD HH:mm:ss')
      this.form.UpdateTime = UpdateTime
      this.form.status = '禁用'
      this.tableDate.push(this.form)
      this.dialogVisible3 = false
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
    handleDetails1 (index, row) {
      const username = row.username
      this.$confirm(`确定删除 ${username} 该用户?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        this.tableDate.splice(index, 1)
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
    handleDetails4 (index, row) {
      let mystatus
      if (row.status === '禁用') {
        mystatus = '启动'
      } else {
        mystatus = '禁用'
      }
      this.$confirm(`确定${mystatus}该用户?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        const UpdateTime = this.$moment(new Date()).format('YYYY/MM/DD HH:mm:ss')
        row.UpdateTime = UpdateTime
        row.status = mystatus
        this.itemkey = Math.random()
        this.$message({
          type: 'success',
          message: `${mystatus}成功!`
        })
      }).catch(() => {
        const UpdateTime = this.$moment(new Date()).format('YYYY/MM/DD HH:mm:ss')
        row.UpdateTime = UpdateTime
        row.status = mystatus
        this.itemkey = Math.random()
        this.$message({
          type: 'info',
          message: `已取消${mystatus}`
        })
      })
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    },
    handleChange () {}
  }
}
</script>

<style lang="less" scoped>
.mwidth {
  width: 100%;
  .el-collapse-item__content {
    padding-bottom: 0;
  }
  .rowtitle {
    font-size: 14px !important;
  }
  .el-divider--horizontal {
    margin: 4px 0;
  }
  .border-b {
    border-bottom: 1px solid #ccc;
  }
  .dialogClass {
    /deep/ .el-dialog__body {
      padding: 15px 20px;
      .el-collapse-item {
        /deep/ .el-collapse-item__header {
          padding-left: 10px;

          background-color: #f2f2f2;
        }
        /deep/ .el-collapse-item__wrap {
          border: 0;
          .el-collapse-item__content {
            padding-bottom: 0;
          }
        }
      }
    }
  }
}
</style>
