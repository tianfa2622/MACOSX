<template>
  <!-- 战果统计 -->
  <div class="fill_height mwidth back-c">
    <div class="tit">战果统计</div>
    <el-tabs
      type="border-card"
      v-model="activeName"
      @tab-click="handleClick"
      class="tabs-height"
    >
      <el-tab-pane
        label="按物品"
        name="first"
        class="fill_height dflex direction-column"
      >
        <el-form
          :model="formInline"
          label-width="130px"
          :inline="true"
          class="ta-c"
          size="medium"
        >
          <el-form-item label="区域：">
            <area-select
              class="ta-l select_line-h"
              type="text"
              v-model="formInline.selected1"
              :data="$pcaa"
              :level="2"
              size="small"
            ></area-select>
          </el-form-item>
          <el-form-item label="起始日期：">
            <el-date-picker
              v-model="formInline.timeLimit"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="——"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item class="ml-15">
            <el-button @click="onSubmit" type="primary" class="w100"
              >查询</el-button
            >
            <el-button @click="Export2Excel" type="primary" class="ml-25 w100 bgc"
              >导出</el-button
            >
          </el-form-item>
        </el-form>
        <div class="dflex1 echarts-content mwidth dflex">
          <div class="h-100" style="width: 45%">
            <EchartsPackage
              v-if="'first' == activeName"
              :option="Statistics"
            ></EchartsPackage>
          </div>
          <div style="width: 1%"></div>
          <div class="h-100 posi-rel" style="width: 54%">
            <el-table
              :data="tableData"
              fit
              border
              size="mini"
              style="width: 100%"
              class="flex1"
              height="100%"
              empty-text
            >
              <el-table-column prop="data" label="日期" :resizable="false">
              </el-table-column>
              <el-table-column
                prop="yryb"
                :resizable="false"
                label="易燃易爆"
              ></el-table-column>
              <el-table-column prop="qzdy" label="枪支弹药" :resizable="false">
              </el-table-column>
              <el-table-column prop="gzdj" label="管制刀具" :resizable="false">
              </el-table-column>
              <el-table-column
                prop="fdxcp"
                label="反动宣传品"
                :resizable="false"
                width="90"
              >
              </el-table-column>
              <el-table-column prop="dp" label="毒品" :resizable="false">
              </el-table-column
              ><el-table-column prop="zdry" label="重点人员" :resizable="false">
              </el-table-column>
              <el-table-column prop="zdcl" label="重点车辆" :resizable="false">
              </el-table-column>
              <el-table-column prop="cz" label="超载" :resizable="false">
              </el-table-column>
              <el-table-column prop="total" label="总数" :resizable="false">
              </el-table-column>
            </el-table>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-size="5"
              layout="total, prev, pager, next, jumper"
              :total="20"
              class="posi-abs b-10 ta-c offset"
            >
            </el-pagination>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane
        label="按区域"
        name="second"
        class="fill_height dflex direction-column"
      >
        <el-card class="over-f">
          <el-form
            size="medium"
            :model="formInline"
            label-width="130px"
            :inline="true"
            class="ta-c"
          >
            <el-form-item label="区域：">
              <area-select
                class="ta-l"
                type="text"
                v-model="formInline.selected"
                :data="$pcaa"
                :level="2"
                size="small"
              ></area-select>
            </el-form-item>
            <el-form-item label="起始日期：">
              <el-date-picker
                v-model="formInline.timeLimit1"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="——"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions"
              >
              </el-date-picker>
            </el-form-item>
            <el-form-item class="ml-15">
              <el-button @click="onSubmit" type="primary" class="w100"
                >查询</el-button
              >
              <el-button @click="Export2Excel" type="primary" class="ml-25 w100 bgc"
                >导出</el-button
              >
            </el-form-item>
          </el-form>
        </el-card>
        <el-card class="mt-10 flex1 fill_height" body-style="height: 100%">
          <!-- <div slot="header" class="header-tit">

          </div> -->
          <div class="w-100 h-100 dflex">
            <div class="w-45 h-100">
              <EchartsPackage
                v-if="'second' == activeName"
                :option="RegionalStatistics"
              ></EchartsPackage>
            </div>
            <div style="width: 1%"></div>
            <div class="h-100 posi-rel" style="width: 54%">
              <el-table
                :data="tableData1"
                fit
                border
                size="small"
                style="width: 100%"
                class="flex1"
                height="100%"
              >
                <el-table-column
                  prop="CheckpointName"
                  label="检查站名称"
                  :resizable="false"
                >
                </el-table-column>
                <el-table-column
                  prop="yryb"
                  :resizable="false"
                  label="易燃易爆"
                ></el-table-column>
                <el-table-column
                  prop="qzdy"
                  label="枪支弹药"
                  :resizable="false"
                >
                </el-table-column>
                <el-table-column
                  prop="gzdj"
                  label="管制刀具"
                  :resizable="false"
                >
                </el-table-column>
                <el-table-column
                  prop="fdxcp"
                  label="反动宣传品"
                  :resizable="false"
                >
                </el-table-column>
                <el-table-column prop="dp" label="毒品" :resizable="false">
                </el-table-column
                ><el-table-column
                  prop="zdry"
                  label="重点人员"
                  :resizable="false"
                >
                </el-table-column>
                <el-table-column
                  prop="zdcl"
                  label="重点车辆"
                  :resizable="false"
                >
                </el-table-column>
                <el-table-column prop="cz" label="超载" :resizable="false">
                </el-table-column>
                <el-table-column prop="total" label="总数" :resizable="false">
                </el-table-column>
              </el-table>
              <el-pagination
                @size-change="handleSizeChange1"
                @current-change="handleCurrentChange1"
                :current-page="currentPage1"
                :page-sizes="[5, 10, 15, 20]"
                :page-size="5"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400"
                class="posi-abs b-10 ta-c offset"
              >
              </el-pagination>
            </div>
          </div>
        </el-card>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import EchartsPackage from '../../../components/echarts/index'
