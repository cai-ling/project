<template>
  <div class="taskList-wrapper">
    <Header class="header"></Header>
    <div class="issue">
      <a-button @click="success">发布作业</a-button>
    </div>
    <search :isIssue="isIssue" class="search" />
    <a-table
      :isIssue="isIssue"
      :columns="columns"
      :dataSource="lists"
      class="taskTable"
    >
      <template slot="customTitle"
        >序号</template
      >
      <template slot="studentName" slot-scope="studentName">
        <template>
          <a-avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />{{ studentName }}
        </template>
      </template>
      <span slot="action" slot-scope="record" :key="record">
        <a href="javascript:;"
          ><a-tooltip placement="top">
            <template slot="title">
              <span>查看</span> </template
            ><a-icon type="eye" /> </a-tooltip
        ></a>
        <a href="javascript:;"
          ><a-tooltip placement="top">
            <template slot="title">
              <span>删除</span> </template
            ><a-icon type="delete" /> </a-tooltip
        ></a>
      </span>
    </a-table>
  </div>
</template>
<script>
import Header from '@/pages/task/assignTask/components/header/header'
import Search from '@/components/search/search.vue'
export default {
  name: 'TaskList',
  components: {
    Header,
    Search
  },
  data () {
    return {
      isIssue: false,
      columns: [
        {
          dataIndex: 'Id',
          key: 'Id',
          slots: { title: 'customTitle' },
          scopedSlots: { customRender: 'Id' }
        },
        {
          title: '学生姓名',
          dataIndex: 'studentName',
          key: 'studentName',
          scopedSlots: { customRender: 'studentName' }
        },
        {
          title: '学号',
          dataIndex: 'studentId',
          key: 'studentId'
        },
        {
          title: '操作',
          key: 'action',
          scopedSlots: { customRender: 'action' }
        }
      ],
      lists: [
        {
          key: '1',
          Id: '1',
          studentName: '李一铭',
          studentId: '19900'
        },
        {
          key: '2',
          Id: '2',
          studentName: '李一铭',
          studentId: '19900'
        },
        {
          key: '3',
          Id: '3',
          studentName: '李一铭',
          studentId: '19900'
        },
        {
          key: '4',
          Id: '4',
          studentName: '李一铭',
          studentId: '19900'
        },
        {
          key: '5',
          Id: '5',
          studentName: '李一铭',
          studentId: '19900'
        },
        {
          key: '6',
          Id: '6',
          studentName: '李一铭',
          studentId: '19900'
        },
        {
          key: '7',
          Id: '7',
          studentName: '李一铭',
          studentId: '19900'
        }
      ]
    }
  },
  methods: {
    success () {
      this.$message.success(
        '作业已发布'
      )
    }
  }
}
</script>
<style lang="less" scoped>
.taskList-wrapper {
  width: 100%;
  height: 100%;
  margin: 20px 30px 50px 0px;
}
.search {
  float: right;
  margin: 20px 30px;
}
.taskTable {
  margin: 80px;
}
.issue {
  position: fixed;
  top: 115px;
  right: 50px;
  .ant-btn {
    background-color: #0fb1b5;
    border-radius: 4px;
    color: white;
  }
}
</style>
