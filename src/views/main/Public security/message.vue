<template>
  <div class="dflex direction-column fill_height mwidth back-c">
    <el-card body-style="padding-bottom: 0">
      <div slot="header" class="clearfix">
        <span style="font-size: 16px">联动处理</span>
      </div>
      <el-form :inline="true" size="medium" :model="form" label-width="120px">
        <el-form-item label="异常/预警类型：" class="ta-c w-25">
          <el-select v-model="form.region">
            <el-option label="一级预警" value="yiji"></el-option>
            <el-option label="二级预警" value="erji"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="时间：" class="ta-c w-40">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date1"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date2"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="处理状态：" class="w-25 ta-c">
          <el-select v-model="form.ProcessingState">
            <el-option label="已处理" value="yichuli"></el-option>
            <el-option label="未处理" value="weichuli"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="处理人：" class="ta-c w-25">
          <el-input v-model="form.name" class="w217"></el-input>
        </el-form-item>
        <el-form-item label="处理时间：" class="ta-c w-40">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date3"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date4"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item class="ta-c w-25">
          <el-button type="primary" class="w150" @click="onSubmit"
            >查询</el-button
          >
        </el-form-item>
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
        class="flex1"
        height="100%"
        style="width: 100%"
        size="small"
      >
        <el-table-column
          fixed
          type="index"
          label="NO."
          align="center"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="warningType"
          label="异常/预警类型"
          align="center"
          :resizable="false"
        >
        </el-table-column>
        <el-table-column
          prop="timeRange"
          align="center"
          label="时间"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="ProcessingState"
          label="处理状态"
          align="center"
          min-width="140px"
          show-overflow-tooltip
          :resizable="false"
        >
        </el-table-column>
        <el-table-column
          prop="ProcessingTime"
          :resizable="false"
          align="center"
          label="处理时间"
        >
        </el-table-column>
        <el-table-column
          prop="ProcessingName"
          align="center"
          label="处理人"
          min-width="90px"
          :resizable="false"
        >
        </el-table-column>
        <el-table-column
          prop="ProcessingResults"
          label="处理结果"
          min-width="120px"
          :resizable="false"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column label="操作" align="center" :resizable="false">
          <template slot-scope="scope">
            <el-button
              @click="handleDetails(scope.$index, scope.row)"
              type="primary"
              size="mini"
              >立即处理</el-button
            >
            <el-button
              @click="handleDetails1(scope.$index, scope.row)"
              type="primary"
              size="mini"
              >结果流转</el-button
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
    <!-- 立即处理 -->
    <el-dialog :visible.sync="dialogVisible" width="25%">
      <el-form label-position="left" label-width="80px" :model="form">
        <el-form-item label="处理结果:">
          <el-input
            v-model="form.desc"
            type="textarea"
            resize="none"
            :autosize="{ minRows: 4, maxRows: 6 }"
            placeholder="请输入内容"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">
          保 存
        </el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 结果流转 -->
    <el-dialog :visible.sync="dialogVisible1" width="25%">
      <el-form label-width="80px" :model="form">
        <el-form-item label="流转至:">
          <el-select v-model="form.department" placeholder="请选择部门">
            <el-option label="部门一" value="bumengyi"></el-option>
            <el-option label="部门二" value="bumenger"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible1 = false">
          保 存
        </el-button>
        <el-button @click="dialogVisible1 = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        region: '',
        data1: '',
        data2: '',
        ProcessingState: '',
        date3: '',
        date4: '',
        name: '',
        desc: '',
        department: ''
      },
      tableData: [
        {
          warningType: '一级预警',
          timeRange: '2020-12-12',
          ProcessingState: '已处理',
          ProcessingTime: '2020-12-13',
          ProcessingName: '小小',
          ProcessingResults: '据外媒报道，当地时间29日晚间，伊朗革命卫队高级指挥官穆斯林·沙赫丹乘坐的车辆在加伊姆地区遭到无人机袭击'
        },
        {
          warningType: '一级预警',
          timeRange: '2020-12-12',
          ProcessingState: '已处理',
          ProcessingTime: '2020-12-13',
          ProcessingName: '小小',
          ProcessingResults: '据外媒报道，当地时间29日晚间，伊朗革命卫队高级指挥官穆斯林·沙赫丹乘坐的车辆在加伊姆地区遭到无人机袭击'
        },
        {
          warningType: '一级预警',
          timeRange: '2020-12-12',
          ProcessingState: '已处理',
          ProcessingTime: '2020-12-13',
          ProcessingName: '小小',
          ProcessingResults: '据外媒报道，当地时间29日晚间，伊朗革命卫队高级指挥官穆斯林·沙赫丹乘坐的车辆在加伊姆地区遭到无人机袭击'
        }
      ],
      dialogVisible: false,
      dialogVisible1: false,
      currentPage: 1
    }
  },
  methods: {
    onSubmit () { },
    handleDetails () {
      this.dialogVisible = true
    },
    handleDetails1 () {
      this.dialogVisible1 = true
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
.w-33 {
  width: 33% !important;
}
.w-25 {
  width: 25% !important;
}
.w217 {
  width: 217px !important;
}

/deep/ .el-dialog__body {
  padding: 30px 40px;
}
.el-button--mini {
  padding: 7px 7px;
}
</style>
