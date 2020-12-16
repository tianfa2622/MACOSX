<template>
  <!-- 人员核查预警 -->
  <div class="fill_height dflex mwidth">
    <div class="personnelLeft dflex direction-column">
      <el-card body-style="padding-bottom: 0">
        <div slot="header" class="clearfix">
          <span style="font-size: 16px">人员核查预警</span>
        </div>
        <el-form :inline="true" class="pl-10" label-width="96px">
          <el-form-item label="姓名：">
            <el-input placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item label="证件号码：" style="margin-left: 20px">
            <el-input placeholder="请输入证件号码"></el-input>
          </el-form-item>
          <el-form-item label="户籍地址：" style="margin-left: 20px">
            <area-select
              type="text"
              v-model="selected"
              :data="$pcaa"
              :level="1"
              size="small"
              style="overflow: visible; !important"
            ></area-select>
          </el-form-item>
          <el-form-item class="ml-30">
            <el-button
              type="primary"
              style="width: 150px"
              @click="handleDetails1"
              >实时监控</el-button
            >
          </el-form-item>
          <el-form-item label="所属检查站：">
            <el-select v-model="station" style="width: 202px">
              <el-option value="区域一" label="区域一"></el-option>
              <el-option value="区域二" label="区域二"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="日期：" style="margin-left: 20px">
            <el-date-picker
              style="margin-left: 10px"
              v-model="date1"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item style="margin-left: 20px">
            <el-button plain style="width: 100px">搜索</el-button>
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
          style="width: 100%"
          class="flex1"
          height="100%"
          :cell-class-name="setRowStyle"
        >
          <el-table-column
            type="index"
            label="NO."
            align="center"
          ></el-table-column>
          <el-table-column prop="names" label="姓名" align="center">
          </el-table-column>
          <el-table-column
            prop="sex"
            align="center"
            label="性别"
          ></el-table-column>
          <el-table-column
            prop="Cdocuments"
            align="center"
            label="常用证件"
          ></el-table-column>
          <el-table-column
            prop="documentsNum"
            label="证件号码"
            align="center"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column prop="Peraddress" align="center" label="户籍地址">
          </el-table-column>
          <el-table-column
            prop="checkpoint"
            label="检查站"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="PeoComparison"
            label="人证比对结果"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="Peotime"
            label="时间"
            align="center"
            show-overflow-tooltip
          ></el-table-column>
          <el-table-column prop="cao" label="操作" align="center">
            <template slot-scope="scope">
              <el-button
                @click="handleDetails(scope.$index, scope.row)"
                type="primary"
                size="mini mini-btn mt-5"
                >详情</el-button
              >
              <el-button
                @click="handleDetails1(scope.$index, scope.row)"
                size="mini"
                type="info mini-btn mt-5"
                >处置</el-button
              >
            </template>
          </el-table-column>
        </el-table>

        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          class="posi-abs b-10 ta-c offset"
        >
        </el-pagination>
      </el-card>
    </div>

    <!-- 详情Dialog -->
    <el-dialog
      title="详情"
      :visible.sync="dialogVisible1"
      width="30%"
      class="dialogs"
    >
      <span class="dialogtitle">基本信息</span>
      <div style="width: 100%; height: 500px" class="dialogs-box">
        <div style="width: 50%; float: left">
          <span>姓名:</span><br />
          <span>常用证件:</span><br />
          <span>出生日期:</span><br />
          <span>联系电话:</span><br />
          <span>国籍:</span><br />
          <span>政治面貌:</span><br />
          <span>配偶姓名:</span><br />
          <span>人口编码:</span><br />
          <span>与户主关系:</span><br />
          <span>重点人员分类管控类别:</span><br />
          <span>简要案情:</span><br />
          <span>穿着描述:</span><br />
          <span>通过时间:</span><br />
        </div>
        <div style="width: 50%; float: right">
          <span>性别:</span><br />
          <span>证件号码:</span><br />
          <span>民族:</span><br />
          <span>贯籍:</span><br />
          <span>宗教信仰:</span><br />
          <span>婚姻状况:</span><br />
          <span>配偶身份证号码:</span><br />
          <span>户号:</span><br />
          <span>户籍地址:</span><br />
          <span>重点人员处置措施:</span><br />
          <span>时间:</span><br />
        </div>
      </div>
      <p class="dialogtitle">过检图像</p>
      <div style="width: 100%; height: 100px" class="dialogs-box">
        <div style="width: 50%; float: left">
          <span>三维人脸图:</span><br />
        </div>
        <div style="width: 50%; float: right"><span>人脸图:</span><br /></div>
      </div>
      <span class="dialogtitle">人员特征</span>
      <div style="width: 100%; height: 110px" class="dialogs-box">
        <div style="width: 50%; float: left">
          <span>着鞋特征:</span><br />
          <span>佩戴眼镜特征:</span><br />
          <span>下身着装特征:</span><br />
        </div>
        <div style="width: 50%; float: right">
          <span>着帽特征:</span><br />
          <span>人体姿态特征:</span><br />
          <span>上身着装特征:</span><br />
        </div>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible1true">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 详情Dialog -->

    <!-- 处置Dialog -->
    <el-dialog :visible.sync="dialogVisible2" width="30%">
      <el-form label-width="110px" :model="form">
        <el-form-item label="重点人员处理：">
          <el-select v-model="form.dealWith">
            <el-option value="yichang" label="yichang"></el-option>
            <el-option value="chuk" label="chuk"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="处理结果：">
          <el-input
            v-model="form.desc"
            type="textarea"
            :autosize="{ minRows: 4, maxRows: 6 }"
            placeholder="请输入内容"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible1true">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 处置Dialog -->

    <div class="personnelRigth">
      <el-card class="dflex direction-column box-card fill_height">
        <div slot="header" class="clearfix cardhead" style="font-size: 18px">
          <span>人证比对结果统计表</span>
        </div>
        <div id="personnelECharts" style="width: 100%; height: 100%"></div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value1: [],
      value2: [],
      station: '',
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      date1: '',
      date2: '',
      tableData: [
        {
          names: '张三',
          sex: '男',
          Cdocuments: '身份证',
          documentsNum: '430426121198103218721',
          Peraddress: '湖南省长沙市',
          checkpoint: '打药检查站',
          PeoComparison: '正常',
          Peotime: '2020/2/21/ 12:12:12'
        },
        {
          names: '张四',
          sex: '女',
          Cdocuments: '居住证',
          documentsNum: '430426121198103218721',
          Peraddress: '湖南省长沙市',
          checkpoint: '打药检查站',
          PeoComparison: '一级预警',
          Peotime: '2020/2/21/ 12:12:12'
        },
        {
          names: '张五',
          sex: '男',
          Cdocuments: '身份证',
          documentsNum: '430426121198103218721',
          Peraddress: '湖南省长沙市',
          checkpoint: '打药检查站',
          PeoComparison: '二级预警',
          Peotime: '2020/2/21/ 12:12:12'
        },
        {
          names: '李三',
          sex: '男',
          Cdocuments: '身份证',
          documentsNum: '430426121198103218721',
          Peraddress: '湖南省长沙市',
          checkpoint: '打药检查站',
          PeoComparison: '三级预警',
          Peotime: '2020/2/21/ 12:12:12'
        },
        {
          names: '小二',
          sex: '男',
          Cdocuments: '身份证',
          documentsNum: '430426121198103218721',
          Peraddress: '湖南省长沙市',
          checkpoint: '打药检查站',
          PeoComparison: '正常',
          Peotime: '2020/2/21/ 12:12:12'
        }
      ],
      currentPage: 1,
      dialogVisible1: false,
      dialogVisible2: false,
      selected: [],
      form: {
        dealWith: '',
        desc: ''
      }
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    setRowStyle ({ row, column }) {
      if (column.property === 'PeoComparison') {
        if (row.PeoComparison === '正常') {
          return 'status-success'
        } else if (row.PeoComparison === '一级预警') {
          return 'status-yellow'
        } else if (row.PeoComparison === '二级预警') {
          return 'status-orange'
        } else {
          return 'status-error'
        }
      }
    },
    handleDetails () {
      console.log('详情')
      this.dialogVisible1 = true
    },
    handleDetails1 () {
      console.log('chuzhi')
      this.dialogVisible2 = true
    },
    dialogVisible1true () {
      this.dialogVisible1 = false
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    },
    drawLine () {
      const myChart1 = this.$echarts.init(document.getElementById('personnelECharts'))
      myChart1.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          top: 10,
          data: ['正常', '一级预警', '二级预警', '三级预警']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '55%'],
            data: [
              { value: 335, name: '正常' },
              { value: 310, name: '一级预警' },
              { value: 234, name: '二级预警' },
              { value: 135, name: '三级预警' }
            ]
          }
        ]
      })
    }
  }
}
</script>

