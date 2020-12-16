<template>
  <!-- 用户角色及权限管理页面 -->
  <div class="fill_height mwidth dflex direction-column">
    <el-card>
      <div slot="header" class="clearfix">
        <span style="font-size:16px">用户角色及权限管理页面</span>
      </div>
      <el-form :model="formInline" label-width="100px">
        <el-row type="flex" justify="space-around">
          <el-col :span="4">
            <el-form-item label="姓名：">
              <el-input v-model="formInline.username" class="w250"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="身份证号码：">
              <el-input v-model="formInline.identificationNumber" class="w250"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="公安检查站：">
              <el-select v-model="formInline.CheckpointCategory" placeholder="请选择检查站" class="w250">
                <el-option label="部门一" value="shanghai"></el-option>
                <el-option label="部门二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="电话号码：">
              <el-input v-model="formInline.phoneNumber" class="w250"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24" style="text-align:end">
            <el-button @click="onSubmit" type="primary" class="w200">搜索</el-button>
            <el-button @click="onSubmit1" type="primary" class="w200">新增人员</el-button>
          </el-col>
        </el-row>
      </el-form>
      <!-- 新增人员 -->
      <el-dialog :visible.sync='dialogVisible3' title="编辑" width="25%">
        <el-form :model="form4" label-width="130px">
          <el-form-item label="姓名：">
            <el-input v-model="form4.Staffname"></el-input>
          </el-form-item>
          <el-form-item label="性别：">
            <el-radio-group v-model="form4.gender">
              <el-radio ::label="1">男</el-radio>
              <el-radio :label="0">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="民族：">
            <el-select v-model="form4.national" style="width:100%" placeholder="请选择">
              <el-option label="汉族" value="汉族"></el-option>
              <el-option label="满族" value="满族"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="常用证件类型：">
            <el-select v-model="form4.CommonCertificateTypes" style="width:100%" placeholder="请选择">
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
            <el-input v-model="form4.DocumentNumber"></el-input>
          </el-form-item>
          <el-form-item label="联系电话：">
            <el-input v-model="form4.ContactNumber"></el-input>
          </el-form-item>
          <el-form-item label="公安检查站：">
            <el-select v-model="form4.PublicSecurityCheckpoint" style="width:100%" placeholder="请选择">
              <el-option label="万家丽公安检查站" value="万家丽公安检查站"></el-option>
              <el-option label="锦泰广场公安检查站" value="锦泰广场公安检查站"></el-option>
              <el-option label="火车南站公安检查站" value="火车南站公安检查站"></el-option>
              <el-option label="五一广场公安检查站" value="五一广场公安检查站"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible3 = false">提 交</el-button>
          <el-button type="primary" @click="dialogVisible3 = false">取 消</el-button>
        </span>
      </el-dialog>
    </el-card>

    <el-card class="mt-10 pb-30 flex1 posi-rel over-h" body-style="height: 100%">
      <el-table :data="tableDate" fit border :row-style="{height:'32px'}" :header-row-style="{height:'32px'}" :cell-style="{padding:'5px'}" style="width: 100%" class="flex1" height="100%">
        <el-table-column type="index" label="NO." align="center" width="50px"></el-table-column>
        <el-table-column prop="username" label="姓名" align="center">
        </el-table-column>
        <el-table-column prop="CommonDocuments" label="常用证件">
        </el-table-column>
        <el-table-column prop="IDNumber" label="证件号码" min-width="90px">
        </el-table-column>
        <el-table-column prop="gender" label="性别" align="center">
        </el-table-column>
        <el-table-column prop="nation" label="民族" align="center">
        </el-table-column>
        <el-table-column prop="contactNumber" label="联系电话">
        </el-table-column>
        <el-table-column prop="CheckpointCategory" label="公安检查站">
        </el-table-column>
        <el-table-column prop="status" label="状态" align="center">
        </el-table-column>
        <el-table-column prop="UpdateTime" label="更新时间" align="center" min-width="85px">
        </el-table-column>
        <el-table-column label="操作" width="220px" align="center">
          <template slot-scope="scope">
            <el-button @click="handleDetails(scope.$index, scope.row)" type="primary" size="mini">
              编辑
            </el-button>
            <el-button @click="handleDetails1(scope.$index, scope.row)" type="danger" size="mini">
              删除
            </el-button>
            <el-button @click="handleDetails2(scope.$index, scope.row)" type="primary" size="mini">
              角色
            </el-button><br>
            <el-button @click="handleDetails3(scope.$index, scope.row)" type="primary" size="mini" class="mt-5">
              权限
            </el-button>
            <el-button @click="handleDetails4(scope.$index, scope.row)" type="primary" size="mini">
              解禁
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 编辑 -->
      <el-dialog :visible.sync='dialogVisible' title="编辑" width="25%">
        <el-form :model="form" label-width="130px">
          <el-form-item label="姓名：">
            <el-input v-model="form.Staffname"></el-input>
          </el-form-item>
          <el-form-item label="性别：">
            <el-radio-group v-model="form.gender">
              <el-radio :label="1">男</el-radio>
              <el-radio :label="0">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="民族：">
            <el-select v-model="form.national" style="width:100%" placeholder="请选择">
              <el-option label="汉族" value="汉族"></el-option>
              <el-option label="满族" value="满族"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="常用证件类型：">
            <el-select v-model="form.CommonCertificateTypes" style="width:100%" placeholder="请选择">
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
            <el-select v-model="form.PublicSecurityCheckpoint" style="width:100%" placeholder="请选择">
              <el-option label="万家丽公安检查站" value="万家丽公安检查站"></el-option>
              <el-option label="锦泰广场公安检查站" value="锦泰广场公安检查站"></el-option>
              <el-option label="火车南站公安检查站" value="火车南站公安检查站"></el-option>
              <el-option label="五一广场公安检查站" value="五一广场公安检查站"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">提 交</el-button>
          <el-button type="primary" @click="dialogVisible = false">取 消</el-button>
        </span>
      </el-dialog>
      <!-- 角色 -->
      <el-dialog :visible.sync='dialogVisible1' title="角色设置" width="25%">
        <el-form :model="form2" label-width="130px">
          <el-form-item label="角色名称：">
            <el-input v-model="form2.RoleName"></el-input>
          </el-form-item>
          <el-form-item label="说明：">
            <el-input v-model="form2.Description"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible1 = false">提 交</el-button>
          <el-button type="primary" @click="dialogVisible1 = false">取 消</el-button>
        </span>
      </el-dialog>
      <!-- 权限 -->
      <el-dialog :visible.sync='dialogVisible2' title="权限设置" width="25%" class="dialogClass">
        <el-form :model="form3">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="地区权限" name="1">
              <div class="clearfix p-10 pl-20 border-b">
                <span>长沙西公安检查站</span>
                <span class="flr pr-20">
                  <el-checkbox v-model="form3.type" label="changsha"><span></span></el-checkbox>
                </span>
              </div>
              <div class="clearfix p-10 border-b">
                <span>大姚公安检查站</span>
                <span class="flr pr-20">
                  <el-checkbox v-model="form3.type" label="dayao"><span></span></el-checkbox>
                </span>
              </div>
            </el-collapse-item>
            <el-collapse-item name="2">
              <template slot="title">
                <!-- 功能权限<div> <span>只读</span> <span>是</span><span>否</span></div> -->
                <el-row :gutter="20" class="mwidth rowtitle">
                  <el-col :span="12">
                    <div> 功能权限</div>
                  </el-col>
                  <el-col :span="6">
                    <div> 只读</div>
                  </el-col>
                  <el-col :span="2">
                    <div>是</div>
                  </el-col>
                  <el-col :span="2">
                    <div>否</div>
                  </el-col>
                </el-row>
              </template>
              <div>
                <el-row :gutter="20" class="mwidth rowtitle pl-20">
                  <el-col :span="18">
                    <div> 车辆通行信息监测</div>
                  </el-col>
                  <el-col :span="2">
                    <el-radio v-model="form3.VehicleMonitoring" :label="1"><span></span></el-radio>
                  </el-col>
                  <el-col :span="2">
                    <el-radio v-model="form3.VehicleMonitoring" :label="2"><span></span></el-radio>
                  </el-col>
                </el-row>
                <el-divider></el-divider>
              </div>
              <div>
                <el-row :gutter="20" class="mwidth rowtitle pl-20">
                  <el-col :span="18">
                    <div> 人员通行信息监测</div>
                  </el-col>
                  <el-col :span="2">
                    <el-radio v-model="form3.PersonnelMonitoring" :label="1"><span></span></el-radio>
                  </el-col>
                  <el-col :span="2">
                    <el-radio v-model="form3.PersonnelMonitoring" :label="2"><span></span></el-radio>
                  </el-col>
                </el-row>
                <el-divider></el-divider>
              </div>
              <div>
                <el-row :gutter="20" class="mwidth rowtitle pl-20">
                  <el-col :span="18">
                    <div> 过车统计</div>
                  </el-col>
                  <el-col :span="2">
                    <el-radio v-model="form3.TrafficStatistics" :label="1"><span></span></el-radio>
                  </el-col>
                  <el-col :span="2">
                    <el-radio v-model="form3.TrafficStatistics" :label="2"><span></span></el-radio>
                  </el-col>
                </el-row>
                <el-divider></el-divider>
              </div>
              <div>
                <el-row :gutter="20" class="mwidth rowtitle pl-20">
                  <el-col :span="18">
                    <div> 查控统计</div>
                  </el-col>
                  <el-col :span="2">
                    <el-radio v-model="form3.ControlStatistics" :label="1"><span></span></el-radio>
                  </el-col>
                  <el-col :span="2">
                    <el-radio v-model="form3.ControlStatistics" :label="2"><span></span></el-radio>
                  </el-col>
                </el-row>
                <el-divider></el-divider>
              </div>
              <div>
                <el-row :gutter="20" class="mwidth rowtitle pl-20">
                  <el-col :span="18">
                    <div> 战果统计</div>
                  </el-col>
                  <el-col :span="2">
                    <el-radio v-model="form3.ResultsStatistics" :label="1"><span></span></el-radio>
                  </el-col>
                  <el-col :span="2">
                    <el-radio v-model="form3.ResultsStatistics" :label="2"><span></span></el-radio>
                  </el-col>
                </el-row>
                <el-divider></el-divider>
              </div>
              <div>
                <el-row :gutter="20" class="mwidth rowtitle pl-20">
                  <el-col :span="18">
                    <div> 勤务统计</div>
                  </el-col>
                  <el-col :span="2">
                    <el-radio v-model="form3.DutyStatistics" :label="1"><span></span></el-radio>
                  </el-col>
                  <el-col :span="2">
                    <el-radio v-model="form3.DutyStatistics" :label="2"><span></span></el-radio>
                  </el-col>
                </el-row>
                <el-divider></el-divider>
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible1 = false">提 交</el-button>
        </span>
      </el-dialog>
      <!-- 分页 -->
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 15, 20, 25]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="400" class="posi-abs b-10 ta-c offset">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
          gender: '男',
          nation: '汉',
          contactNumber: '1234567891',
          CheckpointCategory: '哒哒哒',
          status: '禁用',
          UpdateTime: '2020/12/12 12:12:12'
        },
        {
          username: 'lisa',
          CommonDocuments: '身份证',
          IDNumber: '430100000000000000',
          gender: '女',
          nation: '汉',
          contactNumber: '1234567890',
          CheckpointCategory: '哒哒哒',
          status: '启动',
          UpdateTime: '2020/12/12 12:12:12'
        }
      ],
      form: {
        Staffname: '张三',
        gender: 1,
        national: '汉族',
        CommonCertificateTypes: '身份证',
        DocumentNumber: '423426122212000000',
        ContactNumber: '02111111111',
        PublicSecurityCheckpoint: '万家丽公安检查站'
      },
      form2: {
        RoleName: '',
        Description: ''
      },
      form3: {
        type: ['dayao'],
        VehicleMonitoring: 1,
        PersonnelMonitoring: 2,
        TrafficStatistics: 1,
        ControlStatistics: 1,
        ResultsStatistics: 2,
        DutyStatistics: 2
      },
      form4: {
        Staffname: '',
        gender: '',
        national: '',
        CommonCertificateTypes: '',
        DocumentNumber: '',
        ContactNumber: '',
        PublicSecurityCheckpoint: ''
      },
      currentPage: 1,
      dialogVisible: false,
      dialogVisible1: false,
      dialogVisible2: false,
      dialogVisible3: false,
      activeNames: ['1']
    }
  },
  methods: {
    onSubmit () {},
    onSubmit1 () {
      this.dialogVisible3 = true
    },
    handleDetails () {
      this.dialogVisible = true
    },
    handleDetails1 () {
      this.$confirm('确定删除 张三 该用户?', '提示', {
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
    handleDetails2 () {
      this.dialogVisible1 = true
    },
    handleDetails3 () {
      this.dialogVisible2 = true
    },
    handleDetails4 () {
      this.$confirm('确定禁用该用户?', '提示', {
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
