<template>
  <div class="fill_height mwidth dflex direction-column back-c">
    <el-card body-style="padding-bottom:0">
      <div slot="header" class="clearfix">
        <span style="font-size: 16px">公安检查站信息管理</span>
      </div>
      <el-form :inline="true" size="medium" :model="formInline">
        <el-form-item label="公安检查站名称：" style="width: 30%" class="ta-c">
          <el-input v-model="formInline.CheckpointName"></el-input>
        </el-form-item>
        <el-form-item label="公安检查站类别：" style="width: 30%" class="ta-c">
          <el-select
            v-model="formInline.CheckpointCategory"
            placeholder="公安检查站类别"
          >
            <el-option label="一级" value="shanghai"></el-option>
            <el-option label="二级" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="归属单位名称：" style="width: 30%" class="ta-c">
          <el-input v-model="formInline.unitName"></el-input>
        </el-form-item>
      </el-form>
      <div class="mwidth flr clearfix" style="width: 25%">
        <el-button
          @click="onSubmit"
          type="primary"
          class="mb-10"
          style="margin-right: 20px; width: 200px"
          >查询</el-button
        >
      </div>
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
        :key="itemkey"
        style="width: 100%"
        class="flex1"
        height="100%"
      >
        <el-table-column
          type="index"
          label="NO."
          align="center"
          :resizable="false"
          width="50px"
        ></el-table-column>
        <el-table-column
          prop="CheckpointName"
          label="公安检查站名称"
          align="center"
          :resizable="false"
          min-width="90px"
        >
        </el-table-column>
        <el-table-column
          prop="CheckpointCategory"
          label="公安检查站类别"
          align="center"
          :resizable="false"
          min-width="90px"
        >
        </el-table-column>
        <el-table-column
          prop="contactNumber"
          label="联系电话"
          align="center"
          :resizable="false"
          min-width="90px"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          align="center"
          :resizable="false"
          min-width="90px"
        >
        </el-table-column>
        <el-table-column
          prop="InstitutionalLevel"
          label="机构级别"
          align="center"
          :resizable="false"
          min-width="90px"
        >
        </el-table-column>
        <el-table-column
          prop="AttributionUnitName"
          label="归属单位名称"
          align="center"
          :resizable="false"
          min-width="90px"
        >
        </el-table-column>
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
              type="primary"
              size="mini"
            >
              编辑
            </el-button>
            <el-button
              @click="handleDetails2(scope.$index, scope.row)"
              type="primary"
              size="mini"
            >
              人员配备
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 详情 -->
      <el-dialog :visible.sync="dialogVisible" title="详情" width="30%">
        <el-form :model="form" label-width="130px">
          <el-form-item label="公安检查站名称：">
            <el-input v-model="form.CheckpointName" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="公安检查站类别：">
            <el-input
              v-model="form.CheckpointCategory"
              :disabled="true"
            ></el-input>
          </el-form-item>
          <el-row>
            <el-col :span="12">
              <el-form-item label="地球纬度：">
                <el-input
                  v-model="form.longitude"
                  :disabled="true"
                  class="w80"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="地球经度：">
                <el-input
                  v-model="form.latitude"
                  :disabled="true"
                  class="w80"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="地址：">
            <el-input v-model="form.address" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="联系电话：">
            <el-input v-model="form.contactNumber" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="单位简称：">
            <el-input
              v-model="form.UnitAbbreviation"
              :disabled="true"
            ></el-input>
          </el-form-item>
          <el-form-item label="机构级别：">
            <el-input
              v-model="form.InstitutionalLevel"
              :disabled="true"
            ></el-input>
          </el-form-item>
          <el-form-item label="归属单位名称：">
            <el-input
              v-model="form.AttributionUnitName"
              :disabled="true"
            ></el-input>
          </el-form-item>
          <el-form-item label="主要负责人姓名：">
            <el-input v-model="form.principalName" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="主要负责人电话：">
            <el-input v-model="form.principalPhone" :disabled="true"></el-input>
          </el-form-item>
        </el-form>
        <!-- <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >确 定</el-button
          >
        </span> -->
      </el-dialog>
      <!-- 编辑 -->
      <el-dialog :visible.sync="dialogVisible1" title="编辑" width="30%">
        <el-form :model="form" label-width="130px">
          <el-form-item label="公安检查站名称：">
            <el-input v-model="form.CheckpointName"></el-input>
          </el-form-item>
          <el-form-item label="公安检查站类别：">
            <el-select v-model="form.CheckpointCategory" style="width: 100%">
              <el-option label="部门一" value="bumengyi"></el-option>
              <el-option label="部门二" value="bumenger"></el-option>
            </el-select>
          </el-form-item>
          <el-row>
            <el-col :span="12">
              <el-form-item label="地球纬度：">
                <el-input v-model="form.longitude" class="w80"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="地球经度：">
                <el-input v-model="form.latitude" class="w80"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="地址：">
            <el-input v-model="form.address"></el-input>
          </el-form-item>
          <el-form-item label="联系电话：">
            <el-input v-model="form.contactNumber"></el-input>
          </el-form-item>
          <el-form-item label="单位简称：">
            <el-input v-model="form.UnitAbbreviation"></el-input>
          </el-form-item>
          <el-form-item label="机构级别：">
            <el-select v-model="form.InstitutionalLevel" style="width: 100%">
              <el-option label="一级" value="bumengyi"></el-option>
              <el-option label="二级" value="bumenger"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="归属单位名称：">
            <el-input v-model="form.AttributionUnitName"></el-input>
          </el-form-item>
          <el-form-item label="主要负责人姓名：">
            <el-input v-model="form.principalName"></el-input>
          </el-form-item>
          <el-form-item label="主要负责人电话：">
            <el-input v-model="form.principalPhone"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible1 = false">取 消</el-button>
          <el-button type="primary" @click="addbtn">提 交</el-button>
        </span>
      </el-dialog>
      <!-- 人员配备 -->
      <el-dialog :visible.sync="dialogVisible2" width="30%">
        <!-- <el-transfer v-model="value" :data="data" filterable></el-transfer> -->
        <template>
          <el-table
            :data="
              tableDatas.filter(
                (data) =>
                  !search ||
                  data.name.toLowerCase().includes(search.toLowerCase())
              )
            "
            tooltip-effect="dark"
            style="width: 100%"
            size="small"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="name" label="配备人员姓名"></el-table-column>
            <el-table-column align="right">
              <template slot="header">
                <el-input
                  v-model="search"
                  size="mini"
                  placeholder="输入关键字查询"
                />
              </template>
            </el-table-column>
          </el-table>
        </template>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible2 = false" plain>取 消</el-button>
          <el-button
            style="background-color: #1abc9c; color: #fff"
            @click="dialogVisible2 = false"
            >保 存</el-button
          >
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
// import { set } from 'vue/types/umd'
export default {
  data () {
    const generateData = _ => {
      const data = []
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `姓名 ${i}`,
          disabled: i % 4 === 0
        })
      }
      return data
    }
    return {
      formInline: {
        CheckpointName: '',
        CheckpointCategory: '',
        unitName: ''
      },
      tableDatas: [{
        name: '王小虎'
      }, {
        name: '王小牛'
      }, {
        name: '傅少'
      }, {
        name: '宇子'
      }, {
        name: '王小虎'
      }, {
        name: '王小虎'
      }, {
        name: '王小虎'
      }],
      search: '',
      multipleSelection: [],
      tableDate: [
        {
          CheckpointName: '赵子龙',
          CheckpointCategory: '将领',
          address: '常山',
          InstitutionalLevel: '一级',
          contactNumber: '6666666666666',
          AttributionUnitName: '蜀国',
          principalName: '刘备',
          principalPhone: '11111111111',
          longitude: '33.33',
          latitude: '33.33',
          UnitAbbreviation: '蜀'
        }
      ],
      form: {
        // CheckpointName: '',
        // CheckpointCategory: '',
        // address: '',
        // InstitutionalLevel: '',
        // contactNumber: '',
        // AttributionUnitName: '',
        // principalName: '',
        // principalPhone: '',
        // longitude: '',
        // latitude: '',
        // UnitAbbreviation: ''
      },
      form1: {},
      dialogVisible: false,
      dialogVisible1: false,
      dialogVisible2: false,
      currentPage: 1,
      data: generateData(),
      value: [1, 4],
      Rowindex: null,
      itemkey: ''
    }
  },
  methods: {
    onSubmit () {},
    handleSelectionChange (val) {
      this.multipleSelection = val
      console.log(this.multipleSelection)
    },
    handleDetails (index, row) {
      this.form = this.tableDate[index]
      this.dialogVisible = true
    },
    handleDetails1 (index, row) {
      this.dialogVisible1 = true
      const editrow = JSON.parse(JSON.stringify(row))
      this.form = editrow
      this.Rowindex = index
    },
    addbtn () {
      this.dialogVisible1 = false
      this.tableDate[this.Rowindex] = this.form
      this.itemkey = Math.random()
    },
    handleDetails2 () {
      this.dialogVisible2 = true
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
.el-button--mini {
  padding: 7px 7px;
}
</style>