<style lang='less' scoped>
.mwidth {
  width: 100%;
  .personnelLeft {
    padding: 2px 10px 0 0;
    width: 75%;
    .line {
      text-align: center;
    }
    /deep/ .el-range-separator {
      width: 8%;
    }
  }
  .dialogs /deep/ .el-dialog__body {
    padding: 1px 20px;
    .dialogtitle {
      margin-bottom: 8px;

      font-size: 16px;
      font-weight: 700;
    }
  }
  .dialogs-box span {
    display: block;
  }
  .personnelRigth {
    width: 25%;
    height: 100%;
    .clearfix:before,
    .clearfix:after {
      display: table;

      content: "";
    }
    .clearfix:after {
      clear: both;
    }
    .cardhead {
      height: 30px;

      line-height: 30px;
      text-align: center;
    }
    .box-card {
      /deep/ .el-card__header {
        padding: 10px 20px;
      }
      /deep/ .el-card__body {
        flex: 1;
      }
    }
  }
}
/deep/ .status-success {
  background-color: #85c963 !important;
}
/deep/ .status-yellow {
  background-color: #ff0 !important;
}
/deep/ .status-orange {
  background-color: #f80 !important;
}
/deep/ .status-error {
  background-color: rgb(231, 110, 110) !important;
}
.pers-head {
  padding: 20px;
  width: 100%;
  height: 150px;

  box-shadow: 0 2px 12px 2px rgba(0, 0, 0, 0.1);
  /deep/ .el-range-separator {
    width: 8%;
  }
}
</style>
