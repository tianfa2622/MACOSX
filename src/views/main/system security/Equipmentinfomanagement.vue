<template>
  <!-- 设备信息管理 -->
  <div class="fill_height mwidth dflex direction-column back-c">
    <el-card body-style="text-align:end">
      <div slot="header" class="clearfix">
        <span style="font-size: 16px">设备信息管理</span>
      </div>
      <el-input placeholder="请输入内容" v-model="input" style="width: 25%">
        <el-button
          slot="append"
          @click="onSubmit"
          icon="el-icon-search"
        ></el-button>
      </el-input>
      <el-button
        type="primary"
        icon="el-icon-circle-plus"
        class="ml-30 fonts"
        @click="onSubmit1"
        >注册设备</el-button
      >
      <!-- 注册 -->
      <el-dialog
        :visible.sync="dialogVisible1"
        width="25%"
        style="height: 100%"
      >
        <el-form :model="form2" label-width="130px">
          <el-form-item label="设备名称：">
            <el-input v-model="form2.EquipmentName"></el-input>
          </el-form-item>
          <el-form-item label="品牌名称：">
            <el-input v-model="form2.BrandModels"></el-input>
          </el-form-item>
          <el-form-item label="IP地址：">
            <el-input v-model="form2.IPAddress"></el-input>
          </el-form-item>
          <el-form-item label="网络端口号：">
            <el-input v-model="form2.NetworkPortNumber"></el-input>
          </el-form-item>
          <el-form-item label="公安检查站">
            <el-select
              v-model="form2.PublicSecurityCheckpoint"
              placeholder="请选择"
              style="width: 100%"
            >
              <el-option label="长沙西检查站" value="changsha"></el-option>
              <el-option label="大姚检查站" value="dayao"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="addbtn1"> 提 交 </el-button>
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
          prop="EquipmentName"
          label="设备名称"
          align="center"
          :resizable="false"
        >
        </el-table-column>
        <el-table-column
          prop="BrandModels"
          :resizable="false"
          label="品牌型号"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="NetworkPortNumber"
          label="网络端口号"
          align="center"
          :resizable="false"
        >
        </el-table-column>
        <el-table-column
          prop="IPAddress"
          :resizable="false"
          label="IP地址"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="PublicSecurityCheckpoint"
          label="公安检查站"
          align="center"
          :resizable="false"
        >
        </el-table-column>
        <el-table-column
          prop="UpdateTime"
          :resizable="false"
          label="更新时间"
          align="center"
        >
        </el-table-column>
        <el-table-column label="操作" :resizable="false" width="210">
          <template slot-scope="scope">
            <el-button
              @click="handleDetails(scope.$index, scope.row)"
              plain
              type="primary"
              size="mini"
            >
              编辑
            </el-button>
            <el-button
              @click="handleDetails1(scope.$index, scope.row)"
              plain
              type="warning"
              size="mini"
            >
              删除
            </el-button>
            <el-button
              @click="handleDetails2(scope.$index, scope.row)"
              type="primary"
              size="mini"
            >
              审核
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 编辑 -->
      <el-dialog
        :visible.sync="dialogVisible"
        title="编辑"
        width="25%"
        style="height: 100%"
      >
        <el-form :model="form2" label-width="130px">
          <el-form-item label="设备名称：">
            <el-input v-model="form2.EquipmentName"></el-input>
          </el-form-item>
          <el-form-item label="品牌名称：">
            <el-input v-model="form2.BrandModels"></el-input>
          </el-form-item>
          <el-form-item label="IP地址：">
            <el-input v-model="form2.IPAddress"></el-input>
          </el-form-item>
          <el-form-item label="网络端口号：">
            <el-input v-model="form2.NetworkPortNumber"></el-input>
          </el-form-item>
          <el-form-item label="公安检查站">
            <el-select
              v-model="form2.PublicSecurityCheckpoint"
              placeholder="请选择"
              style="width: 100%"
            >
              <el-option label="长沙西检查站" value="changsha"></el-option>
              <el-option label="大姚检查站" value="dayao"></el-option>
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
      input: '',
      tableDate: [
        {
          EquipmentName: 'X射线安检机',
          BrandModels: '掌门神-XJ6550C',
          NetworkPortNumber: 53,
          IPAddress: '192.168.1.1',
          PublicSecurityCheckpoint: '长沙西公安检查站',
          UpdateTime: '2020-11-30 12:12:59'
        },
        {
          EquipmentName: '手持金属探测器',
          BrandModels: 'MD-3003B1',
          NetworkPortNumber: 53,
          IPAddress: '192.168.1.2',
          PublicSecurityCheckpoint: '长沙西公安检查站',
          UpdateTime: '2020-11-30 12:12:59'
        }
      ],
      form2: {
        EquipmentName: '',
        BrandModels: '',
        NetworkPortNumber: null,
        IPAddress: '',
        PublicSecurityCheckpoint: '',
        UpdateTime: ''
      },
      currentPage: 1,
      dialogVisible: false,
      dialogVisible1: false,
      itemkey: '',
      Rowindex: null
    }
  },
  methods: {
    onSubmit () {},
    onSubmit1 () {
      this.dialogVisible1 = true
    },
    addbtn1 () {
      const UpdateTime = this.$moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
      this.form2.UpdateTime = UpdateTime
      this.itemkey = Math.random()
      this.tableDate.push(this.form2)
      this.dialogVisible1 = false
      this.form2 = {}
    },
    handleDetails (index, row) {
      this.dialogVisible = true
      const editrow = JSON.parse(JSON.stringify(row))
      this.form2 = editrow
      this.Rowindex = index
    },
    addbtn () {
      const UpdateTime = this.$moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
      this.form2.UpdateTime = UpdateTime
      this.dialogVisible = false
      this.tableDate[this.Rowindex] = this.form2
      this.itemkey = Math.random()
      this.form2 = {}
    },
    handleDetails1 (index) {
      this.$confirm('是否确认删除 X射线安检机 此设备?', '提示', {
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
    handleDetails2 () {
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
.fonts {
  font-size: 20px !important;
}
</style>
