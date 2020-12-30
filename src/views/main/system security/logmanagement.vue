<template>
  <div class="fill_height mwidth dflex direction-column back-c">
    <el-card>
      <div slot="header" class="clearfix">
        <span style="font-size: 16px">日志管理</span>
      </div>
      <el-form :model="formInline" size="medium" :inline="true" class="ml-30">
        <el-form-item label="日期：" style="text-align: center">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="formInline.date1"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="formInline.date2"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" class="w150 ml-30"
            >查询</el-button
          >
        </el-form-item>
      </el-form>
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
      >
        <el-table-column
          type="index"
          label="NO."
          align="center"
          width="50px"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="TheDateOf"
          label="日期"
          :resizable="false"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="OperatingContent"
          label="操作内容"
          align="center"
          :resizable="false"
        >
        </el-table-column>
        <el-table-column
          prop="OperationOf"
          :resizable="false"
          label="操作人"
          align="center"
        >
        </el-table-column>
        <el-table-column label="操作" :resizable="false" align="center">
          <template slot-scope="scope">
            <el-button
              @click="handleDetails(scope.$index, scope.row)"
              type="primary"
              style="width: 40%"
            >
              详情
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 详情 -->
      <el-dialog
        :visible.sync="dialogVisible"
        title="详情"
        width="40%"
        style="height: 100%"
      >
        <el-table
          :data="tableDate1"
          size="small"
          fit
          border
          style="width: 100%"
        >
          <el-table-column
            type="index"
            label="NO."
            align="center"
            width="50px"
            :resizable="false"
          ></el-table-column>
          <el-table-column
            prop="TableName"
            :resizable="false"
            label="表名"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="FieldName"
            :resizable="false"
            label="字段名"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="ValueBeforeModification"
            label="修改前的值"
            align="center"
            :resizable="false"
          >
          </el-table-column>
          <el-table-column
            prop="ModifiedValue"
            label="修改后的值"
            align="center"
            :resizable="false"
          >
          </el-table-column>
        </el-table>
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
        date1: '',
        date2: ''
      },
      tableDate: [
        {
          TheDateOf: '2020年5月2日',
          OperatingContent: '修改',
          OperationOf: 'admin'
        }
      ],
      tableDate1: [
        {
          TableName: 'MotorVehicleEvent',
          FieldName: 'FW_SY',
          ValueBeforeModification: '你好',
          ModifiedValue: '再见'
        }
      ],
      currentPage: 1,
      dialogVisible: false

    }
  },
  methods: {
    onSubmit () {},
    handleDetails () {
      this.dialogVisible = true
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
</style>
