<template>
  <!-- 勤务统计 -->
  <div class="fill_height mwidth back-c over-h">
    <el-card>
      <div slot="header" class="header-tit">
        <span>勤务统计</span>
      </div>
      <el-form
        :model="formInline"
        label-width="130px"
        size="medium"
        :inline="true"
      >
        <el-form-item label="值班队长" class="w-30">
          <el-input v-model="formInline.CaptainOnDuty"></el-input>
        </el-form-item>
        <el-form-item label="巡逻时间：" class="w-30">
          <el-input v-model="formInline.PatrolTime"></el-input>
        </el-form-item>
        <el-form-item label="区域：" class="w-35">
          <area-select
            type="text"
            v-model="formInline.selected"
            :data="$pcaa"
            :level="2"
            size="small"
            style="overflow: visible; !important"
          ></area-select>
        </el-form-item>
        <el-form-item label="所属检查站：" class="w-30">
          <el-select
            v-model="formInline.OwnedCheckpoint"
            placeholder="请选择"
            class="w202"
          >
            <el-option label="部门一" value="bumengyi"></el-option>
            <el-option label="部门二" value="bumenger"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="w-60 ta-e">
          <el-button @click="onSubmit" type="primary" class="w100"
            >查询</el-button
          >
          <el-button @click="Export2Excel" type="primary" class="bgc ml-25 w100"
            >导出</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
    <div class="mwidth dflex Duty-bottom">
      <el-card class="card-content">
        <div slot="header" class="header-tit">
          <span>勤务一</span>
        </div>
        <ul>
          <li>
            <span class="span-title">值班队长:</span
            ><span class="span-content">猪猪侠</span>
          </li>
          <li>
            <span class="span-title">值班队员:</span
            ><span class="span-content">张三，李四，王五，赵六</span>
          </li>
          <li>
            <span class="span-title">值勤民警:</span
            ><span class="span-content">袁七</span>
          </li>
          <li>
            <span class="span-title">巡逻时间:</span
            ><span class="span-content">2020-12-12 00:00:00</span>
          </li>
          <li>
            <span class="span-title">所属检查站:</span
            ><span class="span-content">万家丽检查站</span>
          </li>
        </ul>
      </el-card>
    </div>
  </div>
</template>

<script>
import { ExportToExcel } from '../../../vendor/Export2Excel'
export default {
  data () {
    return {
      formInline: {
        CaptainOnDuty: '',
        PatrolTime: '',
        selected: [],
        OwnedCheckpoint: ''
      },
      tableData: [{
        CaptainOnDuty: '猪猪侠',
        Players: '张三，李四，王五，赵六',
        DutyOfficer: '袁七',
        PatrolTime: '2020-12-12 00:00:00',
        OwnedCheckpoint: '万家丽检查站'
      }],
      exportKey: {
        CaptainOnDuty: '值班队长',
        Players: '值班队员',
        DutyOfficer: '值勤民警',
        PatrolTime: '巡逻时间',
        OwnedCheckpoint: '所属检查站'
      }
    }
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
          ExportToExcel(this.tableData, this.exportKey, '勤务统计表')
          this.$message.success('文件导出成功')
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          })
        })
    }
  }

}
</script>

<style lang='less'>
.mwidth {
  width: 100%;
  .header-tit {
    font-size: 16px;
  }
  .area-select {
    height: 36px;
    .area-selected-trigger {
      padding: 0 15px;
    }
  }
  .bgc {
    border: #9cf !important;
    background-color: #9cf !important;
  }
  .Duty-bottom {
    height: calc(100% - 226px);
    overflow: auto;
    margin-top: 10px;
    flex-wrap: wrap;
    justify-content: space-between;
    .card-content {
      width: 32%;
      height: 310px;
      overflow-y: auto;
      margin: 5px 0;
      ul {
        list-style: none;
        font-size: 16px;
        font-weight: 550;
        li {
          padding: 10px;
          .span-title {
            width: 100px;
            display: inline-block;
          }
          .span-content {
            padding: 0 10px;
            font-size: 14px;
            font-weight: 500;
            white-space: nowrap; /*不允许换行*/
            overflow: hidden; /*超出隐藏*/
            text-overflow: ellipsis; /*文本超出三点代替*/
          }
        }
      }
    }
  }
}
.align-e {
  text-align: end;
}
</style>
<style lang="less" scoped>
/deep/.el-card {
  overflow: visible;
}
.w202 {
  width: 202px !important;
}
</style>
