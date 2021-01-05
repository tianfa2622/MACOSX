<template>
  <!-- 战果上报 -->
  <div class="fill_height mwidth dflex direction-column back-c">
    <el-card>
      <div slot="header" class="clearfix">
        <span style="font-size: 16px">战果上报</span>
      </div>
      <el-form :model="formInline" :inline="true" size="small">
        <el-form-item label="被查获人员姓名/物品名称：" class="w-28">
          <el-input v-model="formInline.CertificateNum"></el-input>
        </el-form-item>
        <el-form-item label="被查获人身份证号码：" class="w-25">
          <el-input v-model="formInline.CertificateNumId"></el-input>
        </el-form-item>
        <el-form-item label="查获时间：" class="w-22">
          <el-date-picker
            v-model="formInline.DutyTime"
            type="datetime"
            placeholder="选择日期时间"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="所属检查站：" class="w-20">
          <el-select
            v-model="formInline.OwnedCheckpoint"
            placeholder="请选择检查站"
          >
            <el-option label="部门一" value="shanghai"></el-option>
            <el-option label="部门二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <!-- <el-form-item class="ta-e">
          <el-button @click="onSubmit" class="w150" type="primary"
            >查询</el-button
          >
          <el-button @click="onSubmit1" class="w150" plain type="primary"
            >上报</el-button
          >
        </el-form-item> -->
        <div class="flr over-h mb-10 w-30">
          <el-button @click="onSubmit" class="w150" type="primary"
            >查询</el-button
          >
          <el-button @click="onSubmit1" class="w150" plain type="primary"
            >上报</el-button
          >
        </div>
      </el-form>

      <!-- 上报 -->
      <el-dialog :visible.sync="dialogVisible" title="上报" width="50%">
        <el-form
          :model="form"
          :inline="true"
          ref="form"
          label-width="150px"
          size="small"
        >
          <el-form-item label="所属站点：">
            <el-input class="w200" v-model="form.OwnedSite"></el-input>
          </el-form-item>
          <el-form-item label="查获时间：">
            <el-date-picker
              value-format="yyyy-MM-dd HH:mm:ss"
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
          <el-form-item label="证件号码：" class="w-100">
            <el-input class="w200" v-model="form.IDNumber"></el-input>
          </el-form-item>
          <div v-for="(item, index) in form.formList" :key="item.key">
            <el-form-item
              :label="'被查获危险物品：'"
              :prop="'formList.' + index + '.dangerousItem'"
            >
              <el-input class="w200" v-model="item.dangerousItem"></el-input>
            </el-form-item>
            <el-form-item
              :label="'数量：'"
              :prop="'formList.' + index + '.NumberSeized'"
            >
              <el-input
                v-model.number="item.NumberSeized"
                class="w100"
                type="number"
                :maxlength="3"
                onkeyup="value=value.replace(/[^\d]/g,'')"
                onblur="value=value.replace(/[^\d]/g,'')"
                :min="1"
              ></el-input>
            </el-form-item>
            <el-button
              class="ml-10"
              type="primary"
              size="small"
              icon="el-icon-plus"
              circle
              v-if="index === 0"
              @click="increase"
            ></el-button>
            <el-button
              size="small"
              class="ml-10"
              type="danger"
              icon="el-icon-delete"
              circle
              @click="removeRow(index)"
              v-if="index > 0"
            ></el-button>
          </div>
          <el-form-item label="查获描述：" class="w-100">
            <el-input
              class="w-100"
              type="textarea"
              resize="none"
              v-model="form.SeizedDescription"
              :autosize="{ minRows: 2, maxRows: 4 }"
            ></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="Preservation">保 存</el-button>
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
        size="small"
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
          prop="OwnedSite"
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
          prop="IDNumber"
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
      <el-dialog :visible.sync="dialogVisible2" title="详情" width="50%">
        <el-form :model="form" :inline="true" label-width="150px" size="small">
          <el-form-item label="所属站点：">
            <el-input v-model="form.OwnedSite" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="查获时间：">
            <!-- <el-date-picker
              :disabled="true"
              v-model="form.SeizedTime"
              type="datetime"
            >
            </el-date-picker> -->
            <el-input
              class="w200"
              :disabled="true"
              v-model="form.SeizedTime"
            ></el-input>
          </el-form-item>
          <el-form-item label="查获民警：">
            <el-input :disabled="true" v-model="form.PoliceSeized"></el-input>
          </el-form-item>
          <el-form-item label="执勤民警：">
            <el-input
              :disabled="true"
              v-model="form.PolicemanOnDuty"
            ></el-input>
          </el-form-item>
          <el-form-item label="被查获人员姓名：">
            <el-input
              :disabled="true"
              v-model="form.SeizedPersonnel"
            ></el-input>
          </el-form-item>
          <el-form-item label="户籍：">
            <el-input :disabled="true" v-model="form.Domicile"></el-input>
          </el-form-item>
          <el-form-item label="证件号码：" class="w-100">
            <el-input
              class="w200"
              :disabled="true"
              v-model="form.IDNumber"
            ></el-input>
          </el-form-item>
          <div v-for="item1 in form.formList" :key="item1.key">
            <el-form-item label="被查获危险物品：">
              <el-input
                class="w200"
                :disabled="true"
                v-model="item1.dangerousItem"
              ></el-input>
            </el-form-item>
            <el-form-item label="数量：">
              <el-input
                v-model.number="item1.NumberSeized"
                :disabled="true"
                class="w100"
                type="number"
                :maxlength="3"
                onkeyup="value=value.replace(/[^\d]/g,'')"
                onblur="value=value.replace(/[^\d]/g,'')"
                :min="1"
              ></el-input>
            </el-form-item>
          </div>
          <el-form-item label="查获描述：" class="w-100">
            <el-input
              class="w-100"
              :disabled="true"
              type="textarea"
              resize="none"
              v-model="form.SeizedDescription"
              :autosize="{ minRows: 2, maxRows: 4 }"
            ></el-input>
          </el-form-item>
        </el-form>
      </el-dialog>

      <!-- 编辑 -->
      <el-dialog :visible.sync="dialogVisible1" title="编辑" width="50%">
        <el-form
          :model="form"
          :inline="true"
          ref="form"
          label-width="150px"
          size="small"
        >
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
          <el-form-item label="证件号码：" class="w-100">
            <el-input class="w200" v-model="form.IDNumber"></el-input>
          </el-form-item>
          <div v-for="(item2, index) in form.formList" :key="item2.key">
            <el-form-item
              :label="'被查获危险物品：'"
              :prop="'formList.' + index + '.dangerousItem'"
            >
              <el-input class="w200" v-model="item2.dangerousItem"></el-input>
            </el-form-item>
            <el-form-item
              :label="'数量：'"
              :prop="'formList.' + index + '.NumberSeized'"
            >
              <el-input
                v-model.number="item2.NumberSeized"
                class="w100"
                type="number"
                :maxlength="3"
                onkeyup="value=value.replace(/[^\d]/g,'')"
                onblur="value=value.replace(/[^\d]/g,'')"
                :min="1"
              ></el-input>
            </el-form-item>
            <el-button
              size="small"
              class="ml-10"
              type="primary"
              icon="el-icon-plus"
              circle
              v-if="index === 0"
              @click="increase"
            ></el-button>
            <el-button
              size="small"
              class="ml-10"
              type="danger"
              icon="el-icon-delete"
              circle
              @click="removeRow(index)"
              v-if="index > 0"
            ></el-button>
          </div>
          <el-form-item label="查获描述：" class="w-100">
            <el-input
              class="w-100"
              type="textarea"
              resize="none"
              v-model="form.SeizedDescription"
              :autosize="{ minRows: 2, maxRows: 4 }"
            ></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="saveForm">保 存</el-button>
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
          OwnedSite: '',
          SeizedTime: '',
          PoliceSeized: '',
          PolicemanOnDuty: '',
          BeSeized: '',
          Domicile: '',
          IDNumber: '',
          SeizedPersonnel: '',
          formList: [
            {
              dangerousItem: '',
              NumberSeized: ''
            }
          ],
          SeizedDescription: ''
        }
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
        formList: [
          {
            dangerousItem: '',
            NumberSeized: ''
          }
        ],
        SeizedDescription: '',
        BeSeized: ''
      },
      index: null,
      itemkey: ''
    }
  },
  methods: {
    onSubmit () {},
    onSubmit1 () {
      this.form = {
        formList: [
          {
            dangerousItem: '',
            NumberSeized: ''
          }
        ]
      }
      this.dialogVisible = true
    },
    handleDetails (index) {
      this.form = this.tableDate[index]
      this.index = index
      this.dialogVisible1 = true
    },
    handleDetails2 (index) {
      this.form = this.tableDate[index]
      this.index = index
      this.dialogVisible2 = true
    },
    handleDetails1 (index) {
      this.$confirm('是否确认删除该条信息?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        this.tableDate.splice(index, 1)
        this.$message(
          {
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
    // 保存
    Preservation () {
      var dangerousItem = this.form.formList.map((item) => { return item.dangerousItem })
      if (this.form.SeizedPersonnel !== ('' || undefined) && dangerousItem !== '') {
        var BeSeized = [this.form.SeizedPersonnel, ...dangerousItem]
        this.form.BeSeized = BeSeized.join('/')
        this.tableDate.push(this.form)
      }
      this.dialogVisible = false
    },
    // 编辑保存
    saveForm () {
      var dangerousItem = this.form.formList.map((item) => { return item.dangerousItem })
      if (this.form.SeizedPersonnel !== ('' || undefined) && dangerousItem !== '') {
        var BeSeized = [this.form.SeizedPersonnel, ...dangerousItem]
        this.form.BeSeized = BeSeized.join('/')
        this.tableDate[this.index] = this.form
        this.itemkey = Math.random()
      }
      this.dialogVisible1 = false
    },
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

    // 添加属性列
    increase () {
      this.form.formList.push({
        dangerousItem: '',
        NumberSeized: '',
        key: Date.now()
      })
    },
    // 删除属性列
    removeRow (index) {
      if (index !== 0) {
        this.form.formList.splice(index, 1)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.el-button--mini {
  padding: 7px 10px;
}
.w-22 {
  width: 22%;
}
.w-28 {
  width: 28%;
}
</style>
