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
          class="text-al"
          size="medium"
        >
          <el-form-item label="起始日期：">
            <el-date-picker
              v-model="formInline.timeLimit"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item class="ml-15">
            <el-button @click="onSubmit" type="primary">搜索</el-button>
            <el-button
              @click="onSubmit"
              type="primary"
              class="ml-25 p-15 w100 bgc"
              >导出</el-button
            >
          </el-form-item>
        </el-form>
        <div class="dflex1 echarts-content mwidth">
          <EchartsPackage
            v-if="'first' == activeName"
            :option="Statistics"
          ></EchartsPackage>
        </div>
      </el-tab-pane>
      <el-tab-pane
        label="按区域"
        name="second"
        class="fill_height dflex direction-column"
      >
        <el-card>
          <el-form
            size="medium"
            :model="formInline"
            label-width="130px"
            :inline="true"
            class="text-al"
          >
            <el-form-item label="">
              <el-select
                v-model="formInline.province"
                placeholder="省"
                class="ml-10 w100"
              >
                <el-option label="湖南省" value="shanghai"></el-option>
                <el-option label="广东省" value="beijing"></el-option>
              </el-select>
              <el-select
                v-model="formInline.city"
                placeholder="市"
                class="ml-10 w100"
              >
                <el-option label="长沙市" value="shanghai"></el-option>
                <el-option label="衡阳市" value="beijing"></el-option>
              </el-select>
              <el-select
                v-model="formInline.Area"
                placeholder="区"
                class="ml-10 w100"
              >
                <el-option label="雨花区" value="shanghai"></el-option>
                <el-option label="宝安区" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="起始日期：">
              <el-date-picker
                v-model="formInline.timeLimit1"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions"
              >
              </el-date-picker>
            </el-form-item>
            <el-form-item class="ml-15">
              <el-button @click="onSubmit" type="primary">搜索</el-button>
              <el-button
                @click="onSubmit"
                type="primary"
                class="ml-25 p-15 w100 bgc"
                >导出</el-button
              >
            </el-form-item>
          </el-form>
        </el-card>
        <el-card class="mt-10 flex1 fill_height" body-style="height: 100%">
          <EchartsPackage
            v-if="'second' == activeName"
            :option="RegionalStatistics"
          ></EchartsPackage>
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
        Area: ''
      }
    }
  },
  mounted () {
  },
  methods: {
    onSubmit () {},
    // 切换标签页时触发
    handleClick (tab, event) {
      this.activeName = tab.name
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
<style lang="less">
.mwidth {
  .tabs-height {
    /deep/.el-tabs__content {
      height: calc(100% - 39px);
    }
    .echarts-content {
      height: calc(100% - 76px);
    }
  }
}
</style>
