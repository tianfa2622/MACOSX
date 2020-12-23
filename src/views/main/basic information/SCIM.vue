<template>
  <!-- 警备装备信息管理页面 -->
  <div class="fill_height mwidth dflex direction-column back-c">
    <el-card>
      <div slot="header" class="clearfix">
        <span style="font-size: 16px">警备装备信息管理页面</span>
      </div>
      <el-form :model="formInline">
        <el-row type="flex" justify="space-around">
          <el-col :span="7">
            <el-form-item label="警备装备名称：">
              <el-input
                v-model="formInline.equipmentName"
                class="w250"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="公安检查站：">
              <el-select
                v-model="formInline.CheckpointCategory"
                placeholder="请选择检查站"
                class="w250"
              >
                <el-option label="部门一" value="shanghai"></el-option>
                <el-option label="部门二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-button @click="onSubmit" type="primary" class="w100">
              搜索
            </el-button>
            <el-button @click="onSubmit1" type="primary" class="w100">
              增加
            </el-button>
          </el-col>
        </el-row>
      </el-form>

      <!-- 新增 -->
      <el-dialog :visible.sync="dialogVisible1" title="编辑" width="25%">
        <el-form :model="form1" label-width="130px">
          <el-form-item label="警备装备名称：">
            <el-input v-model="form1.OnDutyName"></el-input>
          </el-form-item>
          <el-form-item label="数量：">
            <el-input
              v-model.number="form1.contactNumber"
              type="number"
              maxlength="3"
              onkeyup="value=value.replace(/[^\d]/g,'')"
              onblur="value=value.replace(/[^\d]/g,'')"
              :min="1"
            ></el-input>
          </el-form-item>
          <el-form-item label="公安检查站：">
            <el-select
              v-model="form1.CheckpointCategory"
              style="width: 100%"
              placeholder="请选择检查站"
            >
              <el-option label="部门一" value="bumengyi"></el-option>
              <el-option label="部门二" value="bumenger"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible1 = false">
            提 交
          </el-button>
          <el-button @click="dialogVisible1 = false"> 取 消 </el-button>
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
          prop="equipmentName"
          label="警备装备名称"
          align="center"
          :resizable="false"
        >
        </el-table-column>
        <el-table-column
          prop="equipmentNumber"
          label="数量"
          :resizable="false"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="CheckpointCategory"
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
        <el-table-column label="操作" :resizable="false" align="center">
          <template slot-scope="scope">
            <el-button
              @click="handleDetails(scope.$index, scope.row)"
              type="primary"
              size="mini"
            >
              编辑
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 编辑 -->
      <el-dialog :visible.sync="dialogVisible" title="编辑" width="25%">
        <el-form :model="form" label-width="130px">
          <el-form-item label="警备装备名称：">
            <el-input v-model="form.OnDutyName"></el-input>
          </el-form-item>
          <el-form-item label="数量：">
            <el-input
              v-model.number="form.contactNumber"
              type="number"
              maxlength="3"
              onkeyup="value=value.replace(/[^\d]/g,'')"
              onblur="value=value.replace(/[^\d]/g,'')"
              :min="1"
            ></el-input>
          </el-form-item>
          <el-form-item label="公安检查站：">
            <el-select
              v-model="form.CheckpointCategory"
              style="width: 100%"
              placeholder="请选择检查站"
            >
              <el-option label="部门一" value="bumengyi"></el-option>
              <el-option label="部门二" value="bumenger"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false">
            提 交
          </el-button>
          <el-button @click="dialogVisible = false"> 取 消 </el-button>
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
      formInline: {
        equipmentName: '',
        CheckpointCategory: ''
      },
      tableDate: [
        {
          equipmentName: '张三',
          equipmentNumber: '33',
          CheckpointCategory: '哒哒哒',
          UpdateTime: '2020/12/12 12:12:12'
        }
      ],
      form: {
        equipmentName: '',
        equipmentNumber: '',
        CheckpointCategory: '',
        UpdateTime: ''
      },
      form1: {
        equipmentName: '',
        equipmentNumber: '',
        CheckpointCategory: '',
        UpdateTime: ''
      },
      currentPage: 1,
      dialogVisible: false,
      dialogVisible1: false
    }
  },
  methods: {
    onSubmit () {},
    onSubmit1 () {
      this.dialogVisible1 = true
    },
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
.mwidth {
  width: 100%;
}
</style>
