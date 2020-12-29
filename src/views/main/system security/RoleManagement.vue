// 角色管理
<template>
  <div class="fill_height mwidth dflex direction-column back-c">
    <el-card>
      <div slot="header" class="clearfix">
        <span class="Rolestitle">角色管理</span>
      </div>
      <div class="mwidth dflex">
        <div class="flex2">
          <el-autocomplete
            class="w-70"
            v-model="state"
            :fetch-suggestions="querySearchAsync"
            placeholder="请输入角色名称"
            @select="handleSelect"
          ></el-autocomplete>
        </div>
        <div class="w-30">
          <el-button @click="handleClick" type="primary" class="w150"
            >查询</el-button
          >
          <el-button @click="handleClick1" type="primary" class="w150"
            >新增</el-button
          >
        </div>
      </div>

      <!-- 新增按钮 -->
      <el-dialog
        :visible.sync="dialogVisible"
        title="添加角色"
        width="25%"
        center
      >
        <el-form :model="form" label-width="130px">
          <el-form-item label="角色名称：">
            <el-input
              v-model="form.RoleName"
              placeholder="请输入角色名称"
            ></el-input>
          </el-form-item>
          <el-form-item label="数据权限：">
            <template>
              <el-radio v-model="form.dataPermission" label="1">
                个人账号
              </el-radio>
              <el-radio v-model="form.dataPermission" label="2">
                全部账号
              </el-radio>
            </template>
          </el-form-item>
          <el-form-item label="功能权限：" :required="true">
            <el-tree
              :data="form.FunctionPermissions"
              show-checkbox
              node-key="id"
              :default-expanded-keys="[4]"
              :default-checked-keys="[1, 4, 9]"
              check-strictly
              :props="form.defaultProps"
            >
            </el-tree>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button class="w150" type="primary" @click="dialogVisible = false">
            提 交
          </el-button>
          <el-button class="w150" @click="dialogVisible = false">
            取 消
          </el-button>
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
        :row-style="{ height: '32px' }"
        :header-row-style="{ height: '32px' }"
        :cell-style="{ padding: '5px' }"
        style="width: 100%"
        class="flex1"
        height="100%"
      >
        <el-table-column
          type="index"
          label="序号"
          align="center"
          width="80px"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="RoleName"
          :resizable="false"
          label="角色名称"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="AccountNumber"
          :resizable="false"
          label="账号数量"
          align="center"
        >
        </el-table-column>
        <el-table-column label="权限" :resizable="false" align="center">
          <template slot-scope="scope">
            <el-button
              @click="handleDetails(scope.$index, scope.row)"
              type="text"
            >
              修改
            </el-button>
            <el-button
              class="pl-20 del-color"
              @click="handleDetails1(scope.$index, scope.row)"
              type="text"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 修改 -->
      <el-dialog
        :visible.sync="dialogVisible1"
        title="添加角色"
        width="25%"
        center
      >
        <el-form :model="form1" label-width="130px">
          <el-form-item label="角色名称：">
            <el-input
              v-model="form1.RoleName"
              placeholder="请输入角色名称"
            ></el-input>
          </el-form-item>
          <el-form-item label="数据权限：">
            <template>
              <el-radio v-model="form1.dataPermission" label="1">
                个人账号
              </el-radio>
              <el-radio v-model="form1.dataPermission" label="2">
                全部账号
              </el-radio>
            </template>
          </el-form-item>
          <el-form-item label="功能权限：" :required="true">
            <el-tree
              :data="form1.FunctionPermissions"
              show-checkbox
              node-key="id"
              :default-expanded-keys="[4]"
              :default-checked-keys="[1, 4, 9]"
              :props="form1.defaultProps"
              check-strictly
            >
            </el-tree>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button
            class="w150"
            type="primary"
            @click="dialogVisible1 = false"
          >
            提 交
          </el-button>
          <el-button class="w150" @click="dialogVisible1 = false">
            取 消
          </el-button>
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
      restaurants: [],
      state: '',
      currentPage: 1,
      timeout: null,
      dialogVisible: false,
      dialogVisible1: false,
      form: {
        RoleName: '',
        dataPermission: '1',
        FunctionPermissions: [
          {
            id: 1,
            label: '首页',
            disabled: true,
            children: []
          },
          {
            id: 4,
            label: '车辆核验预警',
            children: [{
              id: 9,
              label: '只读'
            }, {
              id: 10,
              label: '增'
            }, {
              id: 11,
              label: '删'
            }, {
              id: 12,
              label: '改'
            }, {
              id: 13,
              label: '处理'
            }]
          }
        ],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      },
      tableDate: [
        {
          RoleName: '系统管理员',
          AccountNumber: 2
        },
        {
          RoleName: '科信总队',
          AccountNumber: 5
        },
        {
          RoleName: '治安总队',
          AccountNumber: 6
        },
        {
          RoleName: '警保',
          AccountNumber: 1
        },
        {
          RoleName: '审计',
          AccountNumber: 1
        }
      ],
      form1: {
        RoleName: '系统管理员',
        dataPermission: '1',
        FunctionPermissions: [{
          id: 1,
          label: '首页',
          disabled: true,
          children: []
        }, {
          id: 4,
          label: '车辆核验预警',
          children: [{
            id: 9,
            label: '只读'
          }, {
            id: 10,
            label: '增'
          }, {
            id: 11,
            label: '删'
          }, {
            id: 12,
            label: '改'
          }, {
            id: 13,
            label: '处理'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    }
  },
  methods: {
    loadAll () {
      return [
        { value: '系统管理员' },
        { value: '科信总队' },
        { value: '治安总队' }
      ]
    },
    querySearchAsync (queryString, cb) {
      var restaurants = this.restaurants
      var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants

      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        cb(results)
      }, 3000 * Math.random())
    },
    createStateFilter (queryString) {
      return (state) => {
        return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    handleSelect (item) {
      console.log(item)
    },
    // 查询
    handleClick () {},
    // 新增
    handleClick1 () {
      this.dialogVisible = true
    },
    // 修改
    handleDetails () {
      this.dialogVisible1 = true
    },
    // 删除
    handleDetails1 (index) {
      this.$confirm('确定删除该角色吗?----删除前请检查该角色中已无用户，否则无法删除！', '删除确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        this.tableDate.splice(index, 1)
        this.$message({
          type: 'success',
          message: '该角色已删除!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '删除失败，请先删除该角色的所有用户之后再次尝试！'
        })
      })
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  },
  mounted () {
    this.restaurants = this.loadAll()
  }
}
</script>

<style lang='less' scoped>
.del-color {
  color: red;
}
.mwidth {
  .Rolestitle {
    font-size: 16px;
  }
  .w-70 {
    width: 70%;
  }
  .w-30 {
    width: 30%;
    text-align: center;
  }
  /deep/ .el-tree-node__content {
    height: 100%;
  }
}
</style>
