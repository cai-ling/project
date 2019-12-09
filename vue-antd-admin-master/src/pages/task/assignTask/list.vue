<template>
  <div class="list-app">
    <div class="header">
      <div class="fl">
        <router-link :to="'/task/assignTask/add'">
          <a-button class="filter-item">
            + 新建
          </a-button>
        </router-link>
      </div>
      <div class="fr">
        <search />
      </div>
    </div>
    <hr />
    <div class="content">
      <a-radio-group v-model="lists.status">
        <a-radio-button value="all">全部</a-radio-button>
        <a-radio-button value="before"
          >未发布<span>{{ columns.status }}</span></a-radio-button
        >
        <a-radio-button value="end">已发布<span>1</span></a-radio-button>
      </a-radio-group>
      <a-table :columns="columns" :dataSource="lists">
        <template slot="customTitle"
          >序号</template
        >
        <template slot="statu" slot-scope="statu">
          <template v-if="statu == '未发布'">
            <a-badge status="error" />{{ statu }}
          </template>
          <template v-else>
            <a-badge status="success" />{{ statu }}
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
  </div>
</template>
<script>
import search from '@/components/search/search.vue'
export default {
  components: {
    search
  },
  data () {
    return {
      columns: [
        {
          dataIndex: 'taskId',
          key: 'taskId',
          slots: { title: 'customTitle' },
          scopedSlots: { customRender: 'taskId' }
        },
        {
          title: '作业名称',
          dataIndex: 'taskName',
          key: 'taskName'
        },
        {
          title: '班级',
          dataIndex: 'class',
          key: 'class'
        },
        {
          title: '状态',
          key: 'statu',
          dataIndex: 'statu',
          scopedSlots: { customRender: 'statu' }
        },
        {
          title: '发布时间',
          key: 'time',
          dataIndex: 'time',
          scopedSlots: { customRender: 'time' }
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
          taskId: '1',
          taskName: '为了保证页面的整洁美观，在很多的时候，我们常需要隐藏超出长度的文字。',
          class: '南大物理一班南大物理一班',
          statu: '未发布',
          time: ''
        },
        {
          key: '2',
          taskId: '2',
          taskName: 42,
          class: '南大物理二班  南大物理一班',
          statu: '未发布',
          time: ''
        },
        {
          key: '3',
          taskId: '3',
          taskName: 32,
          class: '南大物理三班',
          statu: '已发布',
          time: '2019-11-25 15:12'
        }
      ]
    }
  },
  mounted () {
    console.log(this.lists)
    console.log(this.columns)
  }
}
</script>

<style lang="less">
.list-app {
  height: 100%;
  width: 100%;
  margin: 30px 30px 50px 30px;
}
.header {
  display: flex;
  right: 48px;
}
.content {
  margin: 17px 48px 0 48px !important;
}
.ant-table table {
  table-layout: fixed;
}
.filter-item {
  background-color: #0fb1b5;
  color: white;
}
.ant-radio-group {
  margin-bottom: 16px !important;
  .ant-radio-button-wrapper {
    width: 110px;
    height: 32px;
    text-align: center;
  }
}
.fl {
  margin: 16px 48px;
}
.fr {
  float: right;
  margin: 16px 750px 0;
}
hr {
  opacity: 0.89;
  transform: scaleY(-1);
  background: #e9e9e9;
  box-shadow: 0 -1px 4px 0 rgba(0, 0, 0, 0.06);
}
td .anticon svg {
  color: #0fb1b5;
}
.ant-badge-status-dot {
  top: -3px;
}
tbody tr td {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
