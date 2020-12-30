<template>
  <!-- 物品检查 -->
  <div class="fill_height dflex mwidth back-c">
    <div class="vehicleLeft dflex direction-column">
      <el-card body-style="padding-bottom: 0">
        <div slot="header" class="clearfix">
          <span style="font-size: 16px">物品检查</span>
        </div>
        <el-form :inline="true" size="medium" :model="formInline">
          <el-form-item label="安检违禁物品类别：" class="mr-20">
            <el-select
              v-model="formInline.user"
              placeholder="安检违禁物品类别"
              class="w150"
            >
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="公安检查站：" class="mr-20">
            <el-select
              v-model="formInline.region"
              placeholder="公安检查站"
              class="w150"
            >
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="日期：">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="formInline.date1"
              class="w150"
            ></el-date-picker>
            <span> - </span>
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="formInline.date2"
              class="w150"
            ></el-date-picker>
          </el-form-item>
        </el-form>
        <div class="flr clearfix" style="margin: 0 100px 20px 10px">
          <el-button @click="onSubmit" style="margin-right: 20px" class="w100">
            查询
          </el-button>
          <el-button type="primary" class="w100" @click="AddonSubmit"
            >新增</el-button
          >
        </div>
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
          size="small"
          style="width: 100%"
        >
          <el-table-column
            type="index"
            label="NO."
            width="50px"
            align="center"
            :resizable="false"
          ></el-table-column>
          <el-table-column
            prop="category"
            align="center"
            label="安检违禁物品类别"
            :resizable="false"
          ></el-table-column>
          <el-table-column
            prop="ProhibitedNumber"
            align="center"
            label="数量"
            :resizable="false"
          ></el-table-column>
          <el-table-column
            prop="description"
            label="物品特征描述"
            align="center"
            :resizable="false"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="Checkpoint"
            :resizable="false"
            align="center"
            label="公安检查站"
          >
          </el-table-column>
          <el-table-column
            prop="CheckTime"
            align="center"
            label="时间"
            :resizable="false"
            min-width="90px"
          >
          </el-table-column>
          <el-table-column
            prop="operating"
            label="操作"
            :resizable="false"
            align="center"
          >
            <template slot-scope="scope">
              <el-button
                @click="handleDetails(scope.$index, scope.row)"
                type="primary"
                size="small"
                >详情</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
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
      <!-- 新增 -->
      <el-dialog title="新增" :visible.sync="addDialogFormVisible" width="30%">
        <el-form :model="form1" label-width="140px">
          <el-form-item label="安检违禁物品类别：">
            <el-select v-model="form1.name" class="w222">
              <el-option label="区域一" value="爆咋物"></el-option>
              <el-option label="区域二" value="刀具"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="数量：">
            <el-input
              v-model="form1.num"
              maxlength="4"
              class="w222"
              type="number"
              min="0"
            ></el-input>
          </el-form-item>
          <el-form-item label="请选择检查站：">
            <el-select
              v-model="form1.region"
              class="w222"
              placeholder="请选择检查站"
            >
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="物品特征描述：">
            <el-input
              type="textarea"
              :rows="2"
              v-model="form1.desc"
              :autosize="{ minRows: 2, maxRows: 4 }"
              show-word-limit
              style="width: 300px"
              resize="none"
              placeholder="请输入内容"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit1">提交</el-button>
            <el-button @click="onSubmit1">取消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
      <!-- 新增 -->

      <!-- 查看 -->
      <el-dialog title="查看" :visible.sync="dialogVisible1" width="30%">
        <el-form :model="form1" label-width="140px">
          <el-form-item label="安检违禁物品类别：">
            <el-input :disabled="true" v-model="form1.name"></el-input>
          </el-form-item>
          <el-form-item label="数量：">
            <el-input :disabled="true" v-model="form1.num"></el-input>
          </el-form-item>
          <el-form-item label="物品特征描述：">
            <el-input
              :disabled="true"
              type="textarea"
              :rows="3"
              v-model="form1.desc"
              :autosize="{ minRows: 2, maxRows: 4 }"
              show-word-limit
              resize="none"
            ></el-input>
          </el-form-item>
          <el-form-item label="X光照片：">
            <el-avatar
              :size="150"
              :src="form1.circleUrl"
              fit="fill"
              shape="square"
            ></el-avatar>
          </el-form-item>
          <el-form-item label="公安检查站：">
            <el-input :disabled="true" v-model="form1.region"></el-input>
          </el-form-item>
        </el-form>
      </el-dialog>
      <!-- 查看 -->
    </div>

    <div class="vehicleRight">
      <el-card class="dflex direction-column box-card fill_height">
        <div slot="header" class="clearfix cardhead" style="font-size: 14px">
          <span>违禁物品抓获概况</span>
        </div>
        <EchartsPackage :option="iteminspection"></EchartsPackage>
      </el-card>
    </div>
  </div>
</template>

<script>
import EchartsPackage from '../../../components/echarts/index'
import iteminspection from './Echartstable/iteminspection'
export default {
  components: {
    EchartsPackage
  },
  data () {
    return {
      iteminspection,
      formInline: {
        user: '',
        region: '',
        data1: '',
        data2: ''
      },
      tableData: [
        {
          category: '爆炸物质和物品',
          ProhibitedNumber: 12,
          description: '这个爆炸物很危险，方方正正的,真的好看',
          Checkpoint: '大瑶检查站',
          CheckTime: '2020/12/21 12:21:59'
        },
        {
          category: '爆炸物质和物品',
          ProhibitedNumber: 12,
          description: '这个爆炸物很危险，方方正正的,真的好看',
          Checkpoint: '大瑶检查站',
          CheckTime: '2020/12/21 12:21:59'
        },
        {
          category: '爆炸物质和物品',
          ProhibitedNumber: 12,
          description: '这个爆炸物很危险，方方正正的,真的好看',
          Checkpoint: '大瑶检查站',
          CheckTime: '2020/12/21 12:21:59'
        },
        {
          category: '爆炸物质和物品',
          ProhibitedNumber: 12,
          description: '这个爆炸物很危险，方方正正的,真的好看',
          Checkpoint: '大瑶检查站',
          CheckTime: '2020/12/21 12:21:59'
        }
      ],
      currentPage: 1,
      addDialogFormVisible: false,
      form1: {
        name: '',
        num: '',
        region: '',
        desc: '',
        circleUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608282562624&di=ed0738170ab24767d983a2e6c88f0180&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201510%2F18%2F20151018172940_5etXi.jpeg'
      },
      dialogVisible1: false
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    onSubmit () {
      console.log('chaxun')
    },
    onSubmit1 () {
      this.addDialogFormVisible = false
    },
    AddonSubmit () {
      this.addDialogFormVisible = true
    },
    // reportonSubmit () {
    //   this.dialogVisible1 = false
    // },
    handleDetails () {
      console.log('详情')
      this.dialogVisible1 = true
    },
    dialogVisible1true () {
      this.dialogVisible1 = false
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
.mwidth {
  width: 100%;
  .vehicleLeft {
    padding: 2px 10px 0 0;
    width: 75%;
  }
}
.vehicleRight {
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
</style>