// 战果物品统计
import Statistics from './Echartstable/Statistics'
// 区域统计统计
import RegionalStatistics from './Echartstable/RegionalStatistics'
import { ExportToExcel } from '../../../vendor/Export2Excel'

export default {
  components: {
    EchartsPackage
  },
  data () {
    return {
      Statistics,
      RegionalStatistics,
      activeName: 'first',
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      formInline: {
        timeLimit: '',
        timeLimit1: '',
        province: '',
        city: '',
        Area: '',
        selected: [],
        selected1: []
      },
      tableData: [
        {
          data: '2020-12-01',
          yryb: '5',
          qzdy: '1',
          gzdj: '10',
          fdxcp: '10',
          dp: '10',
          zdry: '20',
          zdcl: '33',
          cz: '56',
          total: '145'
        }
      ],
      tableData1: [
        {
          CheckpointName: 'xx检查站',
          yryb: '5',
          qzdy: '1',
          gzdj: '10',
          fdxcp: '10',
          dp: '10',
          zdry: '20',
          zdcl: '33',
          cz: '56',
          total: '145'
        }
      ],
      exportKey: {
        data: '日期',
        yryb: '易燃易爆',
        qzdy: '枪支弹药',
        gzdj: '管制刀具',
        fdxcp: '反动宣传品',
        dp: '毒品',
        zdry: '重点人员',
        zdcl: '重点车辆',
        cz: '超载',
        total: '总数'

      },
      exportKey1: {
        CheckpointName: '检查站名称',
        yryb: '易燃易爆',
        qzdy: '枪支弹药',
        gzdj: '管制刀具',
        fdxcp: '反动宣传品',
        dp: '毒品',
        zdry: '重点人员',
        zdcl: '重点车辆',
        cz: '超载',
        total: '总数'
      },
      currentPage: 1,
      currentPage1: 1

    }
  },
  mounted () {
  },
  methods: {
    onSubmit () {},
    Export2Excel () {
      this.$confirm('该操作将数据导出为excel文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          if (this.activeName === 'first') {
            const tableData = this.tableData
            const exportKey = this.exportKey
            ExportToExcel(tableData, exportKey, '物品统计表')
          } else {
            const tableData = this.tableData1
            const exportKey = this.exportKey1
            ExportToExcel(tableData, exportKey, '区域统计表')
          }
          this.$message.success('文件导出成功')
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          })
        })
    },
    // 切换标签页时触发
    handleClick (tab, event) {
      this.activeName = tab.name
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    },
    handleSizeChange1 (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange1 (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style lang='less'>
.mwidth {
  .tit {
    font-size: 16px;
    padding: 18px 20px;
  }
  .tabs-height {
    height: calc(100% - 57px);
  }
}
</style>
<style lang="less" scoped>
.mwidth {
  .tabs-height {
    /deep/.el-tabs__content {
      height: calc(100% - 39px);
    }
    .echarts-content {
      height: calc(100% - 76px);
    }
  }
  /deep/.area-select {
    span {
      line-height: 34px;
      padding: 0px 15px !important;
    }
    /deep/.area-selectable-list-wrap {
      top: 32px !important;
    }
  }
  .over-f {
    overflow: visible !important;
  }
}
</style>
