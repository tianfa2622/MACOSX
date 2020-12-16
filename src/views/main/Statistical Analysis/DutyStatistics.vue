<template>
  <div class="fill_height mwidth back-c">
    <el-card>
      <div slot="header" class="header-tit">
        <span>勤务统计</span>
      </div>
      <el-form :model="formInline" label-width="130px" :inline="true">
        <el-form-item label="值班队长">
          <el-input v-model="formInline.CaptainOnDuty"></el-input>
        </el-form-item>
        <el-form-item label="巡逻时间：">
          <el-input v-model="formInline.PatrolTime"></el-input>
        </el-form-item>
        <el-form-item label="区域：">
          <area-select
            type="text"
            v-model="formInline.selected"
            :data="$pcaa"
            :level="2"
            size="small"
            style="overflow: visible; !important"
          ></area-select>
        </el-form-item>
        <el-form-item label="所属检查站：">
          <el-select v-model="formInline.OwnedCheckpoint" placeholder="请选择">
            <el-option label="部门一" value="bumengyi"></el-option>
            <el-option label="部门二" value="bumenger"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="mb-5 w-90 align-e">
          <el-button @click="onSubmit" type="primary">搜索</el-button>
          <el-button
            @click="onSubmit"
            type="primary"
            class="ml-25 p-15 w100 bgc mr-25"
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
export default {
  data () {
    return {
      formInline: {
        CaptainOnDuty: '',
        PatrolTime: '',
        selected: [],
        OwnedCheckpoint: ''
      }
    }
  },
  methods: {
    onSubmit () {}
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
    height: 40px;
    .area-selected-trigger {
      padding: 0 15px;
    }
  }
  .bgc {
    border: #9cf !important;
    background-color: #9cf !important;
  }
  .Duty-bottom {
    height: calc(100% - 225px);
    overflow: auto;
    margin-top: 10px;
    flex-wrap: wrap;
    justify-content: space-between;
    .card-content {
      width: 32%;
      margin-top: 5px;
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
</style>
